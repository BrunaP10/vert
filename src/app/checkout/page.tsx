"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";

import CheckoutForm, {
  type CustomerData,
} from "@/components/checkout/checkout-form/CheckoutForm";

import CheckoutSummary from "@/components/checkout/checkout-summary/CheckoutSummary";

import PaymentOptions, {
  type PaymentMethod,
} from "@/components/checkout/payment-options/PaymentOptions";

import OrderConfirmation from "@/components/checkout/order-confirmation/OrderConfirmation";

import styles from "./checkout.module.css";

export default function CheckoutPage() {
  const { items } = useCart();
  const router = useRouter();

  const [customerData, setCustomerData] =
    useState<CustomerData | null>(null);

  const [currentStep, setCurrentStep] = useState<
    "customer" | "payment" | "confirmation"
  >("customer");

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod | null>(null);

  const subtotal = items.reduce(
    (total, item) =>
      total + item.product.price * item.quantity,
    0
  );

  const shipping = 0;
  const total = subtotal + shipping;

  function handleSubmit(data: CustomerData) {
    setCustomerData(data);
    setCurrentStep("payment");
  }

  function handleConfirmPayment(method: PaymentMethod) {
    setPaymentMethod(method);
    setCurrentStep("confirmation");
  }

  if (items.length === 0) {
    return (
      <main className={styles.empty}>
        <h1>Sua sacola está vazia</h1>
        <p>Adicione produtos para continuar sua compra.</p>

        <button
          type="button"
          onClick={() => router.push("/")}
        >
          Voltar para a loja
        </button>
      </main>
    );
  }

  return (
    <main className={styles.checkout}>
      <header className={styles.header}>
        <button
          type="button"
          onClick={() => router.push("/")}
        >
          Voltar para a loja
        </button>

        <h1>Finalizar compra</h1>

        <span>VÉRT</span>
      </header>

      <div className={styles.container}>
        <section className={styles.formSection}>
          {currentStep === "customer" && (
            <CheckoutForm onSubmit={handleSubmit} />
          )}

          {currentStep === "payment" && (
            <PaymentOptions
              onBack={() => setCurrentStep("customer")}
              onConfirm={handleConfirmPayment}
            />
          )}

          {currentStep === "confirmation" &&
            customerData &&
            paymentMethod && (
              <OrderConfirmation
                customerName={customerData.name}
                paymentMethod={paymentMethod}
              />
            )}
        </section>

        <aside className={styles.summarySection}>
          <CheckoutSummary
            items={items}
            subtotal={subtotal}
            shipping={shipping}
            total={total}
          />
        </aside>
      </div>
    </main>
  );
}
