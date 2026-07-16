import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <section className="system-page">
      <SearchX aria-hidden="true" />
      <p className="eyebrow">Page not found</p>
      <h1>This page is not part of the Betha Academy website.</h1>
      <p>Return home or use the main navigation to continue.</p>
      <Link className="button button--primary" href="/">
        <ArrowLeft size={17} aria-hidden="true" />
        Back to home
      </Link>
    </section>
  );
}
