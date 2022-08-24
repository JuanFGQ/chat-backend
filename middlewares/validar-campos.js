const{validationResult} = require('express-validator');


const validarCmapos = (req,res,next)=>{

    // el next es una instruccion que me ordena que si todo sale bien 
    // pase al siguiente middleware


// validacion creada en //*77
const errores = validationResult(req);

/* Checking if there are errors in the validation. If there are errors, it will return a 400 status
code and the errors. */
 if(!errores.isEmpty()){//*77
     return res.status(400).json({
         ok:false,
         errors: errores.mapped()

     });
 }

 next();

}


module.exports = {
    validarCmapos
}