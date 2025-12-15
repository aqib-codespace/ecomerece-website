"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function Page() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin && formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: isLogin ? "Welcome back!" : "Account created!",
      description: isLogin
        ? "You have successfully logged in."
        : "Your account has been created successfully.",
    });
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-lightest/20 via-background to-orange-primary/5">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-primary/20 rounded-full blur-[128px] animate-float" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-primary/20 rounded-full blur-[128px] animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="w-full md:w-[90%] max-w-[1800px] mx-auto px-4 md:px-8 relative z-10 py-12">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <Link href="/" className="inline-flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="TrioCart"
                className="h-12 md:h-14 w-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-8 md:p-10"
          >
            {/* Tab Switcher */}
            <div className="flex gap-2 p-1.5 glass rounded-xl mb-8">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
                  isLogin
                    ? "bg-gradient-primary text-white shadow-lg"
                    : "text-foreground-secondary hover:text-foreground"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
                  !isLogin
                    ? "bg-gradient-primary text-white shadow-lg"
                    : "text-foreground-secondary hover:text-foreground"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">
                {isLogin ? (
                  <>
                    Welcome <span className="gradient-text">Back</span>
                  </>
                ) : (
                  <>
                    Create <span className="gradient-text">Account</span>
                  </>
                )}
              </h1>
              <p className="text-foreground-secondary">
                {isLogin
                  ? "Enter your credentials to access your account"
                  : "Join TrioCart and start shopping premium products"}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="relative"
                >
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-primary" />
                  <Input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="pl-12 h-12 glass border-blue-primary/20 focus:border-blue-primary transition-all"
                    required
                  />
                </motion.div>
              )}

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-primary" />
                <Input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="pl-12 h-12 glass border-blue-primary/20 focus:border-blue-primary transition-all"
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-primary" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="pl-12 pr-12 h-12 glass border-blue-primary/20 focus:border-blue-primary transition-all"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground-secondary hover:text-blue-primary transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="relative"
                >
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-primary" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="pl-12 h-12 glass border-blue-primary/20 focus:border-blue-primary transition-all"
                    required
                    minLength={8}
                  />
                </motion.div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-blue-primary/20 text-blue-primary focus:ring-blue-primary focus:ring-offset-0"
                    />
                    <span className="text-sm text-foreground-secondary">
                      Remember me
                    </span>
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-blue-primary hover:text-orange-primary transition-colors font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>
              )}

              <Button className="w-full h-12 bg-gradient-primary hover:shadow-glow-blue transition-all text-base font-semibold">
                {isLogin ? "Sign In" : "Create Account"}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </form>

            {/* Benefits for Sign Up */}
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 p-4 glass rounded-xl"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-5 w-5 text-orange-primary" />
                  <p className="text-sm font-semibold text-blue-primary">
                    Member Benefits
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-primary" />
                    Exclusive deals and early access to sales
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-primary" />
                    Track your orders in real-time
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-primary" />
                    Save your favorite products
                  </li>
                </ul>
              </motion.div>
            )}
          </motion.div>

          {/* Footer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center text-foreground-secondary mt-6 text-sm"
          >
            By continuing, you agree to our{" "}
            <Link
              href="/terms"
              className="text-blue-primary hover:text-orange-primary transition-colors font-medium"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-blue-primary hover:text-orange-primary transition-colors font-medium"
            >
              Privacy Policy
            </Link>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
