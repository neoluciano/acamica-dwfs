const express = require('express');
const server = express();
const rateLimit = require('express-rate-limit');

server.use(express.json({ limit: '100kb' }));

const limit = rateLimit({
    windowMs: 1000 * 60 * 60,
    max: 5,
    message: { error: 'No seas tan insistente' }
})

let posicionesEliminatoria = [{
        pais: 'Brasil',
        posicion: '1'
    },
    {
        pais: 'Argentina',
        posicion: '2'
    },
    {
        pais: 'Colombia',
        posicion: '7'
    }
]

server.get("/posiciones", limit, function(req, res) {
    res.status(200).send(posicionesEliminatoria);
})

server.post('/posiciones', limit, (req, res) => {
    posicionesEliminatoria.push(req.body);
    res.status(201).send(req.body);
})

server.listen(3000, () => {
    console.log("Servidor en ejecucion...");
})

// Por cierto, para el error que teniamos de que el body llegaba vacío, 
//solo debíamos en los headers especificar el "content-type" como "application/json" 
//para que el parser de NodeJS lo resolviera