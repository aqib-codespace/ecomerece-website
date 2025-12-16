"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { verifyOtp } from "@/lib/auth";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  token: z.string().min(4, "Invalid code"),
});

export default function VerifyPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const { data: res, error } = await verifyOtp({ email: data.email, token: data.token });
      if (error) throw error;
      toast({ title: "Email verified", description: "Verification successful. You can now sign in." });
      router.push("/login");
    } catch (err) {
      toast({ title: "Error", description: err.message || "Verification failed.", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Verify your account</h1>
        <p className="text-sm text-foreground-secondary mb-6 text-center">Enter the verification code sent to your email.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground">Email</label>
            <div className="relative mt-2">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground-secondary" />
              <Input {...register("email")} className="pl-10 h-12" placeholder="john@example.com" />
            </div>
            {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">Verification Code</label>
            <div className="relative mt-2">
              <Shield className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground-secondary" />
              <Input {...register("token")} className="pl-10 h-12" placeholder="Enter code" />
            </div>
            {errors.token && <p className="text-sm text-red-600">{errors.token.message}</p>}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full h-12">
            {isSubmitting ? "Verifying..." : "Verify"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/login" className="text-sm text-foreground-secondary hover:text-blue-primary">← Back to Sign In</Link>
        </div>
      </div>
    </div>
  );
}
