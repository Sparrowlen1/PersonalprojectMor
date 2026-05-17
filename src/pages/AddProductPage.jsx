import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useProducts } from '../context/ProductContext';
import { post } from '../hooks/useFetch';
import ProductForm from '../components/ProductForm';

const AddProductPage = () => {
  const { add } = useProducts();
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    const productData = { ...data, price: Number(data.price), stock: Number(data.stock) };
    
    toast.promise(
      post('products', productData).then(newProduct => {
        add(newProduct);
        navigate('/products');
      }),
      {
        loading: 'Adding product...',
        success: `${productData.name} added successfully`,
        error: 'Failed to add product'
      }
    );
  };

  return <ProductForm initial={null} onSubmit={handleSubmit} btnText="Add Product" />;
};

export default AddProductPage;