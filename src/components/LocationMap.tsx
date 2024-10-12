// src/components/LocationMap.tsx
import React from 'react';
import mapaPNG from '../../public/assets/mapa.jpg'; // Asegúrate de usar el formato correcto y la ruta adecuada.

const LocationMap: React.FC = () => {
  return (
    <div className="w-full h-[600px] mt-8">
      {/* Contenedor para la imagen del mapa */}
      <img
        src={mapaPNG}
        alt="Mapa de Lotización"
        className="w-full h-full object-contain rounded-lg shadow-lg"
      />
    </div>
  );
};

export default LocationMap;
