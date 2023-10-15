import React, { createContext, useState } from 'react';

const Context = createContext();

export const CartItemsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addToFavorites = (product) => {
    setFavoriteItems([...favoriteItems, product]);
  };

  const removeFromFavorites = (index) => {
    const updatedFavorites = [...favoriteItems];
    updatedFavorites.splice(index, 1);
    setFavoriteItems(updatedFavorites);
  };

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      // If the product already exists, update its quantity
      const updatedCart = [...cartItems];
      updatedCart[existingProductIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

   const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <Context.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart, favoriteItems, addToFavorites, removeFromFavorites }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
