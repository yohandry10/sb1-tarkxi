// src/pages/PropertyDetailsPage.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProperties } from '../context/PropertiesContext';
import { Home, MapPin, DollarSign, Maximize, Bath } from 'lucide-react';

const PropertyDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getPropertyById, properties } = useProperties();
  const property = getPropertyById(id || '');

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Propiedad No Encontrada</h1>
        <p className="text-gray-600 mb-8 text-center">
          La propiedad que buscas no existe o ha sido eliminada. Es posible que la propiedad haya sido retirada o el enlace esté incorrecto.
        </p>
        <div className="text-center mb-8">
          <img
            src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fGVycm9yfGVufDB8fHx8MTYzMzU4MDU5MA&ixlib=rb-1.2.1&q=80&w=1080"
            alt="Error 404"
            className="w-full max-w-md mx-auto rounded-lg shadow-md mb-8"
          />
          <Link to="/properties" className="bg-[#FF6B35] text-white px-4 py-2 rounded-full hover:bg-[#E34A15] transition duration-300">
            Ver Otras Propiedades
          </Link>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-center">Propiedades Disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.slice(0, 3).map((prop) => (
            <div key={prop.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{prop.name}</h3>
              <p className="text-gray-600 mb-2">{prop.location}</p>
              <p className="text-gray-600 mb-2">
                <DollarSign className="inline-block h-4 w-4 mr-1" /> {prop.price.toLocaleString()}
              </p>
              <Link to={`/property/${prop.id}`} className="text-blue-500 hover:underline">
                Ver Detalles
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{property.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full rounded-lg shadow-md object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">{property.name}</h2>
            <p className="text-gray-600 mb-4 flex items-center">
              <MapPin className="h-4 w-4 mr-2" /> {property.location}
            </p>
            <p className="text-gray-600 mb-4 flex items-center">
              <DollarSign className="h-4 w-4 mr-2" /> {property.price.toLocaleString()} USD
            </p>
            <p className="text-gray-600 mb-4 flex items-center">
              <Home className="h-4 w-4 mr-2" /> {property.type}
            </p>
            <p className="text-gray-600 mb-4 flex items-center">
              <Maximize className="h-4 w-4 mr-2" /> {property.area} m²
            </p>
            <p className="text-gray-600 mb-4 flex items-center">
              <Home className="h-4 w-4 mr-2" /> {property.bedrooms} habitaciones
            </p>
            <p className="text-gray-600 mb-4 flex items-center">
              <Bath className="h-4 w-4 mr-2" /> {property.bathrooms} baños
            </p>
          </div>

          <div className="mt-8">
            <Link to="/contact" className="bg-[#FF6B35] text-white px-4 py-2 rounded-full hover:bg-[#E34A15] transition duration-300">
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;