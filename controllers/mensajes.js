

// const { response } = require('express');
const Mensaje = require('../models/mensaje_persistente');

//*118
const obtenerChat = async (req,res ) => {

    //necesito saber mi id

    const miId = req.uid;

    //de quien son los mensajes que me interesan 
    const mensajeDe = req.params.de;


    //cargar ultimos 30 mensajes 
    const last30 = await Mensaje.find({
        $or: [{de: miId, para: mensajeDe}, {de: mensajeDe, para: miId}]

    })
    //los ordeno con el createdAt que llamamos con el timeStamps, este dato se puede ver mogoose compass
    .sort({createdAt:'desc'})
    .limit(30);


    res.json({

        ok: true,
        mensaje: last30,
        miId,
        mensajedDe: mensajeDe      


    })



}



module.exports = {

    obtenerChat
}