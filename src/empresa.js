const {getDatosEmpresa,postDatosEmpresa } = require('../database');
const btnDatos = document.getElementById('btnDatos');

//Buscando datos existentes y mostrandolos en textboxes
const datosEmpresa = getDatosEmpresa();

document.getElementById('txtRutEmpresa').value = datosEmpresa.rutEmpresa;
document.getElementById('txtRutRepresentante').value = datosEmpresa.runRepresentante;
document.getElementById('txtActEconom').value = datosEmpresa.codActividad;
document.getElementById('txtCiudad').value = datosEmpresa.ciudades;
document.getElementById('txtComuna').value = datosEmpresa.comuna;
document.getElementById('txtTrabajadores').value = datosEmpresa.trabajadores;
document.getElementById('txtTrabEs').value = datosEmpresa.trabajadoresEs;


//Funcion para almacenar datos en db
btnDatos.addEventListener('click', (e) => {
    e.preventDefault();
    const datos = {
        rutEmpresa : document.getElementById('txtRutEmpresa').value,
        runRepresentante : document.getElementById('txtRutRepresentante').value,
        codActividad : document.getElementById('txtActEconom').value,
        ciudades : document.getElementById('txtCiudad').value.toUpperCase(),
        comuna : document.getElementById('txtComuna').value.toUpperCase(),
        trabajadores : document.getElementById('txtTrabajadores').value,
        trabajadoresEs : document.getElementById('txtTrabEs').value
    }
    postDatosEmpresa(datos);
    alert('Credenciales guardadas');
})