import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SimuladorCredito from './components/Simulador';
import SolicitarCredito from './pages/SolicitarCredito';
import Navbar from './components/Navbar'

function App() {
 


  return (

    <div className='bg-white'>
    <Navbar/>
    <Router>
      <Routes>
          <Route path='/' element= {<SimuladorCredito/>} />
           <Route path="/solicitar" element={<SolicitarCredito />} />
      </Routes>
    </Router>
    
    </div>
  )
}

export default App
