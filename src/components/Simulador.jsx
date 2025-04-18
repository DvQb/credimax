
import { useState } from "react";

const mesesIndex = {
  "12" : 0 ,
  "18" : 1 , 
  "24" : 2 ,
  "36" : 3 , 
  "48" : 4 ,
  "60" : 5 ,
  "72" : 6 , 
  "84" : 7 ,
  "96" : 8 ,
  "108" : 9 ,
  "120" : 10 , 
}


const Simulador = () => {

  const [meses , setMeses] = useState('12');

  console.log(meses)

  return (

      <div className=" ">

        <input type="text"  />


        <select value={meses} onChange={e => setMeses(e.target.value)}>
          <option value="24">24</option>
          <option value="36">36</option>
        </select>

      </div>

  )
}

export default Simulador;