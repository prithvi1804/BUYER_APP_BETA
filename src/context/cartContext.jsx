import { createContext, useState, useEffect } from "react";
import { getCall } from "../api/client";
import { getValueFromCookie } from "../utils/cookies";

/**
 * Context for managing shopping cart items.
 */
export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => { },
  getCartItems: () => { },
});

/**
 * Provider component for CartContext.
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components.
 */
export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const fetchCartItems = async () => {
    // For dummy implementation, we rely on local state
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  };

  const addItem = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: { count: item.quantity.count + 1 } }
            : item
        );
      }
      return [...prev, { ...product, quantity: { count: 1 } }];
    });
  };

  const updateItem = (productId, count) => {
    setCartItems((prev) => {
      if (count <= 0) {
        return prev.filter((item) => item.id !== productId);
      }
      return prev.map((item) =>
        item.id === productId ? { ...item, quantity: { count } } : item
      );
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        fetchCartItems,
        addItem,
        updateItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
