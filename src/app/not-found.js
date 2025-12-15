"use client";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Large Background 404 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="text-[280px] sm:text-[350px] md:text-[450px] lg:text-[650px] font-extrabold leading-none tracking-tighter opacity-[0.03]">
          <span className="text-blue-dark">4</span>
          <span className="text-blue-primary">0</span>
          <span className="text-blue-dark">4</span>
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-[95%] max-w-[1800px] mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <Link href="/" className="inline-flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="TrioCart"
                className="h-12 md:h-20 w-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </motion.div>

          {/* 404 Number - Foreground */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="text-[120px] sm:text-[150px] md:text-[180px] font-extrabold leading-none tracking-tight">
              <span className="text-blue-dark">4</span>
              <motion.span
                animate={{
                  color: ["#0D92D0", "#4DB3E6", "#0D92D0"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-blue-primary"
              >
                0
              </motion.span>
              <span className="text-blue-dark">4</span>
            </h1>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4">
              Page Not Found
            </h2>
            <p className="text-base md:text-lg text-gray-medium max-w-md mx-auto leading-relaxed">
              Oops! It seems the page you are looking for does not exist. Please
              check the URL or return to the homepage.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                className="h-12 px-8 text-base font-semibold bg-blue-primary hover:bg-blue-light text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link href="/">
                  <Home className="h-5 w-5 mr-2" />
                  Go Home
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                className="h-12 px-8 text-base font-semibold border-2 border-gray-light text-blue-dark hover:bg-gray-lighter rounded-xl transition-all"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Go Back
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
