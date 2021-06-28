import Nike from '../src/Components/images/Nike.jpg';
import './App.css';
import BarraNavegacion from './Components/BarraNavegacion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrusel from './Components/Carrusel';
import Cards from './Cards';
import ItemListContainer from './Components/ItemListContainer';
import Footer from './Components/Footer';
// import ItemDetailContainer from './Components/ItemDetailContainer';
// import Eventos from './Components/Eventos';


function App() {
  return (
    <div className="App">

      <BarraNavegacion/>

      <header className="App-header">
        {/* <Header/> */}
        <img src={Nike} className="App-logo" alt="logo" />
        <p className="Titulo">
          Bienvenido a Stomp Shoes
        </p>
      </header>

      <ItemListContainer subtitulo="Nuestras promociones"/>

      <div className="Cards">
        <Cards 
          name={'Bubble'} 
          edad={'36-40'} 
          pasiones={'Multicolor'}
          img={'https://react.semantic-ui.com/images/avatar/small/molly.png'}
        />
        <Cards 
          name={'Eva'}
          edad={'34-37'} 
          pasiones={'Multicolor'}
          img={'https://react.semantic-ui.com/images/avatar/small/molly.png'}
        />
        <Cards 
          name={'Balenciaga'}
          edad={'34-37'} 
          pasiones={'Multicolor'}
          img={'https://react.semantic-ui.com/images/avatar/small/molly.png'}
        />
      </div>

      <hr style={{fontWeight: "bold", color: "black"}}></hr>

      <ItemListContainer tituloCarrusel="Lo más vendido"/>
      <Carrusel/>

      <footer className="App-Footer">
        <Footer greeting="Síguenos en"/>
      </footer>

      {/* <ItemListContainer greeting="Bienvenido a Stomp Shoes"/>
      <ItemDetailContainer/> */}
      {/* <Eventos/> */}
    </div>
  );
}

export default App;
