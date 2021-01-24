const { ipcRenderer } = require('electron')


const step1btn = document.getElementById('step1');

step1btn.addEventListener('click', (event) => {
    ipcRenderer.send('show-login')
})
