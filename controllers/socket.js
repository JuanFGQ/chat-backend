const Usuario = require('../models/usuario');

const Mensaje = require('../models/mensaje_persistente')




//*109
const usuarioConectado = async (uid = '') => {


        //con esta funcion tenemos toda la info del usuario
        // password-email-name-online-etc
    const usuario = await Usuario.findById(uid);
    
    // para volver la propiedad online a true
    usuario.online = true; 

    // cuando termine de hacer lo anterior espere para finalmente guardar
    await usuario.save();
 
    return usuario;

}
const usuarioDesconectado = async (uid = '') => {


    //con esta funcion tenemos toda la info del usuario
    // password-email-name-online-etc
const usuario = await Usuario.findById(uid);

// para volver la propiedad online a true
usuario.online = false; 

// cuando termine de hacer lo anterior espere para finalmente guardar
await usuario.save();

return usuario;

}

//*117
const grabarMensaje = async (payload )=>{



    try {
        const mensaje = new Mensaje(payload);
        await mensaje.save();

        return true;
    } catch (error) {

        return false;
        
    }

}


module.exports = {
    usuarioConectado,usuarioDesconectado,grabarMensaje
}