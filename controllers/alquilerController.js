const Alquiler = require('../models/Alquiler')

//Mostrar
module.exports.mostrar =
    async function mostrar(req, res) {
        const alquiler = await Alquiler.find({});
        return res.render('Alquileres', { alquiler: alquiler })
    }

// Crear
module.exports.crear =
    async function crear(req, res) {
        try {
            const alquiler = await new Alquiler({
                direccion: req.body.direccion_registro,
                fechaactividad: req.body.fechaactividad_registro,
                fechaentrega: req.body.fechaentrega_registro,
                fecharetorno: req.body.fecharetorno_registro,
                cliente: req.body.cliente_registro,
                barrio: req.body.barrio_registro
            })
            alquiler.save()
            res.redirect('/Alquileres')
        } catch (error) {
            console.log(error)
        }
    };

//Editar    
module.exports.editar =
    async function editar(req, res) {

        const id = req.body.id_editar
        const direccion = req.body.direccion_editar
        const fechaactividad = req.body.fechaactividad_editar
        const fechaentrega = req.body.fechaentrega_editar
        const fecharetorno = req.body.fecharetorno_editar
        const cliente = req.body.cliente_editar
        const barrio = req.body.barrio_editar
        try {
            await Alquiler.findByIdAndUpdate(id, { direccion, fechaactividad, fechaentrega, fecharetorno, cliente, barrio })
            res.redirect('/Alquileres')
        } catch (error) {
            console.log(error)
        }
    };

//Borrar
module.exports.borrar =
    async function borrar(req, res) {
        const id = req.params.id
        try {
            await Alquiler.findByIdAndDelete(id)

            res.redirect('/Alquileres')

        } catch (error) {
            res.redirect('/Alquileres')
        }
    };