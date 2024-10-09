import React, { useState } from 'react'
import { Menu, X, Home, Building, Search, Phone, Info, User } from 'lucide-react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PropertiesPage from './pages/PropertiesPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import OfficesPage from './pages/OfficesPage'
import AdvisorsPage from './pages/AdvisorsPage'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'properties':
        return <PropertiesPage />
      case 'about':
        return <AboutPage />
      case 'contact':
        return <ContactPage />
      case 'offices':
        return <OfficesPage />
      case 'advisors':
        return <AdvisorsPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleMenu={toggleMenu} setCurrentPage={setCurrentPage} />
      
      {/* Off-Canvas Navigation */}
      <div className={`fixed inset-y-0 left-0 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-20`}>
        <div className="p-5">
          <button onClick={toggleMenu} className="absolute top-5 right-5">
            <X className="h-6 w-6" />
          </button>
          <nav className="mt-8">
            <ul className="space-y-4">
              <li><button onClick={() => { setCurrentPage('home'); toggleMenu(); }} className="flex items-center space-x-2"><Home className="h-5 w-5" /><span>Inicio</span></button></li>
              <li><button onClick={() => { setCurrentPage('properties'); toggleMenu(); }} className="flex items-center space-x-2"><Building className="h-5 w-5" /><span>Propiedades</span></button></li>
              <li><button onClick={() => { setCurrentPage('offices'); toggleMenu(); }} className="flex items-center space-x-2"><Building className="h-5 w-5" /><span>Oficinas</span></button></li>
              <li><button onClick={() => { setCurrentPage('advisors'); toggleMenu(); }} className="flex items-center space-x-2"><User className="h-5 w-5" /><span>Asesores</span></button></li>
              <li><button onClick={() => { setCurrentPage('about'); toggleMenu(); }} className="flex items-center space-x-2"><Info className="h-5 w-5" /><span>Sobre Nosotros</span></button></li>
              <li><button onClick={() => { setCurrentPage('contact'); toggleMenu(); }} className="flex items-center space-x-2"><Phone className="h-5 w-5" /><span>Contacto</span></button></li>
            </ul>
          </nav>
        </div>
      </div>

      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />
    </div>
  )
}

export default App