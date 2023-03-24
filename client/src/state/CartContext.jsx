import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider(props) {
  const [cartToggle, setCartToggle] = useState(false);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (open === false) {
      setCartToggle(false);
      setOpen(true);
    }
  }, [open]);

  const value = {
    cartToggle,
    setCartToggle,
    open,
    setOpen,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  ); // this cart provider is essentially saying any component we wrap around is gonna have access to the data in the value
}

export default CartProvider;
