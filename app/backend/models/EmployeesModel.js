const connection = require('./connection');

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM Employees');
  return rows;
};

const createEmployee = async (CPF, name, email, phone, address, company_id) => {
  const [rows] = await connection
    .execute('INSERT INTO Employees (CPF, name, email, phone, address, company_id) VALUES (?, ?, ?, ?, ?, ?)',
      [CPF, name, email, phone, address, company_id]);
  return rows;
};

module.exports = {
  getAll,
  createEmployee,
};
