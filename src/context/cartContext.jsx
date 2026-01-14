import { createContext, useState, useEffect } from "react";
import { getCall } from "../api/client";
import { getValueFromCookie } from "../utils/cookies";

/**
 * Context for managing shopping cart items.
 */
export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
  getCartItems: () => {},
});

/**
 * Provider component for CartContext.
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components.
 */
export function CartContextProvider({ children }) {
  let user = {};
  const userCookie = getValueFromCookie("user");

  if (userCookie) {
    try {
      user = JSON.parse(userCookie);
    } catch (error) {
      console.log("Error parsing user cookie:", error);
    }
  }

  const [cartItems, setCartItems] = useState([]);

  const getCartItems = async () => {
    // Mock cart fetch
    setCartItems([]);
  };

  useEffect(() => {
    if (!!Object.keys(user).length) getCartItems();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        fetchCartItems: getCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
