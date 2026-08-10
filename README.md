# Betha Academy Website

A custom, responsive school website for Betha Academy, built with Next.js App
Router, TypeScript, Tailwind CSS, and Lucide icons.

## Pages

- Home
- About Us
- Vision & Mission
- CBC Curriculum
- Admissions
- Fees Structure
- Gallery
- Contact Us

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production check:

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Configuration

- School content, phone number, classes, fees, navigation, gallery categories, and
  image metadata: `src/lib/content.ts`
- Original school photography: `public/images/school`
- Additional authentic school photographs: `public/images/school/authentic`
- Updated supplied school-photo sources: `assets/school-photos/set-02-updated-originals`
- Official logo, favicon, Apple icon, and app-icon assets: `public/brand`
- Preserved logo source and cleanup assets: `assets/brand`
- Global design tokens and responsive styling: `src/app/globals.css`
- Contact form submission hook: `src/components/contact-form.tsx`,
  inside `handleSubmit`
- Public website URL: copy `.env.example` to `.env.local` if needed. Production
  canonical URLs always use `https://bethaacademy.co.ke`
- Local SEO launch checklist: `docs/SEO-LOCAL-LAUNCH.md`

## Content still required from Betha Academy

Still needed before publishing more specific details:

- Exact physical street address / verified Google Place
- Official email address
- Current office hours
- Verified Instagram, TikTok, or YouTube URLs
- The approved service or recipient for online enquiry submissions

Do not invent these. Location is published only as Timau, Meru County, Kenya.

## Image replacement

Campus, classroom, activity, and transport images are authentic Betha Academy
photographs. Some gallery images reflect school life and community over time and
should not be read as confirmation of current uniforms, vehicles, or programmes.
Current classes remain Playgroup through Grade 4. To add more real school
photography:

1. Add optimized WebP images to `public/images/school` or
   `public/images/school/authentic`.
2. Update the `images` object and `galleryItems` in `src/lib/content.ts`.
3. Keep concise, truthful alt text. Do not name individual children.

## Brand assets

The official Betha Academy logo is used in the header and footer. The full crest
is preserved as a transparent asset, while a tighter cap-and-book emblem is used
for favicons and mobile app icons so the mark remains recognizable at small
sizes. Re-run `node scripts/process-logo.mjs` after replacing the authoritative
logo source or cleanup source in `assets/brand`.

## Contact form integration

The form currently validates in the browser and presents an honest
integration-ready state without simulating a backend submission. Connect the
`handleSubmit` function in `src/components/contact-form.tsx` to Betha Academy’s
approved form provider, API endpoint, or email service once those details are
available.
