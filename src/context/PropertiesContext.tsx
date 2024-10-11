// src/context/PropertiesContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface Property {
  id: string;
  name: string;
  location: string;
  price: number;
  type: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  status: string;
}

interface PropertiesContextProps {
  properties: Property[];
  filteredProperties: Property[];
  searchProperties: (query: string) => void;
  navigateToProperty: (id: string) => void;
  getPropertyById: (id: string) => Property | undefined;
}

const PropertiesContext = createContext<PropertiesContextProps | undefined>(undefined);

export const useProperties = () => {
  const context = useContext(PropertiesContext);
  if (!context) {
    throw new Error('useProperties debe ser usado dentro de un PropertiesProvider');
  }
  return context;
};

export const PropertiesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [properties] = useState<Property[]>([
    {
      id: 'PROP001',
      name: 'Casa Moderna en el Centro',
      location: 'Centro, Madrid',
      price: 350000,
      type: 'Casa',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
      bedrooms: 3,
      bathrooms: 2,
      area: '200',
      status: 'En Venta'
    },
    {
      id: 'PROP002',
      name: 'Apartamento de Lujo con Vista al Mar',
      location: 'Playa, Barcelona',
      price: 450000,
      type: 'Apartamento',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
      bedrooms: 2,
      bathrooms: 2,
      area: '150',
      status: 'En Venta'
    },
    {
      id: 'PROP003',
      name: 'Chalet con Jardín en Zona Residencial',
      location: 'Pozuelo, Madrid',
      price: 550000,
      type: 'Chalet',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
      bedrooms: 4,
      bathrooms: 3,
      area: '300',
      status: 'En Venta'
    }
  ]);

  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const navigate = useNavigate();

  const searchProperties = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = properties.filter(property =>
      property.name.toLowerCase().includes(lowerCaseQuery) ||
      property.location.toLowerCase().includes(lowerCaseQuery) ||
      property.type.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredProperties(filtered);
  };

  const navigateToProperty = (id: string) => {
    navigate(`/property/${id}`);
  };

  const getPropertyById = (id: string) => {
    return properties.find(property => property.id === id);
  };

  return (
    <PropertiesContext.Provider value={{ properties, filteredProperties, searchProperties, navigateToProperty, getPropertyById }}>
      {children}
    </PropertiesContext.Provider>
  );
};