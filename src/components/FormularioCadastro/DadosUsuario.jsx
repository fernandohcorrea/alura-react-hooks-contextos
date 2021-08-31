import React, { useState } from "react";
import { Button, TextField } from '@material-ui/core';
import { NavigateNext } from "@material-ui/icons";


function DadosUsuario({onSubmit, ...props})
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (ev) => {
        setEmail(ev.target.value)
    }

    const onChangePassword = (ev) => {
        setPassword(ev.target.value);
    }

    const onFormSubmit = (ev) => {
        ev.preventDefault();

        onSubmit({email,password});
    }

    return(
        <form onSubmit={onFormSubmit}>
            <TextField margin="normal" type='email' value={email} id="noneId" label="E-mail" variant="outlined" onChange={onChangeEmail} fullWidth />
            <TextField margin="normal" type='password' value={password} id="passwordId" label="Password" variant="outlined" onChange={onChangePassword} fullWidth />
            
            <Button type="submit" variant="contained" color="primary" fullWidth  endIcon={<NavigateNext />}>
                Next 
            </Button>
        </form>
    );
}

export default DadosUsuario;