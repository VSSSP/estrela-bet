import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || 3001}`,
});

export const newCompany = async (company) => {
  const newCompany = await api.post('/company', company);
  return newCompany;
};

export const newEmployee = async (employee) => {
  const newEmployee = await api.post('/employee', employee);
  return newEmployee;
};
