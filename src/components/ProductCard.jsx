import { Link } from 'react-router-dom';
import { Edit, Trash2, MapPin, Package, TrendingUp } from 'lucide-react';

const ProductCard = ({ product, onDelete }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
    <img src={product.splash} alt={product.name} className="h-40 w-full object-cover" />
    <div className="p-4">
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full flex items-center gap-1">
          <Package size={10} /> {product.category}
        </span>
      </div>
      <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
        <MapPin size={14} /> {product.origin} • <TrendingUp size={12} /> Stock: {product.stock}
      </div>
      <p className="text-gray-500 text-sm mt-2 line-clamp-2">{product.description}</p>
      <div className="flex justify-between items-center mt-3">
        <div>
          <span className="text-xs text-gray-500">KES</span>
          <span className="text-2xl font-bold text-indigo-600 ml-1">{product.price.toLocaleString()}</span>
        </div>
        <div className="flex gap-2">
          <Link to={`/edit/${product.id}`} className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Edit size={16} /></Link>
          <button onClick={() => onDelete(product.id)} className="p-2 bg-red-50 text-red-600 rounded-lg"><Trash2 size={16} /></button>
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;