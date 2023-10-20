import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Products from './components/Products/Products';
import Layout from './pages/Layout/Layout';
import { CartItemsProvider } from './components/CartItems/CartItems';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import AboutPage from './pages/About/AboutPage ';
import ProductDetails from './pages/Product Details/ProductDetails'
import BestSeller from './components/BestSeller/BestSeller';

function App() {
  return (
    <div className="App">
  <CartItemsProvider>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/signIn' element={<SignIn/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/products/:productId' element={<ProductDetails/>} />
        <Route path='/product-details/:productId' element={<ProductDetails/>} />
        <Route path='/bestSeller' element={<BestSeller/>} />
      </Routes>
    </Layout>
  </CartItemsProvider>

    </div>
  );
}

export default App;
