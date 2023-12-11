document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('enseres');
  const nombre = document.getElementById('nombre_registro');
  const cantidad = document.getElementById('cantidad_registro');
  const precio = document.getElementById('precio_registro');
  const sede = document.getElementById('sede_registro');

  form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
  });

  const setError = (element, message) => {
    const inputControl = element.closest('.input-control');
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
  };

  const setSuccess = element => {
    const inputControl = element.closest('.input-control');
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
  };

  const validateInputs = () => {
    const nombreValue = nombre.value.trim();
    const cantidadValue = cantidad.value.trim();
    const precioValue = precio.value.trim();
    const sedeValue = sede.value.trim();

    if (nombreValue === '') {
      setError(nombre, 'Ingresa un nombre de enser');
    } else {
      setSuccess(nombre);
    }

    if (cantidadValue === '') {
      setError(cantidad, 'Ingresa la cantidad');
    } else {
      setSuccess(cantidad);
    }

    if (precioValue === '') {
      setError(precio, 'Ingresa el precio');
    } else {
      setSuccess(precio);
    }

    if (sedeValue === '') {
      setError(sede, 'Ingresa la sede');
    } else {
      setSuccess(sede);
    }

    if (nombreValue !== '' && cantidadValue !== '' && precioValue !== '' && sedeValue !== '') {
      form.submit();
    }
  };
});
