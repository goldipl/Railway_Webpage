import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.scss";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "glass";
};

export default function Button({ href, children, variant = "gold" }: Props) {
  return (
    <Link href={href} className={`${styles.button} ${styles[variant]}`}>
      {children}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}
