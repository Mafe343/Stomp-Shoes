import React, {useEffect, useState} from 'react';


function ItemDetailContainer() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            .then((res) => res.json())
            .then((res) => {setData(res.results);});
    },  []);
    
    return (
        <div>
            {
                console.log(data)
            }
            {/* {data !== null ? (
                data.map((data, index) => {
                    return <p key={index} id={index}>{data.name}</p>;
                })
            ) : (
                <h3>Cargando</h3>
            )} */}
        </div>
    );
}

export default ItemDetailContainer