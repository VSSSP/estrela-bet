const dotenv = require('dotenv');
const mysql = require('mysql2/promise');

dotenv.config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'ESTRELA_BET',
  port: process.env.MYSQL_PORT || 3306,
});

module.exports = connection; 