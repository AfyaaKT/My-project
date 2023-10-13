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
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <Context.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart, favoriteItems, addToFavorites, removeFromFavorites }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
