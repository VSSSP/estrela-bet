import axios from 'axios';

const url = 'http://localhost:3001/';

const api = axios.create({
  baseURL: url,
});

export const newCompany = async (company) => {
  const newCompany = await api.post('/company', company);
  return newCompany;
};

export const newEmployee = async (employee) => {
  const newEmployee = await api.post('/employee', employee);
  return newEmployee;
};

export const getAllCompanies = async () => {
  const companies = await fetch(`${url}company`).then((res) => res.json());
  return companies;
};

export const getAllEmployees = async () => {
  const employees = await fetch(`${url}employee`).then((res) => res.json());
  return employees;
};

export const getCompanyById = async (id) => {
  const company = await fetch(`${url}company/${id}`).then((res) => res.json());
  return company;
};

