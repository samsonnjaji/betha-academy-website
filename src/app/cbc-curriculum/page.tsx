import Image from "next/image";
import {
  BookOpenCheck,
  Check,
  Lightbulb,
  MessageCircle,
  Puzzle,
  Sparkles,
  Users,
} from "lucide-react";
import { AdmissionCta } from "@/components/admission-cta";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { images, school } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "CBC School in Timau | Betha Academy Curriculum",
  description:
    "See how Betha Academy in Timau delivers Kenya’s Competency-Based Curriculum from Playgroup through Grade 4.",
  path: "/cbc-curriculum",
});

const approaches = [
  { icon: Puzzle, text: "Think critically and solve problems" },
  { icon: MessageCircle, text: "Communicate confidently" },
  { icon: Users, text: "Work effectively with others" },
  { icon: Sparkles, text: "Develop creativity and imagination" },
  { icon: Lightbulb, text: "Apply knowledge in practical situations" },
  { icon: BookOpenCheck, text: "Discover talents and act responsibly" },
];

const earlyYears = [
  "Communication and language development",
  "Social interaction",
  "Creativity",
  "Physical coordination",
  "Early literacy",
  "Early numeracy",
  "Confidence and independence",
];

const activityPhotos = [
  {
    image: images.sports,
    caption: "Sports and play",
  },
  {
    image: images.singing,
    caption: "Creative and co-curricular activities",
  },
  {
    image: images.drama,
    caption: "School performance",
  },
];

export default function CbcCurriculumPage() {
  return (
    <>
      <PageHero
        eyebrow="CBC Curriculum"
        title="Learning by thinking, creating, doing, and growing."
        description="Betha Academy follows Kenya’s Competency-Based Curriculum, placing the learner at the centre of the learning process."
        icon={BookOpenCheck}
        path="/cbc-curriculum"
      />
      <section className="section">
        <div className="container feature-split">
          <div className="feature-split__content">
            <SectionHeading
              eyebrow="Competency-Based Curriculum"
              title="More than academic knowledge."
            />
            <p>
              The curriculum focuses on developing skills, values, talents,
              creativity, and practical abilities alongside academic knowledge.
            </p>
            <p>
              Learners are encouraged to understand ideas, apply them in practical
              situations, collaborate with others, and grow into responsible
              members of society.
            </p>
            <div className="class-pills" aria-label="Classes offered">
              {school.classes.map((className) => (
                <span key={className}>{className}</span>
              ))}
            </div>
          </div>
          <div className="feature-split__image">
            <Image
              src={images.outdoorLearning.src}
              alt={images.outdoorLearning.alt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
        </div>
      </section>
      <section className="section section--cream">
        <div className="container">
          <SectionHeading
            eyebrow="Our CBC learning approach"
            title="Competencies that help learners meet the world with confidence."
            align="center"
          />
          <div className="approach-grid">
            {approaches.map(({ icon: Icon, text }) => (
              <article key={text}>
                <span className="icon-box" aria-hidden="true">
                  <Icon />
                </span>
                <h3>{text}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="School activities"
            title="Learning that continues beyond the classroom."
            description="Authentic photographs of Betha Academy pupils taking part in sports, creative activities, and educational experiences."
            align="center"
          />
          <div className="activity-photo-grid">
            {activityPhotos.map(({ image, caption }) => (
              <figure key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 25vw"
                />
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--cream">
        <div className="container programme-grid">
          <article className="programme-card">
            <div className="programme-card__number">01</div>
            <p className="eyebrow">Early years education</p>
            <h2>Playgroup, PP1 & PP2</h2>
            <p>
              A supportive foundation that encourages communication, social
              interaction, creativity, coordination, confidence, and independence.
            </p>
            <ul className="compact-checks">
              {earlyYears.map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="programme-card programme-card--green">
            <div className="programme-card__number">02</div>
            <p className="eyebrow eyebrow--light">Primary education</p>
            <h2>Grade 1 to Grade 4</h2>
            <p>
              Programmes that strengthen academic abilities while developing
              practical competencies, positive values, and responsible behaviour.
            </p>
            <div className="programme-card__image">
              <Image
                src={images.classroom.src}
                alt={images.classroom.alt}
                fill
                sizes="(max-width: 800px) 100vw, 45vw"
                style={{ objectPosition: images.classroom.objectPosition }}
              />
            </div>
          </article>
        </div>
      </section>
      <AdmissionCta />
    </>
  );
}
