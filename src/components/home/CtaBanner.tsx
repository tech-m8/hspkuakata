import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Locale } from "@/i18n/locales";
import type { Translator } from "@/i18n/t";

export function CtaBanner({ locale, t }: { locale: Locale; t: Translator }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-(--color-navy-800) text-white p-10 sm:p-14 text-center">
      <div className="absolute -top-12 -right-12 w-60 h-60 rounded-full bg-(--color-gold-500)/15 blur-3xl" />
      <div className="absolute -bottom-12 -left-12 w-60 h-60 rounded-full bg-(--color-gold-500)/10 blur-3xl" />
      <h2 className="text-3xl sm:text-4xl font-display">{t("home.ctaTitle")}</h2>
      <p className="mt-4 max-w-xl mx-auto text-white/80">{t("home.ctaBody")}</p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <WhatsAppButton
          label={t("home.ctaPrimary")}
          message={t("contact.whatsappPrefill")}
        />
        <Button
          variant="ghost"
          href={`/${locale}/contact`}
          className="text-white ring-white/40 hover:bg-white/10"
        >
          {t("home.ctaSecondary")}
        </Button>
      </div>
    </div>
  );
}
