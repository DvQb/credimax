import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
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
      const res = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok) {
        setMensaje('✅ Login exitoso');
          console.log('Login OK, redirigiendo...');
        // localStorage.setItem('auth', 'true');
        localStorage.setItem('auth', 'true');
        navigate('/dashboard')
        
      } else {
        setMensaje('❌ ' + data.message);
      }
    } catch (error) {
      setMensaje('❌ Error al conectar con el servidor');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <h2 className="text-3xl font-bold mb-6">Iniciar Sesión</h2>
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
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          Entrar
        </button>
      </form>

      <div className="mt-6 text-center">
        <span>¿No tienes cuenta? </span>
        <Link to="/register" className="text-blue-600 underline">
          Regístrate
        </Link>
      </div>

      {mensaje && <div className="mt-4 text-center">{mensaje}</div>}
    </div>
  );
}
