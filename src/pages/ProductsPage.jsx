import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useFetch } from '../hooks/useFetch';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { del } from '../hooks/useFetch';
import { Filter, PackageOpen } from 'lucide-react';

const ProductsPage = () => {
  const { data: fetched } = useFetch('products');
  const { products, setProducts, search, remove } = useProducts();
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState('all');

  useEffect(() => { if (fetched) setProducts(fetched); }, [fetched]);
  useEffect(() => {
    let filtered = products.filter(p => 
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.origin.toLowerCase().includes(search.toLowerCase())
    );
    if (category !== 'all') {
      filtered = filtered.filter(p => p.category === category);
    }
    setFiltered(filtered);
  }, [search, products, category]);

  const handleDelete = async (id) => {
    const product = products.find(p => p.id === id);
    toast.promise(
      del('products', id).then(() => remove(id)),
      {
        loading: 'Deleting product...',
        success: `${product?.name} deleted successfully`,
        error: 'Failed to delete product'
      }
    );
  };

  const categories = ['all', ...new Set(products.map(p => p.category))];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h1 className="text-3xl font-bold">Products</h1>
        <SearchBar />
      </div>
      
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <Filter size={18} className="text-gray-500 mt-2" />
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat);
              toast.info(`Filtering by ${cat}`, { duration: 1000 });
            }}
            className={`px-4 py-2 rounded-xl capitalize transition ${category === cat ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => <ProductCard key={p.id} product={p} onDelete={handleDelete} />)}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <PackageOpen size={48} className="mx-auto mb-3" />
          <p>HowdyNo products found</p>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;