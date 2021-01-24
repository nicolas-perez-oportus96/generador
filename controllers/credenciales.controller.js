const { getConnection } = require('../database')

const getCredenciales = () => {
    const credenciales = getConnection().get('credenciales').value();
    console.log(credenciales)
}

const saveCredenciales = (usuario, contrasena) => {
    const credenciales = {
        usuario: usuario,
        contrasena: contrasena
    }
    const credenciales = getConnection().get('credenciales').push(credenciales);
    console.log(credenciales)

}

module.exports = {
    getCredenciales,
    saveCredenciales
}