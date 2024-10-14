import React, { useState, useEffect } from 'react';
import { Menu, X, Search, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useProperties } from '../context/PropertiesContext';

interface HeaderProps {
  toggleMenu?: () => void;
  setCurrentPage?: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ toggleMenu, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { searchProperties, filteredProperties, navigateToProperty } = useProperties();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    toggleMenu && toggleMenu();
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handlePropertyClick = (propertyId: string) => {
    navigateToProperty(propertyId);
    setSearchQuery('');
    navigate(`/property/${propertyId}`);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const results = searchProperties(searchQuery);
    if (results.length > 0) {
      handlePropertyClick(results[0].id);
    }
  };

  return (
    <header className={`sticky-header ${isScrolled ? 'scrolled' : ''} bg-transparent shadow-md transition-all duration-300`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative z-50">
        <div className="flex items-center">
          <button onClick={handleToggleMenu} className="text-gray-400 hover:text-gray-200 focus:outline-none mr-4 md:hidden">
            <Menu className="hamburger-icon h-6 w-6" />
          </button>

          {/* Mostrar "Mufasa Inmobiliaria" solo en móvil y el logo solo en pantallas más grandes */}
          <Link to="/" onClick={() => setCurrentPage && setCurrentPage('home')} className="flex items-center space-x-2">
            {/* Texto "Mufasa Inmobiliaria" visible solo en móviles */}
            <span className="block text-xl font-bold text-gray-400 z-10 relative sm:hidden">
              Mufasa Inmobiliaria
            </span>
            {/* Logo visible solo en pantallas más grandes */}
            <img src="/assets/logo-1.webp" alt="Logo InmoModerna" className="h-10 w-auto logo hidden sm:block" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-4">
          {[{ name: 'Inicio', to: '/' }, { name: 'Lotes', to: '/properties' }, { name: 'Oficinas', to: '/offices' }, { name: 'Asesores', to: '/advisors' }, { name: 'Sobre Nosotros', to: '/about' }].map((link) => (
            <Link key={link.name} to={link.to} className="relative group overflow-hidden text-gray-400 hover:text-[#FF6B35] transition-colors duration-500">
              <span className="absolute inset-0 bg-[#FF6B35] rounded-full transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out" />
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">{link.name}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearchSubmit} className="relative hidden sm:block">
            <input type="text" placeholder="Buscar propiedades..." value={searchQuery} onChange={handleSearchChange} className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF6B35] bg-gray-800 text-white w-40 md:w-auto" />
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-2 bg-[#FF6B35] text-black px-2 py-1 rounded-full hover:bg-[#E34A15] transition duration-300">
              <Search className="h-5 w-5" />
            </button>
          </form>

          <button className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300">
            <User className="h-6 w-6" />
          </button>

          <button onClick={() => navigate('/contact')} className="relative group overflow-hidden inline-flex items-center justify-center w-24 h-10 border-2 border-[#FF6B35] rounded-full transition-all duration-300 hidden sm:inline-flex">
            <span className="absolute inset-0 w-full h-full bg-[#FF6B35] rounded-full transform scale-0 origin-bottom group-hover:scale-100 transition-transform duration-500 ease-out" />
            <span className="relative z-10 text-[#FF6B35] group-hover:text-black transition-colors duration-500">Conectarse</span>
          </button>
        </div>
      </div>

      {searchQuery && (
        <div className="absolute left-0 right-0 top-full bg-white shadow-lg z-50">
          <ul>
            {filteredProperties.map((property) => (
              <li key={property.id} className="p-4 cursor-pointer hover:bg-gray-100" onClick={() => handlePropertyClick(property.id)}>
                {property.name} - {property.location}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={handleToggleMenu}></div>
      <div className={`fixed inset-y-0 left-0 w-64 bg-black shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">Menú</h2>
          <button onClick={handleToggleMenu} className="text-white hover:text-[#FF6B35] focus:outline-none">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-5 space-y-4">
          <Link to="/" onClick={() => { setCurrentPage && setCurrentPage('home'); handleToggleMenu(); }} className="block text-white hover:text-[#FF6B35]">Inicio</Link>
          <Link to="/properties" onClick={() => { setCurrentPage && setCurrentPage('properties'); handleToggleMenu(); }} className="block text-white hover:text-[#FF6B35]">Lotes</Link>
          <Link to="/offices" onClick={() => { setCurrentPage && setCurrentPage('offices'); handleToggleMenu(); }} className="block text-white hover:text-[#FF6B35]">Oficinas</Link>
          <Link to="/advisors" onClick={() => { setCurrentPage && setCurrentPage('advisors'); handleToggleMenu(); }} className="block text-white hover:text-[#FF6B35]">Asesores</Link>
          <Link to="/about" onClick={() => { setCurrentPage && setCurrentPage('about'); handleToggleMenu(); }} className="block text-white hover:text-[#FF6B35]">Sobre Nosotros</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
