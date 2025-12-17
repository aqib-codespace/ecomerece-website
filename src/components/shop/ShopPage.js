"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  Grid3X3,
  LayoutList,
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
import { ProductCard } from "@/components/shared/ProductCard";
import { ProductCardList } from "@/components/shared/ProductCardList";
import { shopProducts } from "@/lib/mockData";

const allProducts = shopProducts;

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
      <div className="w-full md:w-[95%] max-w-[1800px] mx-auto px-4 md:px-8 py-12">
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
                  <Grid3X3 className="h-5 w-5" />
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
                  <LayoutList className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
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
              {sortedProducts.map((product, index) => {
                const motionProps = {
                  layout: true,
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { delay: index * 0.05 },
                };

                return viewMode === "grid" ? (
                  <ProductCard
                    key={product.id}
                    product={product}
                    motionProps={motionProps}
                  />
                ) : (
                  <ProductCardList
                    key={product.id}
                    product={product}
                    motionProps={motionProps}
                  />
                );
              })}
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
