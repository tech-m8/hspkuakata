import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Gallery } from "@/components/gallery/Gallery";
import { isLocale, locales, type Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/getDictionary";
import { makeTranslator } from "@/i18n/t";

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
  return { title: t("gallery.pageTitle") };
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);
  const t = makeTranslator(dict);

  return (
    <Section>
      <SectionHeading
        eyebrow={t("nav.gallery")}
        title={t("gallery.pageTitle")}
        subtitle={t("gallery.pageSubtitle")}
      />
      <Gallery dict={dict} />
    </Section>
  );
}
