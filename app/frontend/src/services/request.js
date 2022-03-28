import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const url = `http://localhost:${process.env.REACT_APP_API_PORT || 3001}`;

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
