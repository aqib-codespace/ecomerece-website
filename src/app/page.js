"use client";

import { CategoriesSection } from "../components/home/CategoriesSection";
import { CTASection } from "../components/home/CTASection";
import { FeaturedProducts } from "../components/home/FeaturedProducts";
import { HeroSection } from "../components/home/HeroSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { Layout } from "../components/layout/Layout";


export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
}
