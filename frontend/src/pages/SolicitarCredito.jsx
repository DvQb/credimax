// src/pages/SolicitarCredito.jsx
import React, { useState } from 'react';

export default function SolicitarCredito() {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    telefono: '',
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Datos enviados:', form);
    alert('¡Solicitud enviada correctamente!');
  };

  return (
    <div className="max-w-md mt-20 pb-20  mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8">Datos del Cliente</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <input name="nombre" placeholder="Nombre completo" onChange={handleChange} className="border p-2 w-full" />
        <input name="ocupacion" placeholder="Ocupacion" onChange={handleChange} className="border p-2 w-full" />
        <input name="salario" placeholder="Salario" onChange={handleChange} className="border p-2 w-full" />
        <input name="antiguedad" placeholder="Antiguedad" onChange={handleChange} className="border p-2 w-full" />
        <input name="correo" placeholder="Correo electrónico" onChange={handleChange} className="border p-2 w-full" />
        <input name="telefono" placeholder="Teléfono" onChange={handleChange} className="border p-2 w-full" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Enviar solicitud</button>
      </form>
    </div>
  );
}
