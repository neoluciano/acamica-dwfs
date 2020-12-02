const Sequelize = require('sequelize');
const path = 'mysql://root@localhost:3306/test';
const sequelize = new Sequelize(path);

sequelize.authenticate().then(() => {
    console.log('Conectado...');
}).catch(err => {
    console.error('Error de conexion:', err);
}).finally(() => {
    sequelize.close();
});

module.exports = sequelize;