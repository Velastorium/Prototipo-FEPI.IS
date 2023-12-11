const Donacion = require('../models/Donacion');

//Mostrar
module.exports.mostrar =
    async function mostrar(req, res) {
        const donacion = await Donacion.find({});
        return res.render('Donaciones', { donacion: donacion })
    }

// Crear
module.exports.crear =
    async function crear(req, res) {
        try {
            const donacion = await new Donacion({
                donador: req.body.donador_registro,
                articulo: req.body.articulo_registro,
                cantidad: req.body.cantidad_registro,
                descripcion: req.body.descripcion_registro,
                fecha: req.body.fecha_registro
            })
            donacion.save()
            res.redirect('/Donaciones')
        } catch (error) {
            console.log(error)
        }
    };

//Editar    
module.exports.editar =
    async function editar(req, res) {

        const id = req.body.id_editar
        const donador = req.body.donador_editar
        const articulo = req.body.articulo_editar
        const cantidad = req.body.cantidad_editar
        const descripcion = req.body.descripcion_editar
        const fecha = req.body.fecha_editar
        try {
            await Donacion.findByIdAndUpdate(id, { donador, articulo, cantidad, descripcion, fecha })
            res.redirect('/Donaciones')
        } catch (error) {
            console.log(error)
        }
    };

//Borrar
module.exports.borrar =
    async function borrar(req, res) {
        const id = req.params.id
        try {
            await Donacion.findByIdAndDelete(id)

            res.redirect('/Donaciones')

        } catch (error) {
            res.redirect('/Donaciones')
        }
    };
