// src/components/ProductForm.jsx
import { useState } from 'react';
import { Package, MapPin, DollarSign, Layers, Box, Image as ImageIcon } from 'lucide-react';

const ProductForm = ({ initialData, onSubmit, buttonText }) => {
  const [form, setForm] = useState(initialData || {
    name: '', description: '', origin: '', price: '', category: '', stock: '', splash: ''
  });

  const fields = [
    { name: 'name', label: 'Product Name', icon: Package, type: 'text', placeholder: 'Wireless Headphones' },
    { name: 'description', label: 'Description', icon: Layers, type: 'text', placeholder: 'Product details...' },
    { name: 'origin', label: 'Origin Country', icon: MapPin, type: 'text', placeholder: 'China, Vietnam, etc.' },
    { name: 'price', label: 'Price (USD)', icon: DollarSign, type: 'number', step: '0.01', placeholder: '49.99' },
    { name: 'category', label: 'Category', icon: Box, type: 'text', placeholder: 'Electronics, Accessories' },
    { name: 'stock', label: 'Stock Quantity', icon: Box, type: 'number', placeholder: '100' },
    { name: 'splash', label: 'Image URL', icon: ImageIcon, type: 'text', placeholder: 'https://images.unsplash.com/...' }
  ];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form, price: parseFloat(form.price), stock: parseInt(form.stock) });
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{buttonText}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map(({ name, label, icon: Icon, ...props }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
              <div className="relative">
                <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  {...props}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  required={name !== 'splash'}
                  className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
          ))}
          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition font-semibold">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;