"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/site";
import styles from "./Stats.module.scss";

const format = (n: number) => n.toLocaleString("pl-PL");

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setCurrent(0);
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1800;
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          setCurrent(Math.round(value * (1 - Math.pow(1 - t, 4))));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} className={styles.number}>
      {format(current)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className={styles.section} aria-label="GoldenRails w liczbach">
      <div className={styles.panel}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.slot}>
            <Counter value={stat.value} suffix={stat.suffix} />
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
