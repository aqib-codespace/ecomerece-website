"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/shared/ProductCard";
import { featuredProducts } from "@/lib/mockData";

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
  const handleAddToCart = (product) => {
    console.log('Add to cart:', product);

  };

  const handleAddToWishlist = (product) => {
    console.log('Add to wishlist:', product);
  };

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
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
              motionProps={{
                variants: itemVariants,
                whileHover: { y: -8 }
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
