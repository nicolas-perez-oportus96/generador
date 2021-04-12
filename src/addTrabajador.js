const {postTrabajador } = require('../database');



//Funcion para almacenar datos en db
btnGuardarTrabajador.addEventListener('click', (e) => {
    e.preventDefault();
    const datos = {
        nombres : document.getElementById('txtNombre').value.toUpperCase(),
        apellidoP : document.getElementById('txtApellidoP').value.toUpperCase(),
        apellidoM : document.getElementById('txtApellidoM').value.toUpperCase(),
        tipoDoc : document.getElementById('cbxTipoDocumento').options[document.getElementById("cbxTipoDocumento").selectedIndex].text,
        pais : document.getElementById('txtPais').value.toUpperCase(),
        numDoc : document.getElementById('txtNumDoc').value,
        DV : document.getElementById('txtDV').value,
        fechaNacimiento : document.getElementById('txtFecNacimiento').value,
        direccion : document.getElementById('txtDomi').value.toUpperCase(),
        comuna : document.getElementById('txtComuna').value.toUpperCase(),
        correo : document.getElementById('txtEmail').value.toUpperCase(),
        genero : document.getElementById('txtGenero').value,
        patente : document.getElementById('txtPatente').value.toUpperCase(),
        funcion : document.getElementById('txtFuncion').text,
        isEsencial : document.getElementById('cbxEsen').options[document.getElementById("cbxEsen").selectedIndex].text,
        inter : document.getElementById('cbxInter').options[document.getElementById("cbxInter").selectedIndex].text,
        area : document.getElementById('cbxArea').options[document.getElementById("cbxArea").selectedIndex].text
    }

    console.log(datos)


    postTrabajador(datos);
    alert('Credenciales guardadas');
})