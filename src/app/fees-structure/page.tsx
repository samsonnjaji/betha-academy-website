import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Banknote, Check, Info, Phone } from "lucide-react";
import { AdmissionCta } from "@/components/admission-cta";
import { FeesTable } from "@/components/fees-table";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { school } from "@/lib/content";

export const metadata: Metadata = {
  title: "Fees Structure",
  description:
    "View Betha Academy tuition fees and the KSh 100 admission fee for Playgroup through Grade 4.",
};

const notes = [
  "The admission fee is KSh 100.",
  "Parents and guardians should contact the school office for payment instructions.",
  "Reporting requirements are available from the school office.",
  "Fees may be reviewed by the school when necessary.",
];

export default function FeesPage() {
  return (
    <>
      <PageHero
        eyebrow="Fees Structure"
        title="Clear fees for every class currently offered."
        description="Betha Academy is committed to providing quality and accessible education."
        icon={Banknote}
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Betha Academy school fees"
            title="Tuition and admission fees at a glance."
            description="All amounts below are presented exactly as supplied by Betha Academy."
          />
          <FeesTable />
          <div className="fee-highlight">
            <span aria-hidden="true">
              <Check />
            </span>
            <p>
              Admission fee for every listed class level: <strong>KSh 100</strong>
            </p>
          </div>
        </div>
      </section>
      <section className="section section--cream">
        <div className="container fee-info-grid">
          <div>
            <SectionHeading
              eyebrow="Important fee information"
              title="Speak with the school before making payment."
              description="The school office will provide the current payment instructions and reporting guidance."
            />
            <a className="button button--primary" href={school.phoneHref}>
              <Phone size={18} aria-hidden="true" />
              Call {school.phoneDisplay}
            </a>
          </div>
          <ul className="info-list">
            {notes.map((note) => (
              <li key={note}>
                <Info aria-hidden="true" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="container next-step-card">
          <div>
            <p className="eyebrow">Ready for the next step?</p>
            <h2>Review the admission process before applying.</h2>
          </div>
          <Link className="button button--primary" href="/admissions">
            How to apply
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <AdmissionCta />
    </>
  );
}
