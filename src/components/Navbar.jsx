import { NavLink } from 'react-router-dom';
import { Home, Package, PlusCircle, ShoppingBag, Users } from 'lucide-react';

const Navbar = () => {
  const links = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/products', label: 'Products', icon: Package },
    { to: '/add', label: 'Add', icon: PlusCircle }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <ShoppingBag className="text-white" size={22} />
            </div>
            <div>
              <span className="font-bold text-xl text-gray-800">Sparrowlen</span>
              <span className="text-xs text-gray-500 block -mt-1">Dropshipping</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            {links.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                    isActive 
                      ? 'bg-indigo-50 text-indigo-700 font-semibold' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-indigo-600'
                  }`
                }
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{label}</span>
              </NavLink>
            ))}
            
            <div className="ml-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                <Users size={16} className="text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700 hidden md:inline">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;