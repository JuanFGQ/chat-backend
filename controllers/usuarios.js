
const {response } = require('express');
const Usuario = require('../models/usuario')



//*110
const getUsuarios = async (req,res = response) => {


    const desde = Number (req.query.desde) || 0;//me retorna cierta cantidad de usuarios 

     const  usuarios = await  Usuario.

     //ne : not existent
     find({ _id: {$ne: req.uid}}) //no retorno el id del usuario que esta usando la app
     //sort es una funcion de orderna 
     // si coloco el menos lo ordenada descendente y sin menos ascendente
     .sort('-online') //ordenadar de menor a mayor 
     .skip(desde)//la paginacion base se hace basada desde el valor de el argumento
     .limit(20)//este es el limite de registros que se van a ver 


    res.json({
        ok:true,
        usuarios,
        desde
    })

}


module.exports = {getUsuarios}