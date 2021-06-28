import React from 'react';
import {Navbar, Nav, NavDropdown,} from 'react-bootstrap';
import CartWidget from './CartWidget';

function BarraNavegacion() {
    return(
        <Navbar sticky = "top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <CartWidget/>
            <Navbar.Brand href="#home">Stomp-Shoes</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features" style={{color: "White"}}>Home</Nav.Link>
                <Nav.Link href="#pricing" style={{color: "White"}}>Nosotros</Nav.Link>
                <NavDropdown title="Productos" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Dama</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Caballero</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Niños</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Cajas sorpresa</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link eventKey={2} href="#memes" style={{color: "White"}}>
                    Contáctanos
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default BarraNavegacion;