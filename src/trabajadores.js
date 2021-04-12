const { ipcRenderer } = require('electron')
const {getTrabajadores} = require('../database');

const btnNuevoTrab = document.getElementById('btnNuevoTrabajador');
const trabajadores = getTrabajadores();


//ciclo que recorre listado de trabajadores y los añade a la tabla
for (var i = 0; i<trabajadores.length; i++) {
    //Mostrando trabajadores en tabla
    var tablaTrabajadores = document.getElementById("tablaTrabajadores");
    var filaTrabajador = tablaTrabajadores.insertRow(i+1);

    var celdaNombres = filaTrabajador.insertCell(0);
    var celdaApellidoP = filaTrabajador.insertCell(1);
    var celdaApellidoM = filaTrabajador.insertCell(2);
    var celdaTipoDoc = filaTrabajador.insertCell(3);
    var celdaPais = filaTrabajador.insertCell(4);
    var celdaNumDoc = filaTrabajador.insertCell(5);
    var celdaDV = filaTrabajador.insertCell(6);
    var celdaFecNacimiento = filaTrabajador.insertCell(7);
    var celdaDomi = filaTrabajador.insertCell(8);
    var celdaComuna = filaTrabajador.insertCell(9);
    var celdaEmail = filaTrabajador.insertCell(10);
    var celdaGenero = filaTrabajador.insertCell(11);
    var celdaPatente = filaTrabajador.insertCell(12);
    var celdaFuncion = filaTrabajador.insertCell(13);
    var celdaEsencial = filaTrabajador.insertCell(14);
    var celdaInter = filaTrabajador.insertCell(15);
    var celdaArea = filaTrabajador.insertCell(16);

    console.log(trabajadores[i]);


    celdaNombres.innerHTML = trabajadores[i].nombres;
    celdaApellidoP.innerHTML = trabajadores[i].apellidoP;
    celdaApellidoM.innerHTML = trabajadores[i].apellidoM; 
    celdaTipoDoc.innerHTML = trabajadores[i].tipoDoc; 
    celdaPais.innerHTML = trabajadores[i].pais; 
    celdaNumDoc.innerHTML = trabajadores[i].numDoc; 
    celdaDV.innerHTML = trabajadores[i].DV; 
    celdaFecNacimiento.innerHTML = trabajadores[i].fechaNacimiento; 
    celdaDomi.innerHTML = trabajadores[i].direccion; 
    celdaComuna.innerHTML = trabajadores[i].comuna; 
    celdaEmail.innerHTML = trabajadores[i].correo; 
    celdaGenero.innerHTML = trabajadores[i].genero; 
    celdaPatente.innerHTML = trabajadores[i].patente; 
    celdaFuncion.innerHTML = trabajadores[i].funcion; 
    celdaEsencial.innerHTML = trabajadores[i].isEsencial; 
    celdaInter.innerHTML = trabajadores[i].inter; 
    celdaArea.innerHTML = trabajadores[i].area; 

}

//mostrar ventana "nuevo trabajador"
btnNuevoTrab.addEventListener('click', (event) => {
    ipcRenderer.send('show-addTrabajador')
})