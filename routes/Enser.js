// Importa el módulo Express
const express = require('express');

const router = express.Router();

const enserController = require('../controllers/enserController');
router.get('/Enseres',enserController.mostrar);
router.post('/enser/crear',enserController.crear);
router.post('/enser/editar',enserController.editar);
router.get('/enser/borrar/:id',enserController.borrar);
module.exports = router;    