import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [store, setStore] = useState(null);

  const addProduct = (product) => {
    setProducts(prev => [...prev, { ...product, id: Date.now() }]);
  };

  const updateProduct = (updated) => {
    setProducts(prev => prev.map(p => p.id === updated.id ? updated : p));
  };

  return (
    <ProductContext.Provider value={{
      products, setProducts,
      searchTerm, setSearchTerm,
      store, setStore,
      addProduct, updateProduct
    }}>
      {children}
    </ProductContext.Provider>
  );
};