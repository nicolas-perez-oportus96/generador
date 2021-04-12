const { ipcRenderer } = require('electron')


const step1btn = document.getElementById('step1');
const step2btn = document.getElementById('step2');
const step3btn = document.getElementById('step3');

step1btn.addEventListener('click', (event) => {
    ipcRenderer.send('show-login')
})

step2btn.addEventListener('click', (event) => {
    ipcRenderer.send('show-info')
})

step3btn.addEventListener('click', (event) => {
    ipcRenderer.send('show-trabajadores')
})
