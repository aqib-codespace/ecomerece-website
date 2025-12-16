"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient";

const schema = z.object({
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  useEffect(() => {
    // If Supabase signed the user in via the reset link, no extra action is needed
  }, []);

  const onSubmit = async (data) => {
    try {
      setIsProcessing(true);
      const user = await supabase.auth.getUser();
      if (!user?.data?.user) {
        throw new Error("No active session. Please use the link we sent to your email.");
      }
      const { error } = await supabase.auth.updateUser({ password: data.password });
      if (error) throw error;
      toast({ title: "Password updated", description: "Your password has been reset." });
      router.push("/login");
    } catch (err) {
      toast({ title: "Error", description: err.message || "Could not reset password.", variant: "destructive" });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Reset your password</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground">New password</label>
            <div className="relative mt-2">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground-secondary" />
              <Input {...register("password")} type={showPassword ? "text" : "password"} placeholder="••••••••" className="pl-10 pr-10 h-12" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground-secondary hover:text-foreground">
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">Confirm password</label>
            <div className="relative mt-2">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground-secondary" />
              <Input {...register("confirmPassword")} type={showConfirmPassword ? "text" : "password"} placeholder="••••••••" className="pl-10 pr-10 h-12" />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground-secondary hover:text-foreground">
                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-sm text-red-600">{errors.confirmPassword.message}</p>}
          </div>

          <Button type="submit" disabled={isProcessing} className="w-full h-12">{isProcessing ? "Please wait..." : "Set new password"}</Button>
        </form>
      </div>
    </div>
  );
}