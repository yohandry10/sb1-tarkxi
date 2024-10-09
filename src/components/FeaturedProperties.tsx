import React from 'react'
import { MapPin, Home, Maximize } from 'lucide-react'

const FeaturedProperties: React.FC = () => {
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Propiedades Destacadas</h2>
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
      </div>
    </section>
  )
}

export default FeaturedProperties