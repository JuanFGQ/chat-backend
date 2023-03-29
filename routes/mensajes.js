





/*

Path: /api/mensajes

*/


//*118

const { Router } = require('express');
const { obtenerChat } = require('../controllers/mensajes');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

/*
se añade el :de para saber quien es la persona que me interesa leer los mensajes
*/
router.get('/:de',validarJWT,obtenerChat);//*118

    





module.exports = router;




