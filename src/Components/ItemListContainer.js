import React from 'react'
import ItemList from './ItemList'
import ItemCount from './ItemCount'

function ItemListContainer(props) {
    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemList/>
            <ItemCount/>
        </div>
    )
}

export default ItemListContainer