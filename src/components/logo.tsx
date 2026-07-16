import Link from "next/link";
import { BookOpen } from "lucide-react";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand ${inverse ? "brand--inverse" : ""}`}
      aria-label="Betha Academy home"
    >
      <span className="brand__mark" aria-hidden="true">
        <BookOpen size={23} strokeWidth={2.2} />
      </span>
      <span className="brand__text">
        <strong>Betha</strong>
        <span>Academy</span>
      </span>
    </Link>
  );
}
