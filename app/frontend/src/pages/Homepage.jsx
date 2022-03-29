import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Companies from '../components/Companies';
import MyContext from '../context-api';

export default function Homepage() {
  const { employees, companies, loading } = useContext(MyContext);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Empresas</h1>
      { companies.map((company) => { 
        return (
      <Link to={`/companies/${company.id}`}>
        <Companies company={ company } employees={ employees } /> 
      </Link>
        )
      }) }

      <Link to="/create-company">
        <button type="button"> Criar nova empresa </button>
      </Link>
    </div>
  );
}
