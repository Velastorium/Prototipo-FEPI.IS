const modalEditarCliente = new bootstrap.Modal(document.getElementById('EditarModalCliente'));

const on = (element, event, selector, handler) => {
  element.addEventListener(event, e => {
    if (e.target.closest(selector)) {
      handler(e);
    }
  });
};

on(document, 'click', '.btnEditar', e => {
  const fila = e.target.closest('tr');
  id_editar.value = fila.children[0].innerHTML;
  nombre_editar.value = fila.children[1].innerHTML;
    documento_editar.value = fila.children[2].innerHTML;
    telefono_editar.value = fila.children[3].innerHTML;
    direccion_editar.value = fila.children[4].innerHTML;
    tipopersona_editar.value = fila.children[5].innerHTML;
    barrio_editar.value = fila.children[6].innerHTML;
  modalEditarCliente.show();
}); 