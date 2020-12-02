const sequelize = require('./nuevaConexion');

function consultarTodosLosDatos() {
    sequelize.query('SELECT * FROM usuarios', { type: sequelize.QueryTypes.SELECT })
        .then(res => console.log(res))
        .catch(err => console.error(err));
}

//consultarTodosLosDatos();

function consultarConFiltro() {
    sequelize.query('SELECT * FROM usuarios WHERE id IN (:valores)', { replacements: { valores: [1, 4, 6, 8] }, type: sequelize.QueryTypes.SELECT })
        .then(res => console.log(res))
        .catch(err => console.error(err));
}

consultarConFiltro();