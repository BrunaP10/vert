import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ProductCard from "@/components/products/product-card/ProductCard";
import StoreButton from "@/components/store-button/StoreButton";
import { products } from "@/data/products";
import styles from "./CategoryPage.module.css";

export default function PrescriptionPage() {
  const prescription = products.filter(
    (product) => product.category === "prescription"
  );

  return (
    <>
      <Header />

      <main className={styles.container}>
        <StoreButton />

        <section className={styles.heading}>
          <span>VÉRT COLLECTION</span>
          <h1>Óculos de Grau</h1>
          <p>
            Descubra armações que valorizam sua personalidade.
          </p>
        </section>

        <section className={styles.products}>
          {prescription.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
