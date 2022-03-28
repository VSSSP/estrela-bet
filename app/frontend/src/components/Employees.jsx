import React from 'react';

export default function Employees ({ employee }) {
  console.log(employee);
  return (
    <div>
      {/* dados do colaborador: */}

      <p>{ employee.name }</p>
      <p>{ employee.email }</p>
      <p>{ employee.phone }</p>
      <p>{ employee.address }</p>
      <p>{ employee.CPF }</p>
      ------------------------
    </div>
  )
}