import type { MetadataRoute } from "next";
import { hotel } from "@/data/hotel";
import { locales } from "@/i18n/locales";

export const dynamic = "force-static";

const pages = ["", "rooms", "amenities", "gallery", "location", "contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = hotel.website.replace(/\/$/, "");
  return locales.flatMap((locale) =>
    pages.map((p) => ({
      url: `${base}/${locale}${p ? `/${p}` : ""}`,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.7,
    })),
  );
}
