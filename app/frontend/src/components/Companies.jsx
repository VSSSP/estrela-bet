import React from 'react';
import Employees from './Employees';
import { Link } from 'react-router-dom';

export default function Companies ({ company, employees }) {
  const employeesByCompany = employees.filter((employee) => employee.company_id === company.id);

  return (
    <div>
      <Link to={`/company/${company.id}`}>
        <h1>{ company.name }</h1>
      </Link>
      {/* dados do colaborador: */}
      <h3>Colaboradores:</h3>
      { employeesByCompany.length === 0 ? <p> Nenhum colaborador cadastrado</p> : null }
      { employeesByCompany.map((employee) => <Employees key={ employee.id } employee={ employee } /> ) }
      
      <Link to={`/create-employee/${company.id}` }>
        <button type="button"> Inserir novo colaborador </button>
      </Link>
    </div>
  )
}