"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, localeLabels, type Locale } from "@/i18n/locales";

export function LocaleSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (next: Locale) => {
    if (next === current) return;
    const segments = (pathname || "/").split("/");
    if (segments.length > 1 && (locales as readonly string[]).includes(segments[1])) {
      segments[1] = next;
    } else {
      segments.splice(1, 0, next);
    }
    router.push(segments.join("/") || `/${next}`);
  };

  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center rounded-full border border-(--color-navy-800)/15 text-xs"
    >
      {locales.map((loc) => {
        const active = loc === current;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => switchTo(loc)}
            aria-pressed={active}
            className={`px-3 py-1.5 rounded-full transition-colors ${
              active
                ? "bg-(--color-navy-800) text-white"
                : "text-(--color-navy-800) hover:bg-(--color-navy-800)/5"
            }`}
          >
            {localeLabels[loc]}
          </button>
        );
      })}
    </div>
  );
}
