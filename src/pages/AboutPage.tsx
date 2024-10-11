import React from 'react'
import { Award, Users, Briefcase } from 'lucide-react'

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Sobre InmoModerna</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Nuestra Historia</h2>
          <p className="text-gray-600 mb-4">
            Fundada en 2010, Mufasa Inmobiliaria nació con la visión de revolucionar el mercado inmobiliario, combinando la experiencia tradicional con las últimas tecnologías. Desde entonces, hemos ayudado a miles de clientes a encontrar su hogar ideal y a realizar inversiones inmobiliarias exitosas.
          </p>
          <p className="text-gray-600">
            Nuestro compromiso con la excelencia y la satisfacción del cliente nos ha convertido en líderes del sector, con una reputación basada en la confianza, la transparencia y los resultados.
          </p>
        </div>
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="Equipo InmoModerna" className="rounded-lg shadow-md" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <Award className="h-16 w-16 text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Excelencia</h3>
          <p className="text-gray-600">Nos esforzamos por superar las expectativas en cada interacción y transacción.</p>
        </div>
        <div className="text-center">
          <Users className="h-16 w-16 text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Servicio Personalizado</h3>
          <p className="text-gray-600">Cada cliente es único, y nuestro enfoque se adapta a sus necesidades específicas.</p>
        </div>
        <div className="text-center">
          <Briefcase className="h-16 w-16 text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Profesionalismo</h3>
          <p className="text-gray-600">Nuestro equipo de expertos garantiza un servicio de la más alta calidad en cada paso del proceso.</p>
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-center">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-center">
              <img src={`https://randomuser.me/api/portraits/men/${i + 60}.jpg`} alt={`Miembro del equipo ${i}`} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nombre Apellido</h3>
              <p className="text-gray-600">Cargo en la empresa</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutPage