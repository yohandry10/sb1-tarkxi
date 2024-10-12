import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import AboutPage from './pages/AboutPage';
import OfficesPage from './pages/OfficesPage';
import ContactPage from './pages/ContactPage';
import AdvisorsPage from './pages/AdvisorsPage';
import PropertyDetailsPage from './pages/PropertiesDetailsPage'
import { PropertiesProvider } from './context/PropertiesContext';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <Router>
      <PropertiesProvider>
        <div className="flex flex-col min-h-screen">
          <Header toggleMenu={() => setIsMenuOpen(!isMenuOpen)} setCurrentPage={setCurrentPage} />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/properties" element={<PropertiesPage />} />
              <Route path="/offices" element={<OfficesPage />} />
              <Route path="/advisors" element={<AdvisorsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/property/:id" element={<PropertyDetailsPage />} />
              <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
            </Routes>
          </main>

          <Footer />
        </div>
      </PropertiesProvider>
    </Router>
  );
};

export default App;
