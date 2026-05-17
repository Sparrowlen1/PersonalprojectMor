import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { patchData } from '../hooks/useFetch';
import ProductForm from '../components/ProductForm';

const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, updateProduct } = useProducts();
  const product = products.find(p => p.id === parseInt(id));

  const handleSubmit = async (updatedData) => {
    try {
      const updated = await patchData('products', id, updatedData);
      updateProduct({ ...updated, id: parseInt(id) });
      navigate('/products');
    } catch (error) {
      console.error('Howdy! Failed to update product', error);
    }
  };

  if (!product) return <div className="text-center py-12">Product not found</div>;

  return <ProductForm initialData={product} onSubmit={handleSubmit} buttonText="Update Product" />;
};

export default EditProductPage;