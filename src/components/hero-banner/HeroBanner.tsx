"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./HeroBanner.module.css";

const banners = [
  {
    src: "/images/banners/main/banner-sunglasses.jpeg",
    alt: "Coleção de óculos de sol VÉRT",
    title: "ESTILO QUE ACOMPANHA VOCÊ",
    description: "ÓCULOS PARA TODOS OS SEUS MOMENTOS.",
    button: "CONHEÇA A COLEÇÃO",
    href: "#sunglasses",
  },
  {
    src: "/images/banners/main/banner-prescription.jpeg",
    alt: "Coleção de óculos de grau VÉRT",
    title: "ENXERGUE NOVAS POSSIBILIDADES",
    description: "CONFORTO, ESTILO E PERSONALIDADE.",
    button: "DESCUBRA OS MODELOS",
    href: "#prescription",
  },
  {
    src: "/images/banners/main/banner-sports.jpeg",
    alt: "Coleção de óculos esportivos VÉRT",
    title: "SUPERE SEUS LIMITES",
    description: "TECNOLOGIA E PERFORMANCE PARA SEU RITMO.",
    button: "EXPLORE A COLEÇÃO",
    href: "#sports",
  },
];

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((current) => (current + 1) % banners.length);
  };

  const previousSlide = () => {
    setCurrentIndex(
      (current) => (current - 1 + banners.length) % banners.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={styles.hero}
      aria-label="Destaques VÉRT"
    >
      {banners.map((banner, index) => (
        <div
          key={banner.src}
          className={`${styles.slide} ${
            currentIndex === index ? styles.active : ""
          }`}
          aria-hidden={currentIndex !== index}
        >
          <Image
            src={banner.src}
            alt={banner.alt}
            fill
            priority={index === 0}
            sizes="100vw"
          />

          <div className={styles.overlay} />

          <div className={styles.content}>
            <span className={styles.eyebrow}>
              LIFESTYLE · PERFORMANCE · TECHNOLOGY
            </span>

            {index === 0 ? (
              <h1>{banner.title}</h1>
            ) : (
              <h2>{banner.title}</h2>
            )}

            <p>{banner.description}</p>

            <Link
              href={banner.href}
              className={styles.cta}
              tabIndex={currentIndex === index ? 0 : -1}
            >
              {banner.button}
              <span>→</span>
            </Link>
          </div>
        </div>
      ))}

      <button
        type="button"
        className={`${styles.arrow} ${styles.previous}`}
        onClick={previousSlide}
        aria-label="Banner anterior"
      >
        <ChevronLeft size={30} strokeWidth={1.3} />
      </button>

      <button
        type="button"
        className={`${styles.arrow} ${styles.next}`}
        onClick={nextSlide}
        aria-label="Próximo banner"
      >
        <ChevronRight size={30} strokeWidth={1.3} />
      </button>

      <div className={styles.indicators}>
        {banners.map((banner, index) => (
          <button
            key={banner.src}
            type="button"
            aria-label={`Ir para o banner ${index + 1}`}
            aria-current={currentIndex === index}
            className={`${styles.indicator} ${
              currentIndex === index
                ? styles.indicatorActive
                : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
