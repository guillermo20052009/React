import { useState } from 'react'
import './App.css'
import Contador from './components/Contador'

function App() {

  const [counter, setCounter] = useState(0)

  const cambiar = (num) => {
    setCounter(counter + num);
};
const clase = "incButton"


  return (
    <>
      <div className="App">
        <Contador contador={counter} cambiar={cambiar} clase={clase}></Contador>
      </div>
      
    </>
  )
}

export default App
