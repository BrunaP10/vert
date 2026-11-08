import Header from "@/components/header/Header";
import HeroBanner from "@/components/hero-banner/HeroBanner";
import InstitutionalSection from "@/components/institutional-section/InstitutionalSection";
import ProductSection from "@/components/products/product-section/ProductSection";
import BenefitsBar from "@/components/benefits-bar/BenefitsBar";
import Footer from "@/components/footer/Footer";
import { products } from "@/data/products";

export default function Home() {
  const sunglasses = products.filter(
    (product) => product.category === "sunglasses"
  );

  const prescription = products.filter(
    (product) => product.category === "prescription"
  );

  const sports = products.filter(
    (product) => product.category === "sports"
  );

  return (
    <>
      <Header />

      <main id="inicio">
        <HeroBanner />
        <BenefitsBar />
        <InstitutionalSection />

        <ProductSection
          title="Óculos de Sol"
          category="sunglasses"
          banner="/images/banners/secondary/card-sunglasses.jpeg"
          categoryImage="/images/category/category-sunglasses.jpeg"
          products={sunglasses}
        />

        <ProductSection
          title="Óculos de Grau"
          category="prescription"
          banner="/images/banners/secondary/card-prescription.jpeg"
          categoryImage="/images/category/category-prescription.jpeg"
          products={prescription}
        />

        <ProductSection
          title="Óculos Esportivos"
          category="sports"
          banner="/images/banners/secondary/card-sports.jpeg"
          categoryImage="/images/category/category-sports.jpeg"
          products={sports}
        />
      </main>
      
      <Footer />
    </>
  );
}