import './App.css';
import Buttom from './components/Buttom';
import NavBar from './components/NavBar';
import ItemListContainer from '../src/container/IntemListContainer';
import Persons from './components/Persons/Persons';

function App() {

  const temp = 20;
  // const opcion = "Hogar"
  const opcion = "Decoracion";

  const spanStyles= {
    fontSize: 24,
    margin: 12,
  }

  return (
    <>
      <NavBar temperatura={temp} opcionAdicional={opcion}/>
      <ItemListContainer greeting={"Hola Andrea Alvarado"}/>
      <Persons />
    </>
  );
}

export default App;