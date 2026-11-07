import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import InstitutionalSection from "@/components/InstitutionalSection";
import ProductSection from "@/components/ProductSection";
import BenefitsBar from "@/components/BenefitsBar";
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
    </>
  );
}