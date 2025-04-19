import React from 'react';

const Sucursal = ({ imagen, titulo, direccion, telefono, email }) => {
  return (
    <div>
        <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img className="w-full h-48 object-cover" src={imagen} alt={`Imagen de ${titulo}`} />
      <div className="p-5">
        <h2 className="text-xl font-bold mb-2">{titulo}</h2>
        <p className="text-gray-700 mb-2">
          <strong>Dirección:</strong> {direccion}
        </p>
        <div className="text-gray-600 text-sm space-y-1">
          <p><strong>Tel:</strong> {telefono}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sucursal;
