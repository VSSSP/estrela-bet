import EmployeeService from '../services/EmployeeService';

const getAll = async (_req, res) => {
  const employees = await EmployeeService.getAll();
  res.status(200).json(employees);
};

const createEmployee = async (req, res) => {
  const { CPF, name, email, phone, address, company_id } = req.body;
  const newEmployee = await EmployeeService.createEmployee(CPF, name, email, phone, address, company_id);
  res.status(200).json(newEmployee);
};

export default {
  getAll,
  createEmployee,
};
