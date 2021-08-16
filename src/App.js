import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

function App() {

  const formHandler = (data) => {
    // Salvar no DB
    console.log([
      'Salver no DB',
      data
    ]);
    debugger;
  }



  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <FormularioCadastro onSubmit={formHandler}/>
    </Container>
  );
}

export default App;
