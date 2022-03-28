import React, { useContext } from 'react';
import Companies from '../components/Companies';
import MyContext from '../context-api';

export default function Homepage() {
  const { state, loading } = useContext(MyContext);
  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>Companies</h1>
      { state.map((data) => <Companies key={ data.id } company={ data } />) }
    </div>
  );
}
