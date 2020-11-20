let btnEnviar = document.getElementById('login');
btnEnviar.addEventListener('click', () => {
    let inputUsuario = document.getElementById('usuario');
    let inputPass = document.getElementById('pass');
    let bodyAEnviar = { usuario: inputUsuario.value, clave: inputPass.value };
    let fetchParams = {
        method: 'POST',
        body: JSON.stringify(bodyAEnviar),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch('http://localhost:3000/login', fetchParams)
        .then(res => res.json())
        .then(json => {
            console.log(json.token);
            localStorage.setItem('token', json.token)
            if (json.token) {
                let btnNoticias = document.getElementById('noticias');
                btnNoticias.classList.toggle('ocultar');
                btnNoticias.classList.toggle('mostrar');
            }
        });
})

let btnNoticias = document.getElementById('noticias');
btnNoticias.addEventListener('click', () => {
    let fetchParams = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `BEARER ${localStorage.getItem('token')}`
        }
    }
    fetch('http://localhost:3000/noticias', fetchParams)
        .then(res => res.json())
        .then(json => {
            pintarNoticias(json);
        });
})

pintarNoticias = (json) => {
    let noticias = document.getElementById('seccionNoticias');
    noticias.innerHTML = '';
    for (element of json) {
        let noticia = document.createElement('p');
        noticia.innerHTML = element.titulo;
        noticias.appendChild(noticia)
    }
}