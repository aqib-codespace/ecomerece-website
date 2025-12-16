"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Trash2, ShoppingCart, Star, Plus, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const initialWishlist = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: 2,
    name: "Smart Fitness Tracker",
    price: 249,
    originalPrice: null,
    rating: 4.9,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 129,
    originalPrice: 179,
    rating: 4.8,
    reviews: 256,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    inStock: false,
  },
];

export default function WishlistPage() {
  const { toast } = useToast();
  const [wishlist, setWishlist] = useState(initialWishlist);

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
    toast({
      title: "Removed from wishlist",
      description: "Item has been removed from your wishlist.",
    });
  };

  const addToCart = (item) => {
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const addAllToCart = () => {
    const inStockItems = wishlist.filter((item) => item.inStock);
    toast({
      title: "Items added to cart",
      description: `${inStockItems.length} items have been added to your cart.`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">My Wishlist</h1>
          <p className="text-muted-foreground mt-2">
            {wishlist.length} {wishlist.length === 1 ? "item" : "items"} saved
            for later
          </p>
        </div>
        {wishlist.length > 0 && (
          <Button
            variant="hero"
            onClick={addAllToCart}
            className="hidden md:flex gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            Add All to Cart
          </Button>
        )}
      </motion.div>

      {wishlist.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass rounded-2xl p-12 text-center border border-border/50"
        >
          <div className="relative inline-block mb-6">
            <Heart className="h-20 w-20 text-muted-foreground" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Save items you love to your wishlist and find them easily later.
            Start exploring our collection!
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link href="/shop" className="gap-2">
              <Plus className="h-5 w-5" />
              Explore Products
            </Link>
          </Button>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {wishlist.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ delay: index * 0.05 }}
                className="group relative"
              >
                <div className="glass-hover rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-secondary/30">
                    <Link href={`/product/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </Link>

                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                        <Button
                          variant="glass"
                          size="sm"
                          className="flex-1 backdrop-blur-xl bg-white/90 hover:bg-white text-foreground"
                          onClick={() => addToCart(item)}
                          disabled={!item.inStock}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {item.inStock ? "Add to Cart" : "Out of Stock"}
                        </Button>
                        <Button
                          variant="glass"
                          size="icon"
                          className="backdrop-blur-xl bg-white/90 hover:bg-white text-foreground"
                          asChild
                        >
                          <Link href={`/product/${item.id}`}>
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-3 right-3 p-2 rounded-xl backdrop-blur-xl bg-white/90 hover:bg-white text-destructive shadow-lg z-10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </motion.button>

                    {/* Stock Badge */}
                    {!item.inStock && (
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full backdrop-blur-xl bg-black/80 text-white text-xs font-medium">
                        Out of Stock
                      </div>
                    )}

                    {/* Discount Badge */}
                    {item.originalPrice && (
                      <div className="absolute bottom-3 left-3 px-2 py-1 rounded-lg backdrop-blur-xl bg-destructive/90 text-destructive-foreground text-xs font-bold">
                        {Math.round(
                          (1 - item.price / item.originalPrice) * 100
                        )}
                        % OFF
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <Link href={`/product/${item.id}`}>
                      <h3 className="font-semibold hover:text-primary transition-colors line-clamp-2 mb-2 min-h-[2.5rem]">
                        {item.name}
                      </h3>
                    </Link>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {item.rating}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        ({item.reviews} reviews)
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-primary">
                        ${item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${item.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Mobile Add All Button */}
      {wishlist.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden fixed bottom-6 left-4 right-4 z-40"
        >
          <Button
            variant="hero"
            onClick={addAllToCart}
            className="w-full gap-2 shadow-2xl"
            size="lg"
          >
            <ShoppingCart className="h-5 w-5" />
            Add All to Cart ({wishlist.filter((i) => i.inStock).length} items)
          </Button>
        </motion.div>
      )}
    </div>
  );
}
