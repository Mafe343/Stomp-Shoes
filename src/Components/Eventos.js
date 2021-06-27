import React, {useState, useEffect} from 'react';

export default function Eventos() {
    const [mostrar, setMostrar] = useState(true);

    return(
        <div>
            <button className="container" style={{margin: 20, borderColor:"White", backgroundColor: "transparent", color: "white" }} onClick={()=> setMostrar(false)}>Dejar de mostrar</button>
            {mostrar ? <MouseColor/> : null}
            <button className="container" style={{margin: 20, borderColor:"White", backgroundColor: "transparent", color: "white" }} onClick={()=> setMostrar(true)}>Volver a mostrar</button>
        </div>
    );
}

function MouseColor() {
    const [color, setColor] = useState("orange");
    useEffect(() => {
        function onMouseMove(evento) {
            if(evento.clientX < window.innerWidth / 2) {
                setColor("orange");
            }else {
                setColor("blue");
            }
        }

        window.addEventListener("mousemove", onMouseMove);
        console.log("ejecutando");

        return() => {
            console.log("Limpiando")
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    console.log("Ocurrio el render");
    return(
        <div style={{height:"100vh", width:"100vh", background: color}}>;
            
        </div>
    )
}