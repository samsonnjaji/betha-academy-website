import type { Metadata } from "next";
import { Images } from "lucide-react";
import { AdmissionCta } from "@/components/admission-cta";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore Betha Academy imagery featuring the entrance, learners, school grounds, classroom blocks, and branded vehicles.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A closer look at the Betha Academy campus."
        description="Explore the school entrance, learners, open courtyard, surrounding classroom blocks, and branded school vehicles."
        icon={Images}
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Life at Betha Academy"
            title="The school, from the gate to the classroom blocks."
            description="Use the categories below to explore the updated Betha Academy image collection. More classroom and activity images can be added as they become available."
            align="center"
          />
          <GalleryGrid />
        </div>
      </section>
      <AdmissionCta />
    </>
  );
}
