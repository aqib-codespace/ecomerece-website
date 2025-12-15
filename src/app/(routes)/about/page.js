"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Target,
  Award,
  Users,
  Heart,
  Zap,
  Shield,
  TrendingUp,
  Package,
  Headphones,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

export default function AboutPage() {
  const stats = [
    { value: "50K+", label: "Happy Customers", icon: Users },
    { value: "1000+", label: "Premium Products", icon: Package },
    { value: "99%", label: "Satisfaction Rate", icon: Award },
    { value: "24/7", label: "Customer Support", icon: Headphones },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide premium quality products that enhance everyday life while delivering exceptional customer experiences.",
      color: "blue",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Every decision we make is centered around creating value and satisfaction for our customers.",
      color: "orange",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We constantly evolve and embrace new technologies to bring you the latest and greatest products.",
      color: "blue",
    },
    {
      icon: Shield,
      title: "Trust & Quality",
      description:
        "We stand behind every product we sell with rigorous quality checks and genuine guarantees.",
      color: "orange",
    },
  ];

  const features = [
    {
      title: "Premium Quality",
      description: "Carefully curated products from trusted brands worldwide",
    },
    {
      title: "Fast Shipping",
      description: "Quick and reliable delivery to your doorstep",
    },
    {
      title: "Secure Payment",
      description: "100% secure transactions with multiple payment options",
    },
    {
      title: "Easy Returns",
      description: "Hassle-free 30-day return policy on all products",
    },
    {
      title: "Best Prices",
      description: "Competitive pricing with regular exclusive deals",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer service to assist you",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Experience Lead",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    },
    {
      name: "David Kim",
      role: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    },
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
                  About TrioCart
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Elevate Your{" "}
                <span className="gradient-text">Shopping Experience</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed mb-8">
                We're on a mission to bring you the finest curated collection of
                premium products that enhance your lifestyle. Every item is
                carefully selected to meet our high standards of quality,
                design, and value.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="btn-primary h-12 px-8 text-base font-semibold"
                  asChild
                >
                  <Link href="/shop">
                    Start Shopping
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="w-full md:w-[90%] max-w-[1800px] mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-8 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground-secondary">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="w-full md:w-[90%] max-w-[1800px] mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="glass-card p-4 rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
                    alt="Our Story"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our <span className="gradient-text">Story</span>
                </h2>
                <div className="space-y-4 text-foreground-secondary leading-relaxed">
                  <p>
                    TrioCart was founded in 2020 with a simple yet powerful
                    vision: to create a shopping destination where quality meets
                    convenience. What started as a small venture has grown into
                    a trusted platform serving thousands of satisfied customers
                    worldwide.
                  </p>
                  <p>
                    We believe that shopping should be more than just a
                    transaction—it should be an experience. That's why we've
                    carefully curated every product in our collection, ensuring
                    that each item meets our rigorous standards for quality,
                    design, and value.
                  </p>
                  <p>
                    Today, we're proud to offer a diverse range of premium
                    products across multiple categories, all backed by our
                    commitment to exceptional customer service and complete
                    satisfaction.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-blue-primary/5 to-orange-primary/5">
          <div className="w-full md:w-[90%] max-w-[1800px] mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="glass-card p-8 group"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 ${
                      value.color === "blue"
                        ? "bg-blue-primary/10 group-hover:bg-gradient-primary"
                        : "bg-orange-primary/10 group-hover:bg-gradient-accent"
                    }`}
                  >
                    <value.icon
                      className={`h-8 w-8 transition-colors ${
                        value.color === "blue"
                          ? "text-blue-primary group-hover:text-white"
                          : "text-orange-primary group-hover:text-white"
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-xl font-bold mb-3 ${
                      value.color === "blue"
                        ? "text-blue-primary"
                        : "text-orange-primary"
                    }`}
                  >
                    {value.title}
                  </h3>
                  <p className="text-foreground-secondary leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="w-full md:w-[90%] max-w-[1800px] mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose <span className="gradient-text">TrioCart</span>
              </h2>
              <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                Experience the difference with our premium features
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 group"
                >
                  <CheckCircle className="h-8 w-8 text-blue-primary mb-4 group-hover:text-orange-primary transition-colors" />
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-blue-primary/5 to-orange-primary/5">
          <div className="w-full md:w-[90%] max-w-[1800px] mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                The passionate people behind TrioCart
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="glass-card p-6 text-center group"
                >
                  <div className="relative mb-6 mx-auto w-32 h-32">
                    <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-20 transition-opacity blur-xl" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-4 border-blue-primary/20 group-hover:border-blue-primary transition-all"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-1 group-hover:text-blue-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-orange-primary font-semibold">
                    {member.role}
                  </p>
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
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-primary mb-6">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Start Shopping?
                </h2>
                <p className="text-lg text-foreground-secondary max-w-2xl mx-auto mb-8">
                  Join thousands of satisfied customers and discover premium
                  products that elevate your lifestyle.
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
                        Explore Products
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
                      <Link href="/contact">Contact Us</Link>
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
