import { Images } from "lucide-react";
import { AdmissionCta } from "@/components/admission-cta";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Betha Academy Timau School Gallery",
  description:
    "See authentic photographs of Betha Academy in Timau, including campus life, learning, activities, and school vehicles.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A closer look at life at Betha Academy."
        description="Explore authentic photographs of the campus, learners, community events, activities, and Betha Academy vehicles."
        icon={Images}
        path="/gallery"
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Life at Betha Academy"
            title="School life, learning, and the Timau campus."
            description="Use the categories below to browse authentic Betha Academy photographs. Some images show school life, community events, and vehicles from across the school’s history."
            align="center"
          />
          <GalleryGrid />
        </div>
      </section>
      <AdmissionCta />
    </>
  );
}
