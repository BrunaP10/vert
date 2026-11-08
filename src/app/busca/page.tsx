"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useMemo, useState } from "react";

import { products } from "@/data/products";
import ProductCard from "@/components/products/product-card/ProductCard";

import styles from "./busca.module.css";

type SortOption = "relevant" | "price-asc" | "price-desc" | "name-asc" | "name-desc";

function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const searchTerm = searchParams.get("q") ?? "";

  const [sortOption, setSortOption] = useState<SortOption>("relevant");

  const filteredProducts = useMemo(() => {
    const normalize = (value: string) =>
      value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

    const query = normalize(searchTerm);

    if (!query) return [];

    return products.filter((product) => {
      const searchableText = normalize(
        `${product.name} ${product.model} ${product.category}`
      );

      return searchableText.includes(query);
    });
  }, [searchTerm]);

  const sortedProducts = useMemo(() => {
    const result = [...filteredProducts];

    switch (sortOption) {
      case "price-asc":
        return result.sort((a, b) => a.price - b.price);

      case "price-desc":
        return result.sort((a, b) => b.price - a.price);

      case "name-asc":
        return result.sort((a, b) =>
          a.name.localeCompare(b.name, "pt-BR")
        );

      case "name-desc":
        return result.sort((a, b) =>
          b.name.localeCompare(a.name, "pt-BR")
        );

      default:
        return result;
    }
  }, [filteredProducts, sortOption]);

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <span>VÉRT / BUSCA</span>

        <h1>Resultados da busca</h1>

        <p>
          {searchTerm
            ? `Resultados para "${searchTerm}"`
            : "Digite um termo para encontrar seus produtos."}
        </p>
      </div>

      {sortedProducts.length > 0 ? (
        <>
          <div className={styles.resultsInfo}>
            <span>
              {sortedProducts.length}{" "}
              {sortedProducts.length === 1
                ? "produto encontrado"
                : "produtos encontrados"}
            </span>

            <div className={styles.resultsActions}>
              <div className={styles.sortControl}>
                <label htmlFor="sort-products">
                  Ordenar por:
                </label>

                <select
                  id="sort-products"
                  value={sortOption}
                  onChange={(event) =>
                    setSortOption(event.target.value as SortOption)
                  }
                >
                  <option value="relevant">Mais relevantes</option>
                  <option value="price-asc">Menor preço</option>
                  <option value="price-desc">Maior preço</option>
                  <option value="name-asc">Nome: A–Z</option>
                  <option value="name-desc">Nome: Z–A</option>
                </select>
              </div>

              <button
                type="button"
                onClick={() => router.push("/")}
              >
                Voltar para a loja
              </button>
            </div>
          </div>

          <div className={styles.productGrid}>
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </>
      ) : (
        <div className={styles.empty}>
          <h2>Nenhum produto encontrado</h2>

          <p>
            Não encontramos resultados para sua pesquisa.
            Tente buscar pelo nome ou modelo do produto.
          </p>

          <button
            type="button"
            onClick={() => router.push("/")}
          >
            Voltar para a loja
          </button>
        </div>
      )}
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <main className={styles.page}>
          Carregando resultados...
        </main>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
