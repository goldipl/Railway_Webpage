import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import styles from "./ImageTextSection.module.scss";

type Props = {
  id?: string;
  image: StaticImageData;
  imageAlt: string;
  eyebrow: string;
  title: string;
  reverse?: boolean;
  children: ReactNode;
};

export default function ImageTextSection({ id, image, imageAlt, eyebrow, title, reverse, children }: Props) {
  return (
    <section id={id} className={`${styles.section} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.media}>
        <Image src={image} alt={imageAlt} placeholder="blur" sizes="(min-width: 900px) 600px, 100vw" />
        <span className={styles.mediaGlass} aria-hidden="true" />
      </div>
      <div className={styles.card}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h2>{title}</h2>
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  );
}
