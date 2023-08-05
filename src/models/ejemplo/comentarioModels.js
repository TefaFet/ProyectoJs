const pool = require('../../database');






module.exports = function(){

    //Listar comentario
    async function listarcomentarioModels(){
        let query = "SELECT*FROM consumo_responsable"
        return await pool.query(query)
    }
    return{
        listarcomentarioModels
    }
}



