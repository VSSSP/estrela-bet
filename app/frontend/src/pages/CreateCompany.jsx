import React, { useContext, useState } from 'react';
import { getAllCompanies, newCompany } from '../services/request';
import { regexCNPJ, regexEmail, regexPhone, regexName } from '../services/regex';
import MyContext from '../context-api';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styles/CreateCompOrEmp.css';

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
    <div className="insertNew">
      <TextField margin="dense" id="outlined-basic" label="CNPJ, ex: 00.050.000/0001-91" variant="outlined" type="text" name="CNPJ" onChange={ handleChange } />
      <TextField margin="dense" id="outlined-basic" label="Nome da Empresa" variant="outlined" type="text" name="name" onChange={ handleChange } />
      <TextField margin="dense" id="outlined-basic" label="E-mail" variant="outlined" type="text" name="email" onChange={ handleChange } />
      <TextField margin="dense" id="outlined-basic" label="Telefone, ex: (31)34556475" variant="outlined" placeholder="(DDD)40044000" type="text" name="phone" onChange={ handleChange } />
      <TextField margin="dense" id="outlined-basic" label="Endereço" variant="outlined" type="text" name="address" onChange={ handleChange } />
      <Button onClick={ handleClick } disabled={ enableButton() } variant="outlined">Criar nova empresa</Button>
    </div>
  )
}