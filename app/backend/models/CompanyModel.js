const connection = require('./connection');

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM Company');
  return rows;
};

const createCompany = async (CNPJ, name, email, phone, address) => {
  const [rows] = await connection
    .execute('INSERT INTO Company (CNPJ, name, email, phone, address) VALUES (?, ?, ?, ?, ?)',
      [CNPJ, name, email, phone, address]);
  return rows;
};

const getCompanyById = async (id) => {
  const [rows] = await connection.execute('SELECT * FROM Company WHERE id = ?', [id]);
  return rows;
};

module.exports = {
  getAll,
  createCompany,
  getCompanyById,
};
