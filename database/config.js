const mongoose = require('mongoose');

//*74-75


const dbConnection = async() => {


    try {

        /*
        en la version actual de mongo no es necesario añadir las 
        opciones que muestra fernando en el curso  
        */
        await mongoose.connect(process.env.DB_CNN);//*75
        console.log('DB Online');

        
    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos - Hable con el admin');
        
    }

}


module.exports = {
 dbConnection
}