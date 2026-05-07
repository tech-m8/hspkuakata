import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Locale } from "@/i18n/locales";
import type { Translator } from "@/i18n/t";

export function Hero({ locale, t }: { locale: Locale; t: Translator }) {
  const base = `/${locale}`;
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/exterior/facade-dusk-1.jpg"
          alt={t("site.name")}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />
      </div>
      <Container className="py-28 sm:py-36 lg:py-44">
        <div className="max-w-2xl text-white">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-(--color-gold-300) mb-4">
            {t("home.heroEyebrow")}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] font-display">
            {t("home.heroTitle")}
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/85 leading-relaxed">
            {t("home.heroSubtitle")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton
              label={t("home.heroCtaPrimary")}
              message={t("contact.whatsappPrefill")}
            />
            <Button variant="ghost" href={`${base}/rooms`} className="text-white ring-white/40 hover:bg-white/10">
              {t("home.heroCtaSecondary")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
