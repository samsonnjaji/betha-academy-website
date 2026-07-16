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
- Updated supplied school-photo sources: `assets/school-photos/set-02-updated-originals`
- Remaining temporary learner-activity imagery: `public/images`
- Official logo, favicon, Apple icon, and app-icon assets: `public/brand`
- Preserved logo source and cleanup assets: `assets/brand`
- Global design tokens and responsive styling: `src/app/globals.css`
- Contact form submission hook: `src/components/contact-form.tsx`,
  inside `handleSubmit`
- Public website URL: copy `.env.example` to `.env.local` and set
  `NEXT_PUBLIC_SITE_URL`

## Content still required from Betha Academy

The supplied content does not include:

- The school’s physical location or directions
- An official email address
- Current office hours
- An official website domain
- Original Betha Academy photographs
- The approved service or recipient for online enquiry submissions

These details are intentionally omitted or clearly marked instead of being
invented.

## Image replacement

The school entrance, grounds, and classroom-block images are original Betha
Academy photographs. The remaining learner-activity WebP files are temporary,
fictional illustrative scenes and are labelled beside the sections where they
appear. To add more real school photography:

1. Add optimized images to `public/images`.
2. Update the `images` object in `src/lib/content.ts`.
3. Keep the existing meaningful alt-text structure and replace it with accurate
   descriptions of the real photographs.

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
