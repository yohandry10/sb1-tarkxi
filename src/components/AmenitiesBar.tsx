import React from 'react';
import { FaSwimmingPool, FaWifi, FaDumbbell, FaFilm, FaFireAlt, FaDog } from 'react-icons/fa'; // Puedes usar cualquier librería de iconos como react-icons

const AmenitiesBox: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-6 text-center mt-8">
      <div className="icon-feature flex flex-col items-center">
        <FaSwimmingPool className="text-6xl mb-2 text-orange-500" /> {/* Cambia aquí el color */}
        <p>Salón Social</p>
      </div>
      <div className="icon-feature flex flex-col items-center">
        <FaDumbbell className="text-6xl mb-2 text-orange-500" /> {/* Cambia aquí el color */}
        <p>Gimnasio</p>
      </div>
      <div className="icon-feature flex flex-col items-center">
        <FaWifi className="text-6xl mb-2 text-orange-500" /> {/* Cambia aquí el color */}
        <p>Wi-Fi</p>
      </div>
      <div className="icon-feature flex flex-col items-center">
        <FaFilm className="text-6xl mb-2 text-orange-500" /> {/* Cambia aquí el color */}
        <p>Sala de Cine</p>
      </div>
      <div className="icon-feature flex flex-col items-center">
        <FaFireAlt className="text-6xl mb-2 text-orange-500" /> {/* Cambia aquí el color */}
        <p>Área de BBQ</p>
      </div>
      <div className="icon-feature flex flex-col items-center">
        <FaDog className="text-6xl mb-2 text-orange-500" /> {/* Cambia aquí el color */}
        <p>Pet Shower</p>
      </div>
    </div>
  );
};

export default AmenitiesBox;
