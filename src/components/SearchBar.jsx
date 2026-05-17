import { Search } from 'lucide-react';
import { useProducts } from '../context/ProductContext';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useProducts();

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
      <input
        type="text"
        placeholder="Search by name or origin..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-80"
      />
    </div>
  );
};

export default SearchBar;