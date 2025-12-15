"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ChevronRight,
  CreditCard,
  Truck,
  ShieldCheck,
  Check,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const orderItems = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Minimalist Watch Collection",
    price: 189,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop",
  },
];

export default function CheckOut() {
  const router = useRouter();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else {
      toast({
        title: "Order placed successfully!",
        description:
          "Thank you for your purchase. You will receive a confirmation email shortly.",
      });
      router.push("/order-confirmation");
    }
  };

  const steps = [
    { number: 1, title: "Contact", icon: Truck },
    { number: 2, title: "Shipping", icon: Truck },
    { number: 3, title: "Payment", icon: CreditCard },
  ];

  return (
    <Layout>
      <div className="w-full md:w-[95%] max-w-[1800px] mx-auto px-4 md:px-8 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link
            href="/cart"
            className="hover:text-foreground transition-colors"
          >
            Cart
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Checkout</span>
        </nav>

        <div className="flex items-center justify-center mb-12">
          {steps.map((s, index) => (
            <div key={s.number} className="flex items-center">
              <div className="flex items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    step >= s.number
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {step > s.number ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <span>{s.number}</span>
                  )}
                </div>
                <span
                  className={`hidden sm:inline font-medium ${
                    step >= s.number
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {s.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-16 sm:w-24 h-0.5 mx-4 ${
                    step > s.number ? "bg-primary" : "bg-secondary"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-2 lg:order-1"
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 md:p-8"
            >
              {step === 1 && (
                <>
                  <h2 className="text-xl font-bold mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-secondary/50 border-white/10 h-12"
                      required
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="text"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                        className="bg-secondary/50 border-white/10 h-12"
                        required
                      />
                      <Input
                        type="text"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="bg-secondary/50 border-white/10 h-12"
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="text-xl font-bold mb-6">Shipping Address</h2>
                  <div className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Street address"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="bg-secondary/50 border-white/10 h-12"
                      required
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="text"
                        placeholder="City"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        className="bg-secondary/50 border-white/10 h-12"
                        required
                      />
                      <Input
                        type="text"
                        placeholder="State"
                        value={formData.state}
                        onChange={(e) =>
                          setFormData({ ...formData, state: e.target.value })
                        }
                        className="bg-secondary/50 border-white/10 h-12"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="text"
                        placeholder="ZIP code"
                        value={formData.zip}
                        onChange={(e) =>
                          setFormData({ ...formData, zip: e.target.value })
                        }
                        className="bg-secondary/50 border-white/10 h-12"
                        required
                      />
                      <Input
                        type="text"
                        placeholder="Country"
                        value={formData.country}
                        onChange={(e) =>
                          setFormData({ ...formData, country: e.target.value })
                        }
                        className="bg-secondary/50 border-white/10 h-12"
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h2 className="text-xl font-bold mb-6">Payment Details</h2>
                  <div className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Card number"
                      value={formData.cardNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, cardNumber: e.target.value })
                      }
                      className="bg-secondary/50 border-white/10 h-12"
                      required
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="text"
                        placeholder="MM/YY"
                        value={formData.expiry}
                        onChange={(e) =>
                          setFormData({ ...formData, expiry: e.target.value })
                        }
                        className="bg-secondary/50 border-white/10 h-12"
                        required
                      />
                      <Input
                        type="text"
                        placeholder="CVC"
                        value={formData.cvc}
                        onChange={(e) =>
                          setFormData({ ...formData, cvc: e.target.value })
                        }
                        className="bg-secondary/50 border-white/10 h-12"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-6 p-4 bg-accent/10 rounded-lg">
                    <ShieldCheck className="h-5 w-5 text-accent" />
                    <span className="text-sm text-muted-foreground">
                      Your payment information is secure and encrypted
                    </span>
                  </div>
                </>
              )}

              <div className="flex gap-4 mt-8">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="glass"
                    size="lg"
                    onClick={() => setStep(step - 1)}
                  >
                    Back
                  </Button>
                )}
                <Button
                  variant="hero"
                  size="lg"
                  type="submit"
                  className="flex-1"
                >
                  {step === 3 ? `Pay $${total.toFixed(2)}` : "Continue"}
                </Button>
              </div>
            </form>
          </motion.div>

          <div className="order-1 lg:order-2">
            <div className="glass rounded-2xl p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4 pb-6 border-b border-border">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium line-clamp-1">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>
                    <span className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="space-y-3 py-6 border-b border-border">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-accent">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex justify-between items-center py-6">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-2xl font-bold gradient-text">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
