

const { Router } = require('express');
const {getUsuarios} = require('../controllers/usuarios');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();



/*
valida el token del usuario conectado y le retorna los usuarios 
ala persona conectada 
*/

router.get('/',validarJWT,getUsuarios);//*110





module.exports = router;