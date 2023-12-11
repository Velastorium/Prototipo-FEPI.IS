// Importa el módulo Express
const express = require('express');

const router = express.Router();

const clienteController = require('../controllers/clienteController');
router.get('/Clientes',clienteController.mostrar);
router.post('/cliente/crear',clienteController.crear);
router.post('/cliente/editar',clienteController.editar);
router.get('/cliente/borrar/:id',clienteController.borrar);
module.exports = router;