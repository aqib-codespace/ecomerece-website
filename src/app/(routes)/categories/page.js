"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Laptop,
  Watch,
  Glasses,
  Home as HomeIcon,
  Shirt,
  Headphones,
  Camera,
  Gamepad2,
  Book,
  Dumbbell,
  Coffee,
  Baby,
  ArrowRight,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

export default function CategoriesPage() {
  const mainCategories = [
    {
      name: "Electronics",
      icon: Laptop,
      description: "Latest gadgets and tech",
      count: "250+ Products",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=400&fit=crop",
      color: "blue",
      subcategories: ["Laptops", "Smartphones", "Tablets", "Accessories"],
    },
    {
      name: "Fashion",
      icon: Shirt,
      description: "Trendy apparel & accessories",
      count: "180+ Products",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop",
      color: "orange",
      subcategories: ["Men's Wear", "Women's Wear", "Kids", "Shoes"],
    },
    {
      name: "Accessories",
      icon: Watch,
      description: "Premium watches & jewelry",
      count: "120+ Products",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop",
      color: "blue",
      subcategories: ["Watches", "Sunglasses", "Bags", "Jewelry"],
    },
    {
      name: "Home & Living",
      icon: HomeIcon,
      description: "Beautiful home essentials",
      count: "200+ Products",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop",
      color: "orange",
      subcategories: ["Furniture", "Decor", "Kitchen", "Lighting"],
    },
    {
      name: "Audio",
      icon: Headphones,
      description: "Premium sound experience",
      count: "95+ Products",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
      color: "blue",
      subcategories: ["Headphones", "Speakers", "Earbuds", "Accessories"],
    },
    {
      name: "Eyewear",
      icon: Glasses,
      description: "Stylish glasses & sunglasses",
      count: "85+ Products",
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop",
      color: "orange",
      subcategories: ["Sunglasses", "Eyeglasses", "Sports", "Kids"],
    },
    {
      name: "Photography",
      icon: Camera,
      description: "Capture every moment",
      count: "110+ Products",
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=400&fit=crop",
      color: "blue",
      subcategories: ["Cameras", "Lenses", "Tripods", "Accessories"],
    },
    {
      name: "Gaming",
      icon: Gamepad2,
      description: "Level up your game",
      count: "140+ Products",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&h=400&fit=crop",
      color: "orange",
      subcategories: ["Consoles", "Games", "Controllers", "Accessories"],
    },
    {
      name: "Books & Media",
      icon: Book,
      description: "Knowledge & entertainment",
      count: "300+ Products",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
      color: "blue",
      subcategories: ["Books", "E-readers", "Audiobooks", "Magazines"],
    },
    {
      name: "Sports & Fitness",
      icon: Dumbbell,
      description: "Stay active & healthy",
      count: "160+ Products",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
      color: "orange",
      subcategories: ["Equipment", "Apparel", "Nutrition", "Accessories"],
    },
    {
      name: "Kitchen & Dining",
      icon: Coffee,
      description: "Culinary excellence",
      count: "175+ Products",
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop",
      color: "blue",
      subcategories: ["Appliances", "Cookware", "Tableware", "Storage"],
    },
    {
      name: "Baby & Kids",
      icon: Baby,
      description: "Everything for little ones",
      count: "190+ Products",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop",
      color: "orange",
      subcategories: ["Toys", "Clothing", "Nursery", "Safety"],
    },
  ];

  const trendingCategories = [
    { name: "Smart Watches", growth: "+45%", icon: Watch },
    { name: "Wireless Earbuds", growth: "+38%", icon: Headphones },
    { name: "Home Office", growth: "+52%", icon: HomeIcon },
    { name: "Gaming Gear", growth: "+41%", icon: Gamepad2 },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-lightest/20 via-background to-orange-primary/5">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-primary/20 rounded-full blur-[128px] animate-float" />
          <div
            className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-primary/20 rounded-full blur-[128px] animate-float"
            style={{ animationDelay: "1s" }}
          />

          <div className="w-full md:w-[90%] max-w-[1800px] mx-auto px-4 md:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-5 py-2.5 glass-card mb-8"
              >
                <Sparkles className="h-5 w-5 text-orange-primary animate-pulse" />
                <span className="text-sm font-semibold text-blue-primary">
                  Browse by Category
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Explore Our{" "}
                <span className="gradient-text">Premium Collection</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
                Discover thousands of carefully curated products across all
                categories. From electronics to fashion, we've got everything
                you need.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trending Categories */}
        <section className="py-12">
          <div className="w-full md:w-[90%] max-w-[1800px] mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-6 w-6 text-orange-primary" />
                <h2 className="text-2xl font-bold">
                  Trending <span className="text-orange-primary">Now</span>
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {trendingCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="glass p-4 rounded-xl border border-blue-primary/20 hover:border-orange-primary/40 transition-all group cursor-pointer"
                  >
                    <category.icon className="h-8 w-8 text-blue-primary mb-2 group-hover:text-orange-primary transition-colors" />
                    <p className="text-sm font-semibold mb-1">
                      {category.name}
                    </p>
                    <span className="text-xs text-orange-primary font-bold">
                      {category.growth}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Categories Grid */}
        <section className="py-12">
          <div className="w-full md:w-[90%] max-w-[1800px] mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Shop by <span className="gradient-text">Category</span>
              </h2>
              <p className="text-center text-foreground-secondary">
                Find exactly what you're looking for
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Link href={`/shop?category=${category.name}`}>
                    <div className="glass-card overflow-hidden h-full">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                        {/* Icon Overlay */}
                        <div
                          className={`absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            category.color === "blue"
                              ? "bg-blue-primary/20 group-hover:bg-blue-primary"
                              : "bg-orange-primary/20 group-hover:bg-orange-primary"
                          }`}
                        >
                          <category.icon className="h-6 w-6 text-white" />
                        </div>

                        {/* Product Count */}
                        <div className="absolute bottom-4 left-4">
                          <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-xs font-bold rounded-lg">
                            {category.count}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3
                          className={`text-xl font-bold mb-2 transition-colors ${
                            category.color === "blue"
                              ? "group-hover:text-blue-primary"
                              : "group-hover:text-orange-primary"
                          }`}
                        >
                          {category.name}
                        </h3>
                        <p className="text-sm text-foreground-secondary mb-4">
                          {category.description}
                        </p>

                        {/* Subcategories */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {category.subcategories.map((sub, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2 py-1 bg-gray-light/50 rounded-md text-gray-dark"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>

                        {/* Button */}
                        <div
                          className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                            category.color === "blue"
                              ? "text-blue-primary"
                              : "text-orange-primary"
                          }`}
                        >
                          <span>Browse {category.name}</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="w-full md:w-[90%] max-w-[1800px] mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="glass-card p-12 md:p-16 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-primary/10 to-orange-primary/10" />
              <div className="relative z-10">
                <Sparkles className="h-16 w-16 text-orange-primary mx-auto mb-6 animate-pulse" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Can't Find What You're Looking For?
                </h2>
                <p className="text-lg text-foreground-secondary max-w-2xl mx-auto mb-8">
                  Browse all products or use our advanced search to find exactly
                  what you need.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className="btn-primary h-12 px-8 text-base font-semibold"
                      asChild
                    >
                      <Link href="/shop">
                        View All Products
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className="glass-button h-12 px-8 text-base font-semibold"
                      asChild
                    >
                      <Link href="/shop">Advanced Search</Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
