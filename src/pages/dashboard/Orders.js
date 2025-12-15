import { motion } from "framer-motion";
import Link from "next/link";
import { Package, ChevronRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const orders = [
  {
    id: "LUXE-ABC123",
    date: "Dec 10, 2024",
    status: "Delivered",
    total: 677,
    items: 3,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
  },
  {
    id: "LUXE-DEF456",
    date: "Dec 5, 2024",
    status: "Shipped",
    total: 189,
    items: 1,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop",
  },
  {
    id: "LUXE-GHI789",
    date: "Nov 28, 2024",
    status: "Processing",
    total: 429,
    items: 2,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=100&h=100&fit=crop",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Delivered":
      return "bg-accent/20 text-accent";
    case "Shipped":
      return "bg-primary/20 text-primary";
    case "Processing":
      return "bg-orange-500/20 text-orange-400";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const Orders = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold mb-8">My Orders</h1>

      {orders.length === 0 ? (
        <div className="glass rounded-2xl p-12 text-center">
          <Package className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-xl font-semibold mb-2">No orders yet</h2>
          <p className="text-muted-foreground mb-6">
            You haven't placed any orders yet. Start shopping to see your orders here.
          </p>
          <Button variant="hero" asChild>
            <Link href="/shop">Start Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-4 md:p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <img
                  src={order.image}
                  alt="Order"
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold">{order.id}</h3>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Placed on {order.date} • {order.items} item{order.items > 1 ? "s" : ""}
                  </p>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-4">
                  <span className="text-lg font-bold">${order.total}</span>
                  <Button variant="glass" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
