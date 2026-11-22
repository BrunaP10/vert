import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ProductCard from "@/components/products/product-card/ProductCard";
import StoreButton from "@/components/store-button/StoreButton";
import { products } from "@/data/products";
import styles from "./CategoryPage.module.css";

export default function SunglassesPage() {
  const sunglasses = products.filter(
    (product) => product.category === "sunglasses"
  );

  return (
    <>
      <Header />

      <main className={styles.container}>
        <StoreButton />
        
        <section className={styles.heading}>
          <span>VÉRT COLLECTION</span>
          <h1>Óculos de Sol</h1>
          <p>
            Modelos que combinam com você e com todos
            os seus momentos.
          </p>
        </section>

        <section className={styles.products}>
          {sunglasses.map((product) => (
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
