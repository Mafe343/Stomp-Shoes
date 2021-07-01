import React from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Users} from './ItemData';

function ItemCount() {
    const [Numero, setNumero] = React.useState(0);

    const handleIncrement = () => {
      setNumero(Numero + 1)
    }

    const handleDecrement = () => {
      setNumero(Numero - 1)
    }
  
  return (
  <div>
    <div className="App">
      <h1> ESTE ES EL PRIMER ENTREGABLE DEL 3ER DESAFIO </h1>
      <h1>¿Cuanto es 2+2?</h1>
      <p className="contador">{Numero}</p>
      <Button color="danger" className="m-2 mb-4" onClick={handleDecrement}> Disminuir </Button>
      <Button color="warning" className="m-2 mb-4" onClick={handleIncrement}> Incrementar </Button>
      {Users.map((item) => {
        return(
        <div key={item.id}>
          <h2> 
            {item.name} precio: {item.price}
          </h2>
        </div>
        )
      })}
    </div>
  </div>
  )
}


export default ItemCount;