import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ReferenceGallery from "@/components/ReferenceGallery";

export const metadata: Metadata = { title: "Referencje" };

export default function ReferencesPage() {
  return (
    <>
      <PageHeader eyebrow="Zaufali nam" title="Referencje">
        Opinie partnerów, z którymi zrealizowaliśmy wspólne projekty. Kliknij, aby powiększyć.
      </PageHeader>
      <ReferenceGallery />
    </>
  );
}
