// src/pages/AdvisorsPage.tsx
import React from 'react';
import grupoFoto from '../../public/assets/asesores.jpeg'; // Asegúrate de que la ruta de la imagen sea correcta.

const AdvisorsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Sobre Nuestros Asesores</h1>
      
      {/* Sección de Historia y Compromiso */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        {/* Texto de Historia */}
        <div>
       
          <h3 className="text-2xl font-bold mt-8">Misión</h3>
          <p className="text-gray-700 mb-4">
            Nuestra misión es ofrecer soluciones inmobiliarias que satisfagan las necesidades y expectativas de nuestros clientes, proporcionándoles un servicio excepcional y una experiencia memorable.
          </p>
          <h3 className="text-2xl font-bold mt-8">Visión</h3>
          <p className="text-gray-700 mb-4">
            Ser la empresa inmobiliaria líder en el mercado, reconocida por su excelencia en la calidad de sus servicios, la innovación y la satisfacción de sus clientes.
          </p>
        </div>

        {/* Imagen del Equipo */}
        <div>
          <img
            src={grupoFoto}
            alt="Equipo de asesores"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Valores de la Empresa */}
      <section className="bg-gray-100 p-8 rounded-lg shadow-md mb-12 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Sección del Equipo */}
      
    </div>
  );
};

export default AdvisorsPage;
