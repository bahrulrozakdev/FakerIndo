// Untuk Konfigurasi Database, silahkan sesuaikan ya 

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('faker', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false // Ini untuk Menghilangkan log query SQL dari console
});

module.exports = sequelize;
