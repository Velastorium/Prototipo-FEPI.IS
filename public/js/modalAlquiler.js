// modalAlquiler.js
const EditarModalAlquileres = new bootstrap.Modal(document.getElementById('EditarModalAlquileres'));

const onAlquiler = (element, event, selector, handler) => {
  element.addEventListener(event, e => {
    if (e.target.closest(selector)) {
      handler(e);
    }
  });
};

onAlquiler(document, 'click', '.btnEditarAlquiler', e => {
  const fila = e.target.closest('tr');
  id_editar.value = fila.children[0].innerHTML;
  direccion_editar.value = fila.children[1].innerHTML;
  fechaactividad_editar.value = fila.children[2].innerHTML;
  fechaentrega_editar.value = fila.children[3].innerHTML;
  fecharetorno_editar.value = fila.children[4].innerHTML;
  cliente_editar.value = fila.children[5].innerHTML;
  barrio_editar.value = fila.children[6].innerHTML;
  EditarModalAlquileres.show();
});
