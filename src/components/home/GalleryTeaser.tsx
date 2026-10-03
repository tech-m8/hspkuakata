import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import type { Translator } from "@/i18n/t";

const teaser = [
  { src: "/images/exterior/facade-day.jpg", w: 1200, h: 1600, category: "exterior" },
  { src: "/images/rooms/family-deluxe/twin-bed-marble.jpg", w: 1600, h: 1200, category: "rooms" },
  { src: "/images/rooms/deluxe/bed-marble.jpg", w: 1600, h: 1025, category: "rooms" },
  { src: "/images/exterior/street-view.jpg", w: 1200, h: 1600, category: "exterior" },
];

export function GalleryTeaser({
  locale,
  t,
}: {
  locale: Locale;
  t: Translator;
}) {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {teaser.map((img) => (
          <div
            key={img.src}
            className="relative aspect-square overflow-hidden rounded-xl"
          >
            <Image
              src={img.src}
              alt={t("gallery.alt", { category: t(`gallery.filters.${img.category}`) })}
              width={img.w}
              height={img.h}
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link
          href={`/${locale}/gallery`}
          className="text-sm text-(--color-navy-800) underline underline-offset-4 hover:text-(--color-gold-600)"
        >
          {t("home.galleryCta")} →
        </Link>
      </div>
    </div>
  );
}
