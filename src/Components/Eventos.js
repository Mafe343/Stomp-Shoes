import React, {useState, useEffect} from 'react';


export default function Eventos() {
    const [mostrar, setMostrar] = useState(true);

    return(
        <div>
            <button className="container" style={{margin: 20, borderColor:"orange", backgroundColor: "transparent", color: "orange", padding: 10, fontWeight: 'bold', width: 100 }} onClick={()=> setMostrar(false)}>Dejar de mostrar</button>
            {mostrar ? <MouseColor/> : null}
            <button className="container" style={{margin: 20, borderColor:"orange", backgroundColor: "transparent", color: "orange", padding: 10, fontWeight: 'bold', width: 100 }} onClick={()=> setMostrar(true)}>Volver a mostrar</button>
        </div>
    );
}

function MouseColor() {
    const [Image, setImage] = useState("blue");
    useEffect(() => {
        function onMouseMove(evento) {
            if(evento.clientX < window.innerWidth / 2) {
                setImage("pink");
            }else {
                setImage("grey");
            }
        }

        window.addEventListener("mousemove", onMouseMove);

        return() => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    console.log("Ocurrio el render");
    return(
        <div className="event" style={{height:"50vh", background: Image}}>
            
        </div>
    )
}