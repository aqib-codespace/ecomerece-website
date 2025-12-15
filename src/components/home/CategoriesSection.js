import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Electronics",
    itemCount: 245,
    image:
      "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Fashion",
    itemCount: 189,
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Accessories",
    itemCount: 156,
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Home & Living",
    itemCount: 312,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
  },
];

export const CategoriesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-orange-primary/5 to-background">
      <div className="w-full md:w-[95%] max-w-[1800px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-primary font-bold text-sm uppercase tracking-wider"
          >
            Browse Categories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mt-3"
          >
            Shop by <span className="gradient-text-accent">Category</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/shop?category=${category.name.toLowerCase()}`}
                className="group block relative h-72 md:h-80 rounded-3xl overflow-hidden"
              >
                {/* Background Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-end justify-between">
                    <div className="transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 transition-all duration-300 group-hover:text-blue-lightest">
                        {category.name}
                      </h3>
                      <p className="text-white/80 font-medium transition-all duration-300 group-hover:text-white">
                        {category.itemCount} Products
                      </p>
                    </div>
                    <div className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-blue-primary group-hover:border-blue-primary group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-primary/50">
                      <ArrowUpRight className="h-6 w-6 text-white/80 group-hover:text-white transition-all duration-300 group-hover:rotate-45" />
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-primary rounded-3xl transition-all duration-300 pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
