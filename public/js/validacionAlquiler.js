document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('alquiler');
    const direccion = document.getElementById('direccion_registro');
    const fechaactividad = document.getElementById('fechaactividad_registro');
    const fechaentrega = document.getElementById('fechaentrega_registro');
    const fecharetorno = document.getElementById('fecharetorno_registro');
    const cliente = document.getElementById('cliente_registro');
    const barrio = document.getElementById('barrio_registro');

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
      const direccionValue = direccion.value.trim();
      const fechaactividadValue = fechaactividad.value.trim();
      const fechaentregaValue = fechaentrega.value.trim();
      const fecharetornoValue = fecharetorno.value.trim();
      const clienteValue = cliente.value.trim();
      const barrioValue = barrio.value.trim();

      if (direccionValue === '') {
        setError(direccion, 'Ingresa una dirección');
      } else {
        setSuccess(direccion);
      }

      if (fechaactividadValue === '') {
        setError(fechaactividad, 'Ingresa la fecha de la actividad');
      } else {
        setSuccess(fechaactividad);
      }

      if (fechaentregaValue === '') {
        setError(fechaentrega, 'Ingresa la fecha de entrega');
      } else {
        setSuccess(fechaentrega);
      }

      if (fecharetornoValue === '') {
        setError(fecharetorno, 'Ingresa la fecha de retorno');
      } else {
        setSuccess(fecharetorno);
      }

      if (clienteValue === '') {
        setError(cliente, 'Ingresa un cliente');
      } else {
        setSuccess(cliente);
      }

      if (barrioValue === '') {
        setError(barrio, 'Ingresa un barrio');
      } else {
        setSuccess(barrio);
      }

      if (direccionValue !== '' && fechaactividadValue !== '' && fechaentregaValue !== '' && fecharetornoValue !== '' && clienteValue !== '' && barrioValue !== '') {
        form.submit();
      }
    };
  });