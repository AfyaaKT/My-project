import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Products from './components/Products/Products';
import Layout from './pages/Layout';
import { CartItemsProvider } from './components/CartItems/CartItems';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import AboutPage from './pages/About/AboutPage ';

function App() {
  return (
    <div className="App">
      <Layout>
      <CartItemsProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/signIn' element={<SignIn/>} />
        <Route path='/about' element={<AboutPage/>} />
      </Routes>
      </CartItemsProvider>
      </Layout>
      
    </div>
  );
}

export default App;
