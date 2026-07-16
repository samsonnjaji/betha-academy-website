import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  Check,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { AdmissionCta } from "@/components/admission-cta";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { images } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Betha Academy’s commitment to quality education, individual learner support, character, confidence, and responsibility.",
};

const commitments = [
  "Delivering quality education",
  "Supporting academic excellence",
  "Providing a safe and caring learning environment",
  "Developing responsible and confident learners",
  "Encouraging creativity and practical learning",
  "Supporting each learner’s individual needs",
  "Promoting discipline, respect, and good character",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A caring environment where every learner can grow."
        description="Betha Academy nurtures learners academically, socially, emotionally, and morally."
        icon={HeartHandshake}
      />
      <section className="section">
        <div className="container feature-split feature-split--about">
          <div className="feature-split__image">
            <Image
              src={images.schoolCourtyard.src}
              alt={images.schoolCourtyard.alt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
          <div className="feature-split__content">
            <SectionHeading
              eyebrow="About Betha Academy"
              title="Quality education shaped around the individual learner."
            />
            <p>
              Betha Academy is committed to providing quality education in a safe,
              caring, and supportive environment.
            </p>
            <p>
              Our goal is to help every learner develop confidence, good
              character, responsibility, and the skills required to succeed in an
              increasingly challenging world.
            </p>
            <p>
              We understand that every learner has unique needs, abilities, and
              aspirations. We therefore strive to provide an enriching
              environment that supports individual growth and encourages every
              child to reach their full potential.
            </p>
          </div>
        </div>
      </section>
      <section className="section section--cream">
        <div className="container commitment-grid">
          <div>
            <SectionHeading
              eyebrow="Our commitment"
              title="The standards that guide our learning community."
              description="At Betha Academy, our educational work is grounded in quality, care, confidence, creativity, and character."
            />
            <div className="commitment-icons" aria-hidden="true">
              <span className="icon-box">
                <BookOpenCheck />
              </span>
              <span className="icon-box">
                <ShieldCheck />
              </span>
              <span className="icon-box">
                <Sparkles />
              </span>
            </div>
          </div>
          <ul className="commitment-list">
            {commitments.map((commitment) => (
              <li key={commitment}>
                <span aria-hidden="true">
                  <Check />
                </span>
                {commitment}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="container next-step-card">
          <div>
            <p className="eyebrow">What guides us</p>
            <h2>See the vision and mission behind our educational purpose.</h2>
          </div>
          <Link className="button button--primary" href="/vision-mission">
            Vision & mission
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <AdmissionCta />
    </>
  );
}
