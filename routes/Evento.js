const express = require('express');

const router = express.Router();

const eventoController = require('../controllers/eventoController');
router.get('/Eventos', eventoController.mostrar);
router.post('/evento/crear', eventoController.crear);
router.post('/evento/editar', eventoController.editar);
router.get('/evento/borrar/:id', eventoController.borrar);
module.exports = router;