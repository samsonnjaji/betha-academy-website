import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { school } from "@/lib/content";

export function AdmissionCta() {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="admission-cta">
          <div className="admission-cta__pattern" aria-hidden="true" />
          <div className="admission-cta__content">
            <p className="eyebrow eyebrow--light">Admissions are open</p>
            <h2>Give Your Child a Strong Foundation</h2>
            <p>
              Enrol your child at Betha Academy and become part of a safe,
              supportive, and enriching learning community.
            </p>
          </div>
          <div className="admission-cta__actions">
            <Link className="button button--light" href="/admissions">
              Admission process
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a className="button button--ghost-light" href={school.phoneHref}>
              <Phone size={18} aria-hidden="true" />
              Call {school.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
