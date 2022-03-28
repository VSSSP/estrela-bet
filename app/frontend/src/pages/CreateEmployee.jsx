import React, { useContext, useState } from 'react';
import { getAllEmployees, newEmployee } from '../services/request';
import { regexCPF, regexCel, regexEmail, regexName } from '../services/regex';
import MyContext from '../context-api';

export default function CreateEmployee (props) {
  const { setLoading, setEmployees } = useContext(MyContext);
  const [state, setState] = useState({
    company_id: props.match.params.id,
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = async () => {
    await newEmployee(state);
    setLoading(true);
    const response = await getAllEmployees();
    setEmployees(response);
    setLoading(false);
    props.history.push("/");
  };

  const enableButton = () => {
    if (!regexCPF.test(state.CPF)) return true;
    if (!state.name || state.name.lenght < 3 || !regexName.test(state.name)) return true;
    if (!regexEmail.test(state.email)) return true;
    if (!regexCel.test(state.phone)) return true;
    if (!state.address) return true;
    return false
  };

  return (
    <div>
      <input placeholder="074.658.952-27" type="text" name="CPF" onChange={ handleChange } />
      <input placeholder="Victor de Paula" type="text" name="name" onChange={ handleChange } />
      <input placeholder="victor@live.com" type="text" name="email" onChange={ handleChange } />
      <input placeholder="(31) 983516666" type="text" name="phone" onChange={ handleChange } />
      <input placeholder="Rua do Victor, 123" type="text" name="address" onChange={ handleChange } />
      <button disabled={ enableButton() }type="button" onClick={ handleClick }> Inserir novo colaborador </button>
    </div>
  )
}