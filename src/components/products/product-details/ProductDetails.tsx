"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/types/product";
import { useCart } from "@/hooks/useCart";
import StoreButton from "@/components/store-button/StoreButton";
import styles from "./ProductDetails.module.css";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({
  product,
}: ProductDetailsProps) {
  const [selectedVariantIndex, setSelectedVariantIndex] =
    useState(0);

  const selectedVariant =
    product.variants[selectedVariantIndex];

  const { dispatch } = useCart();

  function handleAddToCart() {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        product,
        selectedVariant,
      },
    });
  }

  return (
    <main className={styles.container}>
      <StoreButton />

      <section className={styles.productLayout}>
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            <Image
              src={selectedVariant.image}
              alt={`${product.name} - ${selectedVariant.color}`}
              width={700}
              height={700}
              priority
            />
          </div>

          <div className={styles.thumbnails}>
            {product.variants.map((variant, index) => (
              <button
                key={variant.color}
                type="button"
                className={`${styles.thumbnail} ${
                  selectedVariantIndex === index
                    ? styles.selected
                    : ""
                }`}
                onClick={() => setSelectedVariantIndex(index)}
                aria-label={`Selecionar ${variant.color}`}
                aria-pressed={selectedVariantIndex === index}
              >
                <Image
                  src={variant.image}
                  alt={variant.color}
                  width={90}
                  height={90}
                />
              </button>
            ))}
          </div>
        </div>

        <div className={styles.productInfo}>
          <p className={styles.productModel}>
            {product.model}
          </p>

          <h1 className={styles.productName}>
            {product.name}
          </h1>

          <p className={styles.productDescription}>
            {product.description}
          </p>

          <p className={styles.productPrice}>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>

          <p className={styles.variantLabel}>
            Cor selecionada: {selectedVariant.color}
          </p>

          <button
            type="button"
            className={styles.addButton}
            onClick={handleAddToCart}
          >
            ADICIONAR AO CARRINHO
          </button>
        </div>
      </section>
    </main>
  );
}
