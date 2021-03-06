import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCompanyById } from '../services/request';
import '../styles/CreateCompOrEmp.css';

export default function Company({ match }) {
  const [company, setCompany] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const company = async () => {
      const response = await getCompanyById(match.params.id);
      setCompany(...response);
      setLoading(false);
    }
    company();
  }, [match.params.id]);
  
  if (loading) return <h1>Loading...</h1>;

  const companyInfo = [
    `CNPJ: ${company.CNPJ}`,
    `E-mail: ${company.email}`,
    `Telefone: ${company.phone}`,
    `Endereço: ${company.address}`,
  ];

  return (
    <div className="insertNew">
      <div className="createCard">
        <h1>{ company.name }</h1>
        { companyInfo.map((info) => <p className="infoEmp"> { info } </p>) }
        <Link to={`/create-employee/${company.id}` }>
          <button type="button"> Inserir novo colaborador </button>
        </Link>
        <br/>
        <Link to="/">
          <button type="button"> Voltar </button>
        </Link>
      </div>
    </div>
  );
}