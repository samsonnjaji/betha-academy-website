import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  Brain,
  Check,
  HeartHandshake,
  Palette,
  Phone,
  ShieldCheck,
  Sparkles,
  Sprout,
  Users,
} from "lucide-react";
import { AdmissionCta } from "@/components/admission-cta";
import { AdmissionSteps } from "@/components/steps";
import { FeesTable } from "@/components/fees-table";
import { GalleryGrid } from "@/components/gallery-grid";
import { ImageNote } from "@/components/image-note";
import { SectionHeading } from "@/components/section-heading";
import { images, school } from "@/lib/content";

const reasons = [
  {
    icon: BookOpenCheck,
    title: "Quality CBC education",
    text: "We follow Kenya’s Competency-Based Curriculum, helping learners build practical skills, knowledge, creativity, and confidence.",
  },
  {
    icon: ShieldCheck,
    title: "Safe learning environment",
    text: "A secure, caring, and supportive environment where every child feels welcome.",
  },
  {
    icon: Palette,
    title: "Child-friendly classrooms",
    text: "Learning spaces designed for active participation, interaction, creativity, and effective learning.",
  },
  {
    icon: HeartHandshake,
    title: "Individual learner support",
    text: "We recognise every learner’s unique needs, abilities, and aspirations.",
  },
  {
    icon: Sparkles,
    title: "Character development",
    text: "We encourage responsibility, respect, discipline, confidence, and good character.",
  },
];

