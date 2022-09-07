const{Schema,model} = require('mongoose');



//*116
const MensajeSchema = Schema({


    // el 'de' hace referencia a un usuario de base de datos 
    de:{

        
        type: Schema.Types.ObjectId,//este apunta al id de la coleccion de usuarios 
      
        ref: 'Usuario',//hace referencia a la coleccion a la que apuntamos 
        require: true
    },

    para:{

        
        type: Schema.Types.ObjectId,//este apunta al id de la coleccion de usuarios 
      
        ref: 'Usuario',//hace referencia a la coleccion a la que apuntamos 
        require: true
    },

    //es el texto que deberiamos de grabar aqui
    mensaje:{
        type:String,
        require: true

    }




},{

    // me devuelve la hora y la fecha de mongoose
timestamps:true

});


MensajeSchema.method('toJSON',function(){
    const{__v, _id, ...object } = this.toObject();
    return object;
})


module.exports = model('Mensaje',MensajeSchema);