const express = require ('express')
const  router  = express.Router();
const Consumocontroller = require ('../../controllers/Gustos/Consumocontroller');




router.get('/listarConsumo', Consumocontroller.listarConsumo);
router.post('/listarConsumo', Consumocontroller.creacionConsumo);


module.exports= router;