"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="system-page">
      <AlertTriangle aria-hidden="true" />
      <p className="eyebrow">Something went wrong</p>
      <h1>We could not load this page.</h1>
      <p>Please try again. If the issue continues, contact Betha Academy by phone.</p>
      <button className="button button--primary" type="button" onClick={reset}>
        <RotateCcw size={17} aria-hidden="true" />
        Try again
      </button>
    </section>
  );
}
