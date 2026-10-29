import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { contact } from "@/data/site";
import styles from "./page.module.scss";

export const metadata: Metadata = { title: "Kontakt" };

export default function ContactPage() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <PageHeader eyebrow="Porozmawiajmy" title="Kontakt">
        Masz pytanie o projekt, współpracę lub ofertę? Odwiedź nas lub napisz — odpowiadamy szybko.
      </PageHeader>

      <section className={styles.layout}>
        <div className={styles.info}>
          <div className={styles.item}>
            <span className={styles.icon} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
            </span>
            <div>
              <h2>Biuro</h2>
              <p>{contact.address}</p>
            </div>
          </div>
          <div className={styles.item}>
            <span className={styles.icon} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="8.5" />
                <path d="M12 7.5V12l3 2" strokeLinecap="round" />
              </svg>
            </span>
            <div>
              <h2>Godziny pracy</h2>
              <p>Pon.–pt. 8:00–16:00</p>
            </div>
          </div>
        </div>

        <div className={styles.map}>
          <iframe src={mapSrc} title={`Mapa — ${contact.address}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>
    </>
  );
}
