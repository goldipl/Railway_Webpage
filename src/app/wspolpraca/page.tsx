import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Współpraca" };

export default function PartnershipPage() {
  return (
    <>
      <PageHeader eyebrow="Dla partnerów" title="Współpraca" />
      <ComingSoon />
    </>
  );
}
