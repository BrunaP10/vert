"use client";

import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import styles from "./StoreButton.module.css";

interface StoreButtonProps {
  clearCart?: boolean;
}

export default function StoreButton({
  clearCart = false,
}: StoreButtonProps) {
  const { dispatch } = useCart();

  function handleClick() {
    if (clearCart) {
      dispatch({ type: "CLEAR_CART" });
    }
  }

  return (
    <Link
      href="/"
      className={styles.button}
      onClick={handleClick}
    >
      VOLTAR À LOJA
    </Link>
  );
}
