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
  searchProperties: (query: string) => Property[];
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
      name: 'Casa modelo futurista',
      location: 'Ate, Lima',
      price: 2700,
      type: 'Casa',
      image: '/assets/product1.jpeg', // Imagen actualizada
      bedrooms: 3,
      bathrooms: 2,
      area: '200',
      status: 'En Venta'
    },
    {
      id: 'PROP002',
      name: 'Casa modelo futurista en nuestro proyecto',
      location: 'Ate, Lima',
      price: 2700,
      type: 'Apartamento',
      image: '/assets/product2.jpeg', // Imagen actualizada
      bedrooms: 2,
      bathrooms: 2,
      area: '150',
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
    return filtered;
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
