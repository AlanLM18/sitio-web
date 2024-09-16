function abrirMenu() {
    document.getElementById("menu-lateral").style.width = "250px";
}

function cerrarMenu() {
    document.getElementById("menu-lateral").style.width = "0";
}

function mostrarSeccion(id) {
    cerrarMenu();
    // Ocultar todas las secciones
    const secciones = document.querySelectorAll('section');
    secciones.forEach(seccion => {
        seccion.classList.remove('seccion-activa');
    });

    // Mostrar la sección seleccionada
    const seccionActiva = document.getElementById(id);
    seccionActiva.classList.add('seccion-activa');
}

function mostrarImagen(img) {
    const modal = document.getElementById("imagen-modal");
    const modalImg = document.getElementById("imagen-agrandada");

    modal.style.display = "block";
    modalImg.src = img.src;
}

function cerrarImagen() {
    document.getElementById("imagen-modal").style.display = "none";
}
