import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { navigation, school } from "@/lib/content";
import { Logo } from "./logo";

export function SiteFooter() {
  const quickLinks = navigation.filter((item) => item.href !== "/");

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <Logo inverse />
          <p>{school.vision}</p>
          <a className="footer-phone" href={school.phoneHref}>
            <Phone size={18} aria-hidden="true" />
            {school.phoneDisplay}
          </a>
        </div>
        <div>
          <h2>Quick links</h2>
          <ul className="footer-links">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  {item.label}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-admissions">
          <p className="eyebrow eyebrow--light">Admissions</p>
          <h2>Currently enrolling from Playgroup to Grade 4.</h2>
          <Link className="button button--light" href="/admissions">
            View admission process
          </Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Betha Academy. All rights reserved.</p>
        <p>Original Betha Academy campus photography is now featured throughout the website.</p>
      </div>
    </footer>
  );
}
