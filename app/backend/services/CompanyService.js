import CompanyModel from '../models/CompanyModel';

const getAll = async () => {
  const companies = await CompanyModel.getAll();
  return companies;
};

const createCompany = async (CNPJ, name, email, phone, address) => {
  const newCompany = await CompanyModel.createCompany(CNPJ, name, email, phone, address);
  return newCompany;
};

export default {
  getAll,
  createCompany,
};
