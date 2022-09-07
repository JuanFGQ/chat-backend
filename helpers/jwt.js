


//  creacion del JWT
const jwt = require('jsonwebtoken');


const generarJWT = (uid) => {

   
   return new Promise((resolve,reject)=>{
    const payload ={uid};


    jwt.sign(payload, process.env.JWT_KEY, {

        expiresIn: '24h'
    },(err,token)=>{


        if(err) {
            reject('no se pudo generar el jwt ')

        }else{
            resolve(token);
        }

    });




   })




}
//*108
const comprobarJWT = (token = '') =>{

    
    try {

        const {uid} = jwt.verify(token, process.env.JWT_KEY);
        // si se conceta como primer argumento mando un true y el uid del usuario 
        return[true,uid];
        
        
    } catch (error) {
   return[false,null];
        
    }

}


module.exports = {generarJWT,comprobarJWT}