const { getDatosUsuario, postDatosUsuario } = require('../database');
const saveCredentialsBtn = document.getElementById('credenciales');

const datosUsuario = getDatosUsuario();

document.getElementById('txtRut').value = datosUsuario.usuario;
document.getElementById('txtPass').value = datosUsuario.contrasena;


saveCredentialsBtn.addEventListener('click', (e) => {
    // e.preventDefault();
    const rut = document.getElementById('rut').value;
    const password = document.getElementById('password').value;

    postDatosUsuario(rut,password);
    alert('Credenciales guardadas');
})