"use client";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@/hooks/use-toast";
import {
  addToWishlist as addToWishlistAction,
  removeFromWishlist as removeFromWishlistAction,
  toggleWishlist as toggleWishlistAction,
  selectWishlistItems,
  selectWishlistCount,
  selectIsInWishlist,
  selectWishlistIsLoading,
} from "@/store/slices/wishlistSlice";
import { selectIsAuthenticated, selectUser } from "@/store/slices/userSlice";

export function useWishlistActions() {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  const addToWishlist = (product) => {
    dispatch(addToWishlistAction(product));

    toast({
      variant: "success",
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });

    if (isAuthenticated && user) {
      syncWishlistToDatabase(user.id);
    }
  };

  const removeFromWishlist = (productId) => {
    dispatch(removeFromWishlistAction(productId));

    toast({
      variant: "success",
      title: "Removed from wishlist",
      description: "Item has been removed from your wishlist.",
    });

    if (isAuthenticated && user) {
      syncWishlistToDatabase(user.id);
    }
  };

  const toggleWishlist = (product) => {
    const isInWishlist = selectIsInWishlist(product.id);
    dispatch(toggleWishlistAction(product));

    toast({
      variant: "success",
      title: isInWishlist ? "Removed from wishlist" : "Added to wishlist",
      description: isInWishlist
        ? "Item has been removed from your wishlist."
        : `${product.name} has been added to your wishlist.`,
    });

    if (isAuthenticated && user) {
      syncWishlistToDatabase(user.id);
    }
  };

  return {
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
  };
}

export function useWishlist() {
  const items = useSelector(selectWishlistItems);
  const count = useSelector(selectWishlistCount);
  const isLoading = useSelector(selectWishlistIsLoading);

  return {
    wishlist: items,
    wishlistCount: count,
    isLoading,
    isInWishlist: (productId) => items.some((item) => item.id === productId),
  };
}

async function syncWishlistToDatabase(userId) {
  // Example API call structure:
  // try {
  //   await fetch('/api/wishlist', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ userId, wishlist: items }),
  //   });
  // } catch (error) {
  //   console.error('Failed to sync wishlist:', error);
  // }
  console.log("TODO: Sync wishlist to database for user:", userId);
}
