"use client";

import { useState } from "react";
import StoreButton from "@/components/store-button/StoreButton";
import styles from "./Help.module.css";

const faqItems = [
  {
    question: "Como posso escolher meus óculos?",
    answer:
      "Você pode explorar nossas categorias, consultar os modelos disponíveis e acessar os detalhes de cada produto."
  },
  {
    question: "Como funciona o processo de compra?",
    answer:
      "Escolha seu produto, selecione as variações disponíveis, adicione ao carrinho e siga para o checkout."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "Consulte abaixo as informações sobre as formas de pagamento disponíveis na demonstração da VÉRT."
  },
  {
    question: "Como solicitar uma troca ou devolução?",
    answer:
      "Consulte nossa seção de trocas e devoluções para conhecer as orientações da VÉRT."
  }
];

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleFaq(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <main className={styles.help}>
      <div className={styles.topBar}>
        <StoreButton />
      </div>

      <section className={styles.hero}>
        <span>PRECISA DE AJUDA?</span>
        <h1>Como podemos ajudar?</h1>
        <p>
          Encontre informações e respostas
          para suas dúvidas sobre a VÉRT.
        </p>
      </section>

      <section className={styles.faq} id="faq">
        <span>SUPORTE VÉRT</span>
        <h2>Perguntas frequentes</h2>

        <div className={styles.faqList}>
          {faqItems.map((item, index) => (
            <article key={index} className={styles.faqItem}>
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                {item.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>

              {openIndex === index && (
                <p>{item.answer}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className={styles.information}>
        <div id="trocas">
          <span>01</span>
          <h2>Trocas e devoluções</h2>
          <p>
            Consulte as orientações e condições
            para solicitações de troca e devolução.
          </p>
        </div>

        <div id="pagamento">
          <span>02</span>
          <h2>Formas de pagamento</h2>
          <p>
            Conheça as opções de pagamento
            disponíveis na experiência de compra.
          </p>
        </div>

        <div id="privacidade">
          <span>03</span>
          <h2>Política de privacidade</h2>
          <p>
            Saiba como os dados são tratados
            durante a navegação na VÉRT.
          </p>
        </div>
      </section>
    </main>
  );
}
