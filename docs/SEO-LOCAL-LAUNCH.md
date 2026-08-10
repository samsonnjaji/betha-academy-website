# Betha Academy local SEO launch

Official website: [https://bethaacademy.co.ke](https://bethaacademy.co.ke)

Canonical hostname: `bethaacademy.co.ke` (not `www`).

This document covers owner-only tasks the website cannot complete automatically.

## Current website NAP

Use these values everywhere the school is listed online:

- Name: Betha Academy
- Location: Timau, Meru County, Kenya
- Phone: +254 702 617 707 / 0702 617 707
- Website: https://bethaacademy.co.ke
- Current programmes: Playgroup, PP1, PP2, Grade 1–4
- Promise: Nurturing Excellence, Character, and Responsibility

Mailing address only (not a street address): P.O. Box 235, Timau 10406.

Postal code `10406` is the Timau postal area used in public listings. It is not a verified street pin.

Do not publish a fabricated street address, school code, founding date, pupil count, or review score.

## Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console).
2. Create a **Domain** property for `bethaacademy.co.ke`.
3. Verify with a Cloudflare DNS TXT record (preferred over an HTML file/meta tag).
4. After verification, submit `https://bethaacademy.co.ke/sitemap.xml`.
5. Inspect the homepage, then request indexing.
6. Inspect `/admissions` and `/contact-us` and request indexing if needed.

Optional later: add `GOOGLE_SITE_VERIFICATION` in the Cloudflare Workers environment if HTML-tag verification is required. Leave it empty otherwise.

Also set up Bing Webmaster Tools after Google verification and import the Search Console property.

## Google Business Profile

The website cannot create or claim a Google Business Profile.

1. Search Google Maps / Google Search for **Betha Academy Timau**.
2. Claim the existing listing if one appears. Otherwise create a new Business Profile.
3. Keep the school owner as the primary owner.
4. Use the real physical school location. Do not use the P.O. Box as the physical business address.
5. Use the exact name **Betha Academy**.
6. Use phone **+254702617707**.
7. Use website **https://bethaacademy.co.ke**.
8. Upload authentic logo, campus, and learner photographs already used on the website.
9. Enter accurate operating hours.
10. Choose an appropriate school category.
11. Complete Google’s verification method.
12. Keep GBP NAP identical to the website NAP.
13. Do not buy, incentivise, or manipulate reviews.

## Social profiles

Official Facebook page: https://www.facebook.com/BethaAcademy

Instagram, TikTok, and YouTube remain unverified. Do not infer those URLs.

Confirmed social URLs belong in `src/lib/content.ts` under `school.socials`. Icons then appear automatically in the footer, Contact page, and School JSON-LD `sameAs`.

## Historical directory cleanup

Older public listings may still show outdated details. The school owner should update or request corrections so those listings match the official website.

Historical third-party data found during research included:

- Betha Academy, Timau
- P.O. Box 235
- old phone 0721203320
- old phone 0703708377
- old email kioapostle@gmail.com
- older description mentioning Kindergarten / Nursery / Class 1–8
- older boarding reference

The current website uses:

- 0702 617 707
- Playgroup–Grade 4
- no boarding claim
- no historical email

Do not change the website to match old directories.

School code `15334150` appears in some KNEC-derived third-party data for Buuri West. It is not published on the website until confirmed from an authoritative current source.

## Cloudflare redirects

Confirm in Cloudflare that:

- `www.bethaacademy.co.ke` redirects to `https://bethaacademy.co.ke`
- HTTP redirects to HTTPS
- the `*.workers.dev` preview host is not treated as the public canonical site

## After each deploy

1. Open `/`, `/cbc-curriculum`, `/admissions`, and `/contact-us`.
2. Confirm title, description, canonical, Open Graph tags, and JSON-LD.
3. Check `/robots.txt` and `/sitemap.xml` contain only `https://bethaacademy.co.ke`.
