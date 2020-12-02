var express = require('express');
var app = express();
const sequelize = require('./conexion.js'); //ORM -> Object Relational Mapper


function obtenerTodosLosRegistros() {

    sequelize.query("SELECT * FROM usuarios", { type: sequelize.QueryTypes.SELECT })
        .then(function(productos) {
            console.log(productos);
        }).catch(err => console.error(err));
}

obtenerTodosLosRegistros();


app.listen(3000, function() {
    console.log('Sistema armado en el puerto 3000!');
});