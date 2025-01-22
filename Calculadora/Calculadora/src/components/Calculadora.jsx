import React from 'react'
import ButtonPanel from './ButtonPanel'
import Cuadro from './Cuadro'
import { useState } from 'react';
import { evaluate } from 'mathjs'; 

function Calculadora() {
    const [texto, setTexto] = useState('')
    const [resultado, setResultado] = useState(0)
    const [operacionCompletada, setOperacionCompletada] = useState(false);

    const operacion = (expresion) => {
        try {
          const result = evaluate(expresion); 
          setTexto(result);
          setOperacionCompletada(true);
        } catch (error) {
          console.log("Operación inválida");
        }
      };
      
      const escribir = (NuevoTexto) => {
        if (NuevoTexto === "AC"){
            setTexto('');
            setResultado(0);
            setOperacionCompletada(false);
        } else if (NuevoTexto === "+" || NuevoTexto === "-" || NuevoTexto === "*" || NuevoTexto === "/" || NuevoTexto === "%") {
            if (operacionCompletada) {
                setResultado(texto + NuevoTexto);
                setTexto('');
                setOperacionCompletada(false);
            } else {
                setResultado(resultado + texto + NuevoTexto);
                setTexto('');
            }
        } else if (NuevoTexto === "=") {
            operacion(resultado + texto);
            setResultado(0);
        } else if (NuevoTexto === "+/-") {
            setTexto(texto * -1);
        } else {
            if (operacionCompletada) {
                setTexto(NuevoTexto);
                setOperacionCompletada(false);
            } else {
                setTexto(texto + NuevoTexto);
            }
        }
      };

  return (
    <div className="container">
      <Cuadro relleno={texto}></Cuadro>
      <ButtonPanel onClick={escribir} className="mt-5 mx-0 px-0"></ButtonPanel>
    </div>
  )
}

export default Calculadora