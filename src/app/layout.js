import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "../components/ui/tooltip";
import { Toaster } from "../components/ui/toaster";
import { Toaster as Sonner } from "../components/ui/sonner";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TrioCart - Premium E-Commerce Shopping Experience",
  description:
    "Discover premium products with seamless shopping experience. Shop the latest trends, exclusive deals, and top-quality items with secure checkout and fast delivery.",
  keywords:
    "online shopping, e-commerce, premium products, best deals, secure shopping, fast delivery",
  authors: [{ name: "TrioCart" }],
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "TrioCart - Premium E-Commerce Shopping Experience",
    description:
      "Discover premium products with seamless shopping experience. Shop the latest trends and exclusive deals.",
    type: "website",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
