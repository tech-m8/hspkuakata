import { notFound } from "next/navigation";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Hero } from "@/components/home/Hero";
import { RoomHighlights } from "@/components/home/RoomHighlights";
import { AmenitiesStrip } from "@/components/home/AmenitiesStrip";
import { GalleryTeaser } from "@/components/home/GalleryTeaser";
import { LocationPreview } from "@/components/home/LocationPreview";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Container } from "@/components/ui/Container";
import { isLocale, type Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/getDictionary";
import { makeTranslator } from "@/i18n/t";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = makeTranslator(getDictionary(locale as Locale));

  return (
    <>
      <Hero locale={locale as Locale} t={t} />

      <Section>
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-(--color-gold-500) mb-3">
            {t("nav.home")}
          </p>
          <h2 className="text-3xl sm:text-4xl text-(--color-navy-800) leading-tight">
            {t("home.introTitle")}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-(--color-ink)/80 leading-relaxed">
            {t("home.introBody")}
          </p>
        </div>
      </Section>

      <Section className="bg-white/60 border-y border-(--color-navy-800)/8">
        <SectionHeading
          eyebrow={t("nav.rooms")}
          title={t("home.roomsTitle")}
          subtitle={t("home.roomsSubtitle")}
        />
        <RoomHighlights locale={locale as Locale} t={t} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow={t("nav.amenities")}
          title={t("home.amenitiesTitle")}
        />
        <AmenitiesStrip t={t} />
      </Section>

      <Section className="bg-white/60 border-y border-(--color-navy-800)/8">
        <SectionHeading
          eyebrow={t("nav.gallery")}
          title={t("home.galleryTitle")}
        />
        <GalleryTeaser locale={locale as Locale} t={t} />
      </Section>

      <Section>
        <LocationPreview locale={locale as Locale} t={t} />
      </Section>

      <Container className="pb-20">
        <CtaBanner locale={locale as Locale} t={t} />
      </Container>
    </>
  );
}
