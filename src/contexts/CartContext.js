"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const CartContext = createContext({});

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      let newCart;
      if (existingItem) {
        newCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newCart = [...prevCart, { ...product, quantity }];
      }

      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((item) => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });

    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;

    setCart((prevCart) => {
      const newCart = prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
