const EditarModalDonaciones = new bootstrap.Modal(document.getElementById('EditarModalDonaciones'));

const onDonacion = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e)
        }
    });
};

onDonacion(document, 'click', '.btnEditarDonacion', e => {
    const fila = e.target.closest('tr');
    id_editar.value = fila.children[0].innerHTML;
    donador_editar.value = fila.children[1].innerHTML;
    articulo_editar.value = fila.children[2].innerHTML;
    cantidad_editar.value = fila.children[3].innerHTML;
    descripcion_editar.value = fila.children[4].innerHTML;
    fecha_editar.value = fila.children[5].innerHTML;
    EditarModalDonaciones.show();
});