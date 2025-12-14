"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function Page() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({ title: isLogin ? "Welcome back!" : "Account created!", description: isLogin ? "You have successfully logged in." : "Your account has been created successfully." });
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-md mx-auto">
          <Link href="/" className="block text-center mb-8"><span className="text-3xl font-bold gradient-text">LUXE</span></Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-3xl p-8">
            <div className="flex gap-2 p-1 bg-secondary/50 rounded-xl mb-8">
              <button onClick={() => setIsLogin(true)} className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${isLogin ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>Sign In</button>
              <button onClick={() => setIsLogin(false)} className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${!isLogin ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>Sign Up</button>
            </div>

            <h1 className="text-2xl font-bold mb-2">{isLogin ? "Welcome back" : "Create account"}</h1>
            <p className="text-muted-foreground mb-6">{isLogin ? "Enter your credentials to access your account" : "Fill in your details to get started"}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="pl-10 bg-secondary/50 border-white/10 h-12" required />
                </div>
              )}

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input type="email" placeholder="Email address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="pl-10 bg-secondary/50 border-white/10 h-12" required />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input type={showPassword ? "text" : "password"} placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="pl-10 pr-10 bg-secondary/50 border-white/10 h-12" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">{showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}</button>
              </div>

              {isLogin && <div className="flex justify-end"><Link href="/forgot-password" className="text-sm text-primary hover:underline">Forgot password?</Link></div>}

              <Button variant="hero" size="xl" className="w-full">{isLogin ? "Sign In" : "Create Account"} <ArrowRight className="h-5 w-5 ml-2" /></Button>
            </form>

            <div className="relative my-8"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div><div className="relative flex justify-center text-xs uppercase"><span className="bg-card px-2 text-muted-foreground">Or continue with</span></div></div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="glass" className="h-12">...Google</Button>
              <Button variant="glass" className="h-12">...GitHub</Button>
            </div>
          </motion.div>

          <p className="text-center text-muted-foreground mt-6 text-sm">By continuing, you agree to our <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link></p>
        </div>
      </div>
    </div>
  );
}
