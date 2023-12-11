//=======================Cursos================================

document.addEventListener('DOMContentLoaded', function () {
    // Obtén los elementos de instructores y aprendices
    var instructores = document.querySelector('li a[href="/Instructores"]').parentNode;
    var aprendices = document.querySelector('li a[href="/Aprendices"]').parentNode;
    // Agrega un event listener al enlace de cursos
    var cursosLink = document.querySelector('li a[href="/Cursos"]');
    cursosLink.addEventListener('click', function (event) {
        // Evita que el enlace redireccione
        event.preventDefault();

        // Muestra u oculta los elementos de instructores y aprendices
        if (instructores.style.display === 'none') {
            instructores.style.display = 'block';
            aprendices.style.display = 'block';
            
        } else {
            instructores.style.display = 'none';
            aprendices.style.display = 'none';
        }
        
        setTimeout(function () {
            window.location.href = cursosLink.getAttribute('href');
        }, 1500);
    });
});

//=======================Practicantes================================

document.addEventListener('DOMContentLoaded', function () {
    var responsabilidades = document.querySelector('li a[href="/Responsabilidades"]').parentNode;

    var practicantesLink = document.querySelector('li a[href="/Practicantes"]');
    practicantesLink.addEventListener('click', function (event) {

        event.preventDefault();

        if (responsabilidades.style.display === 'none') {
            responsabilidades.style.display = 'block';
            
        } else {
            responsabilidades.style.display = 'none';
        }
        
        setTimeout(function () {
            window.location.href = practicantesLink.getAttribute('href');
        }, 1500);
    });
});

//=======================Alquileres================================

document.addEventListener('DOMContentLoaded', function () {

    var enseres = document.querySelector('li a[href="/Enseres"]').parentNode;
    var clientes = document.querySelector('li a[href="/Clientes"]').parentNode;

    var alquileresLink = document.querySelector('li a[href="/Alquileres"]');
    alquileresLink.addEventListener('click', function (event) {

        event.preventDefault();

        if (clientes.style.display === 'none') {
            clientes.style.display = 'block';
            enseres.style.display = 'block';
            
        } else {
            clientes.style.display = 'none';
            enseres.style.display = 'none';
        }
        
        setTimeout(function () {
            window.location.href = alquileresLink.getAttribute('href');
        }, 1500);
    });
});

//=======================Eventos================================

document.addEventListener('DOMContentLoaded', function () {

    var tareas = document.querySelector('li a[href="/Tareas"]').parentNode;
    var materiales = document.querySelector('li a[href="/Materiales"]').parentNode;
    var colaboradores = document.querySelector('li a[href="/Colaboradores"]').parentNode;
    var participantes = document.querySelector('li a[href="/Participantes"]').parentNode;
    

    var eventosLink = document.querySelector('li a[href="/Eventos"]');
    eventosLink.addEventListener('click', function (event) {

        event.preventDefault();

        if (participantes.style.display === 'none') {
            participantes.style.display = 'block';
            colaboradores.style.display = 'block';
            materiales.style.display = 'block';
            tareas.style.display = 'block';
            
        } else {
            participantes.style.display = 'none';
            colaboradores.style.display = 'none';
            materiales.style.display = 'none';
            tareas.style.display = 'none';
        }
        
        setTimeout(function () {
            window.location.href = eventosLink.getAttribute('href');
        }, 3000);
    });
});

//=======================Donaciones================================

document.addEventListener('DOMContentLoaded', function () {

    var articulos = document.querySelector('li a[href="/Articulos"]').parentNode;
    var donadores = document.querySelector('li a[href="/Donadores"]').parentNode;

    var donacionesLink = document.querySelector('li a[href="/Donaciones"]');
    donacionesLink.addEventListener('click', function (event) {

        event.preventDefault();

        if (donadores.style.display === 'none') {
            donadores.style.display = 'block';
            articulos.style.display = 'block';
            
        } else {
            donadores.style.display = 'none';
            articulos.style.display = 'none';
        }
        
        setTimeout(function () {
            window.location.href = donacionesLink.getAttribute('href');
        }, 2500);
    });
});