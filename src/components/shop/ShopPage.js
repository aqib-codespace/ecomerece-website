"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  Grid3X3,
  LayoutList,
  Heart,
  ShoppingCart,
  Star,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const allProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    category: "Electronics",
    isNew: true,
  },
  {
    id: 2,
    name: "Minimalist Watch Collection",
    price: 189,
    originalPrice: null,
    rating: 4.8,
    reviews: 95,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    category: "Accessories",
    isNew: false,
  },
  {
    id: 3,
    name: "Designer Sunglasses",
    price: 159,
    originalPrice: 199,
    rating: 4.7,
    reviews: 64,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    category: "Fashion",
    isNew: true,
  },
  {
    id: 4,
    name: "Smart Fitness Tracker",
    price: 249,
    originalPrice: null,
    rating: 4.9,
    reviews: 203,
    image:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",
    category: "Electronics",
    isNew: false,
  },
  {
    id: 5,
    name: "Leather Laptop Bag",
    price: 179,
    originalPrice: 229,
    rating: 4.6,
    reviews: 87,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    category: "Accessories",
    isNew: false,
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 129,
    originalPrice: null,
    rating: 4.8,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    category: "Electronics",
    isNew: true,
  },
  {
    id: 7,
    name: "Premium Coffee Maker",
    price: 349,
    originalPrice: 429,
    rating: 4.9,
    reviews: 78,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
    category: "Home & Living",
    isNew: false,
  },
  {
    id: 8,
    name: "Wireless Earbuds Pro",
    price: 199,
    originalPrice: null,
    rating: 4.7,
    reviews: 234,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    category: "Electronics",
    isNew: true,
  },
];

const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Accessories",
  "Home & Living",
];
const priceRanges = [
  "All",
  "Under $100",
  "$100 - $200",
  "$200 - $300",
  "Over $300",
];

export const ShopPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    let matchesPrice = true;
    if (selectedPriceRange === "Under $100") matchesPrice = product.price < 100;
    else if (selectedPriceRange === "$100 - $200")
      matchesPrice = product.price >= 100 && product.price <= 200;
    else if (selectedPriceRange === "$200 - $300")
      matchesPrice = product.price >= 200 && product.price <= 300;
    else if (selectedPriceRange === "Over $300")
      matchesPrice = product.price > 300;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-lightest/20 via-background to-orange-primary/5">
      <div className="w-full md:w-[90%] max-w-[1800px] mx-auto px-4 md:px-8 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Shop <span className="gradient-text">All Products</span>
          </h1>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Discover our curated collection of premium products
          </p>
        </motion.div>

        {/* Search and Filter Bar - Sticky */}
        <div className="sticky top-0 z-30 bg-gradient-to-br from-blue-lightest/20 via-background to-orange-primary/5 backdrop-blur-md pb-6 -mx-4 md:-mx-8 px-4 md:px-8 pt-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-primary" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 glass border-blue-primary/20 focus:border-blue-primary transition-all"
              />
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="glass-button lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[200px] h-12 glass border-blue-primary/20">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="glass">
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                </SelectContent>
              </Select>
              <div className="hidden md:flex glass rounded-lg border border-blue-primary/20">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className={
                    viewMode === "grid"
                      ? "bg-gradient-primary hover:shadow-glow-blue"
                      : ""
                  }
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className={
                    viewMode === "list"
                      ? "bg-gradient-primary hover:shadow-glow-blue"
                      : ""
                  }
                >
                  <LayoutList className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`w-full lg:w-72 lg:shrink-0 ${
              showFilters ? "block" : "hidden lg:block"
            }`}
          >
            <div className="space-y-6 lg:sticky lg:top-[140px]">
              <div className="glass-card p-6">
                <h3 className="font-bold text-lg mb-6 flex items-center justify-between text-blue-primary">
                  Categories
                  <ChevronDown className="h-5 w-5" />
                </h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-3 cursor-pointer group hover:text-blue-primary transition-colors"
                    >
                      <Checkbox
                        checked={selectedCategory === category}
                        onCheckedChange={() => setSelectedCategory(category)}
                        className="border-blue-primary data-[state=checked]:bg-blue-primary"
                      />
                      <span className="text-sm font-medium">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-bold text-lg mb-6 flex items-center justify-between text-orange-primary">
                  Price Range
                  <ChevronDown className="h-5 w-5" />
                </h3>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <label
                      key={range}
                      className="flex items-center gap-3 cursor-pointer group hover:text-orange-primary transition-colors"
                    >
                      <Checkbox
                        checked={selectedPriceRange === range}
                        onCheckedChange={() => setSelectedPriceRange(range)}
                        className="border-orange-primary data-[state=checked]:bg-orange-primary"
                      />
                      <span className="text-sm font-medium">{range}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-foreground-secondary">
                Showing{" "}
                <span className="font-bold text-blue-primary">
                  {sortedProducts.length}
                </span>{" "}
                of <span className="font-bold">{allProducts.length}</span>{" "}
                products
              </p>
            </div>

            <motion.div
              layout
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <div
                    className={`glass-card overflow-hidden ${
                      viewMode === "list" ? "flex" : ""
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        viewMode === "list" ? "w-56 shrink-0" : "aspect-square"
                      }`}
                    >
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
                      <Link
                        href={`/product/${product.id}`}
                        className="block mt-2"
                      >
                        <h3 className="font-bold text-lg hover:text-blue-primary transition-colors line-clamp-1">
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
                        <span className="text-sm font-semibold">
                          {product.rating}
                        </span>
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

                      <Button className="w-full mt-5 bg-gradient-primary hover:shadow-glow-blue transition-all duration-300">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {sortedProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20 glass-card"
              >
                <p className="text-xl text-foreground-secondary mb-6">
                  No products found matching your criteria.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setSelectedPriceRange("All");
                  }}
                  className="bg-gradient-primary"
                >
                  Clear All Filters
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
