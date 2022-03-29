const CompanyModel = require('../models/CompanyModel');

const getAll = async () => {
  const companies = await CompanyModel.getAll();
  return companies;
};

const createCompany = async (CNPJ, name, email, phone, address) => {
  const newCompany = await CompanyModel.createCompany(CNPJ, name, email, phone, address);
  return newCompany;
};

const getCompanyById = async (id) => {
  const company = await CompanyModel.getCompanyById(id);
  return company;
};

module.exports = {
  getAll,
  createCompany,
  getCompanyById,
};
