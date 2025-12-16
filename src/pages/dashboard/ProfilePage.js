"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Edit2,
  Camera,
  Save,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function ProfilePage() {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "+1 234 567 890",
    address: "123 Main St, New York, NY 10001",
  });

  const handleSave = () => {
    toast({
      title: "Profile updated",
      description: "Your changes have been saved successfully.",
    });
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">My Profile</h1>
          <p className="text-muted-foreground mt-2">
            Manage your personal information
          </p>
        </div>
        {!isEditing && (
          <Button
            variant="hero"
            onClick={() => setIsEditing(true)}
            className="gap-2"
          >
            <Edit2 className="h-4 w-4" />
            Edit Profile
          </Button>
        )}
      </motion.div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-2xl p-8 border border-border/50"
      >
        {/* Avatar Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8 pb-8 border-b border-border/50">
          <div className="relative group">
            <div className="relative">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-accent flex items-center justify-center ring-4 ring-primary/10 shadow-2xl">
                <User className="h-16 w-16 text-primary-foreground" />
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -bottom-2 -right-2 p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg"
              >
                <Camera className="h-5 w-5" />
              </motion.button>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-background" />
          </div>

          <div className="text-center md:text-left flex-1">
            <h2 className="text-2xl font-bold mb-1">John Doe</h2>
            <p className="text-muted-foreground mb-3">john@example.com</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Premium Member
              </div>
              <div className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                Verified
              </div>
              <div className="px-3 py-1 rounded-full bg-secondary text-sm">
                Member since Jan 2024
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="text-sm font-semibold mb-3 block">
              First Name
            </label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <Input
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                disabled={!isEditing}
                className="pl-12 h-12 bg-secondary/30 border-border/50 hover:border-primary/50 transition-colors"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
          >
            <label className="text-sm font-semibold mb-3 block">
              Last Name
            </label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <Input
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                disabled={!isEditing}
                className="pl-12 h-12 bg-secondary/30 border-border/50 hover:border-primary/50 transition-colors"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="text-sm font-semibold mb-3 block">
              Email Address
            </label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <Input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                disabled={!isEditing}
                className="pl-12 h-12 bg-secondary/30 border-border/50 hover:border-primary/50 transition-colors"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
          >
            <label className="text-sm font-semibold mb-3 block">
              Phone Number
            </label>
            <div className="relative group">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                disabled={!isEditing}
                className="pl-12 h-12 bg-secondary/30 border-border/50 hover:border-primary/50 transition-colors"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6"
        >
          <label className="text-sm font-semibold mb-3 block">Address</label>
          <div className="relative group">
            <MapPin className="absolute left-4 top-4 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <Input
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              disabled={!isEditing}
              className="pl-12 h-12 bg-secondary/30 border-border/50 hover:border-primary/50 transition-colors"
            />
          </div>
        </motion.div>

        {isEditing && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-end gap-4 mt-8 pt-6 border-t border-border/50"
          >
            <Button
              variant="ghost"
              onClick={() => setIsEditing(false)}
              className="gap-2"
            >
              <X className="h-4 w-4" />
              Cancel
            </Button>
            <Button variant="hero" onClick={handleSave} className="gap-2">
              <Save className="h-4 w-4" />
              Save Changes
            </Button>
          </motion.div>
        )}
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <div className="glass rounded-2xl p-6 border border-border/50">
          <h3 className="font-bold text-lg mb-4">Account Statistics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Total Orders</span>
              <span className="font-bold">24</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Total Spent</span>
              <span className="font-bold">$2,847</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Saved Amount</span>
              <span className="font-bold text-green-500">$542</span>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-6 border border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="font-bold text-lg mb-4">Account Security</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Two-Factor Auth</span>
              <div className="px-2 py-1 rounded bg-green-500/20 text-green-600 text-xs font-medium">
                Enabled
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Email Verified</span>
              <div className="px-2 py-1 rounded bg-green-500/20 text-green-600 text-xs font-medium">
                Verified
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4">
              Change Password
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
