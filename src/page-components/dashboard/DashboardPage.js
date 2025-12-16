"use client";
import { motion } from "framer-motion";
import {
  Package,
  DollarSign,
  TrendingUp,
  ShoppingBag,
  Heart,
  Star,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  Truck,
  Box,
  CreditCard,
  Gift,
  Award,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    title: "Total Orders",
    value: "24",
    change: "+12%",
    trend: "up",
    icon: Package,
    gradient: "gradient-primary",
    textColor: "text-blue-primary",
    bgColor: "from-blue-lightest/50 to-blue-lightest",
  },
  {
    title: "Total Spent",
    value: "$2,847",
    change: "+23%",
    trend: "up",
    icon: DollarSign,
    gradient: "gradient-accent",
    textColor: "text-orange-primary",
    bgColor: "from-orange-primary/10 to-orange-primary/5",
  },
  {
    title: "Wishlist Items",
    value: "8",
    change: "+3",
    trend: "up",
    icon: Heart,
    gradient: "gradient-accent",
    textColor: "text-orange-primary",
    bgColor: "from-orange-primary/10 to-orange-primary/5",
  },
  {
    title: "Saved Amount",
    value: "$542",
    change: "+18%",
    trend: "up",
    icon: TrendingUp,
    gradient: "gradient-primary",
    textColor: "text-blue-primary",
    bgColor: "from-blue-lightest/50 to-blue-lightest",
  },
];

const recentOrders = [
  {
    id: "ORD-2024-001",
    product: "Premium Wireless Headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
    date: "Dec 14, 2024",
    time: "2 hours ago",
    amount: 299,
    status: "Delivered",
    icon: CheckCircle2,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    id: "ORD-2024-002",
    product: "Smart Fitness Tracker",
    image:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=100&h=100&fit=crop",
    date: "Dec 12, 2024",
    time: "1 day ago",
    amount: 249,
    status: "Shipped",
    icon: Truck,
    color: "text-blue-primary",
    bgColor: "bg-blue-lightest",
  },
  {
    id: "ORD-2024-003",
    product: "Bluetooth Speaker",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=100&h=100&fit=crop",
    date: "Dec 10, 2024",
    time: "2 days ago",
    amount: 129,
    status: "Processing",
    icon: Box,
    color: "text-orange-primary",
    bgColor: "bg-orange-primary/10",
  },
];

const recentActivity = [
  {
    icon: CheckCircle2,
    title: "Order delivered",
    description: "Premium Headphones",
    time: "2 hours ago",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Heart,
    title: "Added to wishlist",
    description: "Designer Watch",
    time: "5 hours ago",
    color: "text-orange-primary",
    bgColor: "bg-orange-primary/10",
  },
  {
    icon: Truck,
    title: "Order shipped",
    description: "Fitness Tracker",
    time: "1 day ago",
    color: "text-blue-primary",
    bgColor: "bg-blue-lightest",
  },
  {
    icon: CreditCard,
    title: "Payment confirmed",
    description: "Bluetooth Speaker",
    time: "2 days ago",
    color: "text-blue-dark",
    bgColor: "bg-blue-lightest/50",
  },
];

