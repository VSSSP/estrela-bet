// const dotenv = require('dotenv');
const mysql = require('mysql2/promise');

// dotenv.config();

const connection = mysql.createPool({
  host: 3308,
  user: 'root',
  password: 123456,
  database: 'ESTRELA_BET',
});

module.exports = connection;