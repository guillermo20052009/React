import './App.css'
import Calculadora from './components/Calculadora'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <div className='container mx-auto px-0 justify-content-center'>
      <div className='recuadro'>
      <Calculadora></Calculadora>
      </div>
    </div>
    </>
  )
}

export default App