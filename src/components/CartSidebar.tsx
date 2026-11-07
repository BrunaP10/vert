"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import styles from "./CartSidebar.module.css";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({
  isOpen,
  onClose,
}: CartSidebarProps) {
  const { items, dispatch } = useCart();

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const subtotal = items.reduce(
    (total, item) =>
      total + item.product.price * item.quantity,
    0
  );

  function getItemId(
    productId: string,
    color: string
  ) {
    return `${productId}-${color}`;
  }

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <aside
        className={styles.sidebar}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className={styles.header}>
          <h2 id="cart-title">Minha sacola</h2>

          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Fechar sacola"
          >
            <X size={22} />
          </button>
        </header>

        <div className={styles.content}>
          {items.length === 0 ? (
            <div className={styles.empty}>
              <p>Sua sacola está vazia.</p>
              <span>Que tal encontrar seu próximo modelo?</span>
            </div>
          ) : (
            <div className={styles.items}>
              {items.map((item) => {
                const itemId = getItemId(
                  item.product.id,
                  item.selectedVariant.color
                );

                return (
                  <article
                    key={itemId}
                    className={styles.item}
                  >
                    <div className={styles.imageContainer}>
                      <Image
                        src={item.selectedVariant.image}
                        alt={`${item.product.name} - ${item.selectedVariant.color}`}
                        fill
                        sizes="100px"
                        className={styles.image}
                      />
                    </div>

                    <div className={styles.itemInfo}>
                      <h3>{item.product.name}</h3>

                      <span className={styles.color}>
                        Cor: {item.selectedVariant.color}
                      </span>

                      <p className={styles.price}>
                        {item.product.price.toLocaleString(
                          "pt-BR",
                          {
                            style: "currency",
                            currency: "BRL",
                          }
                        )}
                      </p>

                      <div className={styles.controls}>
                        <div className={styles.quantity}>
                          <button
                            type="button"
                            aria-label="Diminuir quantidade"
                            onClick={() =>
                              dispatch({
                                type: "DECREASE_QUANTITY",
                                payload: itemId,
                              })
                            }
                          >
                            <Minus size={14} />
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            type="button"
                            aria-label="Aumentar quantidade"
                            onClick={() =>
                              dispatch({
                                type: "INCREASE_QUANTITY",
                                payload: itemId,
                              })
                            }
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <button
                          type="button"
                          className={styles.removeButton}
                          aria-label={`Remover ${item.product.name}`}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_ITEM",
                              payload: itemId,
                            })
                          }
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <footer className={styles.footer}>
            <div className={styles.subtotal}>
              <span>Subtotal</span>

              <strong>
                {subtotal.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
            </div>

            <p>Frete calculado na próxima etapa.</p>

            <button
              type="button"
              className={styles.checkoutButton}
              disabled
            >
              Finalizar compra
            </button>
          </footer>
        )}
      </aside>
    </div>
  );
}
