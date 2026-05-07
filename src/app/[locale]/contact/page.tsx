import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { ContactForm } from "@/components/contact/ContactForm";
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
  return { title: t("contact.pageTitle") };
}

export default async function ContactPage({
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
        eyebrow={t("nav.contact")}
        title={t("contact.pageTitle")}
        subtitle={t("contact.pageSubtitle")}
      />

      <div className="space-y-10">
        <div>
          <h3 className="text-lg font-display text-(--color-navy-800) mb-4">
            {t("contact.channelsTitle")}
          </h3>
          <ContactChannels t={t} />
        </div>

        <div>
          <h3 className="text-lg font-display text-(--color-navy-800) mb-4">
            {t("contact.formTitle")}
          </h3>
          <ContactForm dict={dict} />
        </div>
      </div>
    </Section>
  );
}
