const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'doorstep-Nautical-bless1', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
