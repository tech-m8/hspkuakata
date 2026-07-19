import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FeedbackEmbed } from "@/components/contact/FeedbackEmbed";
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
  return { title: t("feedback.pageTitle") };
}

export default async function FeedbackPage({
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
        eyebrow={t("nav.feedback")}
        title={t("feedback.pageTitle")}
        subtitle={t("feedback.pageSubtitle")}
      />
      <FeedbackEmbed t={t} />
    </Section>
  );
}
