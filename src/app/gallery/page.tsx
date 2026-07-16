import type { Metadata } from "next";
import { Images } from "lucide-react";
import { AdmissionCta } from "@/components/admission-cta";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore photographs of the Betha Academy entrance, school grounds, courtyard, and classroom blocks.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A closer look at the Betha Academy campus."
        description="Explore the school entrance, open courtyard, surrounding classroom blocks, and learning environment."
        icon={Images}
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Life at Betha Academy"
            title="The school, from the gate to the classroom blocks."
            description="Use the categories below to explore the first collection of original Betha Academy photographs. More school-life images can be added as they become available."
            align="center"
          />
          <GalleryGrid />
        </div>
      </section>
      <AdmissionCta />
    </>
  );
}
