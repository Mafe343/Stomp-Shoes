import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemListContainer';
import axios from 'axios';
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const {data} = await axios.get("https://mocki.io/v1/b87f427a-40b3-48d3-b5ea-26051137f98c")
      setItems(data)
    })();
  }, []);

    return(
      <>
      <h1 className="App m-4" style={{color: 'orange'}}> Algunos de nuestros productos </h1>
      <ItemList items={items}/>
      </>
    )
}


export default ItemListContainer; 