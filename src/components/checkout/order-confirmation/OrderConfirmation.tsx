"use client";

import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import styles from "./OrderConfirmation.module.css";

interface OrderConfirmationProps {
  customerName: string;
  paymentMethod: "pix" | "credit-card";
}

export default function OrderConfirmation({
  customerName,
  paymentMethod,
}: OrderConfirmationProps) {
  const router = useRouter();
  const { dispatch } = useCart();

  const paymentLabel =
    paymentMethod === "pix" ? "Pix" : "Cartão de crédito";

  function handleBackToStore() {
    dispatch({ type: "CLEAR_CART" });
    router.push("/");
  }

  return (
    <section className={styles.container}>
      <CheckCircle2 size={56} strokeWidth={1.5} />

      <h2>Pedido confirmado!</h2>

      <p>Obrigado pela sua compra, {customerName}.</p>

      <p>
        Forma de pagamento: <strong>{paymentLabel}</strong>
      </p>

      <span>
        Esta é uma confirmação demonstrativa da VÉRT.
      </span>

      <button type="button" onClick={handleBackToStore}>
        Voltar para a loja
      </button>
    </section>
  );
}
