import React from 'react'

const LocationMap: React.FC = () => {
  return (
    <div className="relative">
      <img src="https://images.unsplash.com/photo-1553825250-bd5b6b5a6f3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Mapa de ubicación" className="w-full h-96 object-cover rounded-lg" />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Ubicación Privilegiada</h3>
          <p className="mb-4">A solo minutos de los mejores restaurantes y tiendas</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">Ver en Google Maps</button>
        </div>
      </div>
    </div>
  )
}

export default LocationMap