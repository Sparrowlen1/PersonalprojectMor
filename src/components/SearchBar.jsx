// src/components/SearchBar.jsx
import { Search, X } from 'lucide-react';
import { useProducts } from '../context/ProductContext';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useProducts();

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search products by name or origin..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 text-gray-700 placeholder:text-gray-400"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={16} />
          </button>
        )}
      </div>
      
      {/* Search results count */}
      {searchTerm && (
        <div className="absolute -bottom-6 left-0 text-xs text-gray-500">
          Showing results for: <span className="font-medium text-indigo-600">"{searchTerm}"</span>
        </div>
      )}
    </div>
  );
};

export default SearchBar;