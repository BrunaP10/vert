import StoreButton from "@/components/store-button/StoreButton";
import styles from "./Institutional.module.css";

export default function InstitutionalPage() {
  return (
    <main className={styles.institutional}>
      <div className={styles.topBar}>
        <StoreButton />
      </div>

      <section className={styles.hero}>
        <span>CONHEÇA A VÉRT</span>
        <h1>Mais que estilo.<br />Uma forma de viver.</h1>
        <p>
          Lifestyle, Performance & Technology.
          Uma marca criada para acompanhar você
          em todos os momentos.
        </p>
      </section>

      <section className={styles.sobre} id="sobre">
        <span>NOSSA ESSÊNCIA</span>
        <h2>Sobre a VÉRT</h2>
        <p>
          A VÉRT nasce da conexão entre estilo,
          versatilidade e tecnologia. Acreditamos
          que cada escolha expressa personalidade
          e que os detalhes fazem a diferença.
        </p>
      </section>

      <section className={styles.valores} id="nossos-valores">
        <span>O QUE NOS MOVE</span>
        <h2>Nossos valores</h2>

        <div className={styles.valoresGrid}>
          <article>
            <h3>01. Versatilidade</h3>
            <p>Estilo que acompanha diferentes momentos e possibilidades.</p>
          </article>

          <article>
            <h3>02. Estilo</h3>
            <p>Personalidade e autenticidade em cada escolha.</p>
          </article>

          <article>
            <h3>03. Reinvenção</h3>
            <p>Estamos sempre abertos ao novo e à evolução.</p>
          </article>

          <article>
            <h3>04. Tecnologia</h3>
            <p>Inovação e funcionalidade conectadas ao cotidiano.</p>
          </article>
        </div>
      </section>

      
      <section className={styles.contato} id="contato">
        <span>VAMOS CONVERSAR?</span>

        <h2>Estamos aqui para você.</h2>

        <p>
            Tem dúvidas sobre nossos produtos ou precisa de ajuda?
            Em breve, teremos um canal exclusivo de atendimento.
        </p>

        <button
            type="button"
            className={styles.contatoButton}
            disabled
        >
            ATENDIMENTO EM BREVE
        </button>
      </section>

    </main>
  );
}
