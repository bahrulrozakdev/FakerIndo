// utility untuk data palsu, bebas aja dah 

const firstName = ["Ahmad", "Bahrul", "Citra", "Dewi", "Eko", "Farah", "Gilang", "Hani", "Iwan", "Joko"];
const lastName = ["Santoso", "Rozak", "Sutanto", "Wijaya", "Saputra", "Maulana", "Siregar", "Putri", "Kurniawan", "Gunawan"];
const domainEmail = ["gmail.com", "yahoo.com", "outlook.com", "mail.com"];
const street = ["Jl. Merdeka", "Jl. Sudirman", "Jl. Diponegoro", "Jl. Pahlawan", "Jl. Kartini", "Jl. Mangga", "Jl. Melati", "Jl. Anggrek"];
const city = ["Jakarta", "Bandung", "Surabaya", "Yogyakarta", "Medan", "Palembang", "Makassar", "Bali"];
const jobs = ["Programmer", "Software Engineer", "Guru", "Dokter", "Pengacara", "Marketing", "Manajer", "Pengusaha"];
const company = ["Google", "Codepolitan", "Tokopedia", "Bukalapak", "Shopee", "Gojek", "Grab", "Telkom", "Pertamina", "Bank Mandiri"];

function generateName() {
  const first = firstName[Math.floor(Math.random() * firstName.length)];
  const last = lastName[Math.floor(Math.random() * lastName.length)];
  return `${first} ${last}`;
}

function generateEmail(nama) {
  const emailName = nama.toLowerCase().replace(/ /g, '.');
  const domain = domainEmail[Math.floor(Math.random() * domainEmail.length)];
  return `${emailName}@${domain}`;
}

function generatePhoneNumber() {
  const prefix = "+62";
  const phoneNumber = Math.floor(Math.random() * 900000000) + 100000000;
  return `${prefix} ${phoneNumber}`;
}

function generateAddress() {
  const houseNumber = Math.floor(Math.random() * 100) + 1;
  const kodePos = Math.floor(Math.random() * 90000) + 10000;
  return `${street[Math.floor(Math.random() * street.length)]} No. ${houseNumber}, ${city[Math.floor(Math.random() * city.length)]}, ${kodePos}`;
}

function generateBirthDay() {
  const year = Math.floor(Math.random() * (2003 - 1970 + 1)) + 1970;
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1;
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function generateJobs() {
  return jobs[Math.floor(Math.random() * jobs.length)];
}

function generateCompanies() {
  return company[Math.floor(Math.random() * company.length)];
}

module.exports = {
  generateName,
  generateEmail,
  generatePhoneNumber,
  generateAddress,
  generateBirthDay,
  generateJobs,
  generateCompanies
};
