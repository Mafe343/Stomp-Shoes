import { Component } from "react"

class ItemCount extends Component {

    constructor(props) {
        super(props)
        this.state = {counter: 0}
    };

    restar() {
        this.setState({counter: this.state.counter - 1})
    }

    sumar() {
        this.setState({counter: this.state.counter + 1})
    }
    
    render() {
        return(
            <div>
                <h2>{this.state.counter}</h2>
                <button onClick={this.sumar.bind(this)} style={{color: 'white', background:'blue', padding: 5, width:100, borderRadius: 5, margin: 5}}>+</button>

                <button onClick={this.restar.bind(this)} style={{color: 'white', background:'blue', padding: 5, width:100, borderRadius: 5, margin: 5}}>-</button>

                {/* <button style={{color: 'white', background:'blue', padding: 5, width:200, borderRadius: 5, margin: 5}}>Añadir al carrito</button> */}
            </div>
        )
    }
}

export default ItemCount;