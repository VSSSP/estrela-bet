import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '.';

function Provider({ children }) {
  const URL = 'http://localhost:3001/';
  // const [state, setState] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const companies = async () => {
    const response = await fetch(`${URL}company`)
      .then((res) => res.json())
    setCompanies(response);
    setLoading(false);
    }
    companies();
  }, []);

  useEffect(() => {
    setLoading(true);
    const employees = async () => {
    const response = await fetch(`${URL}employee`)
      .then((res) => res.json())
    setEmployees(response);
    setLoading(false);
    }
    employees();
  }, []);

  return (
    <MyContext.Provider value={{ companies, employees, loading, setLoading, setEmployees }}>
      {children}
    </MyContext.Provider>
  );
}
//
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
