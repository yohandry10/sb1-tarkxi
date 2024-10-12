// src/components/AmenitiesBar.tsx
import React from 'react';
import { Briefcase, DollarSign, TrendingUp, MapPin, Home } from 'lucide-react'; // Íconos más orientados a la inversión y desarrollo.

const AmenitiesBar: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
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

          {/* Plusvalía Asegurada */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <TrendingUp className="h-12 w-12 mx-auto mb-4 text-orange-500" />
            <h3 className="text-xl font-semibold mb-2">¡Precios de locura!</h3>
            <p className="text-gray-600">Facilidad de pago  y descuentos por traer un amigo para nuestros clientes</p>
          </div>

          {/* Proximidad a Vías Principales */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <MapPin className="h-12 w-12 mx-auto mb-4 text-red-500" />
            <h3 className="text-xl font-semibold mb-2">Asesoramiento en compra y venta</h3>
            <p className="text-gray-600">Nuestros asesores están deseando ayudarte a tomar la mejor decisión..</p>
          </div>

          {/* Potencial Comercial */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Briefcase className="h-12 w-12 mx-auto mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold mb-2">Potencial Comercial</h3>
            <p className="text-gray-600">Ideal para desarrollo de nuevos emprendedores comerciales y empresariales.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesBar;
