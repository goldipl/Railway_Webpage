import Link from "next/link";
import { navLinks, siteName } from "@/data/site";
import CurrentYear from "./CurrentYear";
import TrainIcon from "./TrainIcon";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <TrainIcon size={22} />
          {siteName}
        </Link>
        <nav className={styles.links} aria-label="Stopka">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <p className={styles.copy}>
          Copyright © <CurrentYear /> {siteName}
        </p>
      </div>
    </footer>
  );
}
