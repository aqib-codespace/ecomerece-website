"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProductCardList = ({
  product,
  onAddToCart,
  onAddToWishlist,
  motionProps = {},
}) => {
  const router = useRouter();

  const handleCardClick = (e) => {
    if (e.target.closest("button")) {
      return;
    }

    router.push(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  const handleAddToWishlist = (e) => {
    e.stopPropagation();
    if (onAddToWishlist) {
      onAddToWishlist(product);
    }
  };

  return (
    <motion.div
      {...motionProps}
      onClick={handleCardClick}
      className="group cursor-pointer"
    >
      <div className="glass-card overflow-hidden flex hover:border-blue-primary/30 transition-all duration-300">
        <div className="relative w-56 shrink-0 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <span className="px-3 py-1.5 bg-gradient-accent text-white text-xs font-bold rounded-lg shadow-lg animate-pulse">
                NEW
              </span>
            )}
            {product.originalPrice && (
              <span className="px-3 py-1.5 bg-gradient-primary text-white text-xs font-bold rounded-lg shadow-lg">
                SALE
              </span>
            )}
          </div>

          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <Button
              onClick={handleAddToWishlist}
              variant="secondary"
              size="icon"
              className="h-10 w-10 glass-button hover:bg-blue-primary hover:text-white shadow-lg"
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="p-5 flex-1">
          <span className="text-xs text-blue-primary font-semibold uppercase tracking-wider">
            {product.category}
          </span>
          <h3 className="font-bold text-lg mt-2 hover:text-blue-primary transition-colors line-clamp-1">
            {product.name}
          </h3>

          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-orange-primary text-orange-primary"
                      : "fill-gray-light text-gray-light"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-semibold">{product.rating}</span>
            <span className="text-sm text-foreground-secondary">
              ({product.reviews})
            </span>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <span className="text-2xl font-bold gradient-text">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-foreground-secondary line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <Button
            onClick={handleAddToCart}
            className="w-full mt-5 bg-gradient-primary hover:shadow-glow-blue transition-all duration-300"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
