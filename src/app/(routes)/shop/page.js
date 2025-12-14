"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Grid3X3, LayoutList, Heart, ShoppingCart, Star, ChevronDown } from "lucide-react";
import { Layout } from "../../../components/layout/Layout";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Checkbox } from "../../../components/ui/checkbox";

const allProducts = [
  { id: 1, name: "Premium Wireless Headphones", price: 299, originalPrice: 399, rating: 4.9, reviews: 128, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop", category: "Electronics", isNew: true },
  { id: 2, name: "Minimalist Watch Collection", price: 189, originalPrice: null, rating: 4.8, reviews: 95, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop", category: "Accessories", isNew: false },
  { id: 3, name: "Designer Sunglasses", price: 159, originalPrice: 199, rating: 4.7, reviews: 64, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop", category: "Fashion", isNew: true },
  { id: 4, name: "Smart Fitness Tracker", price: 249, originalPrice: null, rating: 4.9, reviews: 203, image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop", category: "Electronics", isNew: false },
  { id: 5, name: "Leather Laptop Bag", price: 179, originalPrice: 229, rating: 4.6, reviews: 87, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop", category: "Accessories", isNew: false },
  { id: 6, name: "Bluetooth Speaker", price: 129, originalPrice: null, rating: 4.8, reviews: 156, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop", category: "Electronics", isNew: true },
  { id: 7, name: "Premium Coffee Maker", price: 349, originalPrice: 429, rating: 4.9, reviews: 78, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop", category: "Home & Living", isNew: false },
  { id: 8, name: "Wireless Earbuds Pro", price: 199, originalPrice: null, rating: 4.7, reviews: 234, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop", category: "Electronics", isNew: true },
];

const categories = ["All", "Electronics", "Fashion", "Accessories", "Home & Living"];
const priceRanges = ["All", "Under $100", "$100 - $200", "$200 - $300", "Over $300"];

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;

    let matchesPrice = true;
    if (selectedPriceRange === "Under $100") matchesPrice = product.price < 100;
    else if (selectedPriceRange === "$100 - $200") matchesPrice = product.price >= 100 && product.price <= 200;
    else if (selectedPriceRange === "$200 - $300") matchesPrice = product.price >= 200 && product.price <= 300;
    else if (selectedPriceRange === "Over $300") matchesPrice = product.price > 300;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Shop All Products</h1>
          <p className="text-muted-foreground">Discover our curated collection of premium products</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-secondary/50 border-white/10"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="glass" onClick={() => setShowFilters(!showFilters)} className="md:hidden">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px] bg-secondary/50 border-white/10">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Top Rated</SelectItem>
              </SelectContent>
            </Select>
            <div className="hidden md:flex border border-white/10 rounded-lg">
              <Button variant={viewMode === "grid" ? "secondary" : "ghost"} size="icon" onClick={() => setViewMode("grid")}>
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button variant={viewMode === "list" ? "secondary" : "ghost"} size="icon" onClick={() => setViewMode("list")}>
                <LayoutList className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <aside className={`w-64 shrink-0 space-y-6 ${showFilters ? "block" : "hidden md:block"}`}>
            <div className="glass rounded-xl p-4">
              <h3 className="font-semibold mb-4 flex items-center justify-between">
                Categories
                <ChevronDown className="h-4 w-4" />
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center gap-2 cursor-pointer">
                    <Checkbox checked={selectedCategory === category} onCheckedChange={() => setSelectedCategory(category)} />
                    <span className="text-sm">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-4">
              <h3 className="font-semibold mb-4 flex items-center justify-between">
                Price Range
                <ChevronDown className="h-4 w-4" />
              </h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <label key={range} className="flex items-center gap-2 cursor-pointer">
                    <Checkbox checked={selectedPriceRange === range} onCheckedChange={() => setSelectedPriceRange(range)} />
                    <span className="text-sm">{range}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="mb-4 text-sm text-muted-foreground">Showing {sortedProducts.length} of {allProducts.length} products</div>

            <motion.div layout className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
              {sortedProducts.map((product, index) => (
                <motion.div key={product.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="group">
                  <div className={`glass-hover rounded-2xl overflow-hidden ${viewMode === "list" ? "flex" : ""}`}>
                    <div className={`relative overflow-hidden ${viewMode === "list" ? "w-48 shrink-0" : "aspect-square"}`}>
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {product.isNew && <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-md">NEW</span>}
                        {product.originalPrice && <span className="px-2 py-1 bg-destructive text-destructive-foreground text-xs font-semibold rounded-md">SALE</span>}
                      </div>
                      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="glass" size="icon" className="h-9 w-9"><Heart className="h-4 w-4" /></Button>
                      </div>
                    </div>

                    <div className="p-4 flex-1">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">{product.category}</span>
                      <Link href={`/product/${product.id}`} className="block">
                        <h3 className="font-semibold mt-1 hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
                      </Link>
                      <div className="flex items-center gap-1 mt-2">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-sm text-muted-foreground">({product.reviews})</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-lg font-bold">${product.price}</span>
                        {product.originalPrice && <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>}
                      </div>
                      {viewMode === "list" && (
                        <Button variant="hero" className="mt-4"><ShoppingCart className="h-4 w-4 mr-2" />Add to Cart</Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No products found matching your criteria.</p>
                <Button variant="outline" className="mt-4" onClick={() => { setSearchQuery(""); setSelectedCategory("All"); setSelectedPriceRange("All"); }}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
