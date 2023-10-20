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
      // If the product is already in the cart and its quantity is greater than 1, decrement the quantity
      if (updatedCart[productIndex].quantity > 1) {
        updatedCart[productIndex].quantity -= 1;
        setCartItems(updatedCart);
      } else {
        // If the quantity is 1, remove the item from the cart
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
