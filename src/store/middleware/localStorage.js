"use client";
export const cartLocalStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  
  const state = store.getState();
  const isAuthenticated = state.user.isAuthenticated;
  
  if (!isAuthenticated) {
    const cartActions = [
      'cart/addToCart',
      'cart/removeFromCart',
      'cart/updateQuantity',
      'cart/clearCart',
      'cart/setCart',
    ];
    
    if (cartActions.includes(action.type)) {
      const cartItems = state.cart.items;
      localStorage.setItem('guestCart', JSON.stringify(cartItems));
    }
  }
  
  return result;
};

export const wishlistLocalStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  
  const state = store.getState();
  const isAuthenticated = state.user.isAuthenticated;
  
  if (!isAuthenticated) {
    const wishlistActions = [
      'wishlist/addToWishlist',
      'wishlist/removeFromWishlist',
      'wishlist/toggleWishlist',
      'wishlist/clearWishlist',
      'wishlist/setWishlist',
    ];
    
    if (wishlistActions.includes(action.type)) {
      const wishlistItems = state.wishlist.items;
      localStorage.setItem('guestWishlist', JSON.stringify(wishlistItems));
    }
  }
  
  return result;
};
