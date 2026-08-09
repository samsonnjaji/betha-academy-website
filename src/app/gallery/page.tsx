import { Images } from "lucide-react";
import { AdmissionCta } from "@/components/admission-cta";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Betha Academy Timau School Gallery",
  description:
    "See photographs of the Betha Academy campus in Timau, including the entrance, courtyard, classroom blocks, and school vehicles.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A closer look at the Betha Academy campus."
        description="Explore the school entrance, learners, open courtyard, surrounding classroom blocks, and branded school vehicles."
        icon={Images}
        path="/gallery"
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
