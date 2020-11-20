//npm install express
const express = require('express');
//npm install jsonwebtoken
const jwt = require('jsonwebtoken');
//npm install express-jwt
const expressJwt = require('express-jwt');

const cors = require('cors');

const app = express();

//creamos una clave para la encriptacion del token
const jwtClave = "Ac4m1c4_E$tUd14nT3s!";

app.use(express.json());
app.use(cors());


//Protegemos todo menos el /login
app.use(expressJwt({ secret: jwtClave }).unless({ path: ["/login"] }));

//Sin express-jwt, hay que escribir middleware que compruebe la existencia del token

retornarUsuarioNoAutorizado = (response) => {
    response.status(401).send({ error: "Usuario no autorizado" });
}

verificarToken = (req, res, next) => {
    let token = req.headers.authorization;
    console.log(token);
    if (token) {
        token = token.split(" ")[1];
        let decodificado = jwt.verify(token, jwtClave);
        console.log(decodificado);
        if (!decodificado) {
            retornarUsuarioNoAutorizado(res);
        }
        next();
    } else {
        retornarUsuarioNoAutorizado(res);
    }
}

//creamos un usaurio y una contraseña 
var usuario = {
    nombre: "usuario",
    clave: "password"
}

// Creamos una noticia  como si viniera de una base para mostrarlo en el metodo protegido
var noticias = [{
        id: 1,
        titulo: "noticia 1"
    },
    {
        id: 2,
        titulo: "noticia 2"
    }
];

//Metodo protegido con to jwt
app.get('/noticias', function(req, res) {
    res.status(200).send(noticias);
});

//Creamos el endpoint para el login 
app.post("/login", function(request, response) {
    console.log(request.body.clave);
    if (request.body.nombre == usuario.nombre || request.body.clave == usuario.clave) {
        //Creamos el token para pasar
        let token = jwt.sign({ usuario: usuario.nombre }, jwtClave);
        //envio Token
        response.status(200).send({ token: token });

    } else {
        response.status(401).send({ error: "usuario o contraseña incorrectos" })
    }

});

app.listen(3000, function() {
    console.log('Aplicacion en ejecución en el puerto 3000!');
});

app.use((err, req, res, next) => {
    if (err) {
        res.status(500).send(err);
    } else {
        next();
    }
})