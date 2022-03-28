import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Companies from '../components/Companies';
// import CreateCompany from '../components/CreateCompany';
// import Companies from '../components/Companies';
import MyContext from '../context-api';

export default function Homepage() {
  const { employees, companies, loading } = useContext(MyContext);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Companies</h1>
      { companies.map((company) => <Companies company={ company } employees={ employees } /> ) }
      <Link to="/create-company">
        <button type="button"> Criar nova empresa </button>
      </Link>
    </div>
  );
}
