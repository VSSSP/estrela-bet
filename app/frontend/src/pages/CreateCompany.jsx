import React, { useContext, useState } from 'react';
import { getAllCompanies, newCompany } from '../services/request';
import { regexCNPJ, regexEmail, regexPhone, regexName } from '../services/regex';
import MyContext from '../context-api';

export default function CreateCompany (props) {
  const { setLoading, setCompanies } = useContext(MyContext);
  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = async () => {
    await newCompany(state);
    setLoading(true);
    const response = await getAllCompanies();
    setCompanies(response);
    setLoading(false);
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
      CNPJ: <input placeholder="00.050.000/0001-91" type="text" name="CNPJ" onChange={ handleChange } />
      Nome: <input placeholder="Banco Bradesco" type="text" name="name" onChange={ handleChange } />
      E-mail: <input placeholder="bradesco@bradesco.com.br" type="text" name="email" onChange={ handleChange } />
      Telefone: <input placeholder="4002 0022" type="text" name="phone" onChange={ handleChange } />
      Endereço: <input placeholder="Rua do bradesco" type="text" name="address" onChange={ handleChange } />
      <button disabled={ enableButton() }type="button" onClick={ handleClick }> Criar nova empresa </button>
    </div>
  )
}