import React from 'react'
import ButtonPanel from './ButtonPanel'
import Cuadro from './Cuadro'
import { useState } from 'react';
import { evaluate } from 'mathjs'; 

function Calculadora() {
    const [texto, setTexto] = useState('')
    const [resultado, setResultado] = useState(0)
    
    const operacion = (expresion) => {
        try {
          const result = evaluate(expresion); 
          setTexto(result);
        } catch (error) {
          console.log("Operación inválida");
        }
      };
      
      const escribir = (NuevoTexto) => {
        if (NuevoTexto == "AC"){
            setTexto('');

        }  else if (NuevoTexto == "+" || NuevoTexto == "-" || NuevoTexto == "*" || NuevoTexto == "/" || NuevoTexto == "%") {
            setResultado(resultado+texto+NuevoTexto);
            setTexto('');
        }    else if (NuevoTexto == "=") {
            console.log(resultado+texto);
            operacion(resultado+texto);
            setResultado(0);
        } else if (NuevoTexto == "+/-") {
            setTexto(texto * -1);
        }
        else
            setTexto(texto+NuevoTexto);
      };

  return (
    <div><Cuadro relleno={texto}></Cuadro>
        <ButtonPanel onClick={escribir}></ButtonPanel></div>
  )
}

export default Calculadora