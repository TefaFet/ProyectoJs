const pool = require('../../database');




module.exports = function(){

    //Listar comentario
    async function listarrespuestaModels(){
        let query = "SELECT*FROM login"
        return await pool.query(query)
    }
    return{
        listarrespuestaModels
    }
}
