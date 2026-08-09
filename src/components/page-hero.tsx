import type { LucideIcon } from "lucide-react";
import { Home } from "lucide-react";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbList } from "@/lib/schema";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  icon: Icon,
  path,
}: Props) {
  return (
    <section className="page-hero">
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: eyebrow, path },
        ])}
      />
      <div className="page-hero__shape page-hero__shape--one" aria-hidden="true" />
      <div className="page-hero__shape page-hero__shape--two" aria-hidden="true" />
      <div className="container page-hero__inner">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">
            <Home size={14} aria-hidden="true" />
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{eyebrow}</span>
        </nav>
        <div className="page-hero__content">
          <div className="page-hero__icon" aria-hidden="true">
            <Icon />
          </div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}
