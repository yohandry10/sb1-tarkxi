import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Secciones principales del footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo de la Inmobiliaria */}
          <div className="flex flex-col items-center md:items-start">
            <div className="footer-logo mb-4">
              <img src="/public/assets/logo-1.webp" alt="Logo InmoModerna" />
            </div>
            <p className="text-gray-400">Encuentra tu hogar ideal con Mufasa Inmobiliaria .</p>
            <p className="text-gray-400">Tu mejor aliado en el mercado inmobiliario.</p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300">Inicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300">Propiedades</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300">Oficinas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300">Asesores</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300">Contacto</a></li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300">Compra de Propiedades</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300">Venta de Propiedades</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300">Alquiler de Propiedades</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300">Asesoría Inmobiliaria</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300">Inversiones Inmobiliarias</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Contacto</h4>
            <p className="text-gray-400 mb-2">Calle Principal 123, 28001 Madrid, España</p>
            <p className="text-gray-400 mb-2">+34 123 456 789</p>
            <p className="text-gray-400 mb-4">info@inmomoderna.com</p>
            <button className="bg-[#FF6B35] text-black px-4 py-2 rounded-full hover:bg-[#E34A15] transition duration-300">
              Contáctanos
            </button>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="mt-8 flex justify-center space-x-8 mb-4">
          {[
            { component: <Facebook />, href: "#" },
            { component: <Twitter />, href: "#" },
            { component: <Instagram />, href: "#" },
            { component: <Linkedin />, href: "#" },
            { component: <Youtube />, href: "#" }
          ].map((icon, index) => (
            <a href={icon.href} key={index} className="relative group overflow-hidden">
              {/* Fondo Circular Inicial con Efecto de Relleno */}
              <span className="flex items-center justify-center w-12 h-12 border border-gray-500 rounded-full transition-transform duration-500 ease-out relative overflow-hidden group-hover:bg-[#FF6B35] group-hover:animate-fill">
                {/* Icono con Transición de Color */}
                <span className="absolute inset-0 bg-[#FF6B35] rounded-full transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out" />
                {React.cloneElement(icon.component, {
                  className: 'relative text-gray-500 group-hover:text-black transition-colors duration-500 ease-out'
                })}
              </span>
            </a>
          ))}
        </div>

        {/* Pie de Página con Información Adicional */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <div className="flex justify-center space-x-8 mb-4">
            <a href="#" className="hover:text-[#FF6B35] transition-colors duration-300">Condiciones y Política de Privacidad</a>
            <a href="#" className="hover:text-[#FF6B35] transition-colors duration-300">Mapa del Sitio</a>
          </div>
          <p>&copy; 2024 Inmobiliaria Mufasa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
