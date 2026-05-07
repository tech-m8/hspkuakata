import en from "./dictionaries/en.json";
import bn from "./dictionaries/bn.json";
import type { Locale } from "./locales";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  bn: bn as Dictionary,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function interpolate(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) =>
    key in values ? String(values[key]) : `{{${key}}}`,
  );
}
