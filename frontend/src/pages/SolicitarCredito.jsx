// src/pages/SolicitarCredito.jsx
import React, { useState } from 'react';

export default function SolicitarCredito() {
  const [formData, setFormData] = useState({
    nombre: '',
    ocupacion: '',
    salario: '',
    antiguedad: '' ,
    correo: '',
    telefono: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('http://localhost:3001/clientes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (res.ok) {
      alert("¡Solicitud enviada con éxito!");
    }
  } catch (error) {
    console.error("Error al enviar datos:", error);
  }
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
