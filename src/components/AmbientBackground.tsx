import styles from "./AmbientBackground.module.scss";

// Złote poświaty za szkłem — bez nich backdrop-filter nie miałby czego załamywać.
export default function AmbientBackground() {
  return (
    <div className={styles.root} aria-hidden="true">
      <span className={`${styles.orb} ${styles.one}`} />
      <span className={`${styles.orb} ${styles.two}`} />
      <span className={`${styles.orb} ${styles.three}`} />
      <span className={styles.grid} />
    </div>
  );
}
