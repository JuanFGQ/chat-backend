

const{Schema,model} = require('mongoose');

/*
schema: me ayuda a hacer el modelo
model: es lo que se ve hacia fuera del modelo
//*79
*/

const UsuarioSchema = Schema({

    nombre:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
   /*
    la persona se conecta a la aplicacion, actualizo
    la base de datos y digo si esta online y si se desconecta
    se pone el offline
    */
   /* A boolean that is set to false by default. */
   online: {
    type: Boolean,
    default: false
},


});

/*
remuevo los elementos que no necesito o no quiero mostrar de la peticion 
*/
/* Removing the password and version from the object. */
//*80
UsuarioSchema.method('toJSON',function(){
    const{__v, _id, password, ...object } = this.toObject();
    object.uid = _id; 
    return object;
})


module.exports = model('Usuario',UsuarioSchema);