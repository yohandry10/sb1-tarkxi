import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">InmoModerna</h3>
            <p className="text-gray-400 mb-4">Tu hogar ideal está a un clic de distancia.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><Linkedin className="h-6 w-6" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Inicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Propiedades</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Oficinas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Asesores</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Compra de propiedades</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Venta de propiedades</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Alquiler</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Asesoría inmobiliaria</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Inversiones</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <p className="text-gray-400 mb-2">Calle Principal 123, 28001 Madrid, España</p>
            <p className="text-gray-400 mb-2">+34 123 456 789</p>
            <p className="text-gray-400 mb-4">info@inmomoderna.com</p>
            <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition duration-300">Contáctanos</button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2024 InmoModerna. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer