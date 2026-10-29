"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteName } from "@/data/site";
import TrainIcon from "./TrainIcon";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname === `${href}/`;

  return (
    <header className={`${styles.wrap} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav} aria-label="Główna nawigacja">
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>
            <TrainIcon size={22} />
          </span>
          {siteName}
        </Link>

        <button
          type="button"
          className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
          aria-expanded={open}
          aria-controls="main-menu"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <ul id="main-menu" className={`${styles.menu} ${open ? styles.menuOpen : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={isActive(link.href) ? styles.active : undefined}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