const facilities = [
  {
    icon: ShieldCheck,
    title: "Safe learning environment",
    text: "We prioritise the safety and well-being of every learner.",
  },
  {
    icon: Sprout,
    title: "Playground",
    text: "Space for recreation, physical activity, interaction, and play.",
  },
  {
    icon: Users,
    title: "Child-friendly classrooms",
    text: "Welcoming and supportive environments suitable for young learners.",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="home-hero__image"
        />
        <div className="home-hero__overlay" />
        <div className="container home-hero__inner">
          <div className="home-hero__content">
            <div className="open-pill">
              <span className="status-dot" aria-hidden="true" />
              Currently enrolling
            </div>
            <p className="eyebrow eyebrow--light">Welcome to Betha Academy</p>
            <h1>{school.promise}</h1>
            <p className="home-hero__lead">
              Quality education in a safe, caring, and supportive environment,
              nurturing every learner toward excellence and good character.
            </p>
            <div className="hero-actions">
              <Link className="button button--accent" href="/admissions">
                Apply for admission
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a className="button button--ghost-light" href={school.phoneHref}>
                <Phone size={18} aria-hidden="true" />
                Contact the school
              </a>
            </div>
            <p className="hero-classes">
              <strong>Open classes:</strong> Playgroup, PP1, PP2 & Grade 1–4
            </p>
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container intro-grid">
          <div>
            <SectionHeading
              eyebrow="About Betha Academy"
              title="Every child is valued, supported, and encouraged to grow."
            />
          </div>
          <div className="intro-copy">
            <p>
              We provide an enriching learning environment where learners can
              discover their abilities, develop essential skills, and build a
              strong foundation for their future.
            </p>
            <p>
              Our approach combines academic development, personal growth,
              discipline, creativity, and social responsibility.
            </p>
            <Link className="text-link" href="/about-us">
              Discover our approach
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--cream classes-section">
        <div className="container">
          <SectionHeading
            eyebrow="Classes currently available"
            title="A strong start, from Playgroup to Grade 4."
            description="Betha Academy is currently admitting learners into the following classes."
            align="center"
          />
          <div className="class-grid">
            {school.classes.map((className, index) => (
              <div className="class-card" key={className}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{className}</strong>
                <Check size={17} aria-hidden="true" />
              </div>
            ))}
          </div>
          <div className="center-action">
            <Link className="button button--primary" href="/admissions">
              Start the admission process
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Why choose Betha Academy"
            title="Learning that strengthens the whole child."
            description="Academic development and personal growth come together in a caring environment."
            align="center"
          />
          <div className="reasons-grid">
            {reasons.map(({ icon: Icon, title, text }, index) => (
              <article
                className={`reason-card ${index === 0 ? "reason-card--featured" : ""}`}
                key={title}
              >
                <span className="icon-box" aria-hidden="true">
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section vision-preview">
        <div className="container vision-preview__grid">
          <div className="vision-preview__image">
            <Image
              src={images.reading.src}
              alt={images.reading.alt}
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <ImageNote />
          </div>
          <div className="vision-preview__content">
            <p className="eyebrow">Our direction</p>
            <h2>Prepared for tomorrow. Grounded in character today.</h2>
            <div className="quote-card">
              <span>Vision</span>
              <blockquote>{school.vision}</blockquote>
            </div>
            <div className="mission-line">
              <span className="icon-box" aria-hidden="true">
                <Brain />
              </span>
              <p>
                Our mission brings together academic success, personal growth,
                responsibility, safety, and individual learner support.
              </p>
            </div>
            <Link className="text-link" href="/vision-mission">
              Read our vision and mission
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container feature-split">
          <div className="feature-split__content">
            <SectionHeading
              eyebrow="Competency-Based Curriculum"
              title="Knowledge brought to life through practical learning."
              description="Our CBC approach helps learners acquire knowledge, practical skills, positive values, creativity, communication abilities, and problem-solving skills."
            />
            <ul className="check-list">
              <li>
                <Check aria-hidden="true" /> Critical thinking and problem-solving
              </li>
              <li>
                <Check aria-hidden="true" /> Confident communication
              </li>
              <li>
                <Check aria-hidden="true" /> Creativity and practical application
              </li>
            </ul>
            <Link className="button button--primary" href="/cbc-curriculum">
              Explore our curriculum
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="feature-split__image">
            <Image
              src={images.cbc.src}
              alt={images.cbc.alt}
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <div className="floating-label">
              <BookOpenCheck aria-hidden="true" />
              <span>
                <strong>CBC learning</strong>
                Skills, values & creativity
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section facilities-section">
        <div className="container">
          <SectionHeading
            eyebrow="A supportive environment"
            title="Spaces that make room for learning, safety, and play."
            description="Betha Academy provides facilities that promote learning, development, safety, and positive interaction."
            align="center"
          />
          <div className="facilities-grid">
            {facilities.map(({ icon: Icon, title, text }, index) => (
              <article className="facility-card" key={title}>
                {index === 1 && (
                  <Image
                    src={images.schoolGrounds.src}
                    alt={images.schoolGrounds.alt}
                    fill
                    sizes="(max-width: 800px) 100vw, 33vw"
                  />
                )}
                <div className="facility-card__content">
                  <span className="icon-box" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--green">
        <div className="container">
          <SectionHeading
            eyebrow="Simple admissions"
            title="Your path to joining Betha Academy."
            description="Begin by contacting the school, then follow the guided admission process."
          />
          <AdmissionSteps compact />
          <div className="section-actions">
            <Link className="button button--light" href="/admissions">
              See all five steps
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a className="button button--ghost-light" href={school.phoneHref}>
              <Phone size={18} aria-hidden="true" />
              Call for guidance
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-topline">
            <SectionHeading
              eyebrow="Fees summary"
              title="Clear, accessible school fees."
              description="The admission fee is KSh 100 for every listed class level."
            />
            <Link className="text-link" href="/fees-structure">
              Full fee information
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <FeesTable />
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-topline">
            <SectionHeading
              eyebrow="Life and learning"
              title="A real glimpse of Betha Academy."
              description="Explore the school entrance, open grounds, and classroom blocks through photographs of the campus."
            />
            <Link className="text-link" href="/gallery">
              Explore the gallery
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <GalleryGrid preview />
        </div>
      </section>

      <AdmissionCta />
    </>
  );
}
