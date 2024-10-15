// src/components/FeaturedProperties.tsx

import React from 'react';
import { useProperties } from '../context/PropertiesContext';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const FeaturedProperties: React.FC = () => {
  const { featuredProperties } = useProperties();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Propiedades Destacadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
                {/* Ícono y etiqueta del tipo de propiedad eliminados */}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{property.name}</h2>
                <p className="text-gray-600 mb-2 flex items-center">
                  <MapPin className="h-4 w-4 mr-1" /> {property.location}
                </p>
                {/* Mostrar las características adicionales */}
                {property.features && (
                  <ul className="text-gray-600 mb-2">
                    {property.features.map((feature, index) => (
                      <li key={index}>- {feature}</li>
                    ))}
                  </ul>
                )}
                {/* Botón con color naranja */}
                <Link
                  to={`/property/${property.id}`}
                  className="w-full bg-[#FF6B35] text-white px-4 py-2 rounded hover:bg-[#E34A15] transition duration-300 inline-block text-center mt-4"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
