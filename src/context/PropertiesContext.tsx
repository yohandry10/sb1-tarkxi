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
  featuredProperties: Property[];
  lotesProperties: Property[];
  filteredProperties: Property[];
  allProperties: Property[]; // Añadido
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
  const [featuredProperties] = useState<Property[]>([
    {
      id: 'PROP001',
      name: 'Casa modelo futurista',
      location: 'Ate, Lima',
      price: 100000,
      type: 'Casa',
      image: '/assets/product1.jpeg',
      bedrooms: 3,
      bathrooms: 2,
      area: '200',
      status: 'En Venta'
    },
    {
      id: 'PROP002',
      name: 'Casa moderna en proyecto',
      location: 'Ate, Lima',
      price: 100000,
      type: 'Apartamento',
      image: '/assets/product2.jpeg',
      bedrooms: 2,
      bathrooms: 2,
      area: '150',
      status: 'En Venta'
    }
  ]);

  const [lotesProperties] = useState<Property[]>([
    {
      id: 'LOTE001',
      name: 'Lote 1',
      location: 'Ate, Lima',
      price: 15000,
      type: 'Lote',
      image: '/assets/lot1.jpeg',
      bedrooms: 0,
      bathrooms: 0,
      area: '90',
      status: 'Disponible'
    },
    {
      id: 'LOTE002',
      name: 'Lote número 2',
      location: 'Santa Clara, Lima',
      price: 16000,
      type: 'Lote',
      image: '/assets/lote2.jpeg',
      bedrooms: 0,
      bathrooms: 0,
      area: '100',
      status: 'Disponible'
    },
    {
      id: 'LOTE003',
      name: 'Lote número 3',
      location: 'San Juan, Lima',
      price: 18000,
      type: 'Lote',
      image: '/assets/lote3.jpeg',
      bedrooms: 0,
      bathrooms: 0,
      area: '120',
      status: 'Disponible'
    }
  ]);

  // Combinar todas las propiedades para búsqueda y detalles
  const allProperties = [...featuredProperties, ...lotesProperties];

  const [filteredProperties, setFilteredProperties] = useState<Property[]>(allProperties);
  const navigate = useNavigate();

  const searchProperties = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = allProperties.filter(property =>
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
    return allProperties.find(property => property.id === id);
  };

  return (
    <PropertiesContext.Provider
      value={{
        featuredProperties,
        lotesProperties,
        filteredProperties,
        allProperties, // Añadido
        searchProperties,
        navigateToProperty,
        getPropertyById
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};
