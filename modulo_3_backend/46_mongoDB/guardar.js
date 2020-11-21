const mongoose = require('./conexion.js');
const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log('listening on 3000')
})

const Pelicula = mongoose.model('peliculas', {
    titulo: String,
    director: String,
    genero: String,
    anio: Date
});


let nuevaPelicula = {
    titulo: 'Matrix',
    director: "Hermanos Wachovsky",
    genero: "Accion",
    anio: "1998"
}

const registroPelicula = new Pelicula(nuevaPelicula);

registroPelicula.save()
    .then(res => console.log("Guardado exitoso: " + res))
    .catch(err => console.error("Ha fallado el guardado: " + err));