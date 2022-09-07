


const{ io }= require('../index');
const { comprobarJWT } = require('../helpers/jwt');
const {usuarioConectado,usuarioDesconectado, grabarMensaje} = require ('../controllers/socket')



io.on('connection',  client => {
    console.log('cliente conectado');

    // console.log(client.handshake.headers['x-token']);//*108
    const [valido,uid] = comprobarJWT(client.handshake.headers['x-token'])//*108
    console.log(valido,uid);

    // si el token no es valido se desconecta  //*108
    if(!valido){
        return client.disconnect(); }

usuarioConectado(uid);
// ingresar al usuario a una sala en particular
//sala global , client id
client.join(uid); //*114

// escuchar del cliente el mensaje personal 

client.on('mensaje-personal',async (payload) =>{


// grabar mensaje,y despues emite  //*117
await grabarMensaje(payload);

    //emitir mensaje a cliente
    io.to(payload.para).emit('mensaje-personal',payload);//*115

});

client.on('disconnect', () => {
    console.log('cliente desconectado');

    usuarioDesconectado(uid);
});


//este es el listen del emit creado en index.html
//*21
 

});
 