// src/pages/PropertyDetailsPage.tsx

import React, { useLayoutEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProperties } from '../context/PropertiesContext';
import { Home, MapPin, DollarSign, Maximize, Bath } from 'lucide-react';

const PropertyDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getPropertyById } = useProperties();
  const property = getPropertyById(id || '');

  // Desplazar al inicio cuando el componente se monta o cambia el ID
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Propiedad No Encontrada</h1>
        <p className="text-gray-600 mb-8 text-center">
          La propiedad que buscas no existe o ha sido eliminada. Es posible que la propiedad haya sido retirada o el enlace esté incorrecto.
        </p>
        <div className="text-center mb-8">
          <img
            src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8"
            alt="Error 404"
            className="w-full max-w-md mx-auto rounded-lg shadow-md mb-8"
          />
          <Link to="/properties" className="bg-[#FF6B35] text-white px-4 py-2 rounded-full hover:bg-[#E34A15] transition duration-300">
            Ver Otras Propiedades
          </Link>
        </div>
      </div>
    );
  }

  // Convertir el tipo de propiedad a minúsculas y eliminar espacios
  const propertyType = property.type.trim().toLowerCase();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Mostrar el nombre de la propiedad solo una vez */}
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
            {/* Detalles de la propiedad sin duplicaciones */}
            <p className="text-gray-600 mb-4 flex items-center">
              <MapPin className="h-4 w-4 mr-2" /> {property.location}
            </p>
            {/* Mostrar el precio solo si la propiedad es 'lote' */}
            {propertyType === 'lote' && (
              <p className="text-gray-600 mb-4 flex items-center">
                <DollarSign className="h-4 w-4 mr-2" /> S/ {property.price.toLocaleString()} Soles
              </p>
            )}
            <p className="text-gray-600 mb-4 flex items-center">
              <Home className="h-4 w-4 mr-2" /> {property.type}
            </p>
            <p className="text-gray-600 mb-4 flex items-center">
              <Maximize className="h-4 w-4 mr-2" /> {property.area} m²
            </p>
            {property.bedrooms > 0 && (
              <p className="text-gray-600 mb-4 flex items-center">
                <Home className="h-4 w-4 mr-2" /> {property.bedrooms} habitaciones
              </p>
            )}
            {property.bathrooms > 0 && (
              <p className="text-gray-600 mb-4 flex items-center">
                <Bath className="h-4 w-4 mr-2" /> {property.bathrooms} baños
              </p>
            )}
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
