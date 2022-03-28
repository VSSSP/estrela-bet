import React, { useState } from 'react';
import { newCompany } from '../services/request';

export default function CreateCompany () {
  const [state, setState] = useState({});
  console.log(state);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = async (e) => {
    console.log(state);
    await newCompany(state);
  };

  const enableButton = () => {
    const regexCNPJ = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const regexPhone = /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm;
    const regexName = /^[a-zA-Z\s]+$/;
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