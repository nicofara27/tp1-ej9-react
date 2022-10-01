import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap"
import './App.css';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App">
      <Container>
        <h1 className='my-5 text-center'>Administrador pacientes de veterinaria</h1>
        <Formulario></Formulario>
      </Container>
    </div>
  );
}

export default App;
