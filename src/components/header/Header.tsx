"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import { Menu, ShoppingBag } from "lucide-react";
import Sidebar from "../sidebar/Sidebar";
import CartSidebar from "../cart-sidebar/CartSidebar";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { items } = useCart();

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <button
            className={styles.menuButton}
            type="button"
            aria-label="Abrir menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={23} strokeWidth={1.5} />
          </button>

          <Image
            src="/images/logo/logo-black.jpg"
            alt="VÉRT"
            width={300}
            height={99}
            priority
            className={styles.logo}
          />

          <button
            className={styles.cartButton}
            type="button"
            aria-label={`Abrir sacola com ${totalItems} produtos`}
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={23} strokeWidth={1.5} />

            <span className={styles.cartCount}>
              {totalItems}
            </span>
          </button>
        </div>
      </header>

      <Sidebar
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}
