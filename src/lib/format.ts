import type { Locale } from "@/i18n/locales";

export function formatBdt(amount: number, locale: Locale): string {
  const intlLocale = locale === "bn" ? "bn-BD" : "en-BD";
  return new Intl.NumberFormat(intlLocale, {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(value: number, locale: Locale): string {
  const intlLocale = locale === "bn" ? "bn-BD" : "en-BD";
  return new Intl.NumberFormat(intlLocale).format(value);
}
