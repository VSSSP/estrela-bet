const CompanyService = require('../services/CompanyService');

const getAll = async (_req, res) => {
  const companies = await CompanyService.getAll();
  res.status(200).json(companies);
};

const createCompany = async (req, res) => {
  const { CNPJ, name, email, phone, address } = req.body;
  const newCompany = await CompanyService.createCompany(CNPJ, name, email, phone, address);
  res.status(200).json(newCompany);
};

const getCompanyById = async (req, res) => {
  const { id } = req.params;
  const company = await CompanyService.getCompanyById(id);
  res.status(200).json(company);
};

module.exports = {
  getAll,
  createCompany,
  getCompanyById,
}