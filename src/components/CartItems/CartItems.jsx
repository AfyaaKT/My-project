import React, { createContext, useState } from 'react';

const Context = createContext();

export const CartItemsProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isAdded, setIsAdded] = useState({});
  const [cartCount, setCartCount] = useState(0);



  const addToFavorites = (product) => {
    setFavoriteItems([...favoriteItems, product]);
  };

  const removeFromFavorites = (index) => {
    const updatedFavorites = [...favoriteItems];
    updatedFavorites.splice(index, 1);
    setFavoriteItems(updatedFavorites);
  };

  const addToCart = (product) => {

    const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {

      const updatedCart = [...cartItems];
      updatedCart[existingProductIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {

      setCartItems([...cartItems, { ...product, quantity: 1 }]);

      setCartCount((prevCount) => prevCount + 1);

      setIsAdded((prevState) => ({
        ...prevState,
        [product.id]: true,
      }));

    }
  };

  
  const removeFromCart = (productId) => {
    const updatedCart = [...cartItems];
    const productIndex = updatedCart.findIndex((item) => item.id === productId);
  
    if (productIndex !== -1) {

      if (updatedCart[productIndex].quantity > 1) {
        updatedCart[productIndex].quantity -= 1;
        setCartItems(updatedCart);
      } else {

        updatedCart.splice(productIndex, 1);
        setCartItems(updatedCart);
      }
      const updatedCartCount = updatedCart.reduce(
        (count, item) => count + item.quantity,
        0
      );
      setCartCount(updatedCartCount);
      setIsAdded((prevState) => ({
        ...prevState,
        [productId]: false,
      }));
    }
  };
  

  return (
    <Context.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart,isAdded ,cartCount , favoriteItems, addToFavorites, removeFromFavorites }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
