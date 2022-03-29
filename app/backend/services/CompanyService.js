const CompanyModel = require('../models/CompanyModel');

const getAll = async () => {
  const companies = await CompanyModel.getAll();
  return companies;
};

const createCompany = async (CNPJ, name, email, phone, address) => {
  const newCompany = await CompanyModel.createCompany(CNPJ, name, email, phone, address);
  return newCompany;
};

module.exports = {
  getAll,
  createCompany,
};
