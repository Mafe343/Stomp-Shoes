import React from 'react';
import { Col } from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import logoS from './logoS.svg';

function CartWidget() {
    return(
        <div>
            <Col xs={3} md={2}>
                <Image src={logoS} roundedCircle className="App-logo" alt="logo" style={{width: 70, height: 70 }}/>
            </Col>
        </div>
    )
}

export default CartWidget