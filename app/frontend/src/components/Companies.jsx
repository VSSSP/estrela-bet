import React from 'react';

export default function Companies ({ company: companyAndEmployeesInfo }) {
  console.log(companyAndEmployeesInfo);
  return (
    <div>
      <h1>{ companyAndEmployeesInfo.Company }</h1>
      {/* dados do colaborador: */}
      <p>{ companyAndEmployeesInfo.name }</p>
      <p>{ companyAndEmployeesInfo.email }</p>
      <p>{ companyAndEmployeesInfo.phone }</p>
      <p>{ companyAndEmployeesInfo.address }</p>
      <p>{ companyAndEmployeesInfo.CPF }</p>
    </div>
  )
}