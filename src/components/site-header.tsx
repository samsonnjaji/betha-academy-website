"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, school } from "@/lib/content";
import { Logo } from "./logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="admissions-bar">
        <div className="container admissions-bar__inner">
          <p>
            <span className="status-dot" aria-hidden="true" />
            Admissions open: Playgroup to Grade 4
          </p>
          <a href={school.phoneHref}>
            <Phone size={15} aria-hidden="true" />
            {school.phoneDisplay}
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="container site-header__inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? "is-active" : undefined}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link className="button button--primary header-cta" href="/admissions">
            Apply now
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>
      <div
        className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}
        id="mobile-navigation"
        aria-hidden={!open}
      >
        <nav className="container mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "is-active" : undefined}
              aria-current={isActive(item.href) ? "page" : undefined}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mobile-nav__actions">
            <Link
              className="button button--primary"
              href="/admissions"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              Apply for admission
            </Link>
            <a
              className="button button--outline"
              href={school.phoneHref}
              tabIndex={open ? 0 : -1}
            >
              <Phone size={18} aria-hidden="true" />
              Call the school
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
