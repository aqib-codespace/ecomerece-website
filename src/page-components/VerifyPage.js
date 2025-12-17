"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Shield,
  ArrowRight,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { verifyOtp } from "@/lib/auth";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  token: z.string().min(4, "Invalid code"),
});

export default function VerifyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  useEffect(() => {
    const email = searchParams.get("email");
    if (email) {
      setValue("email", email);
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data) => {
    try {
      const { data: res, error } = await verifyOtp({
        email: data.email,
        token: data.token,
      });
      if (error) throw error;
      toast({
        variant: "success",
        title: "Email verified",
        description: "Verification successful. You can now sign in.",
      });
      router.push("/login");
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Error",
        description: err.message || "Verification failed.",
      });
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
                  Verify your
                  <br />
                  account to
                  <br />
                  <span className="relative">
                    get started
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
                  Check your email for the verification code we sent you.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                {[
                  { icon: Shield, text: "Secure Verification" },
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
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Verify Your Account
            </h1>
            <p className="text-foreground-secondary">
              Enter the verification code sent to your email.
            </p>
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
                  disabled
                  className="pl-10 h-12 bg-gray-50 cursor-not-allowed"
                  placeholder="john@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Verification Code
              </label>
              <div className="relative">
                <Shield className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground-secondary" />
                <Input
                  {...register("token")}
                  className="pl-10 h-12"
                  placeholder="Enter code"
                />
              </div>
              {errors.token && (
                <p className="text-sm text-red-600">{errors.token.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary h-12 text-base"
            >
              {isSubmitting ? (
                "Verifying..."
              ) : (
                <>
                  Verify Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-foreground-secondary">
              Already verified?{" "}
              <Link
                href="/login"
                className="text-blue-primary hover:text-blue-dark font-semibold transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>

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
