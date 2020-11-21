const mongoose = require('./conexion.js');
const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log('listening on 3000')
})

const pelicula = mongoose.model('peliculas', {
    titulo: String,
    director: String,
    genero: String,
    ano: Date
});

//Búsqueda general
pelicula.find().then(function(resultado) {
    console.log(resultado);
    console.log('-------------------------------');
});

//Búsqueda con filtro
pelicula.findOne({ titulo: "Hause" }).then(function(resultado) {
    console.log(resultado);
    let resultadoFinal = {};
    resultadoFinal.titulo = resultado.titulo;
    resultadoFinal.director = resultado.director;
    resultadoFinal.genero = resultado.genero;
    resultadoFinal.anio = resultado.anio;

    console.log(resultadoFinal);
    console.log('-------------------------------');
}).catch(e => console.error("Error en la búsqueda: " + e));