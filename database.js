const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({credenciales: {}}).write()

function getDatosUsuario(usuario,contrasena){
    const datos = db.get('credenciales').value();
    return datos;
}

function postDatosUsuario(usuario,contrasena){
    db.set('credenciales.usuario', usuario).write();
    db.set('credenciales.contrasena', contrasena).write();
}

module.exports = {getDatosUsuario, postDatosUsuario}
