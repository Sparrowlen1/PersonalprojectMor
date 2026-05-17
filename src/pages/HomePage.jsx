import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useFetch } from '../hooks/useFetch';
import { useProducts } from '../context/ProductContext';
import { ShoppingBag, Truck, Shield, TrendingUp, Mail, Phone, MapPin, PlusCircle, Package, Search, DollarSign, Star, BarChart3, Sparkles } from 'lucide-react';

const HomePage = () => {
  const { data: storeData } = useFetch('store');
  const { store, setStore, products } = useProducts();
  const navigate = useNavigate();

  useEffect(() => { if (storeData) setStore(storeData); }, [storeData]);

  const totalValue = products.reduce((s, p) => s + (p.price * p.stock), 0);
  const categories = [...new Set(products.map(p => p.category))].length;

  const features = [
    { icon: PlusCircle, title: 'Add Products', desc: 'Upload new products to your store', color: 'bg-green-500', action: () => navigate('/add') },
    { icon: Package, title: 'Manage Inventory', desc: 'View and edit all products', color: 'bg-blue-500', action: () => navigate('/products') },
    { icon: Search, title: 'Smart Search', desc: 'Find products instantly', color: 'bg-purple-500', action: () => navigate('/products') },
    { icon: DollarSign, title: 'Track Sales', desc: 'Monitor revenue and profits', color: 'bg-orange-500', action: () => toast.info('Sales dashboard coming soon') },
    { icon: Star, title: 'Top Products', desc: 'View best selling items', color: 'bg-yellow-500', action: () => toast.success('Top products feature coming soon') },
    { icon: BarChart3, title: 'Analytics', desc: 'View store performance', color: 'bg-pink-500', action: () => toast.loading('Loading analytics...') }
  ];

  const services = [
    { icon: Truck, title: 'Fast Shipping', desc: '3-5 day delivery worldwide' },
    { icon: Shield, title: 'Quality Guarantee', desc: '30 day money back' },
    { icon: TrendingUp, title: 'Best Prices', desc: 'Direct from manufacturers' }
  ];

  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-center">
        <ShoppingBag size={56} className="mx-auto mb-4" />
        <h1 className="text-5xl font-bold">{store?.name}</h1>
        <p className="text-xl mt-2">{store?.tagline}</p>
        <p className="text-lg mt-4 opacity-90 max-w-2xl mx-auto">{store?.description}</p>
        
        <div className="flex justify-center gap-8 mt-8">
          <div><div className="text-3xl font-bold">{products.length}</div><div>Products</div></div>
          <div><div className="text-3xl font-bold">{categories}</div><div>Categories</div></div>
          <div><div className="text-3xl font-bold">KES {totalValue.toLocaleString()}</div><div>Inventory Value</div></div>
        </div>
      </div>

      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-center gap-8 text-gray-600">
          <div className="flex items-center gap-2"><Phone size={16} /> {store?.phone}</div>
          <div className="flex items-center gap-2"><Mail size={16} /> {store?.email}</div>
          <div className="flex items-center gap-2"><MapPin size={16} /> {store?.location}</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Sparrowlen?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition cursor-pointer" onClick={() => toast.success(`Learn more about ${s.title}`)}>
              <s.icon size={48} className="mx-auto mb-3 text-indigo-600" />
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div 
                key={i}
                onClick={f.action}
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer group"
              >
                <div className={`${f.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition`}>
                  <f.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-indigo-600 rounded-2xl p-8 text-center text-white">
          <Sparkles size={40} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Ready to start selling?</h3>
          <p className="mb-6">Manage your dropshipping business from one dashboard</p>
          <button 
            onClick={() => {
              navigate('/add');
              toast.success('Lets add your first product');
            }}
            className="bg-white text-indigo-600 px-6 py-2 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Add Your First Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;