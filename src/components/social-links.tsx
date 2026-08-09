import { school } from "@/lib/content";

const socialItems = [
  {
    key: "facebook",
    label: "Betha Academy on Facebook",
    href: school.socials.facebook,
    icon: FacebookIcon,
  },
  {
    key: "instagram",
    label: "Betha Academy on Instagram",
    href: school.socials.instagram,
    icon: InstagramIcon,
  },
  {
    key: "tiktok",
    label: "Betha Academy on TikTok",
    href: school.socials.tiktok,
    icon: TikTokIcon,
  },
  {
    key: "youtube",
    label: "Betha Academy on YouTube",
    href: school.socials.youtube,
    icon: YouTubeIcon,
  },
] as const;

export function SocialLinks({ className }: { className?: string }) {
  const visible = socialItems.filter((item) => item.href);

  if (visible.length === 0) {
    return null;
  }

  return (
    <ul className={`social-links ${className ?? ""}`.trim()}>
      {visible.map(({ key, label, href, icon: Icon }) => (
        <li key={key}>
          <a href={href!} aria-label={label} rel="me noopener noreferrer">
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M14.5 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V3h-2.1C12.2 3 11 4.4 11 6.6v1.9H9v2.6h2V21h3.5v-9.9h2.3l.4-2.6z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm8 1.8H8A3.2 3.2 0 0 0 4.8 8v8A3.2 3.2 0 0 0 8 19.2h8a3.2 3.2 0 0 0 3.2-3.2V8A3.2 3.2 0 0 0 16 4.8zM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zm4.55-3.05a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"
      />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M14.2 3h2.3c.2 1.6 1.1 3 2.4 3.9 1 .7 2.1 1 3.3 1.1v2.4c-1.5 0-2.9-.4-4.2-1.1v6.4c0 4.4-3.6 6.8-7.2 6.8A6.8 6.8 0 0 1 4 16.1c0-3.8 3.1-6.8 6.8-6.8.3 0 .6 0 .9.1v2.6a4.2 4.2 0 0 0-.9-.1 4.2 4.2 0 1 0 4.2 4.2z"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.3 5.4 12 5.4 12 5.4s-7.3 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.5.4 8.8.4 8.8.4s7.3 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM9.8 15.6V8.8l6.1 3.4z"
      />
    </svg>
  );
}
