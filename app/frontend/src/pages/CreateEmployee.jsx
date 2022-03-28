import React, { useState } from 'react';
import { newEmployee } from '../services/request';
import { regexCPF, regexCel, regexEmail, regexName } from '../services/regex';

export default function CreateEmployee (props) {
  const [state, setState] = useState({
    company_id: props.match.params.id,
  });
  const [done, setDone] = useState(false);

  if (done) props.history.push("/");

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = async () => {
    await newEmployee(state);
    setDone(true);
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