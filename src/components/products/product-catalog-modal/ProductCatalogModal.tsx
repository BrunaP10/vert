"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/types/product";
import ProductCard from "../product-card/ProductCard";
import styles from "./ProductCatalogModal.module.css";

interface ProductCatalogModalProps {
  title: string;
  products: Product[];
}

export default function ProductCatalogModal({
  title,
  products,
}: ProductCatalogModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={styles.openButton}
        onClick={() => setIsOpen(true)}
      >
        Ver todos os modelos
      </button>

      {isOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsOpen(false)}
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="catalog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.header}>
              <div>
                <h2 id="catalog-title">{title}</h2>
                <p>Explore todos os modelos da coleção</p>
              </div>

              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
                aria-label="Fechar catálogo"
              >
                ×
              </button>
            </div>

            <div className={styles.products}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
