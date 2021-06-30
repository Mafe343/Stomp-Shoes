import React from 'react';
import {StatusContext} from "./App";

const CartContext = () => {
    return(
        <StatusContext.Consumer>
            {value => (
                <ul>
                    <li>
                        <p>bottom</p>
                        <p>The Status is: {value}</p>
                    </li>
                </ul>
            )}
        </StatusContext.Consumer>
    );
}

export default CartContext