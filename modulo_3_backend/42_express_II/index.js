const express = require('express');
const compression = require('compression');
const server = express();

let contactos = [];

server.use(express.json());
server.use(compression());

function log(req, res, next) {

    const { method, path, query, body } = req;
    console.log(`${method} - ${path} - ${JSON.stringify(query)} - ${JSON.stringify(body)}`);
    next();
}

server.use(log);

function validarContacto(req, res, next) {
    const { nombre, apellido, email } = req.body;

    if (!nombre || !apellido || !email) {
        return res.status(400)
            .send({ status: 'Error', mensaje: 'Dato(s) del contacto invalido(s)!!!' });
    }

    return next();
}

function validarSiExiste(req, res, next) {
    const { email } = req.body;
    const i = contactos.findIndex(c => c.email == email);

    if (i >= 0) {
        return res.status(409)
            .json({ status: 'Error', mensaje: 'El contacto ya existe!!!' });
    }

    return next();
}

function validarVersion(req, res, next) {
    const { version } = req.query;
    const versionNumeric = Number(version);

    if (!version || !versionNumeric || versionNumeric < 5) {
        return res.status(422).json({ status: 'Error', mensaje: 'Versión invalida!!!' });
    }

    return next();
}

server.post('/contacto', validarContacto, validarSiExiste, (req, res) => {
    contactos.push(req.body);
    res.status(201).json({ status: "OK", mensaje: "Contacto agregado", contacto: req.body });
});

server.get('/demo', validarVersion, (req, res) => {
    res.json({ status: 'OK', mensaje: "Hola mundo!!!" });
});

server.use((err, req, res, next) => {
    if (!err) {
        return next();
    }

    console.log(JSON.stringify(err));

    return res.status(500)
        .json("Se ha producido un error inesperado.");
});

server.listen(3000, () => {
    console.log('Servidor iniciado...');
});