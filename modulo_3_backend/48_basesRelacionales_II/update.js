var express = require('express');
var app = express();
const sequelize = require('./conexion.js');

function actualizarRegistro() {
    sequelize.query('UPDATE usuarios SET casado = 1 WHERE id = ?', { replacements: [1] }).then(function(restaurant) {
        console.log(restaurant)
    })
}

actualizarRegistro();

app.listen(3000, function() {
    console.log('Sistema armado en el puerto 3000!');
});