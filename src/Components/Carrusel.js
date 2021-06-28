import React from 'react';
import {Carousel} from 'react-bootstrap';
import uno from "./uno.jpeg";
import dos from "./dos.jpeg";
import tres from "./tres.jpeg";


function Header () {
    return(
        <Carousel style={{margin: 30}}>
            <Carousel.Item>
                <img
                    style={{width:500, height:"100vh"}}
                    className="d-block container"
                    src={uno}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 style={{color: "orange", fontWeight:"bold", fontSize: 45,}}>Classic</h3>
                    <p style={{fontSize: 25, fontWeight:"bold"}}>Disponible en todas las tallas</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{width:500, height:"100vh"}}
                    className="d-block container"
                    src={dos}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 style={{color: "orange", fontWeight:"bold", fontSize: 45,}}>Raptor</h3>
                    <p style={{fontSize: 25, color: "black", fontWeight:"bold"}}>Referencia: Blanco con suela azul.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{width: 500, height:"100vh"}}
                    className="d-block container"
                    src={tres}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 style={{color: "orange", fontWeight:"bold", fontSize: 45,}}>Classic Niños</h3>
                    <p style={{fontSize: 25, fontWeight:"bold"}}>Disponibles en las tallas 34 a 37.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Header