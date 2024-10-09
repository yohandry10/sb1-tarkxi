import React, { useState } from 'react'
import { Search, Filter, MapPin, Home, Maximize } from 'lucide-react'

const PropertiesPage: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen)

  const properties = [
    {
      id: 'PROP001',
      title: 'Casa Moderna en el Centro',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      price: '350,000',
      location: 'Centro, Madrid',
      type: 'Casa',
      area: '200',
      bedrooms: 3,
      bathrooms: 2,
      status: 'En Venta'
    },
    // Add more properties here...
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nuestras Propiedades</h1>

      {/* Search and Filter Bar */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex-1 mr-4">
          <div className="relative">
            <input type="text" placeholder="Buscar propiedades..." className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
        <button onClick={toggleFilter} className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Filtros
        </button>
      </div>

      {/* Filter Drawer */}
      <div className={`fixed inset-y-0 right-0 transform ${isFilterOpen ? 'translate-x-0' : 'translate-x-full'} w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-20`}>
        <div className="p-5">
          <h3 className="text-xl font-bold mb-4">Filtros</h3>
          {/* Add filter options here */}
          <button onClick={toggleFilter} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Aplicar Filtros</button>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
              <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">{property.status}</span>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
              <p className="text-gray-600 mb-4 flex items-center">
                <MapPin className="h-4 w-4 mr-1" /> {property.location}
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-blue-500 font-bold text-xl">${property.price}</span>
                <span className="text-gray-600">{property.type}</span>
              </div>
              <div className="flex justify-between text-gray-600 mb-4">
                <span className="flex items-center"><Maximize className="h-4 w-4 mr-1" /> {property.area} m²</span>
                <span className="flex items-center"><Home className="h-4 w-4 mr-1" /> {property.bedrooms} hab.</span>
                <span>{property.bathrooms} baños</span>
              </div>
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Ver Detalles</button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <button className="mx-1 px-4 py-2 border rounded hover:bg-gray-100">Anterior</button>
        <button className="mx-1 px-4 py-2 border rounded bg-blue-500 text-white">1</button>
        <button className="mx-1 px-4 py-2 border rounded hover:bg-gray-100">2</button>
        <button className="mx-1 px-4 py-2 border rounded hover:bg-gray-100">3</button>
        <button className="mx-1 px-4 py-2 border rounded hover:bg-gray-100">Siguiente</button>
      </div>
    </div>
  )
}

export default PropertiesPage