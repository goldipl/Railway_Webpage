import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Kariera" };

export default function CareerPage() {
  return (
    <>
      <PageHeader eyebrow="Dołącz do nas" title="Kariera" />
      <ComingSoon />
    </>
  );
}
