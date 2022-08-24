


const{ io }= require('../index');



io.on('connection', client => {
    console.log('cliente conectado');

client.on('disconnect', () => {
    console.log('cliente desconectado');

});


//este es el listen del emit creado en index.html
//*21
 

});
 