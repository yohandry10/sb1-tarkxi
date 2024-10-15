// src/components/AmenitiesBar.tsx

import React from 'react';
import { Briefcase, DollarSign, TrendingUp, MapPin, Home } from 'lucide-react';

const AmenitiesBar: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 text-center">
          {/* Oportunidad de Inversión */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <DollarSign className="h-12 w-12 mx-auto mb-4 text-green-500" />
            <h3 className="text-xl font-semibold mb-2">Oportunidad de Inversión a largo</h3>
            <p className="text-gray-600">Incremento del valor del terreno con el tiempo.</p>
          </div>

          {/* Desarrollo Residencial */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Home className="h-12 w-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Desarrollo Residencial</h3>
            <p className="text-gray-600">Zonas planeadas para urbanización y viviendas.</p>
          </div>

          {/* ¡Precios de Locura! */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <TrendingUp className="h-12 w-12 mx-auto mb-4 text-orange-500" />
            <h3 className="text-xl font-semibold mb-2">¡Precios de Locura!</h3>
            <p className="text-gray-600">Facilidad de pago y lotes desde tan solo 10 mil.</p>
          </div>

          {/* Asesoramiento Personalizado */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <MapPin className="h-12 w-12 mx-auto mb-4 text-red-500" />
            <h3 className="text-xl font-semibold mb-2">Asesoramiento Personalizado</h3>
            <p className="text-gray-600">Nuestros asesores te ayudarán a tomar la mejor decisión.</p>
          </div>

          {/* Potencial Comercial */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Briefcase className="h-12 w-12 mx-auto mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold mb-2">Potencial Comercial</h3>
            <p className="text-gray-600">Ideal para nuevos emprendimientos comerciales y empresariales.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesBar;
