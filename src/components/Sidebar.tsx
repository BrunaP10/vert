"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  { label: "Início", href: "/" },
  { label: "Óculos de sol", href: "/sunglasses" },
  { label: "Óculos de grau", href: "/prescription" },
  { label: "Óculos esportivos", href: "/sports" },
];

export default function Sidebar({
  isOpen,
  onClose,
}: SidebarProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}
        aria-hidden={!isOpen}
        aria-label="Menu de navegação"
      >
        <div className={styles.header}>
          <span>MENU</span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        <nav className={styles.navigation}>
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              onClick={onClose}
            >
              {category.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}

