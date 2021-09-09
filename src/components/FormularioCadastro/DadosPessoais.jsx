import { Button, TextField, FormControlLabel, Switch } from '@material-ui/core';
import { NavigateNext } from '@material-ui/icons';
import React, { useContext, useState } from 'react';
import FormValidationsContext from '../../contexts/FormValidationsContext';

function DadosPessoais({onSubmit, ...props}) {
    const validations = useContext(FormValidationsContext);
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

    const validateForm = (ev) => {
        const {name, value} = ev.target;
        const validation = {...erros}
        validation[name] = validations[name](value);
        setErros(validation);
    }

    const onChangePromocoes = (ev) => {
        setPromocao(ev.target.checked);
    }

    const onChangeNovidades = (ev) => {
        setNovidade(ev.target.checked);
    }

    const chkFormErrors = () => {
        let ret = true;
        for (const key in erros) {
            if (Object.hasOwnProperty.call(erros, key)) {
                if ( !erros[key].valid ){
                    return false;
                }
            }
        }
        return ret;
    }

    const onFormSubmit = (ev) => {
        ev.preventDefault();
        if (chkFormErrors()){
            onSubmit({nome, sobrenome, cpf, promocao, novidade});
        }
    }

    return (
        <form onSubmit={onFormSubmit}>
            <TextField required margin="normal" value={nome} id="noneId" label="Nome" variant="outlined" onChange={onChangeNome} fullWidth />
            <TextField required margin="normal" value={sobrenome} id="sobrenome" label="Sobrenome" variant="outlined" onChange={onChangeSobrenome} fullWidth />
            <TextField required 
              margin="normal"
              value={cpf}
              id="cpfId"
              label="CPF"
              name="cpf"
              variant="outlined"
              onChange={onChangeCPF}
              onBlur={validateForm}
              error={!erros.cpf.valid}
              helperText={erros.cpf.helperText}
              fullWidth />
            <FormControlLabel label="Promoções" control={
                <Switch id="promocoesID" checked={promocao} label="Promoções" onChange={onChangePromocoes} value={promocao} />
            } />
            <FormControlLabel label="Novidades" control={
                <Switch id="novidadeID" checked={novidade} label="Novidades" onChange={onChangeNovidades} value={novidade} />
            } />
            <Button type="submit" variant="contained" color="primary" fullWidth  endIcon={<NavigateNext />}>
                Next 
            </Button>
        </form>
    );
}

export default DadosPessoais;