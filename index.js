const express = require('express');
const path = require('path');
require('dotenv').config();


// DB config

require ('./database/config').dbConnection(); //*74-75




// mis rutas //*76


//App de express
const app = express();


// lectura y parseo del body 

app.use(express.json());//*76



//Node Server
const server = require('http').createServer(app);


//22
//module.exports  funcion para exportar 
module.exports.io = require('socket.io')(server);

//22
//llamando el archivo socket.js
require('./sockets/socket');





//*18
//cuando el nombre esta en gris es porque no se esta usando 
    const publicPath = path.resolve(__dirname,'public')
    app.use(express.static(publicPath));



    // rutas que coloco en postman que me muestran los resultados 
    // *****************************************************
    app.use('/api/login', require('./routes/auth'));//*76
    app.use('/api/usuarios', require('./routes/usuarios'));//*110
    app.use('/api/mensajes', require('./routes/mensajes'));//*118


    // *****************************************************


/* The above code is creating a server and listening to the port that is set in the environment
variables. */

server.listen(process.env.PORT, (err) => {

if(err) throw new Error(err);


console.log('Servidor Corriendo en puerto!!! ', process.env.PORT);

});