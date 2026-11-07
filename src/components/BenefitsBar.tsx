import styles from "./BenefitsBar.module.css";

const benefits = [
  {
    icon: "↗",
    title: "Pagamento seguro",
    description: "Praticidade na sua compra",
  },
  {
    icon: "◇",
    title: "Compra protegida",
    description: "Mais tranquilidade para você",
  },
  {
    icon: "◎",
    title: "Atendimento",
    description: "Suporte especializado",
  },
  {
    icon: "↻",
    title: "Troca facilitada",
    description: "Consulte nossas condições",
  },
];

export default function BenefitsBar() {
  return (
    <section className={styles.benefits}>
      {benefits.map((benefit) => (
        <div className={styles.item} key={benefit.title}>
          <span className={styles.icon} aria-hidden="true">
            {benefit.icon}
          </span>

          <div className={styles.info}>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
