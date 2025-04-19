import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SimuladorCredito from './components/Simulador';
import SolicitarCredito from './pages/SolicitarCredito';
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard';
import RutaPrivada from './components/Rutaprivada';

function App() {
 


  return (

    <div className='bg-white'>
    
     <Navbar/>
  
      <Routes>
          <Route path='/' element= {<SimuladorCredito/>} />
           <Route path="/solicitar" element={<SolicitarCredito />} />
           <Route path="/login" element={<Login/>} />
           <Route path="/register" element={<Register/>} />
           <Route path="/dashboard"  element={<RutaPrivada><Dashboard/></RutaPrivada>}/>
      </Routes>
 
    
    </div>
  )
}

export default App
