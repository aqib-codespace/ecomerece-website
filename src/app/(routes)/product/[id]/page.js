"use client";
import { use } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import ProductDetailPage from "@/page-components/ProductDetailPage";

export default function Page({ params }) {
  const resolvedParams = use(params);

  return (
    <>
      <Header />
      <div className="pt-24"></div>
      <ProductDetailPage params={resolvedParams} />
      <Footer />
    </>
  );
}
