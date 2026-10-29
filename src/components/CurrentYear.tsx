"use client";

import { useEffect, useState } from "react";

// Rok liczony w przeglądarce, żeby statyczny build nie „zamroził” daty.
export default function CurrentYear() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year ?? ""}</>;
}
