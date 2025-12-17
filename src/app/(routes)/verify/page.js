"use client";
import { Suspense } from "react";
import VerifyPage from "@/page-components/VerifyPage";

function VerifyPageWrapper() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <VerifyPage />
    </Suspense>
  );
}

export default VerifyPageWrapper;
