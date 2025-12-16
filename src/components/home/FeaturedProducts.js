import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Boys Mens Silver Locket Necklace",
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviews: 128,
    image:
      "/products/locket.webp",
    category: "Fashion",
    isNew: true,
  },
  {
    id: 2,
    name: "Turkish Greek Pattern Ring",
    price: 189,
    originalPrice: null,
    rating: 4.8,
    reviews: 95,
    image:
      "/products/ring.webp",
    category: "Accessories",
    isNew: false,
  },
  {
    id: 3,
    name: "Refillable Premium Slim and Sleek Classy Windproof Lighter",
    price: 159,
    originalPrice: 199,
    rating: 4.7,
    reviews: 64,
    image:
      "/products/lighter.png",
    category: "Accessories",
    isNew: true,
  },
  {
    id: 4,
    name: "Premium Black Bracelet",
    price: 249,
    originalPrice: null,
    rating: 4.9,
    reviews: 203,
    image:
      "/products/bracelet.webp",
    category: "Fashion",
    isNew: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const FeaturedProducts = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-blue-lightest/10 to-background">
      <div className="w-full md:w-[95%] max-w-[1800px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-primary font-bold text-sm uppercase tracking-wider"
            >
              Featured Products
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mt-3"
            >
              Trending <span className="gradient-text-accent">This Week</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button className="glass-button font-semibold" asChild>
              <Link href="/shop">View All Products</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="glass-card overflow-hidden hover:border-blue-primary/30 transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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
                      className="h-10 w-10 glass-button hover:bg-orange-primary hover:text-white shadow-lg"
                      size="icon"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button className="w-full btn-primary">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>

                <div className="p-5">
                  <span className="text-xs text-blue-primary font-semibold uppercase tracking-wider">
                    {product.category}
                  </span>
                  <Link href={`/product/${product.id}`}>
                    <h3 className="font-bold text-lg mt-2 hover:text-blue-primary transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>

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
                    <span className="text-sm font-bold">{product.rating}</span>
                    <span className="text-sm text-foreground-secondary">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
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
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
