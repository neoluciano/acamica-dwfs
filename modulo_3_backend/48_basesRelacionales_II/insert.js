const sequelize = require('./conexion.js');

function insertarFila() {

    let array_insert = ['NULL', 'Adrian', 'Ojeda', 'adrian@losmejoresdocentes.com', 0, '1983-03-11'];

    sequelize.query('INSERT INTO usuarios (id, nombre, apellido, email, casado, fecha_nacimiento) VALUES (?, ?, ?, ?, ?, ?)', { replacements: array_insert }).then(projects => {
            console.log(projects);
        })
        .catch(err => console.error(err))
}

insertarFila();