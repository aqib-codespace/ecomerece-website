import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  User, Package, Heart, Settings, LogOut, 
  ChevronRight, Menu, X 
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const sidebarLinks = [
  { name: "Profile", path: "/dashboard", icon: User },
  { name: "Orders", path: "/dashboard/orders", icon: Package },
  { name: "Wishlist", path: "/dashboard/wishlist", icon: Heart },
  { name: "Settings", path: "/dashboard/settings", icon: Settings },
];

const DashboardLayout = ({children}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Mobile Sidebar Toggle */}
          <Button
            variant="glass"
            size="icon"
            className="fixed bottom-4 right-4 z-50 md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Sidebar */}
          <aside
            className={`fixed inset-y-0 left-0 z-40 w-64 bg-card border-r border-border transform transition-transform md:relative md:transform-none ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
            }`}
          >
            <div className="h-full overflow-y-auto py-20 md:py-0">
              <div className="p-4 md:p-0">
                {/* User Info */}
                <div className="glass rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <User className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">John Doe</h3>
                      <p className="text-sm text-muted-foreground">john@example.com</p>
                    </div>
                  </div>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-2">
                  {sidebarLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                        pathname === link.path
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <link.icon className="h-5 w-5" />
                        <span>{link.name}</span>
                      </div>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  ))}
                </nav>

                {/* Logout Button */}
                <Button
                  variant="ghost"
                  className="w-full justify-start mt-6 text-destructive hover:text-destructive hover:bg-destructive/10"
                  onClick={() => router.push("/login")}
                >
                  <LogOut className="h-5 w-5 mr-3" />
                  Logout
                </Button>
              </div>
            </div>
          </aside>

          {/* Overlay */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          <main className="flex-1 min-w-0">
            {children}
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardLayout;
