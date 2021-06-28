import React from 'react'
// import ItemList from './ItemList'

function ItemListContainer(props) {
    return (
        <div>
            <h1>{props.greeting}</h1>
            <h2 style={{color: 'orange', margin: 30, fontWeight: 'bold', fontSize: 40}}>{props.subtitulo}</h2>
            <h2 style={{color: 'orange', margin: 30, fontWeight: 'bold', fontSize: 40}}>{props.tituloCarrusel}</h2>
            {/* <ItemList/> */}
        </div>
    )
}

export default ItemListContainer