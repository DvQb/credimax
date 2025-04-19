import React from 'react';

export default function Dashboard() {
  return (
    <div className="max-w-md mx-auto mt-20">
      <h2 className="text-3xl font-bold mb-6">Bienvenido al Dashboard</h2>
      <p>Aquí puedes manejar tu solicitud o ver datos privados.</p>

      <button
  onClick={() => {
    localStorage.removeItem('auth');
    window.location.href = '/';
  }}
  className="mt-6 bg-red-600 text-white px-4 py-2 rounded"
>
  Cerrar sesión
</button>
    </div>
  );
}
