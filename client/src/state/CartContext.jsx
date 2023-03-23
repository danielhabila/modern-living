import React, { createContext, useState } from "react";

export const CartContext = createContext({
  cartToggle: false,
  setCartToggle: () => {},
});

export default function CartProvider({ children }) {
  const [cartToggle, setCartToggle] = useState(false);

  const value = {
    cartToggle,
    setCartToggle,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
