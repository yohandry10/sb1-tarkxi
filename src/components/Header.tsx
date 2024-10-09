import React, { useState, useEffect } from 'react'
import { Menu, X, Search, User, Home, Building, Phone, Info } from 'lucide-react'

interface HeaderProps {
  toggleMenu: () => void
  setCurrentPage: (page: string) => void
}

const Header: React.FC<HeaderProps> = ({ toggleMenu, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    toggleMenu()
  }

  return (
    <header className={`sticky-header ${isScrolled ? 'scrolled' : ''} bg-white shadow-md transition-all duration-300`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button onClick={handleToggleMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
            <Menu className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} />
          </button>
          <h1 className="text-2xl font-bold text-primary cursor-pointer" onClick={() => setCurrentPage('home')}>InmoModerna</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => setCurrentPage('home')} className="text-gray-600 hover:text-primary transition-colors duration-300">Inicio</button>
          <button onClick={() => setCurrentPage('properties')} className="text-gray-600 hover:text-primary transition-colors duration-300">Buscar Propiedades</button>
          <button onClick={() => setCurrentPage('offices')} className="text-gray-600 hover:text-primary transition-colors duration-300">Oficinas</button>
          <button onClick={() => setCurrentPage('advisors')} className="text-gray-600 hover:text-primary transition-colors duration-300">Asesores</button>
          <button onClick={() => setCurrentPage('contact')} className="text-gray-600 hover:text-primary transition-colors duration-300">Contáctanos</button>
          <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition duration-300">Ser Asesor</button>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-gray-600 hover:text-primary transition-colors duration-300">
            <Search className="h-6 w-6" />
          </button>
          <button className="text-gray-600 hover:text-primary transition-colors duration-300">
            <User className="h-6 w-6" />
          </button>
        </div>
      </div>
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 animate-fade-in">
          <div className="container mx-auto flex items-center">
            <input type="text" placeholder="Buscar propiedades..." className="flex-grow px-4 py-2 border rounded-l-full focus:outline-none focus:ring-2 focus:ring-primary" />
            <button className="bg-primary text-white px-6 py-2 rounded-r-full hover:bg-primary-dark transition duration-300">
              Buscar
            </button>
            <button onClick={() => setIsSearchOpen(false)} className="ml-4 text-gray-600 hover:text-primary transition-colors duration-300">
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
      
      {/* Hamburger Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-5">
            <button onClick={handleToggleMenu} className="absolute top-5 right-5 text-gray-600 hover:text-gray-900">
              <X className="h-6 w-6" />
            </button>
            <nav className="mt-8">
              <ul className="space-y-4">
                <li><button onClick={() => { setCurrentPage('home'); handleToggleMenu(); }} className="flex items-center space-x-2 text-gray-600 hover:text-primary"><Home className="h-5 w-5" /><span>Inicio</span></button></li>
                <li><button onClick={() => { setCurrentPage('properties'); handleToggleMenu(); }} className="flex items-center space-x-2 text-gray-600 hover:text-primary"><Building className="h-5 w-5" /><span>Propiedades</span></button></li>
                <li><button onClick={() => { setCurrentPage('offices'); handleToggleMenu(); }} className="flex items-center space-x-2 text-gray-600 hover:text-primary"><Building className="h-5 w-5" /><span>Oficinas</span></button></li>
                <li><button onClick={() => { setCurrentPage('advisors'); handleToggleMenu(); }} className="flex items-center space-x-2 text-gray-600 hover:text-primary"><User className="h-5 w-5" /><span>Asesores</span></button></li>
                <li><button onClick={() => { setCurrentPage('about'); handleToggleMenu(); }} className="flex items-center space-x-2 text-gray-600 hover:text-primary"><Info className="h-5 w-5" /><span>Sobre Nosotros</span></button></li>
                <li><button onClick={() => { setCurrentPage('contact'); handleToggleMenu(); }} className="flex items-center space-x-2 text-gray-600 hover:text-primary"><Phone className="h-5 w-5" /><span>Contacto</span></button></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header