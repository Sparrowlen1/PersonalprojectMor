import { useState } from 'react';
import { Package, MapPin, DollarSign, Layers, Box, Image } from 'lucide-react';

const ProductForm = ({ initial, onSubmit, btnText }) => {
  const [form, setForm] = useState(initial || {
    name: '', description: '', origin: '', price: '', category: '', stock: '', splash: ''
  });

  const fields = [
    { name: 'name', label: 'Product Name', icon: Package, type: 'text' },
    { name: 'description', label: 'Description', icon: Layers, type: 'text' },
    { name: 'origin', label: 'Origin Country', icon: MapPin, type: 'text' },
    { name: 'price', label: 'Price (KES)', icon: DollarSign, type: 'number' },
    { name: 'category', label: 'Category', icon: Box, type: 'text' },
    { name: 'stock', label: 'Stock Quantity', icon: Package, type: 'number' },
    { name: 'splash', label: 'Image URL', icon: Image, type: 'text' }
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(form); }} className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">{btnText}</h2>
        {fields.map(f => (
          <div key={f.name} className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
            <div className="relative">
              <f.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type={f.type}
                placeholder={f.label}
                value={form[f.name]}
                onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                className="w-full pl-10 pr-3 p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                required={f.name !== 'splash'}
              />
            </div>
          </div>
        ))}
        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 mt-2">{btnText}</button>
      </form>
    </div>
  );
};

export default ProductForm;