const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
//npm install --save helmet
const helmet = require('helmet');
//npm install --save express-rate-limit
const rateLimit = require("express-rate-limit");

app.use(helmet());

app.use(cors());

/*Creo un nuevo middleware,para desactivar la cabecera con el método app.disable() 
para que los atacantes no puedan utilizar esta cabecera 
(que está habilitada de forma predeterminada) */

app.disable('x-powered-by');

/*
Este otro middleware que inyectaría el parser de JSON con un límite de tamaño de 100kb
*/
app.use(express.json({ limit: '100kb' }));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100 // limita cada IP a 100 solicitudes por ventanas
});


//Aplicamos el middleware para las restricciones
//app.use(limiter);


app.listen(port, () => {
    console.log(`Server listeting on port ${port}`)
});

//Limito los requests a 150 por hora por algun ataque de fuerza bruta
/*
limiter({
    path: '/api/action',
    method: 'get',
    lookup: ['connection.remoteAddress'],
    total: 150,
    expire: 1000 * 60 * 60
})
*/

app.get('/api/action', function(req, res) {
    res.status(200).send({ message: 'Ok' });
})

let contactos = [{
    email: 'alejandroarevalov@gmail.com',
    pass: '123456'
}];

app.post('/contactos', limiter, (req, res) => {
    console.log(req.body);
    contactos.push(req.body);
    res.status(201).send(req.body);
})

//Para visualizar el error del body-length

app.use((err, req, res, next) => {
    if (err) {
        res.status(500).send(err);
    }
    next();
})