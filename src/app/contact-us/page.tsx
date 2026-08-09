import { Clock, MailQuestion, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SocialLinks } from "@/components/social-links";
import { school } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Betha Academy Timau",
  description:
    "Contact Betha Academy in Timau, Meru County for admissions, school fees, directions, and visiting information.",
  path: "/contact-us",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let’s talk about your child’s learning journey."
        description="Contact Betha Academy in Timau for admission enquiries, school fee information, directions, and general assistance."
        icon={MailQuestion}
        path="/contact-us"
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
                <em>{school.phoneInternational}</em>
              </span>
            </a>
            <div className="contact-method contact-method--static">
              <span className="icon-box" aria-hidden="true">
                <MapPin />
              </span>
              <span>
                <small>Location</small>
                <strong>{school.name}</strong>
                <em>{school.location.display}</em>
              </span>
            </div>
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
              <strong>Visit Betha Academy</strong>
              <p>
                Betha Academy serves families in Timau and surrounding
                communities within Meru County and the wider Nanyuki–Meru
                corridor. Call the school for current visiting information.
              </p>
              <p>
                <small>Mailing address</small>
                {school.location.mailingDisplay}
              </p>
              <a
                className="button button--primary"
                href={school.location.directionsUrl}
                rel="noopener noreferrer"
              >
                Get directions
              </a>
            </div>
            <SocialLinks />
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
