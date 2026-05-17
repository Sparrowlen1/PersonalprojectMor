import { useState } from 'react';
import { Package, MapPin, DollarSign, Layers, Box } from 'lucide-react';

const ProductForm = ({ initialData, onSubmit, buttonText }) => {
  const [form, setForm] = useState(initialData || {
    name: '', description: '', origin: '', price: '', category: 'Medium Roast', stock: ''
  });

  const fields = [
    { name: 'name', label: 'Product Name', icon: Package, type: 'text', required: true },
    { name: 'description', label: 'Description', icon: Layers, type: 'text', required: true },
    { name: 'origin', label: 'Origin', icon: MapPin, type: 'text', required: true },
    { name: 'price', label: 'Price', icon: DollarSign, type: 'number', step: '0.01', required: true },
    { name: 'category', label: 'Category', icon: Box, type: 'text' },
    { name: 'stock', label: 'Stock', icon: Box, type: 'number', required: true }
  ];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form, price: parseFloat(form.price), stock: parseInt(form.stock) });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{buttonText}</h2>
      <div className="space-y-4">
        {fields.map(({ name, label, icon: Icon, ...props }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {label}
            </label>
            <div className="relative">
              <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                {...props}
                name={name}
                value={form[name]}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
        ))}
        <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors">
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;