import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, SectionHeading } from "@/components/ui/Section";
import { RoomCard } from "@/components/rooms/RoomCard";
import { AmenityIcon } from "@/components/AmenityIcon";
import { rooms } from "@/data/rooms";
import { inclusions } from "@/data/amenities";
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
  return { title: t("rooms.pageTitle") };
}

export default async function RoomsPage({
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
        eyebrow={t("nav.rooms")}
        title={t("rooms.pageTitle")}
        subtitle={t("rooms.pageSubtitle")}
      />
      <p className="-mt-6 mb-10 text-sm text-(--color-ink)/60">{t("rooms.validity")}</p>

      <div className="space-y-10">
        {rooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
            locale={locale as Locale}
            t={t}
          />
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-white ring-1 ring-(--color-navy-800)/10 p-6 sm:p-8">
        <h3 className="text-xl font-display text-(--color-navy-800)">
          {t("rooms.inclusionsTitle")}
        </h3>
        <ul className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {inclusions.map((item) => (
            <li
              key={item.id}
              className="flex flex-col items-center text-center text-sm text-(--color-ink)/85"
            >
              <span className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-(--color-gold-500)/15 text-(--color-navy-800) mb-2">
                <AmenityIcon name={item.icon} className="w-5 h-5" />
              </span>
              {t(item.labelKey)}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
