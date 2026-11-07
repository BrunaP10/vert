"use client";

import { useState } from "react";
import Image from "next/image";
import type { CSSProperties } from "react";
import type { Product } from "@/types/product";
import { useCart } from "@/hooks/useCart";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
}

const colorMap: Record<string, string> = {
  Black: "#171717",
  Green: "#526B4D",
  Tortoise: "linear-gradient(135deg, #56351F 50%, #B18A5A 50%)",
  Cream: "#E8DCC8",
  Transparent: "#F2F2F0",
  Burgundy: "#702B3B",
  Gold: "#C5A15B",
  Gray: "#929292",
  "Black Pink": "linear-gradient(135deg, #171717 50%, #E98BAF 50%)",
  "Black Red": "linear-gradient(135deg, #171717 50%, #B52B2B 50%)",
  "White Blue": "linear-gradient(135deg, #F5F5F5 50%, #6099C5 50%)",
  "Navy Blue": "#263B60",
  "White Gray": "linear-gradient(135deg, #F5F5F5 50%, #A5A5A5 50%)",
  "Red Black": "linear-gradient(135deg, #B52B2B 50%, #171717 50%)",
};

export default function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  const selectedVariant = product.variants[selectedVariantIndex];

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
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={selectedVariant.image}
          alt={`${product.name} - ${selectedVariant.color}`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className={styles.image}
        />
      </div>

      <div className={styles.info}>
        <h3>{product.name}</h3>

        <p>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>

        <div className={styles.variants}>
          {product.variants.map((variant, index) => {
            const swatchStyle: CSSProperties = {
              background: colorMap[variant.color] ?? "#CCCCCC",
            };

            return (
              <button
                key={variant.color}
                type="button"
                className={`${styles.colorOption} ${
                  selectedVariantIndex === index ? styles.selected : ""
                }`}
                style={swatchStyle}
                onClick={() => setSelectedVariantIndex(index)}
                aria-label={`Selecionar cor ${variant.color}`}
                aria-pressed={selectedVariantIndex === index}
                title={variant.color}
              />
            );
          })}
        </div>

        <button
          type="button"
          className={styles.addButton}
          onClick={handleAddToCart}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </article>
  );
}
