import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Realizacje" };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader eyebrow="Portfolio" title="Realizacje" />
      <ComingSoon />
    </>
  );
}
