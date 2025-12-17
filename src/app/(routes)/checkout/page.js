"use client";
import CheckOut from "@/page-components/Checkout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function Page() {
  return (
    <ProtectedRoute>
      <CheckOut />
    </ProtectedRoute>
  );
}
