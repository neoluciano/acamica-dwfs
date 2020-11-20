const express = require('express');
const dotenv = require('dotenv').config();
const server = express();

server.use(express.json());

let arrayTelefonos = [];

server.get('/telefonos', (req, res) => {
    arregloRespuesta = arrayTelefonos;
    console.log(req.query.precio)
    if (req.query.precio) {
        arregloRespuesta = arrayTelefonos.filter(element => element.precio < req.query.precio);
    }
    res.status(200).send(arregloRespuesta);
})

server.post('/telefonos', (req, res) => {
    req.body.id = arrayTelefonos.length + 1;
    arrayTelefonos.push(req.body);
    res.status(200).send(req.body);
})

server.listen(process.env.SERVER_PORT, () => {
    console.log(`Servidor en ejecucion en el puerto ${process.env.SERVER_PORT}`);
})