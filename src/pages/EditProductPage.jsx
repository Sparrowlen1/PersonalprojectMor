import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { patch } from '../hooks/useFetch';
import ProductForm from '../components/ProductForm';

const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, update } = useProducts();
  const product = products.find(p => p.id === parseInt(id));

  const handleSubmit = async (data) => {
    const updatedData = { ...data, price: Number(data.price), stock: Number(data.stock) };
    const updated = await patch('products', id, updatedData);
    update({ ...updated, id: parseInt(id), price: Number(updated.price) });
    navigate('/products');
  };

  if (!product) return <div className="text-center py-20">Loading...</div>;
  return <ProductForm initial={product} onSubmit={handleSubmit} btnText="Update Product (KES)" />;
};

export default EditProductPage;