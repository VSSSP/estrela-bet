import connection from './connection';

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM company');
  return rows;
}

const createCompany = async (CNPJ, name, email, phone, address) => {
  const [rows] = await connection
    .execute('INSERT INTO company (CNPJ, name, email, phone, address) VALUES (?, ?, ?, ?, ?)',
      [CNPJ, name, email, phone, address]);
  return rows;
}

export default {
  getAll,
  createCompany,
};
