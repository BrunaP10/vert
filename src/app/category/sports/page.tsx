import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ProductCard from "@/components/products/product-card/ProductCard";
import StoreButton from "@/components/store-button/StoreButton";
import { products } from "@/data/products";
import styles from "./CategoryPage.module.css";

export default function SportsPage() {
  const sports = products.filter(
    (product) => product.category === "sports"
  );

  return (
    <>
      <Header />

      <main className={styles.container}>
        <StoreButton />
        
        <section className={styles.heading}>
          <span>VÉRT PERFORMANCE</span>
          <h1>Óculos Esportivos</h1>
          <p>
            Tecnologia e performance para acompanhar seu ritmo.
          </p>
        </section>

        <section className={styles.products}>
          {sports.map((product) => (
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
