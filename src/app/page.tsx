import Image from "next/image";
import type { CSSProperties } from "react";
import Button from "@/components/Button";
import ImageTextSection from "@/components/ImageTextSection";
import Stats from "@/components/Stats";
import rails from "@/assets/rails.jpg";
import rails2 from "@/assets/rails2.jpg";
import heroImage from "@/assets/yellow-train.jpg";
import { routeStops } from "@/data/site";
import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroShade} aria-hidden="true" />

        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <h1 className={styles.headline}>
              <span className={styles.line}>
                <span>Czy kolej to rzeczywiście</span>
              </span>
              <span className={`${styles.line} ${styles.accent}`}>
                <span>przyszłość komunikacji?</span>
              </span>
            </h1>
            <p className={styles.lead}>
              Projektujemy, budujemy i utrzymujemy linie, które łączą miasta — szybciej, ciszej i z mniejszym śladem
              węglowym.
            </p>
            <div className={styles.actions}>
              <Button href="#section01">Czytaj więcej</Button>
              <Button href="/oferta" variant="glass">
                Nasza oferta
              </Button>
            </div>
          </div>

          <aside className={styles.route} aria-label="Zakres działań GoldenRails">
            <div className={styles.routeHead}>
              <span>Trasa projektu</span>
              <span className={styles.live}>
                <span aria-hidden="true" />
                Od koncepcji do eksploatacji
              </span>
            </div>
            <div className={styles.track}>
              <span className={styles.rail} aria-hidden="true" />
              <span className={styles.progress} aria-hidden="true" />
              <span className={styles.train} aria-hidden="true" />
              <ol className={styles.stops}>
                {routeStops.map((stop, i) => (
                  <li key={stop} style={{ "--i": i } as CSSProperties}>
                    <span className={styles.stopDot} aria-hidden="true" />
                    {stop}
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>

        <a href="#section01" className={styles.scrollHint} aria-label="Przewiń w dół">
          <span />
        </a>
      </section>

      <ImageTextSection
        id="section01"
        image={rails}
        imageAlt="Tory kolejowe"
        eyebrow="Dlaczego kolej"
        title="Transport, który ma sens"
      >
        <p>
          Pociąg przewozi setki pasażerów na energii, która wystarczyłaby zaledwie kilku samochodom. Nie stoi w korkach,
          dowozi do centrum miasta i pozwala wykorzystać czas podróży.
        </p>
        <p>
          Dlatego inwestycje w kolej rosną w całej Europie — a my pomagamy je realizować: od pierwszej koncepcji, przez
          budowę, aż po codzienne utrzymanie sieci.
        </p>
      </ImageTextSection>

      <Stats />

      <ImageTextSection
        id="section03"
        image={rails2}
        imageAlt="Linia kolejowa"
        eyebrow="Jak działamy"
        title="Od projektu po serwis"
        reverse
      >
        <p>
          Łączymy doświadczenie inżynierów torowych, projektantów i specjalistów od sterowania ruchem. Dzięki temu jeden
          partner odpowiada za całość przedsięwzięcia.
        </p>
        <p>
          Stawiamy na bezpieczeństwo, terminowość i przejrzystą komunikację z inwestorem na każdym etapie prac.
        </p>
      </ImageTextSection>
    </>
  );
}
