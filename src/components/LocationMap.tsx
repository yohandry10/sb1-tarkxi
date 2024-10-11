import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Configuración del ícono utilizando el ícono predeterminado de Leaflet
const markerIcon = new L.Icon.Default();

const LocationMap: React.FC = () => {
  return (
    <div className="location-map">
      {/* Componente MapContainer de Leaflet */}
      <MapContainer
        center={[-12.0357, -76.9510]} // Coordenadas específicas de Ate, Lima, Perú
        zoom={14} // Zoom más detallado
        style={{ height: '100%', width: '100%' }}
        className="rounded-lg shadow-lg"
      >
        {/* Capa base usando OpenStreetMap */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Marcador para la ubicación */}
        <Marker position={[-12.0357, -76.9510]} icon={markerIcon}>
          <Popup>
            Ubicación Privilegiada: Ate, Lima, Perú <br /> Cerca de restaurantes y tiendas.
          </Popup>
        </Marker>
      </MapContainer>

      {/* Superposición de información sobre el mapa */}
      <div className="map-overlay">
        <h3 className="font-bold text-3xl">Ubicación Privilegiada</h3>
        <p>A solo minutos de los mejores restaurantes y tiendas</p>
        <button
          onClick={() => window.open('https://www.google.com/maps/@-12.0357,-76.9510,17z', '_blank')}
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Ver en Google Maps
        </button>
      </div>
    </div>
  );
};

export default LocationMap;
