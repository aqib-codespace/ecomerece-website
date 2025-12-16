"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  ShoppingBag,
  TrendingUp,
  Shield,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { signIn } from "@/lib/auth";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});



export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const { data: res, error } = await signIn({ email: data.email, password: data.password });
      if (error) throw error;
      const user = res.user || res.session?.user;
      login(user);
      toast({ title: "Welcome back!", description: "You have successfully logged in." });
      router.push("/dashboard");
    } catch (error) {
      toast({ title: "Error", description: error?.message || "Something went wrong. Please try again.", variant: "destructive" });
    }
  };



  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-[45%_55%]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hidden lg:flex flex-col justify-between p-12 bg-linear-to-br from-blue-primary via-blue-dark to-blue-primary relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-lighter/30 rounded-full blur-3xl" />

          <div className="relative z-10">
            <Link href="/" className="inline-block mb-16">
              <motion.img
                src="/images/logo.png"
                alt="TrioCart"
                className="h-20 w-auto brightness-0 invert"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </Link>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-5xl font-bold text-white leading-tight mb-4">
                  Simplify your
                  <br />
                  shopping with
                  <br />
                  <span className="relative">
                    our platform
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      height="8"
                      viewBox="0 0 200 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.5C50 1.5 150 1.5 199 5.5"
                        stroke="#f97316"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h1>
                <p className="text-blue-lightest/90 text-lg">
                  Experience seamless shopping with your favorite brands and
                  products.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                {[
                  { icon: Shield, text: "Secure Payments" },
                  { icon: TrendingUp, text: "Best Deals" },
                  { icon: ShoppingBag, text: "Premium Products" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                  >
                    <feature.icon className="w-4 h-4 text-orange-lighter" />
                    <span className="text-sm text-white font-medium">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className=" p-8 lg:p-12"
        >
          <Link
            href="/"
            className="lg:hidden inline-flex items-center gap-2 mb-8"
          >
            <motion.img
              src="/images/logo.png"
              alt="TrioCart"
              className="h-12 w-auto"
            />
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">Welcome Back!</h1>
            <p className="text-foreground-secondary">Sign in to access your account</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">


            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground-secondary" />
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="john@example.com"
                  className="pl-10 h-12"
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground-secondary" />
                <Input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 pr-10 h-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground-secondary hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>



            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm text-blue-primary hover:text-blue-dark transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary h-12 text-base"
            >
              {isSubmitting ? (
                "Please wait..."
              ) : (
                <>
                  Sign In
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-foreground-secondary">Don't have an account? <Link href="/signup" className="text-blue-primary hover:text-blue-dark font-semibold transition-colors">Sign up</Link></p>
          </div>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm text-foreground-secondary hover:text-blue-primary transition-colors inline-flex items-center gap-1"
            >
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
