"use client";

import Image from "next/image";
import { useState } from "react";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
} from "@/lib/content";

export function GalleryGrid({ preview = false }: { preview?: boolean }) {
  const [category, setCategory] = useState<GalleryCategory>("All");
  const visibleItems = (
    category === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === category)
  ).slice(0, preview ? 4 : undefined);

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
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
      <div className="gallery-grid" aria-live="polite">
        {visibleItems.map((item, index) => (
          <figure className="gallery-item" key={`${item.title}-${index}`}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes={
                preview
                  ? "(max-width: 720px) 100vw, 50vw"
                  : "(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
              }
            />
            <figcaption>
              <span>{item.category}</span>
              <strong>{item.title}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
