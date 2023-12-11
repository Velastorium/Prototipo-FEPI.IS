const express = require('express');

const router = express.Router();

const donacionController = require('../controllers/donacionController');
router.get('/Donaciones', donacionController.mostrar);
router.post('/donacion/crear', donacionController.crear);
router.post('/donacion/editar', donacionController.editar);
router.get('/donacion/borrar/:id', donacionController.borrar);
module.exports = router;