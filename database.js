const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ 
    credenciales: {}, 
    empresa: {},
    trabajadores: [],
}).write()

function getDatosUsuario(){
    const datos = db.get('credenciales').value();
    return datos;
}

function postDatosUsuario(usuario,contrasena){
    db.set('credenciales.usuario', usuario).write();
    db.set('credenciales.contrasena', contrasena).write();
}

function getDatosEmpresa(){
    const datos = db.get('empresa').value();
    return datos;
}
function postDatosEmpresa(datosEmpresa){
    db.set('empresa', datosEmpresa).write();
    // db.set('credenciales.contrasena', contrasena).write();
}

function getTrabajadores(){
    const datos = db.get('trabajadores').value();
    return datos;
}
function postTrabajador(datosTrabajador){
    // db.set('trabajadores', {datosTrabajador}).write();
    // db.set('credenciales.contrasena', contrasena).write();
    db.get('trabajadores').push(datosTrabajador).write()
}

module.exports = {
    getDatosUsuario, 
    postDatosUsuario,
    getDatosEmpresa,
    postDatosEmpresa,
    getTrabajadores,
    postTrabajador
}
