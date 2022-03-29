import React from 'react';

export default function Employees ({ employee }) {
  const employees = [
    `Nome: ${employee.name}`,
    `E-mail: ${employee.email}`,
    `Telefone: ${employee.phone}`,
    `Endereço: ${employee.address}`,
    `CPF: ${employee.CPF}`,
  ];

  return (
    <div className="employees">
      {/* dados do colaborador: */}
      { employees.map((emp) => <p key={ emp.id }>{ emp }</p> ) }
      <br/>
    </div>
  )
}