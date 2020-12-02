var express = require('express');
var app = express();
const sequelize = require('./conexion.js');


function obtenerRegistrosFiltrados() {

    sequelize.query('SELECT * FROM usuarios WHERE nombre = ?', { replacements: ['Luciano'], type: sequelize.QueryTypes.SELECT }).then(function(projects) {
        console.log(projects)
    })
}

obtenerRegistrosFiltrados();

app.listen(3000, function() {
    console.log('Sistema armado en el puerto 3000!');
});