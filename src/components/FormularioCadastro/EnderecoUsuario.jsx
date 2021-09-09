import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

function EnderecoUsuario({onSubmit, validations, ...props}) {

    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [uf, setUf] = useState("");
    const [cidade, setCidade] = useState("");
    const [erros, setErros] = useState({
        cpf: {
          valid: true,
          helperText: null
        }
    });


    const onChangeCep = (ev) => {
        setCep(ev.target.value)
    }

    const onChangeLogradouro = (ev) => {
        setLogradouro(ev.target.value)
    }

    const onChangeNumero = (ev) => {
        setNumero(ev.target.value)
    }

    const onChangeUf = (ev) => {
        setUf(ev.target.value)
    }

    const onChangeCidade = (ev) => {
        setCidade(ev.target.value)
    }

    const validateForm = (ev) => {
        const {name, value} = ev.target;
        const validation = {...erros}
        validation[name] = validations[name](value);
        setErros(validation);
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
            onSubmit({
                cep,
                logradouro,
                numero,
                uf,
                cidade
            });
        }
    }

    return (
        <form onSubmit={onFormSubmit}>
            <TextField
                required
                margin="normal"
                name="cep"
                value={cep}
                label="Cep"
                variant="outlined"
                onChange={onChangeCep}
                onBlur={validateForm}
                error={!erros.cep.valid}
                helperText={erros.cep.helperText}
            />
            <TextField required margin="normal" name="logradouro" value={logradouro} label="logradouro" variant="outlined" onChange={onChangeLogradouro} fullWidth />
            <TextField required margin="normal" name="numero" value={numero} label="Número" variant="outlined" onChange={onChangeNumero} />&nbsp;
            <TextField required margin="normal" name="uf" value={uf} label="uf" variant="outlined" onChange={onChangeUf} />
            <TextField required margin="normal" name="cidade" value={cidade} label="Cidade" variant="outlined" onChange={onChangeCidade} />

            <Button type="submit" variant="contained" color="primary" fullWidth>
                Cadastrar
            </Button>
        </form>
    );
}


export default EnderecoUsuario;