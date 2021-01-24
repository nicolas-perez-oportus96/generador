const saveCredentialsBtn = document.getElementById('credenciales');

saveCredentialsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const rut = document.getElementById('rut').value;
    const password = document.getElementById('password').value;

    console.log(rut)
    console.log(password)
} )