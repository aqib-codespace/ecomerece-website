import React, { Suspense } from "react";
import ResetPasswordPage from "@/page-components/ResetPasswordPage";
export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center p-4">Loading...</div>}>
      <ResetPasswordPage />
    </Suspense>
  );
}
