import { createContext } from "react";
import { useState } from "react";

const Context = createContext();

export const CartItemsProvider = ({children}) => {

    const [cartItems, setCartItems]=useState([])

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
      };

      const removeFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
      };  

    return(
        <Context.Provider value={{cartItems , setCartItems , addToCart , removeFromCart}}>
            {children}
        </Context.Provider>
    )
}
export default Context;