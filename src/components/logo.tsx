import Image from "next/image";
import Link from "next/link";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand ${inverse ? "brand--inverse" : ""}`}
      aria-label="Betha Academy home"
    >
      <span className="brand__mark" aria-hidden="true">
        <Image
          src="/brand/betha-logo-full.webp"
          alt=""
          fill
          sizes="60px"
          priority
        />
      </span>
      <span className="brand__text">
        <strong>Betha</strong>
        <span>Academy</span>
      </span>
    </Link>
  );
}
