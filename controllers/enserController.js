const Enser = require('../models/Enser')

//Mostrar
module.exports.mostrar =
    async function mostrar(req, res) {
        const enser = await Enser.find({});
        return res.render('Enseres', { enser: enser })
    }

// Crear
module.exports.crear =
    async function crear(req, res) {
        try {
            const enser = await new Enser({
                nombre: req.body.nombre_registro,
                cantidad: req.body.cantidad_registro,
                precio: req.body.precio_registro,
                sede: req.body.sede_registro
            })
            enser.save()
            res.redirect('/Enseres')
        } catch (error) {
            console.log(error)
        }
    };

//Editar    
module.exports.editar =
    async function editar(req, res) {
        const id = req.body.id_editar
        const nombre = req.body.nombre_editar
        const cantidad = req.body.cantidad_editar
        const precio = req.body.precio_editar
        const sede = req.body.sede_editar
        try {
            await Enser.findByIdAndUpdate(id, { nombre, cantidad, precio, sede})
            res.redirect('/Enseres')
        } catch (error) {
            console.log(error)
        }
    };

// //Borrar
module.exports.borrar =
    async function borrar(req, res) {
        const id = req.params.id
        try {
            await Enser.findByIdAndDelete(id)

            res.redirect('/Enseres')

        } catch (error) {
            res.redirect('/Enseres')
        }
    };