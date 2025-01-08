import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonPanel from './components/ButtonPanel'

function App() {
  const [count, setCount] = useState(0)

  const operacion = (operador, num1, num2) => {
    const expresion = `${num1} ${operador} ${num2}`;
    try {
      return evaluate(expresion);
    } catch (error) {
      return "Operación inválida";
    }
  };

  return (
    <>
      <div>
        <ButtonPanel></ButtonPanel>
      </div>
    
    </>
  )
}

export default App
