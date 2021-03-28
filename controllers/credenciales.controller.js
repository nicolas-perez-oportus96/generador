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
    
    getConnection().get('credenciales').push(credenciales).write();
};

module.exports = {
    getCredenciales,
    saveCredenciales
}