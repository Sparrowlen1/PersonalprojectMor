// src/context/ProductContext.jsx
import React, { createContext, useContext, useState, useCallback } from 'react';

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within ProductProvider');
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(false);

  const addProduct = useCallback((product) => {
    setProducts(prev => {
      const newProduct = { ...product, id: Date.now() };
      return [...prev, newProduct];
    });
  }, []);

  const updateProduct = useCallback((updatedProduct) => {
    setProducts(prev => prev.map(p => 
      p.id === updatedProduct.id ? updatedProduct : p
    ));
  }, []);

  const deleteProduct = useCallback((id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  }, []);

  const value = {
    products,
    setProducts,
    searchTerm,
    setSearchTerm,
    store,
    setStore,
    loading,
    setLoading,
    addProduct,
    updateProduct,
    deleteProduct
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};