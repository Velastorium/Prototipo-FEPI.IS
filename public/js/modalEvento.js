const EditarModalEventos = new bootstrap.Modal(document.getElementById('EditarModalEventos'));

const onEvento = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e)
        }
    });
};

onEvento(document, 'click', '.btnEditarEvento', e => {
    const fila = e.target.closest('tr');
    id_editar.value = fila.children[0].innerHTML;
    nombre_editar.value = fila.children[1].innerHTML;
    objetivo_editar.value = fila.children[2].innerHTML;
    presupuesto_editar.value = fila.children[3].innerHTML;
    fecha_editar.value = fila.children[4].innerHTML;
    horaIni_editar.value = fila.children[5].innerHTML;
    horaFin_editar.value = fila.children[6].innerHTML;
    direccion_editar.value = fila.children[7].innerHTML;
    barrio_editar.value = fila.children[8].innerHTML;
    EditarModalEventos.show();
});