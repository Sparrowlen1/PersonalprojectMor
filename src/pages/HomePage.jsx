import { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useProducts } from '../context/ProductContext';
import { Coffee, Package, PlusCircle, Search, Phone } from 'lucide-react';

const HomePage = () => {
  const { data: storeData, loading } = useFetch('store');
  const { store, setStore, products } = useProducts();

  useEffect(() => {
    if (storeData) setStore(storeData);
  }, [storeData, setStore]);

  const totalValue = products.reduce((sum, p) => sum + p.price, 0).toFixed(2);
  const categories = [...new Set(products.map(p => p.category))].length;

  if (loading) return <div className="flex justify-center items-center h-64">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Coffee size={48} className="mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">HOWDY WELCOME TO {store?.name}</h1>
          <p className="text-xl mb-8 opacity-90">{store?.description}</p>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold">{products.length}</div>
              <div className="text-sm opacity-90">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">${totalValue}</div>
              <div className="text-sm opacity-90">Total Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{categories}</div>
              <div className="text-sm opacity-90">Categories</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Howdy My Friend here youll find Store Information</h2>
          <div className="flex items-center gap-2 text-gray-600">
            <Phone size={18} />
            <span>{store?.phone}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: PlusCircle, title: 'Add Products', desc: 'Easily add new coffee products' },
            { icon: Package, title: 'Edit Inventory', desc: 'Update product details and pricing' },
            { icon: Search, title: 'Search & Filter', desc: 'Quickly find products by name' }
          ].map((feature, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
              <feature.icon size={48} className="mx-auto mb-3 text-amber-700" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;