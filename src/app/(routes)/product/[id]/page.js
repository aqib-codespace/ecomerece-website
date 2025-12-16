import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import ProductDetailPage from "@/pages/ProductDetailPage";

export default function Page({ params }) {
  return (
    <>
      <Header />
      <div className="pt-24"></div>
      <ProductDetailPage params={params} />
      <Footer />
    </>
  );
}
