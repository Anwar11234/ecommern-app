import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route , Routes} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useSelector } from "react-redux";
import NewProduct from './pages/NewProduct';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import AdminDashboard from './pages/AdminDashboard';
import EditProductPage from './pages/EditProductPage';

function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navigation/>
        <Routes>
          <Route index element={<Home/>}/>
          {!user && (
              <>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
              </>
          )}
          {user && <Route path="/cart" element={<CartPage />} />}
          {user && user.isAdmin && 
            <>
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/product/:id/edit" element={<EditProductPage />} />
            </>
          }
          <Route path='*' element={<Home/>}/>
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/new-product" element={<NewProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
