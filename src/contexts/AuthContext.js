"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Initialize from Supabase session
    const session = supabase.auth.getSession().then((res) => {
      if (res?.data?.session?.user) {
        setUser(res.data.session.user);
      }
      setIsLoading(false);
    });

    // Listen to auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser(session.user);
        localStorage.setItem("user", JSON.stringify(session.user));
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
    });

    return () => {
      listener?.subscription?.unsubscribe?.();
    };
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    router.push("/");
  };

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
