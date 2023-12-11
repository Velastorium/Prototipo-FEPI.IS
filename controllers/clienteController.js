const Cliente = require('../models/Cliente')

//Mostrar

module.exports.mostrar =
    async function mostrar(req, res) {
        const cliente = await Cliente.find({});
        return res.render('Clientes', { cliente: cliente })
    }


// Crear
module.exports.crear =
    async function crear(req, res) {
        try {
            const cliente = await new Cliente({
                nombre: req.body.nombre_registro,
                documento: req.body.documento_registro,
                telefono: req.body.telefono_registro,
                direccion: req.body.telefono_registro,
                tipopersona: req.body.tipopersona_registro,
                barrio: req.body.barrio_registro
            })
            cliente.save()
            res.redirect('/Clientes')
        } catch (error) {
            console.log(error)
        }
    };

//Editar    
module.exports.editar =
    async function editar(req, res) {

        const id = req.body.id_editar
        const nombre = req.body.nombre_editar
        const documento = req.body.documento_editar
        const telefono = req.body.telefono_editar
        const direccion = req.body.direccion_editar
        const tipopersona = req.body.tipopersona_editar
        const barrio = req.body.barrio_editar
        try {
            await Cliente.findByIdAndUpdate(id, { nombre, documento, telefono, direccion, tipopersona, barrio })
            res.redirect('/Clientes')
        } catch (error) {
            console.log(error)
        }
    };

//Borrar
module.exports.borrar =
    async function borrar(req, res) {
        const id = req.params.id
        try {
            await Cliente.findByIdAndDelete(id)

            res.redirect('/Clientes')

        } catch (error) {
            res.redirect('/Clientes')
        }
    };