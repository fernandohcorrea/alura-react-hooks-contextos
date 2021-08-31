import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

function EnderecoUsuario({onSubmit, ...props}) {

    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [uf, setUf] = useState("");
    const [cidade, setCidade] = useState("");


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

        onSubmit({
            cep,
            logradouro,
            numero,
            uf,
            cidade
        });
    }

    return (
        <form onSubmit={onFormSubmit}>
            <TextField margin="normal" value={cep} label="Cep" variant="outlined" onChange={onChangeCep} />
            <TextField margin="normal" value={logradouro} label="logradouro" variant="outlined" onChange={onChangeLogradouro} fullWidth />
            <TextField margin="normal" value={numero} label="Número" variant="outlined" onChange={onChangeNumero} />
            &nbsp;
            <TextField margin="normal" value={uf} label="uf" variant="outlined" onChange={onChangeUf} />
            <TextField margin="normal" value={cidade} label="Cidade" variant="outlined" onChange={onChangeCidade} />

            <Button type="submit" variant="contained" color="primary" fullWidth>
                Cadastrar
            </Button>
        </form>
    );
}


export default EnderecoUsuario;