import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  shop: [
    { name: "All Products", path: "/shop" },
    { name: "New Arrivals", path: "/shop?filter=new" },
    { name: "Best Sellers", path: "/shop?filter=best" },
    { name: "Sale", path: "/shop?filter=sale" },
  ],
  support: [
    { name: "Contact Us", path: "/contact" },
    { name: "FAQs", path: "/faq" },
    { name: "Shipping", path: "/shipping" },
    { name: "Returns", path: "/returns" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-blue-lightest/20 border-t border-blue-primary/10">
      <div className="w-full md:w-[95%] max-w-[1800px] mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/images/logo.png"
                alt="TrioCart"
                className="h-24 w-auto"
              />
            </Link>
            <p className="text-foreground-secondary mb-8 max-w-sm leading-relaxed">
              Discover premium products that elevate your lifestyle. Quality
              meets elegance in every item we curate.
            </p>
            <div className="flex gap-3">
              <Input
                placeholder="Enter your email"
                className="glass border-blue-primary/30 focus:border-blue-primary h-12 max-w-xs"
              />
              <Button className="btn-accent h-12 px-6">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-blue-primary">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-foreground-secondary hover:text-blue-primary transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-orange-primary">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-foreground-secondary hover:text-orange-primary transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-blue-primary">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-foreground-secondary hover:text-blue-primary transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-primary/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-foreground-secondary text-sm font-medium">
            © 2024 TrioCart. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="h-10 w-10 rounded-full glass-button flex items-center justify-center text-foreground-secondary hover:text-white hover:bg-blue-primary hover:scale-110 hover:shadow-glow-blue transition-all duration-300"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
