import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '.';

function Provider({ children }) {
  const URL = 'http://localhost:3001/';
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const companies = async () => {
    const response = await fetch(`${URL}company`)
      .then((res) => res.json())
    setState(response);
    setLoading(false);
    }
    companies();
  }, []);

  return (
    <MyContext.Provider value={{ state, loading }}>
      {children}
    </MyContext.Provider>
  );
}
//
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
