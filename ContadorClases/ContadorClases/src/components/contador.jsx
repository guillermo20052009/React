import React, { Component } from 'react';
import "./contador.css"

class Contador extends Component {

  render() {
    return (
      <div className="container-counter">
        <div className="counter">
          <h1>Contador</h1>
          <h1>{this.props.contador}</h1>  {/* Mostrar el valor del contador */}
        </div>
        <div className="buttons">
          <button className={this.props.clase} onClick={() => this.props.cambiar(1)}>+</button>
          <button onClick={() => this.props.cambiar(-1)}>-</button>
          <button onClick={() => this.props.cambiar(this.props.contador * -1)}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Contador;
