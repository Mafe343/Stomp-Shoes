// import logo from './logo.svg';
import './App.css';
import BarraNavegacion from './Components/BarraNavegacion';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ItemListContainer from './Components/ItemListContainer';
// import ItemDetailContainer from './Components/ItemDetailContainer';
import Eventos from './Components/Eventos';

function App() {
  return (
    <div className="App">
      <BarraNavegacion/>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Eventos/>
      </header>
      {/* <ItemListContainer greeting="Bienvenido a Stomp Shoes"/>
      <ItemDetailContainer/> */}
    </div>
  );
}

export default App;
