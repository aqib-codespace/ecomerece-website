"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star, Minus, Plus, ChevronRight, Truck, Shield, RefreshCw } from "lucide-react";
import { Layout } from "../../../components/layout/Layout";
import { Button } from "../../../components/ui/button";
import { useToast } from "../../../hooks/use-toast";

const product = {
  id: 1,
  name: "Premium Wireless Headphones",
  price: 299,
  originalPrice: 399,
  rating: 4.9,
  reviews: 128,
  description: "Experience crystal-clear audio with our premium wireless headphones.",
  images: [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop",
  ],
  category: "Electronics",
  colors: ["Black", "White", "Navy"],
  features: ["Active Noise Cancellation", "40-Hour Battery Life", "Bluetooth 5.0"],
  stock: 15,
};

const relatedProducts = [
  { id: 2, name: "Wireless Earbuds Pro", price: 199, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop", rating: 4.7 },
  { id: 3, name: "Bluetooth Speaker", price: 129, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop", rating: 4.8 },
  { id: 4, name: "Smart Fitness Tracker", price: 249, image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop", rating: 4.9 },
];

export default function Page({ params }) {
  const { id } = params;
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    toast({ title: "Added to cart", description: `${product.name} x${quantity} has been added to your cart.` });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/shop" className="hover:text-foreground transition-colors">Shop</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <motion.div key={selectedImage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="aspect-square rounded-2xl overflow-hidden glass">
              <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
            </motion.div>
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button key={index} onClick={() => setSelectedImage(index)} className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === index ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="text-sm text-primary font-medium uppercase tracking-wider">{product.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{product.name}</h1>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"}`} />
                ))}
              </div>
              <span className="font-medium">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                  <span className="px-2 py-1 bg-destructive/10 text-destructive text-sm font-semibold rounded">{Math.round((1 - product.price / product.originalPrice) * 100)}% OFF</span>
                </>
              )}
            </div>

            <p className="text-muted-foreground mb-8">{product.description}</p>

            <div className="mb-6">
              <h3 className="font-medium mb-3">Color: {selectedColor}</h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button key={color} onClick={() => setSelectedColor(color)} className={`px-4 py-2 rounded-lg border transition-all ${selectedColor === color ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"}`}>{color}</button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-medium mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <Button variant="ghost" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus className="h-4 w-4" /></Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button variant="ghost" size="icon" onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}><Plus className="h-4 w-4" /></Button>
                </div>
                <span className="text-sm text-muted-foreground">{product.stock} items in stock</span>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <Button variant="hero" size="xl" className="flex-1" onClick={handleAddToCart}><ShoppingCart className="h-5 w-5 mr-2" />Add to Cart</Button>
              <Button variant="glass" size="xl"><Heart className="h-5 w-5" /></Button>
            </div>

            <div className="glass rounded-xl p-6 mb-8">
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary" />{feature}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 glass rounded-xl"><Truck className="h-6 w-6 mx-auto mb-2 text-primary" /><span className="text-sm">Free Shipping</span></div>
              <div className="text-center p-4 glass rounded-xl"><Shield className="h-6 w-6 mx-auto mb-2 text-primary" /><span className="text-sm">2 Year Warranty</span></div>
              <div className="text-center p-4 glass rounded-xl"><RefreshCw className="h-6 w-6 mx-auto mb-2 text-primary" /><span className="text-sm">30 Day Returns</span></div>
            </div>
          </div>
        </div>

        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <Link key={item.id} href={`/product/${item.id}`} className="group glass-hover rounded-2xl overflow-hidden">
                <div className="aspect-square overflow-hidden"><img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /></div>
                <div className="p-4"><h3 className="font-semibold group-hover:text-primary transition-colors">{item.name}</h3>
                  <div className="flex items-center justify-between mt-2"><span className="text-lg font-bold">${item.price}</span><div className="flex items-center gap-1"><Star className="h-4 w-4 fill-primary text-primary" /><span className="text-sm">{item.rating}</span></div></div></div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
