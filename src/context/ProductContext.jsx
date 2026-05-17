import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [store, setStore] = useState(null);

  const add = (p) => setProducts(prev => [...prev, { ...p, id: Date.now(), price: Number(p.price) }]);
  const update = (p) => setProducts(prev => prev.map(i => i.id === p.id ? { ...p, price: Number(p.price) } : i));
  const remove = (id) => setProducts(prev => prev.filter(p => p.id !== id));

  return (
    <ProductContext.Provider value={{ products, setProducts, search, setSearch, store, setStore, add, update, remove }}>
      {children}
    </ProductContext.Provider>
  );
};