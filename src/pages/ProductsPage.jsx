import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { PackageOpen } from 'lucide-react';

const ProductsPage = () => {
  const { data: fetched, loading } = useFetch('products');
  const { products, setProducts, searchTerm } = useProducts();
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (fetched) setProducts(fetched);
  }, [fetched, setProducts]);

  useEffect(() => {
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.origin.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltered(filtered);
  }, [searchTerm, products]);

  if (loading) return <div className="flex justify-center items-center h-64">Loading...</div>;

  if (filtered.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Products</h1>
          <SearchBar />
        </div>
        <div className="text-center py-12 text-gray-500">
          <PackageOpen size={48} className="mx-auto mb-3" />
          <p>Well Howdy there it seems like there were no products found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Products</h1>
        <SearchBar />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;