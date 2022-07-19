import './App.css';
import NavBar from './components/NavBar';

function App() {

  /*const temp = 20;*/

  const spanStyles= {
    fontSize: 24,
    margin: 12,
  }

  return (
    <>
      <NavBar/>
      <div className="container">
        
        {/* Elementos autocloseables */}
       
        <span style={spanStyles}>Barra de Navegación</span>
      </div>
    </>
  );
}

export default App;
