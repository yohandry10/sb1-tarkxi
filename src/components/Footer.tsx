import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { SiTiktok } from 'react-icons/si'; // Importamos el ícono de TikTok
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const phoneNumber = '+51971218278'; // Número de WhatsApp
  const message = 'Hola, me gustaría obtener más información sobre sus propiedades.'; // Mensaje predeterminado

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Información de la Empresa */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold mb-4">Mufasa Inmobiliaria</h2>
            <p className="text-gray-400">Encuentra tu hogar ideal con Mufasa Inmobiliaria.</p>
            <p className="text-gray-400">Tu mejor aliado en el mercado inmobiliario.</p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300">Inicio</Link></li>
              <li><Link to="/properties" className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300">Propiedades</Link></li>
              <li><Link to="/offices" className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300">Oficinas</Link></li>
              <li><Link to="/advisors" className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300">Asesores</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300">Contacto</Link></li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Servicios</h4>
            <ul className="space-y-2">
              <li><Link to="/properties" className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300">Compra de Propiedades</Link></li>
              <li><Link to="/properties" className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300">Venta de Propiedades</Link></li>
              <li><Link to="/properties" className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300">Alquiler de Propiedades</Link></li>
              <li><Link to="/advisors" className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300">Asesoría Inmobiliaria</Link></li>
              <li><Link to="/properties" className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300">Inversiones Inmobiliarias</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Contacto</h4>
            <p className="text-gray-400 mb-2">Av. Santa Rosa 279, Santa Clara, Distrito de Ate, Lima, Perú.</p>
            <p className="text-gray-400 mb-2">+51971218278</p>
            <p className="text-gray-400 mb-4">mufasainmobiliaria@gmail.com</p>
            {/* Redirigir al enlace de WhatsApp al hacer clic */}
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#FF6B35] text-black px-4 py-2 rounded-full hover:bg-[#E34A15] transition duration-300">
                Contáctanos
              </button>
            </a>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="mt-8 flex justify-center space-x-8 mb-4">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61566758507598"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden"
          >
            <span className="flex items-center justify-center w-12 h-12 border border-gray-500 rounded-full transition-transform duration-500 ease-out relative overflow-hidden group-hover:bg-[#FF6B35] group-hover:animate-fill">
              <span className="absolute inset-0 bg-[#FF6B35] rounded-full transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out" />
              <Facebook className="relative text-gray-500 group-hover:text-black transition-colors duration-500 ease-out" />
            </span>
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/mufasainmobiliaria/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden"
          >
            <span className="flex items-center justify-center w-12 h-12 border border-gray-500 rounded-full transition-transform duration-500 ease-out relative overflow-hidden group-hover:bg-[#FF6B35] group-hover:animate-fill">
              <span className="absolute inset-0 bg-[#FF6B35] rounded-full transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out" />
              <Instagram className="relative text-gray-500 group-hover:text-black transition-colors duration-500 ease-out" />
            </span>
          </a>
          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@mufasainmobiliaria?lang=es"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden"
          >
            <span className="flex items-center justify-center w-12 h-12 border border-gray-500 rounded-full transition-transform duration-500 ease-out relative overflow-hidden group-hover:bg-[#FF6B35] group-hover:animate-fill">
              <span className="absolute inset-0 bg-[#FF6B35] rounded-full transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out" />
              <SiTiktok className="relative text-gray-500 group-hover:text-black transition-colors duration-500 ease-out" />
            </span>
          </a>
        </div>

        {/* Información adicional */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <div className="flex justify-center space-x-8 mb-4">
            <Link to="/contact" className="hover:text-[#FF6B35] transition-colors duration-300">Condiciones y Política de Privacidad</Link>
            <Link to="/offices" className="hover:text-[#FF6B35] transition-colors duration-300">Mapa del Sitio</Link>
          </div>
          <p>&copy; 2024 Inmobiliaria Mufasa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
