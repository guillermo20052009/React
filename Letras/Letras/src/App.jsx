import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cuadro from './Components/Cuadros'
import Busqueda from './Components/Busqueda'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container-fluid bg-dark text-white h-100 mx-0 px-0 justify-content-center d-flex"> 
      <Busqueda></Busqueda>
    </div>
  )
}

export default App
