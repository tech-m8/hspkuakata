import type { Metadata, MetadataRoute } from "next";
import { hotel } from "@/data/hotel";
import { rooms, tariffValidUntil } from "@/data/rooms";
import { defaultLocale, locales, type Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/getDictionary";
import { makeTranslator } from "@/i18n/t";
import { formatBdt } from "@/lib/format";

export const pages = ["home", "rooms", "amenities", "gallery", "location", "contact", "feedback"] as const;
export type PageKey = (typeof pages)[number];

const shareImage = "/images/exterior/facade-dusk-1.jpg";

// Trailing slash matches `trailingSlash: true`, so these URLs never redirect.
export function pagePath(locale: Locale, page: PageKey): string {
  return page === "home" ? `/${locale}/` : `/${locale}/${page}/`;
}

function languageAlternates(page: PageKey): Record<string, string> {
  return {
    ...Object.fromEntries(locales.map((l) => [l, pagePath(l, page)])),
    "x-default": pagePath(defaultLocale, page),
  };
}

export function absoluteUrl(path: string): string {
  return `${hotel.website.replace(/\/$/, "")}${path}`;
}

export function sitemapEntries(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: absoluteUrl(pagePath(locale, page)),
      changeFrequency: "monthly" as const,
      priority: page === "home" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          Object.entries(languageAlternates(page)).map(([l, p]) => [l, absoluteUrl(p)]),
        ),
      },
    })),
  );
}

export function pageMetadata(locale: Locale, page: PageKey): Metadata {
  const t = makeTranslator(getDictionary(locale));
  const values = {
    price: formatBdt(hotel.priceRangeBdt.min, locale),
    phone: hotel.phones[0],
  };
  const title = t(`meta.${page}.title`);
  const description = t(`meta.${page}.description`, values);
  const url = pagePath(locale, page);
  const fullTitle = page === "home" ? title : t("meta.titleTemplate", { title });

  return {
    // The home title already names the hotel and town, so skip the template.
    title: page === "home" ? { absolute: title } : title,
    description,
    alternates: { canonical: url, languages: languageAlternates(page) },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: "website",
      locale: locale === "bn" ? "bn_BD" : "en_US",
      siteName: t("site.name"),
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [shareImage],
    },
  };
}

const amenityKeys = ["buffetBreakfast", "wifi", "parking", "ac", "tv", "frontDesk", "housekeeping", "kettle"];

export function hotelJsonLd(locale: Locale) {
  const t = makeTranslator(getDictionary(locale));
  const otherLocale = locales.find((l) => l !== locale) ?? defaultLocale;
  const roomsUrl = absoluteUrl(pagePath(locale, "rooms"));

  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": `${absoluteUrl("/")}#hotel`,
    name: t("site.name"),
    alternateName: makeTranslator(getDictionary(otherLocale))("site.name"),
    description: t("site.shortDescription"),
    url: absoluteUrl(pagePath(locale, "home")),
    logo: absoluteUrl("/logo.svg"),
    image: [
      "/images/exterior/facade-dusk-1.jpg",
      "/images/exterior/facade-day.jpg",
      "/images/reception/lobby-lounge.jpg",
      "/images/rooms/family-deluxe/twin-bed-marble.jpg",
      "/images/dining/dining-hall.jpg",
    ].map(absoluteUrl),
    address: {
      "@type": "PostalAddress",
      addressLocality: hotel.city,
      addressRegion: hotel.district,
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: hotel.coordinates.lat,
      longitude: hotel.coordinates.lng,
    },
    hasMap: `https://www.google.com/maps?q=${hotel.coordinates.lat},${hotel.coordinates.lng}`,
    telephone: hotel.phones[0],
    email: hotel.email,
    priceRange: `BDT ${hotel.priceRangeBdt.min}–${hotel.priceRangeBdt.max}`,
    currenciesAccepted: "BDT",
    availableLanguage: ["en", "bn"],
    amenityFeature: amenityKeys.map((key) => ({
      "@type": "LocationFeatureSpecification",
      name: t(`amenities.items.${key}`),
      value: true,
    })),
    containsPlace: rooms.map((room) => ({
      "@type": "HotelRoom",
      "@id": `${roomsUrl}#${room.id}`,
      name: t(room.nameKey),
      description: t(room.summaryKey),
      image: room.images.map((img) => absoluteUrl(img.src)),
      occupancy: { "@type": "QuantitativeValue", maxValue: room.guests },
    })),
    makesOffer: rooms.map((room) => ({
      "@type": "Offer",
      name: t(room.nameKey),
      url: roomsUrl,
      price: room.netBdt,
      priceCurrency: "BDT",
      priceValidUntil: tariffValidUntil,
      itemOffered: { "@id": `${roomsUrl}#${room.id}` },
    })),
  };
}
