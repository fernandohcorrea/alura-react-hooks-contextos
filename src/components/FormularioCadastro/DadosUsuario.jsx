import React, { useContext, useState } from "react";
import { Button, TextField } from '@material-ui/core';
import { NavigateNext } from "@material-ui/icons";
import FormValidationsContext from "../../contexts/FormValidationsContext";
import useErrors from "../../hooks/useErrors";


function DadosUsuario({onSubmit, ...props})
{
    const validations = useContext(FormValidationsContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [erros, validateForm, chkFormErrors] = useErrors(validations);

    const onChangeEmail = (ev) => {
        setEmail(ev.target.value)
    }

    const onChangePassword = (ev) => {
        setPassword(ev.target.value);
    }

    const onFormSubmit = (ev) => {
        ev.preventDefault();
        if (chkFormErrors()){
            onSubmit({email,password});
        }
    }

    return(
        <form onSubmit={onFormSubmit}>
            <TextField margin="normal" type='email' value={email} id="noneId" name="email" label="E-mail" variant="outlined" onChange={onChangeEmail} fullWidth required/>

            <TextField
                required
                margin="normal"
                type='password'
                value={password}
                id="passwordId"
                name="password"
                label="Password"
                variant="outlined"
                onBlur={validateForm}
                onChange={onChangePassword}
                error={!erros.password.valid}
                helperText={erros.password.helperText}
                fullWidth
            />
            
            <Button type="submit" variant="contained" color="primary" fullWidth  endIcon={<NavigateNext />}>
                Next 
            </Button>
        </form>
    );
}

export default DadosUsuario;