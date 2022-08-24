const { response } = require("express");
const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario'); //*79
const { generarJWT } = require("../helpers/jwt");



const crearUsuario =  async (req,res = response) => {

/* Destructuring the `req.body` object. */

    const {email,password} = req.body;

    try {

        /*
        //*80
        me busca en la base de datos si hay email iguales
        si los hay lanza el error
        */

const existeEmail = await Usuario.findOne({email});//*80
if(existeEmail){                                
    return res.status(400).json({
        ok:false,
        msg:'El correo ya esta registrado'
    });
}

/* Creating a new instance of the Usuario model. */
     const usuario = new Usuario(req.body); //*79


    //  encriptar contraseña

/* Encrypting the password. */
const salt = bcrypt.genSaltSync();
usuario.password = bcrypt.hashSync(password,salt);
     

/* Saving the user to the database. */
   await usuario.save(); //*80


//generar JWT

 const token = await generarJWT(usuario.id);

  res.json({
      ok: true,
      usuario,
      token
     });

        //*80
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg:'Hable con el adminitrador'
        })
        
    }
}



// *83

const login = async(req,res = response)=> {


    const{email,password} = req.body;

try {

    const usuarioDB = await Usuario.findOne({email});

    if(!usuarioDB){
        return res.status(404).json({
            ok: false,
            msg: 'email no encontrado '
        });
    }

        // validar password

    const validPassword = bcrypt.compareSync(password,usuarioDB.password);
        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'contraseña no encontrada '
            });

        }

        // generar JWT 
        const token = await generarJWT(usuarioDB.id);

        res.json({
            ok: true,
            usuario:usuarioDB,
            token
           });


    
} catch (error) {
    
    return res.status(500).json({
    
        ok: true,
        msg:'Hable con el administrador'
    
    })
  }
}

// nuevo controlador para verificar JWT 

const renewToken = async (req,res = response) => { //*84

    // solicitar uid del usuario 
    const uid = req.uid;                                //*85
    // generar nuevo jwt 
    const token = await generarJWT(uid);                //*85

    // obtener el usuario por el UID, usuario.findById
    const usuario = await Usuario.findById(uid);        //*85


    res.json({
        ok: true,
        usuario,
        token
    }
  )
}


/* Exporting the function `crearUsuario` so that it can be used in other files. */
module.exports = {
    crearUsuario,
    login,
    renewToken
}


