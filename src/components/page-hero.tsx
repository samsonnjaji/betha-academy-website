import type { LucideIcon } from "lucide-react";
import { Home } from "lucide-react";
import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export function PageHero({ eyebrow, title, description, icon: Icon }: Props) {
  return (
    <section className="page-hero">
      <div className="page-hero__shape page-hero__shape--one" aria-hidden="true" />
      <div className="page-hero__shape page-hero__shape--two" aria-hidden="true" />
      <div className="container page-hero__inner">
        <div className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">
            <Home size={14} aria-hidden="true" />
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{eyebrow}</span>
        </div>
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
