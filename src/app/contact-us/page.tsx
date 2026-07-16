import type { Metadata } from "next";
import { Clock, MailQuestion, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { school } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Betha Academy by phone for admissions, fees, reporting instructions, and general assistance.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let’s talk about your child’s learning journey."
        description="Contact Betha Academy for admission enquiries, school fee information, reporting instructions, and general assistance."
        icon={MailQuestion}
      />
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-details">
            <SectionHeading
              eyebrow="Get in touch"
              title="The school team is ready to guide you."
              description="For the quickest response, contact Betha Academy directly by phone."
            />
            <a className="contact-method" href={school.phoneHref}>
              <span className="icon-box" aria-hidden="true">
                <Phone />
              </span>
              <span>
                <small>Phone</small>
                <strong>{school.phoneDisplay}</strong>
                <em>Tap to call</em>
              </span>
            </a>
            <div className="contact-method contact-method--static">
              <span className="icon-box" aria-hidden="true">
                <Clock />
              </span>
              <span>
                <small>Office hours</small>
                <strong>Contact the school directly</strong>
                <em>Ask for current opening hours</em>
              </span>
            </div>
            <div className="contact-note">
              <strong>Looking for the school?</strong>
              <p>
                A location has not yet been supplied. Contact the school by phone
                for directions and current visiting information.
              </p>
            </div>
          </div>
          <div className="form-card">
            <p className="eyebrow">Send an enquiry</p>
            <h2>How can Betha Academy help?</h2>
            <p>
              Complete the form below, or call the school directly for immediate
              admission assistance.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
