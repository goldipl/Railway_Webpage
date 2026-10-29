"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { references } from "@/data/site";
import referenceImage from "@/assets/ref/referencje-01.jpg";
import styles from "./ReferenceGallery.module.scss";

export default function ReferenceGallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<(typeof references)[number] | null>(null);

  const open = (ref: (typeof references)[number]) => {
    setActive(ref);
    dialogRef.current?.showModal();
  };

  return (
    <>
      <ul className={styles.grid}>
        {references.map((ref) => (
          <li key={ref.id} className={styles.item}>
            <button type="button" className={styles.card} onClick={() => open(ref)}>
              <span className={styles.thumb}>
                <Image
                  src={referenceImage}
                  alt={`${ref.title} — ${ref.company}`}
                  placeholder="blur"
                  sizes="(min-width: 1100px) 380px, (min-width: 640px) 45vw, 90vw"
                />
                <span className={styles.zoom} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                    <path d="m20 20-4-4M11 8v6M8 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
              <span className={styles.caption}>
                <strong>{ref.title}</strong>
                <em>{ref.company}</em>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label={active?.title}
        onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
      >
        {active && (
          <figure className={styles.figure}>
            <Image src={referenceImage} alt={`${active.title} — ${active.company}`} sizes="90vw" />
            <figcaption>
              <strong>{active.title}</strong> · {active.company}
            </figcaption>
            <button
              type="button"
              className={styles.close}
              aria-label="Zamknij podgląd"
              onClick={() => dialogRef.current?.close()}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </figure>
        )}
      </dialog>
    </>
  );
}
