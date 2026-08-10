"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
} from "@/lib/content";

export function GalleryGrid({ preview = false }: { preview?: boolean }) {
  const [category, setCategory] = useState<GalleryCategory>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();

  const visibleItems = preview
    ? galleryItems.filter((item) => "showOnHome" in item && item.showOnHome)
    : category === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === category);

  const activeItem = activeIndex === null ? null : visibleItems[activeIndex];

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowRight") {
        setActiveIndex((index) =>
          index === null ? index : (index + 1) % visibleItems.length,
        );
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((index) =>
          index === null
            ? index
            : (index - 1 + visibleItems.length) % visibleItems.length,
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, visibleItems.length]);

  useEffect(() => {
    if (activeIndex === null) {
      lastTriggerRef.current?.focus();
    }
  }, [activeIndex]);

  function openItem(index: number, trigger: HTMLButtonElement) {
    lastTriggerRef.current = trigger;
    setActiveIndex(index);
  }

  function selectCategory(nextCategory: GalleryCategory) {
    setActiveIndex(null);
    setCategory(nextCategory);
  }

  return (
    <>
      {!preview && (
        <div className="gallery-filters" aria-label="Filter gallery">
          {galleryCategories.map((item) => (
            <button
              type="button"
              key={item}
              className={category === item ? "is-active" : undefined}
              aria-pressed={category === item}
              onClick={() => selectCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
      <div
        className={`gallery-grid${preview ? " gallery-grid--preview" : ""}`}
        aria-live="polite"
      >
        {visibleItems.map((item, index) => (
          <figure className="gallery-item" key={`${item.title}-${item.src}`}>
            <button
              type="button"
              className="gallery-item__trigger"
              aria-haspopup="dialog"
              aria-label={`Open photograph: ${item.title}`}
              onClick={(event) => openItem(index, event.currentTarget)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={
                  preview
                    ? "(max-width: 720px) 100vw, 50vw"
                    : "(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                }
                style={
                  "objectPosition" in item && item.objectPosition
                    ? { objectPosition: item.objectPosition }
                    : undefined
                }
              />
            </button>
            <figcaption>
              <span>{item.category}</span>
              <strong>{item.title}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
      {activeItem ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div className="gallery-lightbox__toolbar">
            <p id={titleId}>
              <span>{activeItem.category}</span>
              <strong>{activeItem.title}</strong>
            </p>
            <p className="gallery-lightbox__count" aria-live="polite">
              Photograph {activeIndex! + 1} of {visibleItems.length}
            </p>
            <button
              ref={closeRef}
              type="button"
              className="gallery-lightbox__icon-btn"
              aria-label="Close photograph"
              onClick={() => setActiveIndex(null)}
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <div className="gallery-lightbox__stage">
            <Image
              src={activeItem.src}
              alt={activeItem.alt}
              fill
              sizes="100vw"
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="gallery-lightbox__nav">
            <button
              type="button"
              className="button button--ghost-light"
              aria-label="Previous photograph"
              onClick={() =>
                setActiveIndex(
                  (index) =>
                    ((index ?? 0) - 1 + visibleItems.length) %
                    visibleItems.length,
                )
              }
            >
              <ChevronLeft size={18} aria-hidden="true" />
              Previous
            </button>
            <button
              type="button"
              className="button button--ghost-light"
              aria-label="Next photograph"
              onClick={() =>
                setActiveIndex(
                  (index) => ((index ?? 0) + 1) % visibleItems.length,
                )
              }
            >
              Next
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
