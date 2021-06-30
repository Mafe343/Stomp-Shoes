import Nike from '../src/Components/images/Nike.jpg';
import './App.css';
import BarraNavegacion from './Components/BarraNavegacion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrusel from './Components/Carrusel';
import Cards from './Cards';
import ItemListContainer from './Components/ItemListContainer';
import Footer from './Components/Footer';
// import CartContext from './CartContext';
// import ItemDetailContainer from './Components/ItemDetailContainer';
import Eventos from './Components/Eventos';
import UsersList from './UserList';
import Profile from "./Components/Profile";
import UserState from "./context/User/UserState";


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
      <Eventos/>
      
      <UserState>
        <div className="container p-4">
          <div className="row">
            <div className="col-md-7">
              <UsersList/>
            </div>
            <div className="col-md-5">
              <Profile/>
            </div>
          </div>
        </div>
      </UserState>

      <footer className="App-Footer">
        <Footer greeting="Síguenos en"/>
      </footer>

      {/* <ItemListContainer greeting="Bienvenido a Stomp Shoes"/>
      <ItemDetailContainer/> */}
    </div>
  );
}

export default App;
