export const school = {
  name: "Betha Academy",
  phoneDisplay: "0702 617 707",
  phoneHref: "tel:0702617707",
  promise: "Nurturing Excellence, Character, and Responsibility",
  vision:
    "Striving for excellence today to prepare students to succeed in a challenging world of tomorrow.",
  mission:
    "To ensure each student accomplishes academic success, excellence, personal growth, and responsibility by providing a safe and enriching learning environment customised to each student’s needs and aspirations.",
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

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

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
      "Visit the Betha Academy school office or call us for admission information.",
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
  | "Classroom Blocks";

export const galleryCategories: GalleryCategory[] = [
  "All",
  "School Entrance",
  "School Grounds",
  "Classroom Blocks",
];

export const images = {
  hero: {
    src: "/images/school/01-main-gate.webp",
    alt: "The main entrance gate of Betha Academy",
  },
  schoolCourtyard: {
    src: "/images/school/06-courtyard-balanced.webp",
    alt: "Betha Academy courtyard with classroom blocks surrounding the open grounds",
  },
  schoolGrounds: {
    src: "/images/school/04-courtyard-trees.webp",
    alt: "A wide view of the Betha Academy grounds, trees, and classroom blocks",
  },
  classroomBlock: {
    src: "/images/school/05-classroom-block.webp",
    alt: "A classroom block overlooking the Betha Academy grounds",
  },
  paintedClassrooms: {
    src: "/images/school/07-painted-classrooms.webp",
    alt: "Painted learning spaces and classroom blocks at Betha Academy",
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
    src: "/images/school/02-courtyard-wide-a.webp",
    alt: "A wide view across the Betha Academy courtyard",
    title: "The central courtyard",
    category: "School Grounds" as GalleryCategory,
  },
  {
    src: "/images/school/03-courtyard-wide-b.webp",
    alt: "Betha Academy classroom blocks viewed across the school grounds",
    title: "Learning spaces around the grounds",
    category: "School Grounds" as GalleryCategory,
  },
  {
    ...images.schoolGrounds,
    title: "Open school grounds",
    category: "School Grounds" as GalleryCategory,
  },
  {
    ...images.classroomBlock,
    title: "Classroom block",
    category: "Classroom Blocks" as GalleryCategory,
  },
  {
    ...images.schoolCourtyard,
    title: "A wide, connected campus",
    category: "School Grounds" as GalleryCategory,
  },
  {
    ...images.paintedClassrooms,
    title: "Colourful learning spaces",
    category: "Classroom Blocks" as GalleryCategory,
  },
] as const;
