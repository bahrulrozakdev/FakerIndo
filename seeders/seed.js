// untuk seeding database

const { logInfo, logError } = require('../utils/logger');
const { createUser } = require('../services/userService');
const { generateName, generateEmail, generatePhoneNumber, generateAddress, generateBirthDay, generateJobs, generateCompanies } = require('../utils/faker');
const sequelize = require('../config/db');

async function seedDatabase() {
  try {
    await sequelize.sync({ force: true });
    logInfo('Database synchronized successfully.');

    for (let i = 0; i < 50; i++) {
      const name = generateName();
      const userData = {
        name: name,
        email: generateEmail(name),
        phone: generatePhoneNumber(),
        address: generateAddress(),
        birthday: generateBirthDay(),
        jobs: generateJobs(),
        companies: generateCompanies()
      };
      
      logInfo(`Creating user: ${JSON.stringify(userData)}`);
      await createUser(userData);
    }

    logInfo("Data berhasil di-seed ke database!");
  } catch (error) {
    logError("Gagal melakukan seed: " + error.message);
  } finally {
    await sequelize.close();
    logInfo('Database connection closed.');
  }
}

seedDatabase()
