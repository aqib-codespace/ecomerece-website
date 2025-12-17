"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Package,
  Heart,
  Settings,
  LogOut,
  Menu,
  X,
  User,
  TrendingUp,
  Award,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { selectUser, clearUser } from "@/store/slices/userSlice";
import { clearCart } from "@/store/slices/cartSlice";
import { clearWishlist } from "@/store/slices/wishlistSlice";
import { supabase } from "@/lib/supabaseClient";
import { Footer } from "../layout/Footer";

const sidebarLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    badge: null,
  },
  {
    name: "Orders",
    href: "/dashboard/orders",
    icon: Package,
    badge: "3",
  },
  {
    name: "Wishlist",
    href: "/dashboard/wishlist",
    icon: Heart,
    badge: "8",
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    badge: null,
  },
];

const statsData = [
  { label: "Orders", value: "24", icon: Package },
  { label: "Wishlist", value: "8", icon: Heart },
  { label: "Spent", value: "$2.8k", icon: TrendingUp },
];

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logout = async () => {
    await supabase.auth.signOut();
    dispatch(clearUser());
    dispatch(clearCart());
    dispatch(clearWishlist());
    router.push("/login");
  };

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const isActive = (path) => {
    if (path === "/dashboard") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      <Header />

      <div className="min-h-screen pt-24 bg-gradient-to-br from-blue-lightest/20 via-background to-orange-primary/5">
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -right-20 w-96 h-96 bg-blue-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-96 h-96 bg-orange-primary/5 rounded-full blur-3xl" />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="fixed bottom-6 right-6 z-50 md:hidden glass rounded-full p-4 shadow-2xl"
        >
          <AnimatePresence mode="wait">
            {isSidebarOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6 text-blue-primary" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6 text-blue-primary" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        <div className="w-full md:w-[95%] max-w-[1800px] mx-auto px-4 md:px-8 py-6 md:py-8">
          <div className="flex gap-6 lg:gap-8">
            <AnimatePresence>
              {(isSidebarOpen || isDesktop) && (
                <motion.aside
                  initial={!isDesktop ? { x: "-100%", opacity: 0 } : false}
                  animate={{ x: 0, opacity: 1 }}
                  exit={!isDesktop ? { x: "-100%", opacity: 0 } : {}}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed inset-y-24 left-0 z-40 w-72 md:w-80 md:relative md:translate-x-0 md:inset-y-0"
                >
                  <div className="h-full overflow-y-auto py-6 px-4 md:py-0 md:px-0 backdrop-blur-xl bg-white/50 md:bg-transparent border-r border-blue-primary/10 md:border-0">
                    {/* User Profile Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="relative overflow-hidden glass-card mb-8"
                    >
                      {/* Decorative Elements */}
                      <div className="absolute inset-0 bg-gradient-primary opacity-90" />
                      <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                      <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />

                      <div className="relative p-6">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="relative">
                            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center ring-4 ring-white/20 shadow-xl">
                              <User className="h-8 w-8 text-white" />
                            </div>
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-blue-dark"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-white text-lg truncate">
                              {user?.name || "User"}
                            </h3>
                            <p className="text-white/80 text-sm truncate">
                              {user?.email || "user@example.com"}
                            </p>
                            <div className="flex items-center gap-1 mt-1.5">
                              <Award className="h-3.5 w-3.5 text-yellow-300" />
                              <span className="text-xs text-yellow-300 font-medium">
                                Premium Member
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-3">
                          {statsData.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                              <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                                className="text-center"
                              >
                                <div className="flex justify-center mb-1">
                                  <Icon className="w-4 h-4 text-white/80" />
                                </div>
                                <div className="text-white font-bold text-base">
                                  {stat.value}
                                </div>
                                <div className="text-white/70 text-[10px]">
                                  {stat.label}
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>

                    <nav className="space-y-2 mb-8">
                      {sidebarLinks.map((link, index) => {
                        const Icon = link.icon;
                        const active = isActive(link.href);
                        return (
                          <motion.div
                            key={link.href}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + index * 0.05 }}
                          >
                            <Link
                              href={link.href}
                              onClick={() => setIsSidebarOpen(false)}
                              className={`group relative flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                                active
                                  ? "glass-card text-blue-primary shadow-lg"
                                  : "hover:bg-white/50 text-foreground-secondary hover:text-blue-primary"
                              }`}
                            >
                              {/* Active Indicator */}
                              {active && (
                                <motion.div
                                  layoutId="activeTab"
                                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-primary/10 to-orange-primary/10 border-2 border-blue-primary/20"
                                  transition={{
                                    type: "spring",
                                    bounce: 0.2,
                                    duration: 0.6,
                                  }}
                                />
                              )}

                              <div className="relative z-10 flex items-center gap-4 flex-1">
                                <div
                                  className={`p-2.5 rounded-lg transition-all duration-300 ${
                                    active
                                      ? "bg-gradient-primary shadow-lg"
                                      : "bg-blue-lightest/50 group-hover:bg-blue-lightest"
                                  }`}
                                >
                                  <Icon
                                    className={`h-5 w-5 ${
                                      active
                                        ? "text-white"
                                        : "text-blue-primary"
                                    }`}
                                  />
                                </div>
                                <span
                                  className={`font-medium ${
                                    active ? "text-foreground" : ""
                                  }`}
                                >
                                  {link.name}
                                </span>
                              </div>

                              <div className="relative z-10 flex items-center gap-2">
                                {link.badge && (
                                  <Badge className="bg-gradient-accent text-white border-0">
                                    {link.badge}
                                  </Badge>
                                )}
                                <ChevronRight
                                  className={`h-4 w-4 transition-transform ${
                                    active
                                      ? "translate-x-1 text-blue-primary"
                                      : "text-gray-medium"
                                  }`}
                                />
                              </div>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </nav>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 p-4 h-auto rounded-xl group"
                        onClick={logout}
                      >
                        <div className="p-2.5 rounded-lg bg-red-50 group-hover:bg-red-100 transition-colors mr-4">
                          <LogOut className="h-5 w-5" />
                        </div>
                        <span className="font-medium">Logout</span>
                      </Button>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mt-8 glass-card bg-gradient-to-br from-orange-primary/10 to-blue-primary/10"
                    >
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-orange-primary/20">
                            <Award className="h-5 w-5 text-orange-primary" />
                          </div>
                          <h4 className="font-semibold text-foreground">
                            Need Help?
                          </h4>
                        </div>
                        <p className="text-sm text-foreground-secondary mb-4">
                          Our support team is here 24/7
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-blue-primary/30 text-blue-primary hover:bg-blue-primary/10"
                        >
                          Contact Support
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </motion.aside>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {isSidebarOpen && !isDesktop && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
                  onClick={() => setIsSidebarOpen(false)}
                />
              )}
            </AnimatePresence>

            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex-1 min-w-0 pb-24 md:pb-8"
            >
              {children}
            </motion.main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
