import React, { useState, useEffect } from 'react'
import { Search, MapPin, Users, Home, TrendingUp, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import Newsletter from '../components/Newsletter'
import WhatsAppButton from '../components/WhatsAppButton'
import FeaturedProperties from '../components/FeaturedProperties'
import AmenitiesBar from '../components/AmenitiesBar'
import LocationMap from '../components/LocationMap'

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const tabs = [
    { icon: <Home className="h-6 w-6" />, title: 'Propiedades', content: 'Explora nuestra amplia selección de propiedades en las mejores ubicaciones.' },
    { icon: <Users className="h-6 w-6" />, title: 'Agentes', content: 'Nuestro equipo de agentes expertos está listo para ayudarte en cada paso.' },
    { icon: <TrendingUp className="h-6 w-6" />, title: 'Inversiones', content: 'Descubre oportunidades de inversión inmobiliaria con alto potencial de retorno.' },
  ];

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80",
      title: "Encuentra tu hogar ideal",
      subtitle: "Descubre las mejores propiedades en las ubicaciones más exclusivas"
    },
    {
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Inversiones inteligentes",
      subtitle: "Maximiza tu capital con nuestras oportunidades inmobiliarias"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
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
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative h-full bg-cover bg-center bg-fixed" style={{backgroundImage: `url('${slide.image}')`}}>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{slide.title}</h1>
                  <p className="text-xl text-white mb-8">{slide.subtitle}</p>
                  <div className="flex justify-center">
                    <input type="text" placeholder="Buscar por ubicación, tipo de propiedad..." className="px-4 py-2 w-64 md:w-96 rounded-l-full focus:outline-none" />
                    <button className="bg-primary text-white px-6 py-2 rounded-r-full hover:bg-primary-dark transition duration-300">
                      <Search className="h-5 w-5" />
                    </button>
                  </div>
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

      {/* Services Section with Tabs */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
          <div className="flex justify-center mb-8">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`flex items-center px-4 py-2 mx-2 rounded-full transition-all duration-300 ${activeTab === index ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.icon}
                <span className="ml-2">{tab.title}</span>
              </button>
            ))}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">{tabs[activeTab].title}</h3>
            <p>{tabs[activeTab].content}</p>
          </div>
        </div>
      </section>

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

      {/* About Us Section with Parallax */}
      <section className="py-16 parallax" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80')"}}>
        <div className="container mx-auto px-4">
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
            <p className="text-gray-700 mb-4">
              En InmoModerna, nos dedicamos a hacer realidad los sueños inmobiliarios de nuestros clientes. Con años de experiencia en el mercado y un equipo de profesionales altamente calificados, ofrecemos un servicio personalizado y de calidad en cada transacción.
            </p>
            <p className="text-gray-700 mb-4">
              Nuestra misión es simplificar el proceso de compra, venta y alquiler de propiedades, brindando asesoramiento experto y soluciones innovadoras que se adaptan a las necesidades únicas de cada cliente.
            </p>
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition duration-300">Conócenos Más</button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}

export default HomePage