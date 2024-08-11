// Función para manejar el modal de "Términos de Uso"
function modal() {
    // Abre el modal al hacer clic en "Términos de Uso"
    document.getElementById('into').style.display = 'block';

    // Cierra el modal
    document.querySelector('#into span').addEventListener('click', function () {
        document.getElementById('into').style.display = 'none';
    });
}
function modal2() {
    // Abre el modal al hacer clic en "Política de Privacidad"
    document.getElementById('intopoli').style.display = 'block';

    // Cierra el modal
    document.querySelector('#intopoli span').addEventListener('click', function () {
        document.getElementById('intopoli').style.display = 'none';
    });
}
// Funciones para abrir y cerrar el menú lateral
function openNav() {
    document.getElementById("mySidenav").style.width = "70%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
