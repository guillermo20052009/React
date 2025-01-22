import React from 'react'
import ButtonPanel from './ButtonPanel'
import Cuadro from './Cuadro'
import { useState } from 'react';

function Calculadora() {
    const [texto, setTexto] = useState('')
    const [resultado, setResultado] = useState(0)
    const [operacionCompletada, setOperacionCompletada] = useState(false);

    const fetchOperacion = async (linea) => {
      try {
        const encodedExpr = encodeURIComponent(linea); // Codifica la expresión
        const url = `https://api.mathjs.org/v4/?expr=${encodedExpr}`; // Construye la URL
    
        const response = await fetch(url); // Realiza la solicitud
        const result = await response.text(); // Obtiene el resultado como texto
        return result; // Devuelve el resultado
      } catch (error) {
        console.error("Error en la operación:", error);
        throw error; // Reenvía el error para manejarlo más adelante
      }
    };
    
    

    const operacion = async (expresion) => {
          const result = await fetchOperacion(expresion);
          setTexto(result);
          setOperacionCompletada(true);
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