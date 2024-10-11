import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const OfficesPage: React.FC = () => {
  // Icono personalizado para la ubicación en el mapa
  const markerIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Nuestras Oficinas</h1>
      <p className="text-center text-lg text-gray-700 mb-12">
        En Mufasa Inmobiliaria, estamos aquí para ayudarte a encontrar la mejor solución inmobiliaria. 
        Nuestras oficinas están ubicadas en el corazón de Lima, Perú, y contamos con un equipo de asesores listos para guiarte en cada paso.
      </p>

      {/* Mapa de Ubicación */}
      <section className="mb-12">
        <MapContainer
          center={[-12.0971, -77.0369]} // Coordenadas para San Isidro, Lima, Perú
          zoom={15}
          style={{ height: '400px', width: '100%' }}
          className="rounded-lg shadow-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[-12.0971, -77.0369]} icon={markerIcon}>
            <Popup>
              Oficina Central - San Isidro, Lima, Perú <br /> Calle de Ejemplo 123.
            </Popup>
          </Marker>
        </MapContainer>
      </section>

      {/* Sección de Contacto */}
      <section className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4">Visítanos en Nuestra Oficina</h2>
        <p className="text-gray-700 mb-4">
          Calle Principal 123, San Isidro, Lima, Perú.
        </p>
        <p className="text-gray-700 mb-8">
          Nuestro equipo te recibirá con los brazos abiertos para discutir tus necesidades inmobiliarias y mostrarte nuestras opciones de propiedades.
        </p>
        <button className="bg-[#FF6B35] text-white px-6 py-2 rounded-full hover:bg-[#E34A15] transition duration-300">
          Ver en Google Maps
        </button>
      </section>

      {/* Formulario de Consultas */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Envíanos tus Consultas</h2>
        <p className="text-center text-gray-700 mb-8">
          Si tienes alguna duda sobre nuestras oficinas o deseas programar una reunión con uno de nuestros asesores, ¡no dudes en contactarnos!
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <input type="text" placeholder="Nombre" className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]" />
          <input type="email" placeholder="Email" className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]" />
          <input type="text" placeholder="Asunto" className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]" />
        </div>
        <textarea placeholder="Escribe tu mensaje..." className="w-full px-4 py-2 mt-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]" rows={5}></textarea>
        <button className="block mx-auto mt-6 bg-[#FF6B35] text-white px-6 py-2 rounded-full hover:bg-[#E34A15] transition duration-300">
          Enviar Mensaje
        </button>
      </section>
    </div>
  );
};

export default OfficesPage;
