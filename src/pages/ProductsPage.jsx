// src/pages/ProductsPage.jsx
import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { PackageOpen, Filter, Grid3x3, List } from 'lucide-react';

const ProductsPage = () => {
  const { data: fetched, loading: fetchLoading } = useFetch('products');
  const { products, setProducts, searchTerm, deleteProduct } = useProducts();
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState('all');
  const [view, setView] = useState('grid');

  useEffect(() => {
    if (fetched) setProducts(fetched);
  }, [fetched, setProducts]);

  useEffect(() => {
    let filtered = products.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (category !== 'all') {
      filtered = filtered.filter(p => p.category === category);
    }
    setFiltered(filtered);
  }, [searchTerm, products, category]);

  const categories = ['all', ...new Set(products.map(p => p.category))];

  if (fetchLoading) return (
    <div className="flex justify-center items-center h-96">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Product Catalog</h1>
          <p className="text-gray-500 text-sm mt-1">{filtered.length} products found</p>
        </div>
        <SearchBar />
      </div>

      {/* Filters Bar */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6 pb-4 border-b border-gray-200">
        <div className="flex gap-2 overflow-x-auto pb-2">
          <Filter size={18} className="text-gray-500 mt-2" />
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-xl capitalize transition whitespace-nowrap ${
                category === cat 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* View Toggle */}
        <div className="flex gap-1 bg-gray-100 rounded-xl p-1">
          <button
            onClick={() => setView('grid')}
            className={`p-2 rounded-lg transition ${view === 'grid' ? 'bg-white shadow-sm text-indigo-600' : 'text-gray-500'}`}
          >
            <Grid3x3 size={18} />
          </button>
          <button
            onClick={() => setView('list')}
            className={`p-2 rounded-lg transition ${view === 'list' ? 'bg-white shadow-sm text-indigo-600' : 'text-gray-500'}`}
          >
            <List size={18} />
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <PackageOpen size={64} className="mx-auto mb-4 text-gray-300" />
          <p className="text-lg text-gray-500">No products found</p>
          <p className="text-sm text-gray-400 mt-1">Try adjusting your search or filter</p>
        </div>
      ) : (
        <div className={`grid ${view === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} onDelete={deleteProduct} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;