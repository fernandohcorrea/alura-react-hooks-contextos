import React, { useContext, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import FormValidationsContext from '../../contexts/FormValidationsContext';
import useErrors from '../../hooks/useErrors';

function EnderecoUsuario({onSubmit, ...props}) {
    const validations = useContext(FormValidationsContext);
    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [uf, setUf] = useState("");
    const [cidade, setCidade] = useState("");
    const [erros, validateForm, chkFormErrors] = useErrors(validations);


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