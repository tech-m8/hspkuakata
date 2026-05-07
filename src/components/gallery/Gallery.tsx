"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { gallery, type GalleryCategory, type GalleryItem } from "@/data/gallery";
import type { Dictionary } from "@/i18n/getDictionary";
import { makeTranslator } from "@/i18n/t";

const categories: ("all" | GalleryCategory)[] = ["all", "exterior", "rooms", "signage"];

export function Gallery({ dict }: { dict: Dictionary }) {
  const t = useMemo(() => makeTranslator(dict), [dict]);
  const [filter, setFilter] = useState<"all" | GalleryCategory>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "all" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i === null ? null : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, items.length]);

  const active: GalleryItem | null = activeIndex === null ? null : items[activeIndex];

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => {
          const isActive = c === filter;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                isActive
                  ? "bg-(--color-navy-800) text-white"
                  : "bg-white ring-1 ring-(--color-navy-800)/15 text-(--color-navy-800) hover:bg-(--color-navy-800)/5"
              }`}
            >
              {t(`gallery.filters.${c}`)}
            </button>
          );
        })}
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {items.map((item, idx) => (
          <li key={item.src} className="relative">
            <button
              type="button"
              onClick={() => setActiveIndex(idx)}
              className="block w-full relative aspect-square overflow-hidden rounded-xl ring-1 ring-(--color-navy-800)/10 group"
              aria-label={t("gallery.open")}
            >
              <Image
                src={item.src}
                alt=""
                width={item.width}
                height={item.height}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute top-4 right-4 w-10 h-10 inline-flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(null);
            }}
            aria-label={t("gallery.close")}
          >
            ✕
          </button>
          <button
            type="button"
            className="absolute left-2 sm:left-6 w-12 h-12 inline-flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((activeIndex! - 1 + items.length) % items.length);
            }}
            aria-label={t("gallery.prev")}
          >
            ‹
          </button>
          <button
            type="button"
            className="absolute right-2 sm:right-6 w-12 h-12 inline-flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((activeIndex! + 1) % items.length);
            }}
            aria-label={t("gallery.next")}
          >
            ›
          </button>
          <div
            className="relative max-w-5xl max-h-[88vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt=""
              width={active.width}
              height={active.height}
              sizes="100vw"
              className="object-contain w-full h-full max-h-[88vh] rounded-lg"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
