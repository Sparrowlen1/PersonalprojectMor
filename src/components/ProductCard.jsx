import { Link } from 'react-router-dom';
import { Edit, Trash2, MapPin, Tag } from 'lucide-react';

const ProductCard = ({ product, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
          <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{product.category}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <MapPin size={14} />
          <span>{product.origin}</span>
        </div>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-1">
            <Tag size={16} className="text-orange-600" />
            <span className="text-2xl font-bold text-orange-600">${product.price}</span>
          </div>
          <div className="flex gap-2">
            <Link
              to={`/edit-product/${product.id}`}
              className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
            >
              <Edit size={14} /> Edit
            </Link>
            <button
              onClick={() => onDelete?.(product.id)}
              className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
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