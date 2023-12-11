const form = document.getElementById('cliente');
const nombre = document.getElementById('nombre_registro');
const documento = document.getElementById('documento_registro');
const telefono = document.getElementById('telefono_registro');
const direccion = document.getElementById('direccion_registro');
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
    const nombreValue = nombre.value.trim();
    const documentoValue = documento.value.trim();
    const telefonoValue = telefono.value.trim();
    const direccionValue = direccion.value.trim();
    const barrioValue = barrio.value.trim();

    if (nombreValue === '') {
        setError(nombre, 'Ingresa un nombre y apellido');
    } else {
        setSuccess(nombre);
    }

    if (documentoValue === '') {
        setError(documento, 'Ingresa un número de documento');
    } else {
        setSuccess(documento);
    }

    if (telefonoValue === '') {
        setError(telefono, 'Ingresa un número de teléfono');
    } else {
        setSuccess(telefono);
    }

    if (direccionValue === '') {
        setError(direccion, 'Ingresa una dirección');
    } else {
        setSuccess(direccion);
    }

    if (barrioValue === '') {
        setError(barrio, 'Ingresa un barrio');
    } else {
        setSuccess(barrio);
    }

    if (nombreValue !== '' && documentoValue !== '' && telefonoValue !== '' && direccionValue !== '' && barrioValue !== '') {
        form.submit();
    }
};
