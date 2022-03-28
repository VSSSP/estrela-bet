import React from 'react';
import Employees from './Employees';

export default function Companies ({ company, employees }) {
  const employessByCompany = employees.filter((employee) => employee.company_id === company.id);
  console.log(employessByCompany);
  return (
    <div>
      <h1>{ company.name }</h1>
      {/* dados do colaborador: */}
      <h3>Colaboradores:</h3>
      { employessByCompany.map((employee) => <Employees key={ employee.id } employee={ employee } /> ) }
    </div>
  )
}