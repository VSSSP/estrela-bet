const connection = require('./connection');

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM Company');
  return rows;
};

const createCompany = async (CNPJ, name, email, phone, address) => {
  console.log(CNPJ, name, email, phone, address);
  const [rows] = await connection
    .execute('INSERT INTO Company (CNPJ, name, email, phone, address) VALUES (?, ?, ?, ?, ?)',
      [CNPJ, name, email, phone, address]);
  return rows;
};

const getAllWithEmployees = async () => {
  const query = `SELECT e.CPF, e.name, e.email, e.phone, e.address, c.name AS Company FROM Employees as e
    INNER JOIN Company AS c ON e.company_id = c.id`;
  const [rows] = await connection.execute(query);
  console.log(rows);
  return rows;
};

const getEmployeesFromCompany = async (companyId) => {
  const query = `SELECT e.CPF, e.name, e.email, e.phone, e.address, c.name AS Company FROM Company as c
    INNER JOIN Employees AS e ON e.company_id = c.id WHERE c.id = ?`;
  const [rows] = await connection.execute(query, [companyId]);
  console.log(rows);
  return rows;
};

module.exports = {
  getAll,
  createCompany,
  getAllWithEmployees,
};
