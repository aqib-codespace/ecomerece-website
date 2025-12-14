import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Profile = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold mb-8">My Profile</h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl p-6 md:p-8"
      >
        {/* Avatar Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8 pb-8 border-b border-border">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <User className="h-12 w-12 text-primary-foreground" />
            </div>
            <Button
              variant="glass"
              size="icon"
              className="absolute -bottom-1 -right-1 h-8 w-8"
            >
              <Edit2 className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-muted-foreground">Member since January 2024</p>
          </div>
        </div>

        {/* Profile Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium mb-2 block">First Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  defaultValue="John"
                  className="pl-10 bg-secondary/50 border-white/10"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Last Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  defaultValue="Doe"
                  className="pl-10 bg-secondary/50 border-white/10"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  defaultValue="john@example.com"
                  className="pl-10 bg-secondary/50 border-white/10"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Phone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="tel"
                  defaultValue="+1 234 567 890"
                  className="pl-10 bg-secondary/50 border-white/10"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Address</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                defaultValue="123 Main St, New York, NY 10001"
                className="pl-10 bg-secondary/50 border-white/10"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="ghost">Cancel</Button>
            <Button variant="hero">Save Changes</Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Profile;
