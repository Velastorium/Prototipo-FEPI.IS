const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4000;

const db = require('./db')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(__dirname + '/public'));

const cliente = require('./routes/Cliente')
app.use(cliente)

const enser = require('./routes/Enser')
app.use(enser)

const alquiler = require('./routes/Alquiler')
app.use(alquiler)

const donacion = require('./routes/Donacion')
app.use(donacion)

const evento = require('./routes/Evento')
app.use(evento)

app.get('/', (req, res) => {
    res.render('Dashboard', { Titulo: 'dashboard' });
});

app.get('/Clientes', (req, res) => {
    res.render('Clientes', { Titulo: 'clientes' });
});

app.get('/Enseres', (req, res) => {
    res.render('Enseres', { Titulo: 'enseres' });
});

app.get('/Alquileres', (req, res) => {
    res.render('Alquileres', { Titulo: 'alquileres' });
});

app.get('/Eventos', (req, res) => {
    res.render('Eventos', { Titulo: 'eventos' });
});

app.get('/Participantes', (req, res) => {
    res.render('Participantes', { Titulo: 'participantes' });
});

app.get('/Colaboradores', (req, res) => {
    res.render('Colaboradores', { Titulo: 'colaboradores' });
});

app.get('/Materiales', (req, res) => {
    res.render('Materiales', { Titulo: 'materiales' });
});

app.get('/Tareas', (req, res) => {
    res.render('Tareas', { Titulo: 'tareas' });
});

app.get('/Donaciones', (req, res) => {
    res.render('Donaciones', { Titulo: 'donacion' });
});

app.get('/Donadores', (req, res) => {
    res.render('Donadores', { Titulo: 'donadores' });
});

app.get('/Articulos', (req, res) => {
    res.render('Articulos', { Titulo: 'articulos' });
});

app.use((req, res, next) => {
    res.status(404).render('404', { titulo: '404', descripcion: 'Página no encontrada' });
});

app.listen(port, () => {
    console.log('Servidor en funcionamiento en el puerto', port);
});
