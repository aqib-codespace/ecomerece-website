"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to cart
    addToCart: (state, action) => {
      const { product, quantity = 1 } = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ ...product, quantity });
      }
    },

    // Remove item from cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // Update item quantity
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find((item) => item.id === productId);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },

    // Clear entire cart
    clearCart: (state) => {
      state.items = [];
    },

    // Set cart items (used when loading from DB or localStorage)
    setCart: (state, action) => {
      state.items = action.payload;
    },

    // Merge guest cart with user cart (when user logs in)
    mergeCart: (state, action) => {
      const userCart = action.payload;

      userCart.forEach((userItem) => {
        const existingItem = state.items.find(
          (item) => item.id === userItem.id
        );
        if (existingItem) {
          existingItem.quantity += userItem.quantity;
        } else {
          state.items.push(userItem);
        }
      });
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) =>
  state.cart.items.reduce((count, item) => count + item.quantity, 0);
export const selectCartTotal = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
export const selectCartIsLoading = (state) => state.cart.isLoading;
export const selectCartError = (state) => state.cart.error;

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  setCart,
  mergeCart,
  setLoading,
  setError,
} = cartSlice.actions;

export default cartSlice.reducer;
