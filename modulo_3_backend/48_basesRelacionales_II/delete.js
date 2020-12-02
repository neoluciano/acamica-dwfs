var express = require('express');
var app = express();
const sequelize = require('./conexion.js');

function borrarUsuario() {
    sequelize.query('DELETE FROM usuarios WHERE id = :id', { replacements: { id: '9' } }).then(function(restaurant) {
        console.log(restaurant)
    })
}

borrarUsuario();

app.listen(3000, function() {
    console.log('Sistema armado en el puerto 3000!');
});