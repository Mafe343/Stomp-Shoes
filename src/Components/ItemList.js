import React from 'react';
import './ItemList';
import Item from './Item'

const ItemList = ({items}) => {
  return(
    <div className="container d-flex justify-content-center">
        {items.map(item=>(
            <Item key={item.id} {...item} />
        ))}
    </div>
  )
}

export default ItemList