import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, SectionHeading } from "@/components/ui/Section";
import { AmenityIcon } from "@/components/AmenityIcon";
import { amenities } from "@/data/amenities";
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
  return { title: t("amenities.pageTitle") };
}

export default async function AmenitiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = makeTranslator(getDictionary(locale as Locale));

  return (
    <Section>
      <SectionHeading
        eyebrow={t("nav.amenities")}
        title={t("amenities.pageTitle")}
        subtitle={t("amenities.pageSubtitle")}
      />
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {amenities.map((a) => (
          <li
            key={a.id}
            className="flex items-start gap-4 rounded-2xl bg-white ring-1 ring-(--color-navy-800)/10 p-5"
          >
            <span className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-(--color-gold-500)/15 text-(--color-navy-800) shrink-0">
              <AmenityIcon name={a.icon} className="w-6 h-6" />
            </span>
            <div>
              <p className="text-base text-(--color-navy-800) font-medium">{t(a.labelKey)}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
