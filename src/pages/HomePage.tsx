// src/pages/HomePage.tsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Newsletter from '../components/Newsletter';
import WhatsAppButton from '../components/WhatsAppButton';
import FeaturedProperties from '../components/FeaturedProperties';
import AmenitiesBar from '../components/AmenitiesBar';
import LocationMap from '../components/LocationMap';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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