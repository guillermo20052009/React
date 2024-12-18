import React from 'react';
import './CounterStyles.css';

function Contador(props) {

  return (
    <div className="container-counter">
      <div className="counter">
        <h1>Contador</h1>
        <h1>{props.contador}</h1>  {/* Mostrar el valor del contador */}
      </div>
      <div className="buttons">
        <button className={props.clase} onClick={() => props.cambiar(1)}>+</button>
        <button onClick={() => props.cambiar(-1)}>-</button>
        <button onClick={() => props.cambiar(props.contador * -1)}>Reset</button>
      </div>
    </div>
  );
}

export default Contador;
