import type { ReactNode } from "react";
import styles from "./PageHeader.module.scss";

type Props = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
};

export default function PageHeader({ eyebrow, title, children }: Props) {
  return (
    <header className={styles.header}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h1 className={styles.title}>{title}</h1>
      {children && <div className={styles.lead}>{children}</div>}
    </header>
  );
}
