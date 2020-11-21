const mongoose = require('./conexion.js');
const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log('listening on 3000')
})

//Creamos el modelo

const Pelicula = mongoose.model('peliculas', {
    titulo: String,
    director: String,
    genero: String,
    ano: Date
});

//Actualizamos los datos 
Pelicula.findOne({ titulo: 'E.T' }).then(function(resultado) {
    resultado.titulo = 'Pesadilla en la calle del infierno';
    resultado.director = 'Wes Craven';
    resultado.genero = 'Terror';
    resultado.ano = '1984';
    resultado.save().then(res => console.log(res));
}).catch(error => console.error("No se puede realizar la actualización"));