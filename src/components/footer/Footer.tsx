"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = searchTerm.trim();

    if (!query) return;

    router.push(`/busca?q=${encodeURIComponent(query)}`);
  }

  return (
    <footer className={styles.footer}>
      {/* Banner de busca */}
      <section className={styles.searchBanner}>
        <Image
          src="/images/banners/footer/footer-banner.jpeg"
          alt="Óculos VÉRT em um ambiente urbano"
          fill
          sizes="100vw"
        />

        <div className={styles.searchContent}>
          <span>NÃO ACHOU O QUE PROCURA?</span>

          <h2>ENCONTRE O MODELO IDEAL PARA VOCÊ.</h2>

          <form className={styles.searchBox} onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Buscar óculos, marca ou modelo..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />

            <button type="submit" aria-label="Buscar">
              →
            </button>
          </form>
        </div>
      </section>

      {/* Informações institucionais */}
      <section className={styles.footerContent}>
        <div className={styles.brand}>
          <h2>VÉRT</h2>
          <p>LIFESTYLE · PERFORMANCE · TECHNOLOGY</p>
        </div>

        <div className={styles.footerColumn}>
          <h3>INSTITUCIONAL</h3>
          <a href="#sobre">Sobre a VÉRT</a>
          <a href="#valores">Nossos valores</a>
          <a href="#contato">Contato</a>
        </div>

        <div className={styles.footerColumn}>
          <h3>AJUDA</h3>
          <a href="#faq">Perguntas frequentes</a>
          <a href="#trocas">Trocas e devoluções</a>
          <a href="#pagamento">Formas de pagamento</a>
          <a href="#privacidade">Política de privacidade</a>
        </div>

        <div className={styles.newsletter}>
          <h3>RECEBA NOVIDADES</h3>

          <p>
            Cadastre seu e-mail e receba novidades
            e ofertas exclusivas.
          </p>

          <div className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Seu e-mail"
            />

            <button type="button" aria-label="Cadastrar e-mail">
              →
            </button>
          </div>
        </div>
      </section>

      {/* Assinatura inferior */}
      <div className={styles.footerBottom}>
        <span>© 2026 VÉRT. Todos os direitos reservados.</span>

        <div className={styles.socialLinks}>
          {/* Instagram */}
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>

          {/* Facebook */}
          <a href="#" aria-label="Facebook">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M13.5 21v-8h2.8l.4-3.2h-3.2V7.7c0-.9.3-1.5 1.6-1.5h1.7V3.3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3V13h2.8v8h3.4Z"
                fill="currentColor"
              />
            </svg>
          </a>

          {/* TikTok */}
          <a href="#" aria-label="TikTok">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M19.5 8.2a6.3 6.3 0 0 1-4-1.4v7.1a5.5 5.5 0 1 1-5.5-5.5c.4 0 .8 0 1.2.1v3a2.6 2.6 0 1 0 1.4 2.4V3h3a6.3 6.3 0 0 0 4 3.8v1.4Z"
                fill="currentColor"
              />
            </svg>
          </a>

          {/* YouTube */}
          <a href="#" aria-label="YouTube">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8A26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.2V8.8l5.5 3.2-5.5 3.2Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
