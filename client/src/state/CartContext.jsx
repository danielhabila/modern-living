import React, { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartToggle, setCartToggle] = useState(false);

  const value = {
    cartToggle,
    setCartToggle,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>; // this cart provider is essentially saying any component we wrap around is gonna have access to the date in the value
}

export default CartContext;