const quickActions = [
  {
    title: "Continue Shopping",
    description: "Discover new products",
    icon: ShoppingBag,
    href: "/shop",
    gradient: "gradient-primary",
  },
  {
    title: "Track Orders",
    description: "View order status",
    icon: Package,
    href: "/dashboard/orders",
    gradient: "gradient-accent",
  },
  {
    title: "View Wishlist",
    description: "8 items waiting",
    icon: Heart,
    href: "/dashboard/wishlist",
    gradient: "gradient-accent",
  },
  {
    title: "Earn Rewards",
    description: "Special offers",
    icon: Gift,
    href: "/shop",
    gradient: "gradient-primary",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`relative overflow-hidden glass-card bg-gradient-to-br ${stat.bgColor} border-white/50`}
            >
              {/* Decorative gradient blob */}
              <div
                className={`absolute -right-6 -top-6 w-24 h-24 bg-${stat.textColor.replace(
                  "text-",
                  ""
                )}/10 rounded-full blur-2xl`}
              />

              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 bg-${stat.gradient} rounded-xl shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className={`flex items-center space-x-1 px-2 py-1 rounded-full ${
                      stat.trend === "up"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    <ArrowUpRight className="w-3 h-3" />
                    <span className="text-xs font-semibold">{stat.change}</span>
                  </div>
                </div>

                <h3 className="text-sm font-medium text-foreground-secondary mb-1">
                  {stat.title}
                </h3>
                <p className="text-3xl font-bold text-foreground">
                  {stat.value}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 glass-card overflow-hidden"
        >
          <div className="p-6 border-b border-border">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  Recent Orders
                </h2>
                <p className="text-sm text-foreground-secondary mt-1">
                  Track your latest purchases
                </p>
              </div>
              <Link href="/dashboard/orders">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-primary hover:text-blue-dark hover:bg-blue-lightest/50"
                >
                  View All
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="p-6 space-y-4">
            {recentOrders.map((order, index) => {
              const StatusIcon = order.icon;
              return (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                  className="flex items-center gap-4 p-4 bg-background-secondary hover:bg-blue-lightest/30 rounded-xl transition-all cursor-pointer group"
                >
                  <div className="relative">
                    <img
                      src={order.image}
                      alt={order.product}
                      className="w-16 h-16 rounded-xl object-cover ring-2 ring-white shadow-md"
                    />
                    <div
                      className={`absolute -bottom-1 -right-1 p-1 ${order.bgColor} rounded-lg shadow-sm`}
                    >
                      <StatusIcon className={`w-3 h-3 ${order.color}`} />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate group-hover:text-blue-primary transition-colors">
                      {order.product}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-foreground-secondary">
                        {order.id}
                      </span>
                      <span className="text-xs text-gray-light">•</span>
                      <span className="text-xs text-foreground-secondary">
                        {order.time}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-foreground">${order.amount}</p>
                    <Badge
                      className={`${order.bgColor} ${order.color} border-0 mt-1`}
                    >
                      {order.status}
                    </Badge>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card overflow-hidden"
        >
          <div className="p-6 border-b border-border">
            <h2 className="text-xl font-bold text-foreground">
              Recent Activity
            </h2>
            <p className="text-sm text-foreground-secondary mt-1">
              Your latest actions
            </p>
          </div>

          <div className="p-6 space-y-4">
            {recentActivity.map((activity, index) => {
              const ActivityIcon = activity.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className={`p-2 ${activity.bgColor} rounded-lg flex-shrink-0`}
                  >
                    <ActivityIcon className={`w-4 h-4 ${activity.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground text-sm">
                      {activity.title}
                    </p>
                    <p className="text-xs text-foreground-secondary truncate">
                      {activity.description}
                    </p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Clock className="w-3 h-3 text-foreground-secondary" />
                      <span className="text-xs text-foreground-secondary">
                        {activity.time}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <Link href="/dashboard/orders">
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-4 border-border hover:bg-blue-lightest/50"
              >
                View All Activity
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {quickActions.map((action, index) => {
          const ActionIcon = action.icon;
          return (
            <Link key={action.title} href={action.href}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className={`relative overflow-hidden bg-${action.gradient} rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all cursor-pointer group glass-card`}
              >
                <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform" />

                <div className="relative">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl w-fit mb-3">
                    <ActionIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{action.title}</h3>
                  <p className="text-sm text-white/80">{action.description}</p>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>

      {/* Achievements Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="glass-card bg-gradient-to-r from-orange-primary/10 via-orange-lighter/10 to-orange-primary/5 border-orange-primary/20"
      >
        <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-gradient-accent rounded-2xl shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="text-xl font-bold text-foreground">
                  You're a Premium Member!
                </h3>
                <Sparkles className="w-5 h-5 text-orange-primary animate-pulse" />
              </div>
              <p className="text-foreground-secondary">
                Enjoy exclusive benefits, free shipping, and early access to
                sales
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-center px-4 py-2 glass-card">
              <p className="text-2xl font-bold text-foreground">24</p>
              <p className="text-xs text-foreground-secondary">Orders</p>
            </div>
            <div className="text-center px-4 py-2 glass-card">
              <p className="text-2xl font-bold text-foreground">$542</p>
              <p className="text-xs text-foreground-secondary">Saved</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
