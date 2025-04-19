import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({
    correo: '',
    password: ''
  });
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok) {
        setMensaje('✅ Registro exitoso, redirigiendo...');
        setTimeout(() => navigate('/'), 1500); // Redirige a login
      } else {
        setMensaje('❌ ' + data.message);
      }
    } catch (error) {
      setMensaje('❌ Error al conectar con el servidor');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <h2 className="text-3xl font-bold mb-6">Registro</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="email"
          name="correo"
          placeholder="Correo"
          value={formData.correo}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">
          Registrarse
        </button>
      </form>
      {mensaje && <div className="mt-4 text-center">{mensaje}</div>}
    </div>
  );
}
