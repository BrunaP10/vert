"use client";

import { useState } from "react";
import type { Product } from "@/types/product";
import ProductCard from "@/components/products/product-card/ProductCard";
import styles from "./ProductCarousel.module.css";

interface ProductCarouselProps {
  products: Product[];
}

export default function ProductCarousel({
  products,
}: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + 2
  );

  function handleNext() {
    setCurrentIndex((prev) =>
      prev + 2 >= products.length ? 0 : prev + 2
    );
  }

  function handlePrevious() {
    setCurrentIndex((prev) =>
      prev - 2 < 0
        ? Math.max(products.length - 2, 0)
        : prev - 2
    );
  }

  return (
    <section className={styles.carousel}>
      <div className={styles.products}>
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {products.length > 2 && (
        <div className={styles.navigation}>
          <button
            onClick={handlePrevious}
            aria-label="Produtos anteriores"
          >
            ←
          </button>

          <span>
            {Math.floor(currentIndex / 2) + 1} /{" "}
            {Math.ceil(products.length / 2)}
          </span>

          <button
            onClick={handleNext}
            aria-label="Próximos produtos"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}