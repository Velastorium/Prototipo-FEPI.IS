
document.addEventListener('DOMContentLoaded', function () {
    // Select the date input field
    var fechaEditarInput = document.querySelector('.fecha_editar');

    // Get the current date value
    var currentDate = fechaEditarInput.value;

    // Format the date as YYYY-MM-DD
    var formattedDate = new Date(currentDate).toISOString().split('T')[0];

    // Set the formatted date as the value of the input field
    fechaEditarInput.value = formattedDate;
});

