import Image from "next/image";
import Button from "@/components/Button";
import ImageTextSection from "@/components/ImageTextSection";
import Stats from "@/components/Stats";
import rails from "@/assets/rails.jpg";
import rails2 from "@/assets/rails2.jpg";
import heroImage from "@/assets/yellow-train.jpg";
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

        <div className={styles.heroCard}>
          <span className={styles.badge}>
            <span className={styles.dot} aria-hidden="true" />
            Infrastruktura kolejowa
          </span>
          <h1>
            Czy kolej to rzeczywiście <span>przyszłość komunikacji?</span>
          </h1>
          <p>Projektujemy, budujemy i utrzymujemy linie, które łączą miasta — szybciej, ciszej i z mniejszym śladem węglowym.</p>
          <div className={styles.actions}>
            <Button href="#section01">Czytaj więcej</Button>
            <Button href="/oferta" variant="glass">
              Nasza oferta
            </Button>
          </div>
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
