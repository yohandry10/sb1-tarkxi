// HomePage.tsx
import React, { useState, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import Newsletter from '../components/Newsletter';
import WhatsAppButton from '../components/WhatsAppButton';
import FeaturedProperties from '../components/FeaturedProperties';
import AmenitiesBar from '../components/AmenitiesBar';
import LocationMap from '../components/LocationMap';
import { useProperties } from '../context/PropertiesContext';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const { filteredProperties, searchProperties, navigateToProperty } = useProperties();

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1568805711781-e4ff7caf7afa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVycmVub3MlMjBwZXJ1fGVufDB8fDB8fHww",
      title: "Encuentra tu hogar ideal",
      subtitle: "Descubre las mejores propiedades en las ubicaciones más exclusivas"
    },
    {
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Inversiones inteligentes",
      subtitle: "Maximiza tu capital con nuestras oportunidades inmobiliarias"
    },
    {
      image:  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Asesoría personalizada",
      subtitle: "Expertos inmobiliarios a tu disposición en cada paso"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    searchProperties(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchProperties(searchQuery);
  };

  return (
    <div className="relative">
      {/* Hero Section with Carousel */}
      <div className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="relative h-full bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('${slide.image}')` }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{slide.title}</h1>
                  <p className="text-xl text-white mb-8">{slide.subtitle}</p>
                  <form onSubmit={handleSearchSubmit} className="flex justify-center">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      placeholder="Buscar por ubicación, tipo de propiedad..."
                      className="px-4 py-2 w-64 md:w-96 rounded-l-full focus:outline-none"
                    />
                    <button type="submit" className="bg-orange-600 text-white px-6 py-2 rounded-r-full hover:bg-orange-700 transition duration-300">
                      <Search className="h-5 w-5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300">
          <ChevronLeft className="h-6 w-6 text-gray-800" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300">
          <ChevronRight className="h-6 w-6 text-gray-800" />
        </button>
      </div>

      {/* Featured Properties Section */}
      <FeaturedProperties />

      {/* Mostrar propiedades filtradas */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Propiedades Filtradas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <div
                  key={property.id}
                  className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition duration-300"
                  onClick={() => navigateToProperty(property.id)}
                >
                  <h3 className="text-lg font-semibold mb-2">{property.name}</h3>
                  <p className="text-gray-600">{property.location}</p>
                  <p className="text-gray-600">${property.price.toLocaleString()}</p>
                  <p className="text-gray-600">{property.type}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-3">No se encontraron propiedades con la búsqueda actual.</p>
            )}
          </div>
        </div>
      </section>

      {/* Amenities Bar and Location Map */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Características y Ubicación</h2>
          <AmenitiesBar />
          <LocationMap />
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;