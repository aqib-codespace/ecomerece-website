"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Package,
  Eye,
  ChevronRight,
  Download,
  Truck,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const orders = [
  {
    id: "ORD-2024-001",
    date: "Dec 14, 2024",
    status: "Delivered",
    total: 677,
    items: 3,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
    trackingNumber: "TRK1234567890",
    estimatedDelivery: "Delivered on Dec 14",
  },
  {
    id: "ORD-2024-002",
    date: "Dec 12, 2024",
    status: "Shipped",
    total: 189,
    items: 1,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop",
    trackingNumber: "TRK0987654321",
    estimatedDelivery: "Expected Dec 16",
  },
  {
    id: "ORD-2024-003",
    date: "Dec 10, 2024",
    status: "Processing",
    total: 429,
    items: 2,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=100&h=100&fit=crop",
    trackingNumber: "Pending",
    estimatedDelivery: "Processing...",
  },
];

const getStatusConfig = (status) => {
  const configs = {
    Delivered: {
      color: "bg-green-500/10 text-green-600 border-green-500/20",
      icon: CheckCircle2,
      gradient: "from-green-500 to-emerald-500",
    },
    Shipped: {
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
      icon: Truck,
      gradient: "from-blue-500 to-cyan-500",
    },
    Processing: {
      color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
      icon: Clock,
      gradient: "from-orange-500 to-yellow-500",
    },
    Cancelled: {
      color: "bg-red-500/10 text-red-600 border-red-500/20",
      icon: AlertCircle,
      gradient: "from-red-500 to-rose-500",
    },
  };
  return configs[status] || configs.Processing;
};

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">My Orders</h1>
          <p className="text-muted-foreground mt-2">
            Track and manage your purchases
          </p>
        </div>
        <Button variant="hero" asChild className="hidden md:flex">
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </motion.div>

      {/* Order Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: "Total Orders", value: "24", icon: Package },
          { label: "Delivered", value: "18", icon: CheckCircle2 },
          { label: "In Transit", value: "4", icon: Truck },
          { label: "Processing", value: "2", icon: Clock },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.05 }}
            className="glass rounded-xl p-4 border border-border/50 hover:border-primary/50 transition-colors"
          >
            <stat.icon className="h-8 w-8 text-primary mb-2" />
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Orders List */}
      {orders.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass rounded-2xl p-12 text-center border border-border/50"
        >
          <Package className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-xl font-semibold mb-2">No orders yet</h2>
          <p className="text-muted-foreground mb-6">
            Start shopping to see your orders here
          </p>
          <Button variant="hero" asChild>
            <Link href="/shop">Start Shopping</Link>
          </Button>
        </motion.div>
      ) : (
        <div className="space-y-4">
          {orders.map((order, index) => {
            const statusConfig = getStatusConfig(order.status);
            const StatusIcon = statusConfig.icon;

            return (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group glass-hover rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Order Image & Info */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className="relative">
                      <img
                        src={order.image}
                        alt="Order"
                        className="w-20 h-20 rounded-xl object-cover ring-2 ring-border/50"
                      />
                      <div
                        className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br ${statusConfig.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <StatusIcon className="h-3 w-3 text-white" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-lg">{order.id}</h3>
                        <Badge className={`${statusConfig.color} border`}>
                          {order.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Placed on {order.date} • {order.items} item
                        {order.items > 1 ? "s" : ""}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="px-2 py-1 rounded bg-secondary text-xs">
                          {order.trackingNumber}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {order.estimatedDelivery}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Order Actions */}
                  <div className="flex items-center gap-4 lg:justify-end">
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground mb-1">
                        Total
                      </div>
                      <div className="text-2xl font-bold">${order.total}</div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="glass" size="icon" className="h-12 w-12">
                        <Download className="h-5 w-5" />
                      </Button>
                      <Button variant="hero" className="gap-2">
                        <Eye className="h-4 w-4" />
                        <span className="hidden sm:inline">View Details</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Order Progress (for shipped items) */}
                {order.status === "Shipped" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-6 pt-6 border-t border-border/50"
                  >
                    <div className="flex items-center justify-between">
                      {[
                        "Order Placed",
                        "Processing",
                        "Shipped",
                        "Out for Delivery",
                      ].map((step, i) => (
                        <div key={step} className="flex-1 relative">
                          <div className="flex flex-col items-center">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                i <= 2
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-secondary text-muted-foreground"
                              }`}
                            >
                              {i <= 2 && <CheckCircle2 className="h-4 w-4" />}
                            </div>
                            <span className="text-xs mt-2 text-center">
                              {step}
                            </span>
                          </div>
                          {i < 3 && (
                            <div
                              className={`absolute top-4 left-1/2 w-full h-0.5 -z-10 ${
                                i < 2 ? "bg-primary" : "bg-secondary"
                              }`}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
