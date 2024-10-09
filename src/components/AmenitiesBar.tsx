import React from 'react'
import { Coffee, Dumbbell, Wifi, Tv, Utensils, Dog } from 'lucide-react'

const AmenitiesBar: React.FC = () => {
  const amenities = [
    { icon: <Coffee className="h-6 w-6" />, name: 'Salón Social' },
    { icon: <Dumbbell className="h-6 w-6" />, name: 'Gimnasio' },
    { icon: <Wifi className="h-6 w-6" />, name: 'Wi-Fi' },
    { icon: <Tv className="h-6 w-6" />, name: 'Sala de Cine' },
    { icon: <Utensils className="h-6 w-6" />, name: 'Área de BBQ' },
    { icon: <Dog className="h-6 w-6" />, name: 'Pet Shower' },
  ]

  return (
    <div className="bg-brown-800 text-white py-6 rounded-lg mb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center text-center cursor-pointer hover:scale-110 transition-transform duration-300">
              {amenity.icon}
              <span className="mt-2 text-sm">{amenity.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AmenitiesBar