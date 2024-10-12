// src/components/FeaturedProperties.tsx

import React from 'react';
import { MapPin, Home, Maximize, Bath } from 'lucide-react';
import { useProperties } from '../context/PropertiesContext';

const FeaturedProperties: React.FC = () => {
  const { properties, navigateToProperty } = useProperties();

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Propiedades Destacadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="relative">
                <img src={property.image} alt={property.name} className="w-full h-64 object-cover" />
                <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">{property.status}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-gray-400" /> {property.location}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-orange-600 font-bold text-2xl">${property.price.toLocaleString()}</span>
                  <span className="text-gray-600 bg-gray-200 px-3 py-1 rounded-full">{property.type}</span>
                </div>
                <div className="flex justify-between text-gray-600 mb-6">
                  <span className="flex items-center"><Maximize className="h-4 w-4 mr-1 text-gray-400" /> {property.area} m²</span>
                  <span className="flex items-center"><Home className="h-4 w-4 mr-1 text-gray-400" /> {property.bedrooms} hab.</span>
                  <span className="flex items-center"><Bath className="h-4 w-4 mr-1 text-gray-400" /> {property.bathrooms} baños</span>
                </div>
                <button 
                  onClick={() => navigateToProperty(property.id)} 
                  className="block w-full bg-orange-600 text-white text-center px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-300"
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
