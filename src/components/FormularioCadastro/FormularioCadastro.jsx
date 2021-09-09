import { Stepper, Step, StepLabel, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import EnderecoUsuario from './EnderecoUsuario';
import validations from '../../validacoes/cadastro';
import FormValidationsContext from '../../contexts/FormValidationsContext';


function FormularioCadastro({onSubmit, ...props}) {

  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dataForms, setDataform] = useState({});


  useEffect(()=>{
    if (etapaAtual === 3 ){
      onSubmit(dataForms)
    }
  })

  const submitHandler = (data) => {
    setDataform({...dataForms, ...data});
    nextStep();
  }

  const nextStep = () => {
    setEtapaAtual(etapaAtual +1);
  }

  const switchStepForm = (step) => {

    switch (step) {
      case 0:
        return <DadosUsuario onSubmit={submitHandler} />;

      case 1:
        return <DadosPessoais onSubmit={submitHandler} />;
      
      case 2:
        return <EnderecoUsuario onSubmit={submitHandler} />;

      case 3:
        return (
          <p>
            <Typography style={{textAlign:'center'}} variant="h2">Obrigado pelo cadastro!</Typography>
          </p>
        )
    
      default:
        return <Typography>Erro de Etapa!!</Typography>
    }
  }

  return (
      <FormValidationsContext.Provider value={validations}>
        <Stepper activeStep={etapaAtual}>
          <Step>
            <StepLabel>Login</StepLabel>
          </Step>
          <Step>
            <StepLabel>Dados pessoais</StepLabel>
          </Step>
          <Step>
            <StepLabel>Endereço</StepLabel>
          </Step>
          <Step>
            <StepLabel>Finalização</StepLabel>
          </Step>
        </Stepper>
        {switchStepForm(etapaAtual)}
      </FormValidationsContext.Provider>
  );
}

export default FormularioCadastro;