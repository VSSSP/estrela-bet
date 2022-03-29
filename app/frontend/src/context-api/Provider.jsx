import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '.';
import { getAllCompanies, getAllEmployees } from '../services/request';

function Provider({ children }) {
  const [companies, setCompanies] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const companies = async () => {
      const response = await getAllCompanies();
      setCompanies(response);
      setLoading(false);
    }
    companies();
  }, []);

  useEffect(() => {
    setLoading(true);
    const employees = async () => {
      const response = await getAllEmployees();
      setEmployees(response);
      setLoading(false);
    }
    employees();
  }, []);

  return (
    <MyContext.Provider value={{ companies, employees, loading, setLoading, setEmployees, setCompanies }}>
      {children}
    </MyContext.Provider>
  );
}
//
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
