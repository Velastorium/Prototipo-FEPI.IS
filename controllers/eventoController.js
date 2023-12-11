const Evento = require('../models/Evento');

//Mostrar
module.exports.mostrar =
    async function mostrar(req, res) {
        const evento = await Evento.find({});
        return res.render('Eventos', { evento: evento })
    }

// Crear
module.exports.crear =
    async function crear(req, res) {
        try {
            const evento = await new Evento({
                nombre: req.body.nombre_registro,
                objetivo: req.body.objetivo_registro,
                presupuesto: req.body.presupuesto_registro,
                fecha: req.body.fecha_registro,
                horaIni: req.body.horaIni_registro,
                horaFin: req.body.horaFin_registro,
                direccion: req.body.direccion_registro,
                barrio: req.body.barrio_registro
            })
            evento.save()
            res.redirect('/Eventos')
        } catch (error) {
            console.log(error)
        }
    };

//Editar    
module.exports.editar =
    async function editar(req, res) {

        const id = req.body.id_editar
        const nombre = req.body.nombre_editar
        const objetivo = req.body.objetivo_editar
        const presupuesto = req.body.presupuesto_editar
        const fecha = req.body.fecha_editar
        const horaIni = req.body.horaIni_editar
        const horaFin = req.body.horaFin_editar
        const direccion = req.body.direccion_editar
        const barrio = req.body.barrio_editar
        try {
            await Evento.findByIdAndUpdate(id, { nombre, objetivo, presupuesto, fecha, horaIni, horaFin, direccion, barrio })
            res.redirect('/Eventos')
        } catch (error) {
            console.log(error)
        }
    };

//Borrar
module.exports.borrar =
    async function borrar(req, res) {
        const id = req.params.id
        try {
            await Evento.findByIdAndDelete(id)

            res.redirect('/Eventos')

        } catch (error) {
            res.redirect('/Eventos')
        }
    };
