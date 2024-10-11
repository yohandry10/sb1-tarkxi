import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProperties } from '../context/PropertiesContext';
import { Home, MapPin, DollarSign } from 'lucide-react';

const PropertyDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Obtener el id de la propiedad desde los parámetros de la URL
  const { properties } = useProperties(); // Obtener las propiedades desde el contexto
  const property = properties.find((p) => p.id.toString() === id); // Buscar la propiedad por id

  // Verificar si la propiedad no se encuentra
  if (!property) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Propiedad No Encontrada</h1>
        <p className="text-gray-600 mb-8 text-center">
          La propiedad que buscas no existe o ha sido eliminada. Es posible que la propiedad haya sido retirada o el enlace esté incorrecto.
        </p>
        <div className="text-center mb-8">
          <img
            src="https://via.placeholder.com/300"
            alt="Error 404"
            className="w-full max-w-md mx-auto rounded-lg shadow-md mb-8"
          />
          <Link to="/properties" className="bg-[#FF6B35] text-black px-4 py-2 rounded-full hover:bg-[#E34A15] transition duration-300">
            Ver Otras Propiedades
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{property.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagen Principal */}
        <div>
          <img
            src="https://via.placeholder.com/600"
            alt={property.name}
            className="w-full h-full rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Información de la Propiedad */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">{property.name}</h2>
            <p className="text-gray-600 mb-4">
              <MapPin className="inline-block h-4 w-4 mr-1" /> {property.location}
            </p>
            <p className="text-gray-600 mb-4">
              <DollarSign className="inline-block h-4 w-4 mr-1" /> {property.price.toLocaleString()} USD
            </p>
            <p className="text-gray-600">{property.type}</p>
          </div>

          <div className="mt-8">
            <Link to="/contact" className="bg-[#FF6B35] text-black px-4 py-2 rounded-full hover:bg-[#E34A15] transition duration-300">
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
