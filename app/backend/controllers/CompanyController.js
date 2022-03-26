import CompanyService from '../services/CompanyService';

const getAll = async (_req, res) => {
  const companies = await CompanyService.getAll();
  res.status(200).json(companies);
};

const createCompany = async (req, res) => {
  const { CNPJ, name, email, phone, address } = req.body;
  const newCompany = await CompanyService.createCompany(CNPJ, name, email, phone, address);
  res.status(200).json(newCompany);
};

export default {
  getAll,
  createCompany,
};
