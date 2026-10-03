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
import { hotelJsonLd } from "@/lib/seo";

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
    verification: { google: hotel.googleSiteVerification },
    title: { default: t("site.name"), template: t("meta.titleTemplate", { title: "%s" }) },
    description: t("site.shortDescription"),
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

  const jsonLd = hotelJsonLd(locale as Locale);

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
