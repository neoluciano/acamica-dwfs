//Registrarse a la Api de OpenWeather para sacar la ApiKey gratuita en: https://openweathermap.org/ y agregarla a la variable
//Mentores, se pueden registrar en vivo o utilizar esta API Key 1c67ae33adc312d33476ae4d68a09beb
const apiKey = '1c67ae33adc312d33476ae4d68a09beb';

let searchInput = document.getElementById('search');
let searchBtn = document.getElementById('searchBtn');
let results = document.getElementById('results');

//Ejemplos de ciudades para el search query: London, Texas, Tokio, Seoul
//Tambien se puede buscar por país: Argentina, Uruguay, etc

//Fetch con async await
async function newsSearch(city_name) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}`;
    const resp = await fetch(url);
    console.log(resp);
    const info = await resp.json();
    console.log(info);
    return info;
}

function search() {

    let info = newsSearch(searchInput.value);
    console.log(info);
    console.log('Hola chicos...');
    info.then(json => {
        console.log(json);
        console.log("Este es el json: " + JSON.stringify(json));
        results.textContent = `Clima: ${json.weather[0].main}, Temperatura:  ${json.main.temp - 273} °C`
    }).catch(error => {
        console.log(error);
    })
}

async function buscarGif(value) {
    let url = 'https://api.giphy.com/v1/gifs/search?api_key=1yVSM9oVX3z5nlo213gmodWDvoRxttsM&q=' + value;
    let response = await fetch(url);
    let json = await response.json();
    let gif = json.data[0].images.original.url;
    console.log(gif);
    return gif;
}

searchBtn.addEventListener('click', () => {
    search();
    console.log("Hola");
    buscarGif(searchInput.value)
        .then(x => console.log(x))
        .catch(console.error);
})

searchInput.addEventListener('keyup', (event) => {

    if (event.key === 13) {
        search();
    }
})


//Mismo ejemplo de fetch simple que se hizo en clase de promesas, pero esta vez con async await
let imgCtn = document.getElementById('imgCtn');

async function getDogImg() {
    let url = "https://dog.ceo/api/breeds/image/random";
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
};
let dog = getDogImg();
dog.then(data => {
    let dogImg = document.createElement('img');
    dogImg.setAttribute('src', data.message);
    dogImg.style.width = '300px';
    imgCtn.appendChild(dogImg);
    console.log(data);
}).catch(err => {
    console.error('fetch failed', err);
})

//Parametros para uso del fetch en casos de endpoints tipo POST, PUT, DELETE
// POST
fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))

//PUT
fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'foooooooo',
            body: 'bar33333',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))

//DELETE
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
})

async function obtenerPeliculaPorTitulo(titulo) {
    let url = `http://www.omdbapi.com/?apikey=7fb789f2&t=${titulo}`;
    let response = await fetch(url);
    let data = await response.json();
    let img = data.Poster;
    return img;
}

obtenerPeliculaPorTitulo('Harry')
    .then(poster => {
        let movieImg = document.createElement('img');
        movieImg.setAttribute('src', poster);
        movieImg.style.width = '300px';
        movieImg.style.height = '300px';
        movieImg.style.padding = '2px';
        imgCtn.appendChild(movieImg);
        console.log(movieImg);
    }).
catch(console.error);

const api_key = 'JAsSvdrs6vTd8bjSwT6bSZHcbOTTbTOa';

async function obtenerTrendings() {
    let url = 'https://api.giphy.com/v1/gifs/trending?api_key=' + api_key + "&limit=5";
    let response = await fetch(url);
    let json = await response.json();
    let gifs = json.data; //[1].images.original.url;
    return gifs;
}

obtenerTrendings()
    .then(imagen => {
        console.log(imagen);
        for (img of imagen) {
            let imgGif = document.createElement('img');
            imgGif.setAttribute('src', img.images.original.url);
            imgCtn.appendChild(imgGif);
        }
    })
    .catch(console.error);