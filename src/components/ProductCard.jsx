// src/components/ProductCard.jsx
import { Link } from 'react-router-dom';
import { Edit, Trash2, MapPin, DollarSign, Package, AlertCircle } from 'lucide-react';

const ProductCard = ({ product, onDelete }) => {
  const lowStock = product.stock < 10;
  
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
      <div className="relative h-52 overflow-hidden bg-gray-100">
        <img 
          src={product.splash} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400';
          }}
        />
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-semibold text-gray-700 shadow-sm">
          {product.category}
        </div>
        {lowStock && (
          <div className="absolute bottom-3 left-3 bg-red-500 text-white px-2 py-1 rounded-lg text-xs flex items-center gap-1">
            <AlertCircle size={12} /> Low Stock
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">{product.name}</h3>
        
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <MapPin size={14} />
          <span>{product.origin}</span>
          <span className="text-gray-300">|</span>
          <Package size={14} />
          <span className={lowStock ? 'text-red-500 font-medium' : ''}>
            Stock: {product.stock}
          </span>
        </div>
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <div className="flex items-baseline gap-0.5">
            <DollarSign size={16} className="text-indigo-600" />
            <span className="text-2xl font-bold text-indigo-600">{product.price}</span>
          </div>
          
          <div className="flex gap-2">
            <Link
              to={`/edit-product/${product.id}`}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition text-sm font-medium"
            >
              <Edit size={14} /> Edit
            </Link>
            <button
              onClick={() => onDelete?.(product.id)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition text-sm font-medium"
            >
              <Trash2 size={14} /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;