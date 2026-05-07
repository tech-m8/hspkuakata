import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, SectionHeading } from "@/components/ui/Section";
import { hotel } from "@/data/hotel";
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
  return { title: t("location.pageTitle") };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = makeTranslator(getDictionary(locale as Locale));

  const mapSrc = `https://www.google.com/maps?q=${hotel.coordinates.lat},${hotel.coordinates.lng}&z=12&output=embed`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${hotel.coordinates.lat},${hotel.coordinates.lng}`;

  const segments = [
    { titleKey: "location.byBusTitle", bodyKey: "location.byBusBody" },
    { titleKey: "location.byLaunchTitle", bodyKey: "location.byLaunchBody" },
    { titleKey: "location.byCarTitle", bodyKey: "location.byCarBody" },
  ] as const;

  return (
    <Section>
      <SectionHeading
        eyebrow={t("nav.location")}
        title={t("location.pageTitle")}
        subtitle={t("location.pageSubtitle")}
      />

      <div className="rounded-2xl overflow-hidden ring-1 ring-(--color-navy-800)/10 aspect-[16/9] bg-(--color-navy-800)/5">
        <iframe
          title={t("location.mapTitle")}
          src={mapSrc}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white ring-1 ring-(--color-navy-800)/10 p-5">
        <div>
          <div className="text-xs uppercase tracking-wider text-(--color-ink)/60">
            {t("location.addressLabel")}
          </div>
          <div className="text-(--color-navy-800) font-medium">{t("location.addressLine")}</div>
        </div>
        <a
          href={directionsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-(--color-navy-800) underline underline-offset-4 hover:text-(--color-gold-600)"
        >
          Open in Google Maps →
        </a>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {segments.map((seg) => (
          <div key={seg.titleKey} className="rounded-2xl bg-white ring-1 ring-(--color-navy-800)/10 p-6">
            <h3 className="font-display text-xl text-(--color-navy-800)">{t(seg.titleKey)}</h3>
            <p className="mt-3 text-sm text-(--color-ink)/85 leading-relaxed">{t(seg.bodyKey)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
