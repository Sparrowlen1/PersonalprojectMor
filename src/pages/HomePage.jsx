// src/pages/HomePage.jsx
import { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useProducts } from '../context/ProductContext';
import { ShoppingBag, Package, PlusCircle, Search, Mail, TrendingUp, Truck, Shield } from 'lucide-react';

const HomePage = () => {
  const { data: storeData, loading } = useFetch('store');
  const { store, setStore, products } = useProducts();

  useEffect(() => {
    if (storeData) setStore(storeData);
  }, [storeData, setStore]);

  const totalValue = products.reduce((sum, p) => sum + (p.price * p.stock), 0).toFixed(2);
  const categories = [...new Set(products.map(p => p.category))].length;

  if (loading) return (
    <div className="flex justify-center items-center h-96">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>
  );

  return (
    <div>
      {/* Hero Section with Splash Image */}
      <div 
        className="relative bg-cover bg-center h-[500px] flex items-center"
        style={{ backgroundImage: `url(${store?.splash})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <ShoppingBag size={56} className="mx-auto mb-4 text-indigo-400" />
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{store?.name}</h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90">{store?.tagline}</p>
          <p className="text-lg max-w-2xl mx-auto opacity-80">{store?.description}</p>
          
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold">{products.length}</div>
              <div className="text-sm opacity-90">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">${totalValue}</div>
              <div className="text-sm opacity-90">Inventory Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{categories}</div>
              <div className="text-sm opacity-90">Categories</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Sparrowlen?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Truck, title: 'Fast Shipping', desc: 'Global delivery within 5-7 business days' },
            { icon: Shield, title: 'Quality Guarantee', desc: '30 day money back guarantee' },
            { icon: TrendingUp, title: 'Best Prices', desc: 'Direct from manufacturers' }
          ].map((feature, i) => (
            <div key={i} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition">
              <feature.icon size={48} className="mx-auto mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Admin Features */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Admin Dashboard</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: PlusCircle, title: 'Add Products', desc: 'Upload new products to your store', color: 'bg-green-500' },
              { icon: Package, title: 'Manage Inventory', desc: 'Update stock and pricing', color: 'bg-blue-500' },
              { icon: Search, title: 'Smart Search', desc: 'Find products instantly', color: 'bg-purple-500' }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
                <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-indigo-600 rounded-2xl p-8 text-center text-white">
          <Mail size={40} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Need Help?</h3>
          <p className="mb-4">Contact our support team</p>
          <a href={`mailto:${store?.email}`} className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-2 rounded-xl font-semibold hover:bg-gray-100 transition">
            <Mail size={18} /> {store?.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;