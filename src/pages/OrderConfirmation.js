"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Package, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";


export default function OrderConfirmationPage() {
  const orderId =
    "TrioCart-" + Math.random().toString(36).substring(2, 10).toUpperCase();

  return (
    <Layout>
      <div className="w-full md:w-[95%] max-w-[1800px] mx-auto px-4 md:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle2 className="h-12 w-12 text-accent" />
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Thank you for your order!
          </h1>
          <p className="text-muted-foreground mb-8">
            Your order has been placed successfully. We've sent a confirmation
            email with your order details.
          </p>

          <div className="glass rounded-2xl p-6 md:p-8 mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Package className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">Order ID: {orderId}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-sm text-muted-foreground">
                  Estimated Delivery
                </p>
                <p className="font-medium">3-5 Business Days</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Shipping Method</p>
                <p className="font-medium">Express Shipping</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Link href="/dashboard/orders">
                Track Order <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button variant="glass" size="lg">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
