const productionSiteUrl = "https://bethaacademy.co.ke";

function resolveSiteUrl() {
  const candidate = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (!candidate) {
    return productionSiteUrl;
  }

  try {
    const url = new URL(candidate);
    const { hostname } = url;
    if (
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname.endsWith(".workers.dev") ||
      hostname.endsWith(".vercel.app") ||
      hostname === "www.bethaacademy.co.ke"
    ) {
      return productionSiteUrl;
    }
    return url.origin;
  } catch {
    return productionSiteUrl;
  }
}

export const siteUrl = resolveSiteUrl();

export const school = {
  name: "Betha Academy",
  alternateName: "Betha Academy Timau",
  promise: "Nurturing Excellence, Character, and Responsibility",
  vision:
    "Striving for excellence today to prepare students to succeed in a challenging world of tomorrow.",
  mission:
    "To ensure each student accomplishes academic success, excellence, personal growth, and responsibility by providing a safe and enriching learning environment customised to each student’s needs and aspirations.",
  description:
    "Betha Academy is a CBC school in Timau, Meru County, offering a safe and supportive learning environment from Playgroup through Grade 4.",
  phoneDisplay: "0702 617 707",
  phoneInternational: "+254 702 617 707",
  phoneE164: "+254702617707",
  phoneHref: "tel:+254702617707",
  location: {
    locality: "Timau",
    region: "Meru County",
    country: "Kenya",
    countryCode: "KE",
    display: "Timau, Meru County, Kenya",
    postalCode: "10406",
    mailingDisplay: "P.O. Box 235, Timau 10406",
    corridor: "Timau–Meru–Nanyuki corridor",
    mapsQuery: "Betha Academy, Timau, Kenya",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Betha+Academy%2C+Timau%2C+Kenya",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Betha+Academy%2C+Timau%2C+Kenya",
  },
  socials: {
    facebook: null as string | null,
    instagram: null as string | null,
    tiktok: null as string | null,
    youtube: null as string | null,
  },
  classes: [
    "Playgroup",
    "PP1",
    "PP2",
    "Grade 1",
    "Grade 2",
    "Grade 3",
    "Grade 4",
  ],
} as const;

export function verifiedSocialUrls() {
  return Object.values(school.socials).filter(
    (url): url is string => typeof url === "string" && url.length > 0,
  );
}

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Vision & Mission", href: "/vision-mission" },
  { label: "CBC Curriculum", href: "/cbc-curriculum" },
  { label: "Admissions", href: "/admissions" },
  { label: "Fees", href: "/fees-structure" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact-us" },
] as const;

export const fees = [
  { level: "Playgroup – PP2", tuition: "KSh 2,500", admission: "KSh 100" },
  { level: "Grade 1 – Grade 3", tuition: "KSh 4,500", admission: "KSh 100" },
  { level: "Grade 4", tuition: "KSh 5,500", admission: "KSh 100" },
] as const;

export const admissionSteps = [
  {
    title: "Visit or contact the school",
    description:
      "Visit the Betha Academy school office in Timau or call us for admission information.",
  },
  {
    title: "Complete the application form",
    description: "Obtain and complete the school admission application form.",
  },
  {
    title: "Submit the required documents",
    description:
      "Provide a copy of the child’s birth certificate, previous school records where applicable, and any other documents requested by the school.",
  },
  {
    title: "Pay the admission fee",
    description:
      "Pay the required KSh 100 admission fee to complete the application process.",
  },
  {
    title: "Receive confirmation",
    description:
      "The school will provide admission confirmation and reporting instructions.",
  },
] as const;

export type GalleryCategory =
  | "All"
  | "School Entrance"
  | "School Grounds"
  | "Classroom Blocks"
  | "School Vehicles";

export const galleryCategories: GalleryCategory[] = [
  "All",
  "School Entrance",
  "School Grounds",
  "Classroom Blocks",
  "School Vehicles",
];

export const images = {
  hero: {
    src: "/images/school/01-main-gate-with-learners.webp",
    alt: "Learners arriving at the main entrance gate of Betha Academy in Timau",
    width: 1676,
    height: 942,
  },
  schoolCourtyard: {
    src: "/images/school/07-courtyard-learners-c.webp",
    alt: "Learners in the Betha Academy courtyard with classroom blocks surrounding the open grounds",
  },
  schoolGrounds: {
    src: "/images/school/04-courtyard-tree-view.webp",
    alt: "A wide view of learners, trees, and classroom blocks at Betha Academy",
  },
  classroomBlock: {
    src: "/images/school/02-courtyard-learners-a.webp",
    alt: "Learners across the Betha Academy grounds in front of the classroom blocks",
  },
  paintedClassrooms: {
    src: "/images/school/03-courtyard-learners-b.webp",
    alt: "Betha Academy learners near the painted classroom blocks",
  },
  schoolBus: {
    src: "/images/school/05-school-bus.webp",
    alt: "Learners standing beside a branded Betha Academy bus",
  },
  schoolVan: {
    src: "/images/school/06-school-van.webp",
    alt: "Learners standing beside a branded Betha Academy van",
  },
  cbc: {
    src: "/images/cbc-nature.webp",
    alt: "Temporary illustrative image of children exploring leaves during a practical learning activity",
  },
  creative: {
    src: "/images/creative-art.webp",
    alt: "Temporary illustrative image of young children taking part in a guided creative activity",
  },
  play: {
    src: "/images/outdoor-play.webp",
    alt: "Temporary illustrative image of children enjoying supervised outdoor play",
  },
  reading: {
    src: "/images/shared-reading.webp",
    alt: "Temporary illustrative image of children reading together in a classroom library corner",
  },
} as const;

export const galleryItems = [
  {
    ...images.hero,
    title: "Welcome to Betha Academy",
    category: "School Entrance" as GalleryCategory,
  },
  {
    ...images.classroomBlock,
    title: "The active central courtyard",
    category: "School Grounds" as GalleryCategory,
  },
  {
    ...images.paintedClassrooms,
    title: "Learning spaces around the courtyard",
    category: "School Grounds" as GalleryCategory,
  },
  {
    ...images.schoolGrounds,
    title: "Open school grounds",
    category: "School Grounds" as GalleryCategory,
  },
  {
    ...images.schoolBus,
    title: "Betha Academy branded bus",
    category: "School Vehicles" as GalleryCategory,
  },
  {
    ...images.schoolCourtyard,
    title: "Classrooms around the school grounds",
    category: "Classroom Blocks" as GalleryCategory,
  },
  {
    ...images.schoolVan,
    title: "Betha Academy branded van",
    category: "School Vehicles" as GalleryCategory,
  },
] as const;
