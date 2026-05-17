import { Search, X } from 'lucide-react';
import { useProducts } from '../context/ProductContext';

const SearchBar = () => {
  const { search, setSearch } = useProducts();

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
      <input
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pl-10 pr-10 py-2 border rounded-xl w-64 focus:ring-2 focus:ring-indigo-500"
      />
      {search && (
        <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <X size={16} className="text-gray-400 hover:text-gray-600" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;