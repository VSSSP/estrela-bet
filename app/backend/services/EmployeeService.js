const EmployeesModel = require('../models/EmployeesModel');

const getAll = async () => {
  const employees = await EmployeesModel.getAll();
  return employees;
};

const createEmployee = async (CPF, name, email, phone, address, company_id) => {
  const newEmployee = await EmployeesModel.createEmployee(CPF, name, email, phone, address, company_id);
  return newEmployee;
};

module.exports = {
  getAll,
  createEmployee,
};
