"use client";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { ShoppingBag, Heart, Package } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { selectCartCount } from "@/store/slices/cartSlice";
import { selectWishlistCount } from "@/store/slices/wishlistSlice";
import { selectUser } from "@/store/slices/userSlice";

export default function DashboardPage() {
  const user = useSelector(selectUser);
  const cartCount = useSelector(selectCartCount);
  const wishlistCount = useSelector(selectWishlistCount);

  const quickActions = [
    {
      title: "Continue Shopping",
      description: "Discover new products",
      icon: ShoppingBag,
      href: "/shop",
      color: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "My Orders",
      description: "Track your purchases",
      icon: Package,
      href: "/dashboard/orders",
      color: "from-orange-500 to-orange-600",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      title: "Wishlist",
      description: `${wishlistCount} items waiting`,
      icon: Heart,
      href: "/dashboard/wishlist",
      color: "from-pink-500 to-pink-600",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
    },
  ];
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome back
          {user?.user_metadata?.firstName
            ? `, ${user.user_metadata.firstName}`
            : ""}
          ! 👋
        </h1>
        <p className="text-muted-foreground text-lg">
          Ready to continue your shopping journey?
        </p>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Link key={action.title} href={action.href}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${action.color} opacity-5 rounded-bl-full`}
                />

                <div className="relative">
                  <div
                    className={`${action.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-7 h-7 ${action.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {action.title}
                  </h3>
                  <p className="text-gray-600">{action.description}</p>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-5xl mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-3">
              Explore Our Latest Collection
            </h2>
            <p className="text-orange-100 text-lg">
              Discover amazing products with exclusive deals just for you
            </p>
          </div>
          <Link href="/shop">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-orange-600 hover:bg-gray-50 font-semibold whitespace-nowrap"
            >
              Shop Now →
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
