const pool = require('../../database');




module.exports = function(){

    //Listar comentario
    
    async function listarmensajeModels(){
        let query="select * from mensaje_uno";
        return await pool.query(query);
    }

    async function crearmensaje(){
        let query="select * from mensaje_uno";
        return await pool.query(query);
    }
      


    return{
        listarmensajeModels,
        crearmensaje
    }
}
