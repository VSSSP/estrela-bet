import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { newEmployee } from '../services/request';

export default function CreateEmployee (props) {
  const [state, setState] = useState({
    company_id: props.match.params.id,
  });

  console.log(state);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = async () => {
    await newEmployee(state);
    props.history.push("/");
  };

  const enableButton = () => {
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPhone = /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm;
    const regexName = /^[a-zA-Z\s]+$/;
    if (!regexCPF.test(state.CPF) || !state.CPF) return true;
    if (!state.name || state.name.lenght < 3 || !regexName.test(state.name)) return true;
    if (!regexEmail.test(state.email)) return true;
    if (!regexPhone.test(state.phone)) return true;
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