import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useProperties } from '../context/PropertiesContext';
import { useDebounce } from '../hooks/useDebounce';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
  const [propertyType, setPropertyType] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const { searchProperties, filteredProperties } = useProperties();

  useEffect(() => {
    searchProperties(debouncedSearchQuery, priceRange, propertyType);
  }, [debouncedSearchQuery, priceRange, propertyType]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg shadow-md">
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Buscar propiedades..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="flex-shrink-0">
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Tipo de propiedad</option>
            <option value="casa">Casa</option>
            <option value="apartamento">Apartamento</option>
            <option value="terreno">Terreno</option>
          </select>
        </div>
        <div className="flex-shrink-0">
          <input
            type="range"
            min="0"
            max="1000000"
            step="10000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="text-sm text-gray-600">
            Precio máximo: ${priceRange[1].toLocaleString()}
          </div>
        </div>
        <button
          className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition duration-300"
          onClick={() => searchProperties(searchQuery, priceRange, propertyType)}
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
      {filteredProperties.length > 0 && (
        <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Resultados de búsqueda:</h3>
          <ul>
            {filteredProperties.map((property) => (
              <li key={property.id} className="mb-2">
                <a href={`/property/${property.id}`} className="text-blue-500 hover:underline">
                  {property.name} - {property.location} - ${property.price.toLocaleString()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;