import Button from "./Button";
import styles from "./ComingSoon.module.scss";

export default function ComingSoon() {
  return (
    <section className={styles.wrap}>
      <div className={styles.panel}>
        <span className={styles.rail} aria-hidden="true" />
        <h2>Strona w budowie</h2>
        <p>Pracujemy nad tą sekcją. W międzyczasie zapraszamy do kontaktu — chętnie odpowiemy na pytania.</p>
        <Button href="/kontakt">Skontaktuj się</Button>
      </div>
    </section>
  );
}
