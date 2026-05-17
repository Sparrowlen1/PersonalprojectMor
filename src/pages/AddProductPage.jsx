import { useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { postData } from '../hooks/useFetch';
import ProductForm from '../components/ProductForm';

const AddProductPage = () => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const newProduct = await postData('products', data);
      addProduct(newProduct);
      navigate('/products');
    } catch (error) {
      console.error('Howdy! Failed to add product', error);
    }
  };

  return <ProductForm onSubmit={handleSubmit} buttonText="Add Product" />;
};

export default AddProductPage;