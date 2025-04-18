import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const mesesIndex = {
  "12": 0, "18": 1, "24": 2, "36": 3, "48": 4,
  "60": 5, "72": 6, "84": 7, "96": 8, "108": 9, "120": 10
};

function obtenerTipoPorMonto(monto) {
  if (monto <= 19999) return 'tipoA';
  if (monto <= 29999) return 'tipoB';
  if (monto < 39999) return 'tipoC';
  if (monto <= 45000) return 'tipoD';
  if (monto <= 50000) return 'tipoE';
  return null;
}


function obtenerTasa(monto, meses, tasas) {
  const tipo = obtenerTipoPorMonto(monto);
  return tasas?.[tipo]?.[meses] ?? null;
}




function calcularPagoMensual(monto, tasa, meses) {
  const tasaMensual = tasa / 12 / 100;
  return (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -meses));
}

function calcularTablaSaldos(montoTotal, pagoMensual, meses) {
  let saldo = montoTotal + pagoMensual;
  return Array.from({ length: meses }, (_, i) => {
    saldo -= pagoMensual;
    return saldo.toFixed(2);
  });
}

export default function SimuladorCredito() {

 

   const [tasas, setTasas] = useState(null);

  useEffect(() => {
    fetch('/tasas.json')
      .then(res => res.json())
      .then(data => setTasas(data))
      .catch(err => console.error("Error al cargar tasas:", err));
  }, []);


  const [monto, setMonto] = useState('');
  const [meses, setMeses] = useState('12');
  const [resultado, setResultado] = useState(null);

   if (!tasas) return <p>Cargando tasas de interés...</p>;

  const ejecutarSimulador = () => {
    
    const montoNum = parseFloat(monto);
    const tasa = obtenerTasa(montoNum, meses, tasas);

    if (!tasa) return alert("Datos no válidos o monto fuera de rango.");

    const pago = calcularPagoMensual(montoNum, tasa, meses);
    const total = pago * meses;
    const saldos = calcularTablaSaldos(total, pago, meses);

    setResultado({ total, pago, tasa, saldos });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Simulador de Crédito</h2>

      <div className="mb-4">
        <label>Monto:</label>
        <input type="number" value={monto} onChange={e => setMonto(e.target.value)} className="border p-2 w-full" />
      </div>

      <div className="mb-4">
        <label>Meses:</label>
        <select value={meses} onChange={e => setMeses(e.target.value)} className="border p-2 w-full">
          {Object.keys(mesesIndex).map(key => (
            <option key={key} value={key}>{key}</option>
          ))}
        </select>
      </div>

      <button onClick={ejecutarSimulador} className="bg-blue-600 text-white py-2 px-4 rounded">Calcular</button>

      {resultado && (
        <div className="mt-6">
          <p><strong>Total a pagar:</strong> ${resultado.total.toFixed(2)}</p>
          <p><strong>Pago mensual:</strong> ${resultado.pago.toFixed(2)}</p>
          <p><strong>Interés:</strong> {resultado.tasa}%</p>

          <table className="table-auto w-full mt-4 border">
            <thead>
              <tr className="bg-gray-200">
                <th>Mes</th>
                <th>Saldo Pendiente</th>
              </tr>
            </thead>
            <tbody>
              {resultado.saldos.map((saldo, idx) => (
                <tr key={idx}>
                  <td className="border px-2">{idx + 1}</td>
                  <td className="border px-2">${saldo}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div id="contenedorBotones" className="flex gap-4 mt-4">
            <Link to="/solicitar" className="bg-green-600 text-white px-4 py-2 rounded">Solicitar</Link>
            <button onClick={() => window.location.reload()} className="bg-red-600 text-white px-4 py-2 rounded">Eliminar</button>
          </div>
        </div>
      )}
    </div>
  );
}
