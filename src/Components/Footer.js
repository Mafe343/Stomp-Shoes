import React from 'react';
import { Col } from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import tiktok from './tiktok.svg';
import instagram from './instagram.svg';
import facebook from './facebook.svg';

function Footer(props) {
    return(
        <div>
            <h3 style={{fontSize: 30, fontWeight: 'bold'}}>{props.greeting}</h3>
            <Col xs={3} md={2} className="logos">
                <Image src={facebook} roundedCircle className="App-logo" alt="logo" style={{width: 70, height: 70, margin: 10}}/>
                <Image src={instagram} roundedCircle className="App-logo" alt="logo" style={{width: 70, height: 70, margin: 10 }}/>
                <Image src={tiktok} roundedCircle className="App-logo" alt="logo" style={{width: 70, height: 70, margin: 10 }}/>
            </Col>
        </div>
    )
}

export default Footer