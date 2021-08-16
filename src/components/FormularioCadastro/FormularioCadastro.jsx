import { Button, TextField, FormControlLabel, Switch } from '@material-ui/core';
import React, { useState } from 'react';

export default function FormularioCadastro({onSubmit, ...props}) {

    console.log(onSubmit);
    
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const [promocao, setPromocao] = useState(true);
    const [novidade, setNovidade] = useState(true);
    const [erros, setErros] = useState({
      cpf: {
        valid: true,
        helperText: null
      }
    });

    const onChangeNome = (ev) => {
        setNome(ev.target.value)
    }

    const onChangeSobrenome = (ev) => {
        setSobrenome(ev.target.value)
    }

    const onChangeCPF = (ev) => {
        setCPF(ev.target.value)
    }

    const onBlurCPF = (ev) => {
      let value = ev.target.value;
      
      if(value.length < 11){
        setErros({cpf: {
          valid: false,
          helperText: 'Cpf está inválido'
        }});
        return false;
      } 

      setErros({cpf: { valid: true, helperText: null}});
      
    }

    const onChangePromocoes = (ev) => {
        setPromocao(ev.target.checked);
    }

    const onChangeNovidades = (ev) => {
        setNovidade(ev.target.checked);
    }

    const onFormSubmit = (ev) => {
        ev.preventDefault();

        onSubmit({nome, sobrenome, cpf, promocao, novidade});
    }

    return (
        <form onSubmit={onFormSubmit}>
            <TextField margin="normal" value={nome} id="noneId" label="Nome" variant="outlined" onChange={onChangeNome} fullWidth />
            <TextField margin="normal" value={sobrenome} id="sobrenome" label="Sobrenome" variant="outlined" onChange={onChangeSobrenome} fullWidth />
            <TextField 
              margin="normal"
              value={cpf}
              id="cpfId"
              label="CPF"
              variant="outlined"
              onChange={onChangeCPF}
              onBlur={onBlurCPF}
              error={!erros.cpf.valid} helperText={erros.cpf.helperText}
              fullWidth />
            <FormControlLabel label="Promoções" control={
                <Switch id="promocoesID" checked={promocao} label="Promoções" onChange={onChangePromocoes} value={promocao} />
            } />
            <FormControlLabel label="Novidades" control={
                <Switch id="novidadeID" checked={novidade} label="Novidades" onChange={onChangeNovidades} value={novidade} />
            } />
            <Button type="submit" variant="contained" color="primary">
                Cadastrar
            </Button>
        </form>
    );
}