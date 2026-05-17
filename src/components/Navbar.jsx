import { NavLink } from 'react-router-dom';
import { Coffee, Home, Package, PlusCircle } from 'lucide-react';

const Navbar = () => {
  const links = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/products', label: 'Products', icon: Package },
    { to: '/add-product', label: 'Add Product', icon: PlusCircle }
  ];

  return (
    <nav className="bg-gradient-to-r from-amber-900 to-amber-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Coffee size={28} />
            <h1 className="text-xl font-bold">Coffee R Us Admin</h1>
          </div>
          <div className="flex gap-6">
            {links.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-orange-600' : 'hover:bg-amber-700'}`
                }
              >
                <Icon size={18} />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;