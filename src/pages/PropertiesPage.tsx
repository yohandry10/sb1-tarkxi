import React, { useState } from 'react';
import { Search, Filter, MapPin, Home, Maximize } from 'lucide-react';
import { useProperties } from '../context/PropertiesContext'; // Importar el contexto de propiedades

const PropertiesPage: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { filteredProperties, navigateToProperty } = useProperties(); // Utilizar las propiedades filtradas y la función de navegación

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nuestras Propiedades</h1>

      {/* Barra de búsqueda y filtros */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex-1 mr-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar propiedades..."
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
        <button onClick={toggleFilter} className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Filtros
        </button>
      </div>

      {/* Mostrar las propiedades filtradas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProperties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img src="https://via.placeholder.com/300" alt={property.name} className="w-full h-48 object-cover" />
              <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">{property.type}</span>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
              <p className="text-gray-600 mb-4 flex items-center">
                <MapPin className="h-4 w-4 mr-1" /> {property.location}
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-blue-500 font-bold text-xl">${property.price.toLocaleString()}</span>
              </div>
              <button
                onClick={() => navigateToProperty(property.id)}
                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Ver Detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;
