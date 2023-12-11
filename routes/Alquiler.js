const express = require('express');

const router = express.Router();

const alquilerController = require('../controllers/alquilerController');
router.get('/Alquileres',alquilerController.mostrar);
router.post('/alquiler/crear',alquilerController.crear);
router.post('/alquiler/editar',alquilerController.editar);
router.get('/alquiler/borrar/:id',alquilerController.borrar);
module.exports = router;