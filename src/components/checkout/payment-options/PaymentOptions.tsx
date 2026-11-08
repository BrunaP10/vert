"use client";

import { useState } from "react";
import { CreditCard, QrCode } from "lucide-react";
import styles from "./PaymentOptions.module.css";

export type PaymentMethod = "pix" | "credit-card";

interface PaymentOptionsProps {
  onBack: () => void;
  onConfirm: (method: PaymentMethod) => void;
}

export default function PaymentOptions({
  onBack,
  onConfirm,
}: PaymentOptionsProps) {
  const [selectedMethod, setSelectedMethod] =
    useState<PaymentMethod>("pix");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onConfirm(selectedMethod);
  }

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit}
    >
      <section className={styles.section}>
        <h2>Forma de pagamento</h2>

        <p>Escolha como deseja realizar o pagamento.</p>

        <label
          className={`${styles.option} ${
            selectedMethod === "pix" ? styles.selected : ""
          }`}
        >
          <input
            type="radio"
            name="payment"
            value="pix"
            checked={selectedMethod === "pix"}
            onChange={() => setSelectedMethod("pix")}
          />

          <QrCode size={24} strokeWidth={1.5} />

          <div className={styles.optionInfo}>
            <strong>Pix</strong>
            <span>Pagamento instantâneo</span>
          </div>
        </label>

        <label
          className={`${styles.option} ${
            selectedMethod === "credit-card" ? styles.selected : ""
          }`}
        >
          <input
            type="radio"
            name="payment"
            value="credit-card"
            checked={selectedMethod === "credit-card"}
            onChange={() => setSelectedMethod("credit-card")}
          />

          <CreditCard size={24} strokeWidth={1.5} />

          <div className={styles.optionInfo}>
            <strong>Cartão de crédito</strong>
            <span>Pagamento demonstrativo</span>
          </div>
        </label>
      </section>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.backButton}
          onClick={onBack}
        >
          Voltar
        </button>

        <button
          type="submit"
          className={styles.confirmButton}
        >
          Confirmar pedido
        </button>
      </div>
    </form>
  );
}
