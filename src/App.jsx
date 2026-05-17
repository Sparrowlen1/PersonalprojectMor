import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="/edit-product/:id" element={<EditProductPage />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;