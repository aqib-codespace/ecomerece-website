"use client";
import { ReduxProvider } from "@/store/ReduxProvider";
import { Toaster } from "@/components/ui/toaster";

export default function Providers({ children }) {
  return (
    <ReduxProvider>
      {children}
      <Toaster />
    </ReduxProvider>
  );
}
