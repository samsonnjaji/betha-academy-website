import Image from "next/image";
import { ArrowDown, Compass, Eye, Flag, Quote, Target } from "lucide-react";
import { AdmissionCta } from "@/components/admission-cta";
import { PageHero } from "@/components/page-hero";
import { images, school } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Betha Academy Vision and Mission",
  description:
    "Read the vision and mission that guide Betha Academy in Timau as we develop capable, responsible, and confident learners.",
  path: "/vision-mission",
});

export default function VisionMissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Vision & Mission"
        title="Excellence today. Confidence for tomorrow."
        description="Our direction is clear: develop well-rounded learners who are prepared for future opportunities and challenges."
        icon={Compass}
        path="/vision-mission"
      />
      <section className="section">
        <div className="container feature-split vision-photo">
          <div className="feature-split__image">
            <Image
              src={images.campusAssembly.src}
              alt={images.campusAssembly.alt}
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
          <div className="feature-split__content">
            <p className="eyebrow">Our school community</p>
            <h2>A caring community, prepared for tomorrow.</h2>
            <p>
              Betha Academy seeks to develop well-rounded learners who are
              academically capable, responsible, confident, respectful, and
              prepared for future opportunities and challenges.
            </p>
          </div>
        </div>
        <div className="container vision-cards">
          <article className="statement-card statement-card--vision">
            <div className="statement-card__top">
              <span className="statement-card__icon" aria-hidden="true">
                <Eye />
              </span>
              <p className="eyebrow">Our Vision</p>
            </div>
            <Quote className="statement-card__quote" aria-hidden="true" />
            <blockquote>{school.vision}</blockquote>
          </article>
          <article className="statement-card statement-card--mission">
            <div className="statement-card__top">
              <span className="statement-card__icon" aria-hidden="true">
                <Target />
              </span>
              <p className="eyebrow eyebrow--light">Our Mission</p>
            </div>
            <p>{school.mission}</p>
          </article>
        </div>
      </section>
      <section className="section section--cream">
        <div className="container purpose-section">
          <span className="purpose-section__icon" aria-hidden="true">
            <Flag />
          </span>
          <p className="eyebrow">Our educational purpose</p>
          <h2>
            Betha Academy seeks to develop well-rounded learners who are
            academically capable, responsible, confident, respectful, and
            prepared for future opportunities and challenges.
          </h2>
          <ArrowDown className="purpose-section__arrow" aria-hidden="true" />
          <div className="purpose-values">
            {["Academically capable", "Responsible", "Confident", "Respectful"].map(
              (value) => (
                <span key={value}>{value}</span>
              ),
            )}
          </div>
        </div>
      </section>
      <AdmissionCta />
    </>
  );
}
