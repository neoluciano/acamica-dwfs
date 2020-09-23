//Creación de promesas
//ejemplo de promesa resuelta
let promesa1 = new Promise((resolve, reject) => {
    //resolve y reject
    setTimeout(function() {
        resolve({ hola: true });
    }, 5000);
    setTimeout(function() {
        reject("Promesa rechazada!");
    }, 8000);
});

//then and catch
promesa1.then((successMessage) => {
    console.log('Respuesta de promesa1: ' + successMessage.hola);
}).catch((errorMessage) => {
    console.error("¡Error de promesa1! " + errorMessage);
});


//Ejemplo sincrono para compara
let successMessage;
setTimeout(function() {
    successMessage = "Promesa resuelta!";
}, 2500);
console.log('Respuesta síncrona: ' + successMessage);


//ejemplo de promesa rechazada
let promesa2 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("Promesa resuelta!");
    }, 350);
    setTimeout(function() {
        reject("Promesa rechazada!");
    }, 250);
});

promesa2.then((successMessage) => {
    console.log('Respuesta promesa2: ' + successMessage);
}).catch((errorMessage) => {
    console.log("¡Error de promesa2! " + errorMessage);
});

//ejemplo de promesa pendiente que termina resolviéndose
let promesa3 = new Promise((resolve, reject) => {
    console.log("pending...");
    setTimeout(function() {
        if (!true) {
            resolve("Promesa resuelta!");
        } else {
            reject("Promesa rechazada!");
        }
    }, 3500);
});

promesa3.then((successMessage) => {
    console.log('Respuesta de promesa3: ' + successMessage);
}).catch((errorMessage) => {
    console.log("¡Error de promesa3! " + errorMessage);
});


// ejemplo de fetch con promesa
let imgCtn = document.getElementById('imgCtn');

function getDogImg(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            //console.log(json);
            let dogImg = document.createElement('img');
            dogImg.setAttribute('src', data.message);
            dogImg.style.width = '300px';
            imgCtn.appendChild(dogImg);
        })
        .catch(err => {
            console.error('fetch failed', err);
        });
}
getDogImg("https://dog.ceo/api/breeds/image/random");

function followers(username) {
    fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => {
            fetch(data.followers_url)
                .then(res => res.json())
                .then(json => console.log(json.splice(0, 5)))
                .catch(() => console.error("No se pueden recuperar los followers"))
        })
        .catch(() => console.error("No se pudo recuperar informacion del usuario"));
}

followers('alejandroarevalov');