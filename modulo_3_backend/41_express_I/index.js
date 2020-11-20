const express = require("express");
//const bodyParser = require('body-parser');
const app = express();

//Middlewares (Siguiente clase)
/*
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
*/
app.use(express.json());

//Inicializamos el Server en el puerto 3000

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

//Inicializamos un Objeto Pais 
let pais = {
    nombre: '',
    habitantes: ''
};

//Inicializamos un Objeto respuesta
let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
};

//Creamos un metodo Get raiz como punto de inicio
app.get('/respuesta', function(req, res) {
    //Creamos la respuesta
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'Punto de inicio'
    };
    res.status(200).send(respuesta);
});

//Creamos otro metodo Get para ver el pais
app.get('/pais', function(req, res) {
    let status = 200;
    //Inicializamos la respuesta
    respuesta = {
        error: false,
        codigo: status,
        mensaje: 'Todo Ok'
    };

    if (pais.nombre === '' || pais.habitantes === '') {
        status = 404;
        //Si el pais NO existe modificamos la respuesta
        respuesta = {
            error: true,
            codigo: status,
            mensaje: 'El pais no ha sido creado'
        };
    } else {
        //Si el pais SI existe generamos la respuesta
        respuesta = {
            error: false,
            codigo: status,
            mensaje: 'Respuesta del pais',
            respuesta: pais
        };
    }
    // Imprimimos respuesta
    res.status(status).send(respuesta);
});

//Creamos el metodo Post para crear el pais
app.post('/pais', (req, res) => {
    let status = 200;
    console.log(req.body.nombre);
    if (!req.body.nombre || !req.body.habitantes) {
        status = 400;
        respuesta = {
            error: true,
            codigo: status,
            mensaje: 'El campo nombre y habitantes son requeridos'
        };
    } else {
        if (pais.nombre === req.body.nombre) {
            status = 503;
            respuesta = {
                error: true,
                codigo: status,
                mensaje: 'El pais ya fue creado'
            };
        } else {

            //Si el pais NO existe, lo creamos y generamos la respuesta
            pais = {
                nombre: req.body.nombre,
                habitantes: req.body.habitantes,
                codigoDeMarcado: req.body.codigoDeMarcado
            };
            respuesta = {
                error: false,
                codigo: status,
                mensaje: 'Pais creado',
                respuesta: pais
            };
        }
    }
    //Imrpimimos respuesta
    res.status(status).send(respuesta);
});

//Creamos el metodo Put para Actualizar el pais
app.put('/pais', function(req, res) {
    let status = 200;
    if (!req.body.nombre || !req.body.habitantes) {
        status = 400;
        respuesta = {
            error: true,
            codigo: status,
            mensaje: 'El campo nombre y habitantes son requeridos'
        };
    } else {
        //Si NO tenemos un pais creado para modificar
        if (pais.nombre === '' || pais.habitantes === '') {
            status = 404;
            respuesta = {
                error: true,
                codigo: status,
                mensaje: 'El pais no ha sido creado'
            };
        } else {

            //Si el pais SI existe, lo actualizamos y generamos la respuesta
            pais = {
                nombre: req.body.nombre,
                habitantes: req.body.habitantes,
                codigoDeMarcado: req.body.codigoDeMarcado
            };
            respuesta = {
                error: false,
                codigo: status,
                mensaje: 'pais actualizado',
                respuesta: pais
            };
        }
    }
    //Imrpimimos respuesta
    res.status(status).send(respuesta);
});

//Creamos el metodo Delete para eliminar el pais

app.delete('/pais', function(req, res) {
    let status = 200;
    //si no existe el Pais 
    if (pais.nombre !== req.body.nombre) {
        status = 404;
        respuesta = {
            error: true,
            codigo: status,
            mensaje: 'El pais no existe para ser eliminado'
        };
    } else {
        //Si hay un pais creado, lo eliminamos
        respuesta = {
            error: false,
            codigo: status,
            mensaje: 'País eliminado'
        };
        pais = {
            nombre: '',
            habitantes: '',
            codigoDeMarcado: ''
        };
    }
    //Imrpimimos respuesta
    res.status(status).send(respuesta);
});

//Generamos la respuesta para url no encontradas
app.use(function(req, res, next) {
    console.log("Pasó por aquí");
    respuesta = {
        error: true,
        codigo: 404,
        mensaje: 'URL no encontrada'
    };
    //Imprimimos respuesta
    res.status(404).send(respuesta);
});