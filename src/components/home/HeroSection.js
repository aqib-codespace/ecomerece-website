import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-lightest/30 via-background to-orange-primary/10">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-primary/20 rounded-full blur-[128px] animate-float" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-primary/20 rounded-full blur-[128px] animate-float"
        style={{ animationDelay: "1s" }}
      />

      <motion.div
        animate={{ y: [0, -20, 0], rotate: [12, 18, 12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] w-20 h-20 glass-card hidden xl:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/2 right-[20%] w-16 h-16 glass-card rounded-full hidden xl:block"
      />
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [-12, -18, -12] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 left-[8%] w-24 h-24 glass-card hidden xl:block"
        style={{ borderRadius: "30%" }}
      />

      <div className="w-full md:w-[95%] max-w-[1800px] mx-auto px-4 md:px-8 relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 glass-card mb-8"
            >
              <Sparkles className="h-5 w-5 text-orange-primary animate-pulse" />
              <span className="text-sm font-semibold text-blue-primary">
                New Collection 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold leading-tight mb-6"
            >
              Discover <span className="gradient-text">Premium</span>
              <br />
              Products for Your
              <br />
              <span className="gradient-text-accent">Lifestyle</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-foreground-secondary mb-10 max-w-xl leading-relaxed"
            >
              Explore our curated collection of premium products designed to
              elevate your everyday experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="btn-primary h-12 px-8 text-base font-semibold"
                  asChild
                >
                  <Link href="/shop">
                    Shop Now
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
                  <Link href="/categories">Explore Categories</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-8 md:gap-12 mt-16"
            >
              {[
                { value: "50+", label: "Happy Customers" },
                { value: "100+", label: "Premium Products" },
                { value: "99%", label: "Satisfaction Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center sm:text-left"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-foreground-secondary mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative glass-card p-4 rounded-3xl">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop"
                  alt="Premium Products"
                  className="w-full h-full object-cover"
                />
              </div>

              

              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 bg-gradient-accent text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-2xl"
              >
                20% OFF
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
