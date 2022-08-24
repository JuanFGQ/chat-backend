
// creado en //*76

/*
path : api/login
*/


const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario,login,renewToken } = require('../controllers/auth');
const { validarCmapos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();



/*
hay diferentes peticiones:
post
get
delete

*/

/* The above code is a middleware function that is used to validate the fields of the form. */

router.post('/new',[
     //check es un middleware que examina campo por campo 

    /*
    validaciones que hacer que el servidor me pida ciertos datos 
    si no se los he proporcionado
    */
   
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('password', 'password obligatorio').not().isEmpty(),
    check('email', 'email obligatorio').isEmail(),


    // esta propiedad es la que hace la comprobacion de lo que falta
    validarCmapos

],crearUsuario);//*optimizado 76


//post:/
//validar email,password
router.post('/', [

    check('password', 'password obligatorio').not().isEmpty(),
    check('email', 'email obligatorio').isEmail(),


],login);

// validar JWT para iniciar sesion sin introducir las credenciales de nuevo
// validarJWT

router.get('/renew',validarJWT,renewToken,);//*84





module.exports = router;