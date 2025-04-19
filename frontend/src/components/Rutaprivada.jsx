import React from 'react';
import { Navigate } from 'react-router-dom';

export default function RutaPrivada({ children }) {
  const autenticado = localStorage.getItem('auth') === 'true';

  return autenticado ? children : <Navigate to="/" />;
}
