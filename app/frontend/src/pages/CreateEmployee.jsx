import React, { useContext, useState } from 'react';
import { getAllEmployees, newEmployee } from '../services/request';
import { regexCPF, regexPhone, regexEmail, regexName } from '../services/regex';
import '../styles/CreateCompOrEmp.css';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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
    if (!regexPhone.test(state.phone)) return true;
    if (!state.address) return true;
    return false
  };

  return (
    <div className="insertNew">
      <div className="createCard">
        <h2>Criar novo colaborador</h2>
        <TextField margin="dense" id="outlined-basic" label="CPF, ex: 074.658.952-27" variant="outlined" type="text" name="CPF" onChange={ handleChange } />
        <TextField margin="dense" id="outlined-basic" label="Nome" variant="outlined" type="text" name="name" onChange={ handleChange } />
        <TextField margin="dense" id="outlined-basic" label="E-mail" variant="outlined" type="text" name="email" onChange={ handleChange } />
        <TextField margin="dense" id="outlined-basic" label="Telefone, ex: 31 998477366" variant="outlined" type="text" name="phone" onChange={ handleChange } />
        <TextField margin="dense" id="outlined-basic" label="Endereço" variant="outlined" type="text" name="address" onChange={ handleChange } />
        <Button onClick={ handleClick } disabled={ enableButton() } variant="outlined" endIcon={<SendIcon />}>Adicionar</Button>
      </div>
    </div>
  )
}