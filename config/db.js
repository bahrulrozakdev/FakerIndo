// Untuk Konfigurasi Database, silahkan sesuaikan ya 

const { Sequelize } = require('sequelize');

/*
Silahkan ubah configurasi berikut ini
database_name = samakan dengan nama database kamu
username = samakan dengan username kamu
password = jika ada password silahkan samakan, jika tidak biarkan saja kosong
*/
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false // Ini untuk Menghilangkan log query SQL dari console
});

module.exports = sequelize;
