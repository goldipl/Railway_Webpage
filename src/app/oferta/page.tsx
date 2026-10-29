import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import { offer } from "@/data/site";
import styles from "./page.module.scss";

export const metadata: Metadata = { title: "Oferta" };

export default function OfferPage() {
  return (
    <>
      <PageHeader eyebrow="Co robimy" title="Oferta">
        Kompleksowe usługi dla infrastruktury kolejowej — od pierwszej kreski na mapie po codzienne utrzymanie.
      </PageHeader>

      <section className={styles.grid}>
        {offer.map((item, i) => (
          <article key={item.title} className={styles.card}>
            <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <div className={styles.cta}>
        <Button href="/kontakt">Zapytaj o wycenę</Button>
      </div>
    </>
  );
}
