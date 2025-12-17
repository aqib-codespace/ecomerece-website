"use client";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@/hooks/use-toast";
import {
  addToCart as addToCartAction,
  removeFromCart as removeFromCartAction,
  updateQuantity as updateQuantityAction,
  clearCart as clearCartAction,
  selectCartItems,
  selectCartCount,
  selectCartTotal,
  selectCartIsLoading,
} from "@/store/slices/cartSlice";
import { selectIsAuthenticated, selectUser } from "@/store/slices/userSlice";

/**
 * Custom hook for cart operations with toast notifications
 */
export function useCartActions() {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  const addToCart = (product, quantity = 1) => {
    dispatch(addToCartAction({ product, quantity }));

    toast({
      variant: "success",
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });

    // TODO: If authenticated, sync to database
    if (isAuthenticated && user) {
      syncCartToDatabase(user.id);
    }
  };

  const removeFromCart = (productId) => {
    dispatch(removeFromCartAction(productId));

    toast({
      variant: "success",
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
    });

    // TODO: If authenticated, sync to database
    if (isAuthenticated && user) {
      syncCartToDatabase(user.id);
    }
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;

    dispatch(updateQuantityAction({ productId, quantity }));

    // TODO: If authenticated, sync to database
    if (isAuthenticated && user) {
      syncCartToDatabase(user.id);
    }
  };

  const clearCart = () => {
    dispatch(clearCartAction());

    toast({
      variant: "success",
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });

    // TODO: If authenticated, sync to database
    if (isAuthenticated && user) {
      syncCartToDatabase(user.id);
    }
  };

  return {
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };
}

/**
 * Custom hook for cart selectors
 */
export function useCart() {
  const items = useSelector(selectCartItems);
  const count = useSelector(selectCartCount);
  const total = useSelector(selectCartTotal);
  const isLoading = useSelector(selectCartIsLoading);

  return {
    cart: items,
    cartCount: count,
    cartTotal: total,
    isLoading,
  };
}

/**
 * TODO: Sync cart to database (to be implemented when API is ready)
 */
async function syncCartToDatabase(userId) {
  // Example API call structure:
  // try {
  //   await fetch('/api/cart', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ userId, cart: items }),
  //   });
  // } catch (error) {
  //   console.error('Failed to sync cart:', error);
  // }
  console.log("TODO: Sync cart to database for user:", userId);
}
