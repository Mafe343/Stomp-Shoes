import React from 'react';
import './Item';


const Item = ({title, price, pictureUrl}) => {
  return (
    <div className="App" style={{margin: 10}}>
        <img className="products" style={{ width: '120px', height: '120px', marginBottom: 10, borderRadius: '50%',}} src={pictureUrl} alt={title}/>
        <p style={{color: 'white', fontWeight: 'bold'}}>{title}</p>
        <p style={{color: 'white', fontWeight: 'bold'}}>{price}</p>
    </div>
  )
}

export default Item