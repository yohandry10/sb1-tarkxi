import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Crear un icono personalizado para el marcador usando URLs absolutas
const markerIcon = new L.Icon({
  iconUrl: '/images/leaflet/marker-icon.png',
  iconRetinaUrl: '/images/leaflet/marker-icon-2x.png',
  shadowUrl: '/images/leaflet/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const AboutPage = () => {
  // Coordenadas de la ubicación del proyecto
  const position = [-12.0505115, -76.889238]; 

  return (
    <div className="about-page">
      <section className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Sobre Mufasa Inmobiliaria</h1>
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700">
            Somos una empresa emergente en el mercado inmobiliario dedicada al asesoramiento y venta de lotes, ¡con precios de locura!! desde tan sólo 10mil!. No te quedes esperando, avisale a tu pata, no te quedes sin hacer tu inversión, haz grupo y obten tu cupón de descuento por cada cliente, con nuestra promoción "Recomienda a un amigo"   
          </p>
        </div>

        {/* Mapa interactivo con Leaflet */}
        <div className="w-full flex justify-center mb-12">
          <MapContainer 
            center={position} 
            zoom={15} 
            style={{ height: "400px", width: "100%", borderRadius: '8px' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={markerIcon}>
              <Popup>
                Proyecto de Terrenos - La Planicie <br /> 
                Visítanos en Av. Las Lomas de Garibaldi, Distrito de Ate.
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">¿Cómo Llegar?</h2>
          <p className="text-lg text-gray-700 mb-4">
            Nos encontramos ubicados en una zona emergente. Puedes usar el siguiente enlace para llegar facilmente desde donde te encuentras.
          </p>
          <a 
            href="https://maps.google.com/maps?q=-12.0505115%2C-76.889238&z=17&hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-700 transition duration-300"
          >
            Ver en Google Maps
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

