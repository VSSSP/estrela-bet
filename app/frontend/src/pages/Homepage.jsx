import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Companies from '../components/Companies';
import MyContext from '../context-api';
import '../styles/Homepage.css';

export default function Homepage() {
  const { employees, companies, loading } = useContext(MyContext);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="homepage">
      <h1>Empresas</h1>
      <Link to="/create-company">
        <button type="button"> Criar nova empresa </button>
      </Link>
      <div className="empresas">
        { companies.map((company) => <Companies company={ company } employees={ employees } /> ) }
      </div>
    </div>
  );
}
