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
    facebook: "https://www.facebook.com/BethaAcademy",
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
  | "Campus"
  | "Learning"
  | "School Life"
  | "Activities"
  | "Transport"
  | "Trips & Events";

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Campus",
  "Learning",
  "School Life",
  "Activities",
  "Transport",
  "Trips & Events",
];

const authentic = "/images/school/authentic";

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
    src: "/images/school/09-school-bus-isuzu.webp",
    alt: "Yellow Betha Academy school bus parked under a shelter on the Timau campus",
    objectPosition: "center 38%",
  },
  schoolVan: {
    src: "/images/school/08-school-van-timau.webp",
    alt: "Yellow Betha Academy van marked Betha Academy Timau on the school grounds",
  },
  classroom: {
    src: `${authentic}/14-classroom-teacher-learning-materials.webp`,
    alt: "Betha Academy pupil in a classroom with learning materials on the wall",
  },
  classroomLife: {
    src: `${authentic}/15-classroom-pupils-refreshments.webp`,
    alt: "Betha Academy learners during a classroom school-life moment",
  },
  outdoorLearning: {
    src: `${authentic}/39-pupils-outdoor-activity-with-teacher.webp`,
    alt: "Betha Academy teacher and pupils during an outdoor learning activity",
  },
  sports: {
    src: `${authentic}/03-sports-uniform-group-with-ball.webp`,
    alt: "Betha Academy pupils in sports kit posing with a football",
  },
  singing: {
    src: `${authentic}/72-student-group-singing.webp`,
    alt: "Betha Academy pupils taking part in a school singing activity",
  },
  drama: {
    src: `${authentic}/76-student-drama-performance.webp`,
    alt: "Betha Academy learners taking part in a school performance",
  },
  performance: {
    src: `${authentic}/77-student-performing-before-school.webp`,
    alt: "Betha Academy pupil performing during a school event",
  },
  outdoorActivity: {
    src: `${authentic}/32-school-pupils-outdoor-activity.webp`,
    alt: "Betha Academy pupils during an outdoor school activity",
  },
  outdoorTable: {
    src: `${authentic}/71-students-around-outdoor-table.webp`,
    alt: "Betha Academy pupils gathered around an outdoor table",
  },
  assembly: {
    src: `${authentic}/38-pupils-outdoor-assembly-seated.webp`,
    alt: "Betha Academy pupils seated together for a school gathering",
  },
  campusAssembly: {
    src: `${authentic}/70-school-assembly-campus-wide.webp`,
    alt: "Betha Academy pupils gathered on the school grounds",
  },
  community: {
    src: `${authentic}/16-school-community-outdoor-gathering.webp`,
    alt: "Betha Academy school community gathered outdoors",
  },
  equatorTrip: {
    src: `${authentic}/05-student-group-equator-nanyuki.webp`,
    alt: "Betha Academy pupils on an educational outing",
  },
  outingSteps: {
    src: `${authentic}/01-group-outing-stone-steps.webp`,
    alt: "Betha Academy pupils during a school outing",
  },
  busCommunity: {
    src: `${authentic}/06-students-with-betha-academy-bus.webp`,
    alt: "Betha Academy pupils gathered with a branded school bus",
  },
  schoolSign: {
    src: `${authentic}/49-younger-pupils-group-outdoors.webp`,
    alt: "Betha Academy pupils standing beside the school sign",
  },
  historicalGate: {
    src: `${authentic}/50-school-gate-and-pupils-wide.webp`,
    alt: "Betha Academy pupils near the school gate",
  },
} as const;

export const galleryItems = [
  {
    ...images.hero,
    title: "Welcome to Betha Academy",
    category: "Campus" as GalleryCategory,
  },
  {
    ...images.schoolGrounds,
    title: "Open school grounds",
    category: "Campus" as GalleryCategory,
  },
  {
    ...images.schoolCourtyard,
    title: "Classrooms around the courtyard",
    category: "Campus" as GalleryCategory,
  },
  {
    ...images.classroomBlock,
    title: "Learners on the school grounds",
    category: "Campus" as GalleryCategory,
  },
  {
    ...images.paintedClassrooms,
    title: "Painted classroom blocks",
    category: "Campus" as GalleryCategory,
  },
  {
    ...images.schoolSign,
    title: "School identity",
    category: "Campus" as GalleryCategory,
    objectPosition: "center 18%",
  },
  {
    ...images.classroom,
    title: "Classroom learning",
    category: "Learning" as GalleryCategory,
    objectPosition: "center 25%",
    showOnHome: true,
  },
  {
    ...images.outdoorLearning,
    title: "Learning beyond the classroom",
    category: "Learning" as GalleryCategory,
  },
  {
    ...images.classroomLife,
    title: "School life indoors",
    category: "School Life" as GalleryCategory,
  },
  {
    ...images.assembly,
    title: "A school gathering",
    category: "School Life" as GalleryCategory,
  },
  {
    ...images.campusAssembly,
    title: "Together on the grounds",
    category: "School Life" as GalleryCategory,
  },
  {
    ...images.community,
    title: "School community",
    category: "School Life" as GalleryCategory,
  },
  {
    ...images.outdoorTable,
    title: "Shared outdoor time",
    category: "School Life" as GalleryCategory,
  },
  {
    ...images.sports,
    title: "Sports and play",
    category: "Activities" as GalleryCategory,
    showOnHome: true,
  },
  {
    ...images.singing,
    title: "Singing together",
    category: "Activities" as GalleryCategory,
  },
  {
    ...images.drama,
    title: "School performance",
    category: "Activities" as GalleryCategory,
    showOnHome: true,
  },
  {
    ...images.performance,
    title: "Creative presentation",
    category: "Activities" as GalleryCategory,
  },
  {
    ...images.outdoorActivity,
    title: "Outdoor school activity",
    category: "Activities" as GalleryCategory,
  },
  {
    ...images.equatorTrip,
    title: "Educational outing",
    category: "Trips & Events" as GalleryCategory,
    showOnHome: true,
  },
  {
    ...images.outingSteps,
    title: "A day out with the school",
    category: "Trips & Events" as GalleryCategory,
  },
  {
    ...images.schoolVan,
    title: "School van in Timau",
    category: "Transport" as GalleryCategory,
  },
  {
    ...images.schoolBus,
    title: "Betha Academy bus",
    category: "Transport" as GalleryCategory,
  },
  {
    ...images.busCommunity,
    title: "Pupils with the school bus",
    category: "Transport" as GalleryCategory,
  },
] as const;
