import styles from "./InstitutionalSection.module.css";

const values = [
  {
    letter: "V",
    title: "Versatilidade",
    description: "Para diferentes estilos e momentos.",
  },
  {
    letter: "É",
    title: "Estilo",
    description: "Identidade, personalidade e expressão.",
  },
  {
    letter: "R",
    title: "Reinvenção",
    description: "Inovação e novas possibilidades.",
  },
  {
    letter: "T",
    title: "Tecnologia",
    description: "Funcionalidade e modernidade.",
  },
];

export default function InstitutionalSection() {
  return (
    <section className={styles.institutional}>
      <div className={styles.introduction}>
        <span className={styles.eyebrow}>
          A ESSÊNCIA VÉRT
        </span>

        <h2>
          Não é apenas sobre enxergar.
          <br />
          É sobre <span>expressar quem você é.</span>
        </h2>

        <p>
          Acreditamos que cada detalhe revela uma identidade.
          Por isso, unimos design, tecnologia e personalidade
          para acompanhar você em todos os momentos.
        </p>
      </div>

      <div className={styles.values}>
        {values.map((value) => (
          <article
            key={value.letter}
            className={styles.value}
          >
            <span className={styles.letter}>
              {value.letter}
            </span>

            <h3>{value.title}</h3>

            <p>{value.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
