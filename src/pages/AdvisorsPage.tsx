import React from 'react';

const AdvisorsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Sobre Nuestros Asesores</h1>
      
      {/* Sección de Historia y Compromiso */}
      <section className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4">Sobre InmoModerna</h2>
        <p className="text-gray-700 mb-4">
          Fundada en 2010, Mufasa Inmobiliaria nació con la visión de revolucionar el mercado inmobiliario, combinando la experiencia tradicional con las últimas tecnologías. Desde entonces, hemos ayudado a miles de clientes a encontrar su hogar ideal y a realizar inversiones inmobiliarias exitosas.
        </p>
        <p className="text-gray-700 mb-4">
          Nuestro compromiso con la excelencia y la satisfacción del cliente nos ha convertido en líderes del sector, con una reputación basada en la confianza, la transparencia y los resultados.
        </p>
      </section>

      {/* Sección de Descuento y Beneficios */}
      <section className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4">Beneficios por Referir Amigos</h2>
        <p className="text-gray-700 mb-4">
          En InmoModerna, valoramos las recomendaciones de nuestros clientes. ¡Por cada amigo que traigas y complete una compra con nosotros, recibirás un <strong>descuento exclusivo del 5%</strong> en tu próxima operación inmobiliaria!
        </p>
        <p className="text-gray-700 mb-4">
          Porque sabemos que las mejores conexiones se construyen con confianza y buenas recomendaciones, queremos premiarte por ayudarnos a expandir nuestra comunidad.
        </p>
      </section>

      {/* Sección de Valores */}
      <section className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4">Nuestros Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Excelencia</h3>
            <p className="text-gray-600">Nos esforzamos por superar las expectativas en cada interacción y transacción.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Servicio Personalizado</h3>
            <p className="text-gray-600">Cada cliente es único, y nuestro enfoque se adapta a sus necesidades específicas.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Profesionalismo</h3>
            <p className="text-gray-600">Nuestro equipo de expertos garantiza un servicio de la más alta calidad en cada paso del proceso.</p>
          </div>
        </div>
      </section>

      {/* Sección de Equipo */}
      <section className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Miembro del Equipo 1 */}
          <div className="text-center">
            <img src="https://randomuser.me/api/portraits/men/31.jpg" alt="Miembro del equipo" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-lg font-semibold">Nombre Apellido</h3>
            <p className="text-gray-600">Cargo en la empresa</p>
          </div>
          {/* Miembro del Equipo 2 */}
          <div className="text-center">
            <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Miembro del equipo" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-lg font-semibold">Nombre Apellido</h3>
            <p className="text-gray-600">Cargo en la empresa</p>
          </div>
          {/* Miembro del Equipo 3 */}
          <div className="text-center">
            <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Miembro del equipo" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-lg font-semibold">Nombre Apellido</h3>
            <p className="text-gray-600">Cargo en la empresa</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AdvisorsPage;
