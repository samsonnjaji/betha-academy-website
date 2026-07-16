import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, FileText, Phone, School } from "lucide-react";
import { AdmissionCta } from "@/components/admission-cta";
import { AdmissionSteps } from "@/components/steps";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { school } from "@/lib/content";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "View the Betha Academy admission process for Playgroup, PP1, PP2, and Grade 1 through Grade 4.",
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="A warm welcome to your child’s next learning chapter."
        description="Admissions are currently open for learners from Playgroup to Grade 4 only."
        icon={ClipboardCheck}
      />
      <section className="section">
        <div className="container admissions-intro">
          <div>
            <SectionHeading
              eyebrow="Join Betha Academy"
              title="A clear, supportive admission process."
              description="Betha Academy welcomes parents and guardians looking for a safe, supportive, and enriching learning environment for their children."
            />
          </div>
          <div className="admissions-open-card">
            <span className="status-dot" aria-hidden="true" />
            <div>
              <strong>Admissions are open</strong>
              <p>Playgroup, PP1, PP2, Grade 1, Grade 2, Grade 3 & Grade 4</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--cream">
        <div className="container">
          <SectionHeading
            eyebrow="How to apply"
            title="Five steps from enquiry to confirmation."
            align="center"
          />
          <AdmissionSteps />
        </div>
      </section>
      <section className="section">
        <div className="container documents-grid">
          <div className="documents-card">
            <span className="icon-box" aria-hidden="true">
              <FileText />
            </span>
            <p className="eyebrow">Required documents</p>
            <h2>What parents or guardians should prepare.</h2>
            <ul>
              <li>A copy of the child&apos;s birth certificate</li>
              <li>Previous school records, where applicable</li>
              <li>Any other documents requested by the school</li>
            </ul>
          </div>
          <div className="assistance-card">
            <span className="icon-box icon-box--light" aria-hidden="true">
              <School />
            </span>
            <p className="eyebrow eyebrow--light">Need admission assistance?</p>
            <h2>Contact the school office for guidance.</h2>
            <p>
              Call Betha Academy for admission information, reporting instructions,
              and help with the application process.
            </p>
            <div className="section-actions">
              <a className="button button--light" href={school.phoneHref}>
                <Phone size={18} aria-hidden="true" />
                {school.phoneDisplay}
              </a>
              <Link className="button button--ghost-light" href="/fees-structure">
                View fees
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <AdmissionCta />
    </>
  );
}
