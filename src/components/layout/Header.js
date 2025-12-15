"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Heart, User, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Categories", path: "/categories" },
  { name: "About", path: "/about" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 animate-fade-in">
      <div className="glass border-b border-blue-primary/10">
        <div className="w-full md:w-[95%] max-w-[1800px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.img
                src="/images/logo.png"
                alt="TrioCart"
                className="h-12 md:h-20 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                    pathname === link.path
                      ? "text-blue-primary"
                      : "text-foreground-secondary hover:text-blue-primary hover:bg-blue-lightest/50"
                  }`}
                >
                  {link.name}
                  {pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-primary rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 240, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <Input
                      placeholder="Search products..."
                      className="glass border-blue-primary/30 focus:border-blue-primary h-10"
                      autoFocus
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="glass-button h-10 w-10 hover:text-blue-primary"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="glass-button h-10 w-10 hover:text-orange-primary"
                  asChild
                >
                  <Link href="/wishlist">
                    <Heart className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="glass-button h-10 w-10 relative hover:text-blue-primary"
                  asChild
                >
                  <Link href="/cart">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-accent text-white text-xs font-bold flex items-center justify-center animate-pulse">
                      3
                    </span>
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="btn-primary h-10 px-6" asChild>
                  <Link href="/login">
                    <User className="h-4 w-4 mr-2" />
                    Sign In
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="glass-button h-10 w-10 relative"
                  asChild
                >
                  <Link href="/cart">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-accent text-white text-[10px] font-bold flex items-center justify-center">
                      3
                    </span>
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="glass-button h-10 w-10"
                >
                  {isMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-b border-blue-primary/10 overflow-hidden"
          >
            <div className="w-full md:w-[95%] max-w-[1800px] mx-auto px-4 md:px-8 py-6">
              <div className="mb-6">
                <Input
                  placeholder="Search products..."
                  className="glass border-blue-primary/30 h-12"
                />
              </div>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-3 px-4 rounded-xl font-semibold transition-all ${
                        pathname === link.path
                          ? "bg-gradient-primary text-white shadow-lg"
                          : "text-foreground-secondary hover:bg-blue-lightest/50 hover:text-blue-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-3 mt-6"
                >
                  <Button className="flex-1 glass-button" asChild>
                    <Link href="/wishlist">
                      <Heart className="h-4 w-4 mr-2" />
                      Wishlist
                    </Link>
                  </Button>
                  <Button className="flex-1 btn-primary" asChild>
                    <Link href="/login">
                      <User className="h-4 w-4 mr-2" />
                      Sign In
                    </Link>
                  </Button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
