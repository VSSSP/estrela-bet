import React, { useContext } from 'react';
import Companies from '../components/Companies';
// import Companies from '../components/Companies';
import MyContext from '../context-api';

export default function Homepage() {
  const { employees, companies, loading } = useContext(MyContext);
  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>Companies</h1>
      { companies.map((company) => <Companies company={ company } employees={ employees } /> ) }
      {/* { state.map((data) => <Companies key={ data.id } company={ data } />) } */}
    </div>
  );
}
