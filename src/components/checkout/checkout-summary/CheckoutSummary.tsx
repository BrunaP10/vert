import Image from "next/image";
import type { CartItem } from "@/context/CartContext";
import styles from "./CheckoutSummary.module.css";

interface CheckoutSummaryProps {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
}

export default function CheckoutSummary({
  items,
  subtotal,
  shipping,
  total,
}: CheckoutSummaryProps) {
  function formatPrice(value: number) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <aside className={styles.summary}>
      <h2>Resumo do pedido</h2>

      <div className={styles.products}>
        {items.map((item) => (
          <article
            key={`${item.product.id}-${item.selectedVariant.color}`}
            className={styles.product}
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

            <div className={styles.productInfo}>
              <h3>{item.product.name}</h3>

              <span>
                Cor: {item.selectedVariant.color}
              </span>

              <span>
                Quantidade: {item.quantity}
              </span>

              <strong>
                {formatPrice(item.product.price * item.quantity)}
              </strong>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.totals}>
        <div>
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>

        <div>
          <span>Frete</span>
          <span>
            {shipping === 0 ? "Grátis" : formatPrice(shipping)}
          </span>
        </div>

        <div className={styles.total}>
          <strong>Total</strong>
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    </aside>
  );
}
