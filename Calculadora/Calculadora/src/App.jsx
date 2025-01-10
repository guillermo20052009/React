import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonPanel from './components/ButtonPanel'
import Cuadro from './components/Cuadro'
import Calculadora from './components/Calculadora'

function App() {

  return (
    <>
      <div className='recuadro'>
      <Calculadora></Calculadora>
      </div>
    </>
  )
}

export default App