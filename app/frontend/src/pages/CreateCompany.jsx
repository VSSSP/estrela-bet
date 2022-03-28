import React, { useState } from 'react';
import { newCompany } from '../services/request';
import { regexCNPJ, regexEmail, regexPhone, regexName } from '../services/regex';

export default function CreateCompany (props) {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = async () => {
    await newCompany(state);
    props.history.push('/');
  };

  const enableButton = () => {
    if (!regexCNPJ.test(state.CNPJ) || !state.CNPJ) return true;
    if (!state.name || state.name.lenght < 3 || !regexName.test(state.name)) return true;
    if (!regexEmail.test(state.email)) return true;
    if (!regexPhone.test(state.phone)) return true;
    if (!state.address) return true;
    return false
  };

  return (
    <div>
      <input placeholder="00.050.000/0001-91" type="text" name="CNPJ" onChange={ handleChange } />
      <input placeholder="Banco Bradesco" type="text" name="name" onChange={ handleChange } />
      <input placeholder="bradesco@bradesco.com.br" type="text" name="email" onChange={ handleChange } />
      <input placeholder="4002 0022" type="text" name="phone" onChange={ handleChange } />
      <input placeholder="Rua do bradesco" type="text" name="address" onChange={ handleChange } />
      <button disabled={ enableButton() }type="button" onClick={ handleClick }> Criar nova empresa </button>
    </div>
  )
}