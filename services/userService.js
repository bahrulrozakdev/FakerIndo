const User = require('../models/User');

async function createUser(data) {
  try {
    const user = await User.create(data);
    return user;
  } catch (error) {
    throw new Error('Gagal membuat user: ' + error.message);
  }
}

async function getAllUsers() {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error('Gagal mengambil data users: ' + error.message);
  }
}

module.exports = {
  createUser,
  getAllUsers
};
