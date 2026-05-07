import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Noto_Sans_Bengali } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { hotel } from "@/data/hotel";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { locales, isLocale, type Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/getDictionary";
import { makeTranslator } from "@/i18n/t";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const notoBn = Noto_Sans_Bengali({
  variable: "--font-noto-bn",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = makeTranslator(getDictionary(locale));
  return {
    metadataBase: new URL(hotel.website),
    title: { default: t("site.name"), template: `%s · ${t("site.name")}` },
    description: t("site.shortDescription"),
    openGraph: {
      title: t("site.name"),
      description: t("site.shortDescription"),
      type: "website",
      locale: locale === "bn" ? "bn_BD" : "en_US",
      siteName: t("site.name"),
      images: ["/images/exterior/facade-dusk-1.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: t("site.name"),
      description: t("site.shortDescription"),
      images: ["/images/exterior/facade-dusk-1.jpg"],
    },
    alternates: {
      languages: {
        en: `/en`,
        bn: `/bn`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale as Locale);
  const t = makeTranslator(dict);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: hotel.name,
    image: [`${hotel.website}/images/exterior/facade-dusk-1.jpg`],
    address: {
      "@type": "PostalAddress",
      addressLocality: hotel.city,
      addressRegion: hotel.district,
      addressCountry: hotel.country,
    },
    telephone: hotel.phones,
    email: hotel.email,
    url: hotel.website,
    priceRange: `BDT ${hotel.priceRangeBdt.min}–${hotel.priceRangeBdt.max}`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: hotel.coordinates.lat,
      longitude: hotel.coordinates.lng,
    },
  };

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${cormorant.variable} ${notoBn.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-(--color-cream) text-(--color-ink)">
        <Header locale={locale as Locale} t={t} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale as Locale} t={t} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
