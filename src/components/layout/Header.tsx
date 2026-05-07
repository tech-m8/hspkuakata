import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { MobileNav } from "./MobileNav";
import type { Locale } from "@/i18n/locales";
import type { Translator } from "@/i18n/t";

export function Header({ locale, t }: { locale: Locale; t: Translator }) {
  const base = `/${locale}`;
  const items = [
    { href: `${base}`, label: t("nav.home") },
    { href: `${base}/rooms`, label: t("nav.rooms") },
    { href: `${base}/amenities`, label: t("nav.amenities") },
    { href: `${base}/gallery`, label: t("nav.gallery") },
    { href: `${base}/location`, label: t("nav.location") },
    { href: `${base}/contact`, label: t("nav.contact") },
  ];
  const cta = { href: `${base}/contact`, label: t("nav.bookNow") };

  return (
    <header className="sticky top-0 z-40 bg-(--color-cream)/85 backdrop-blur border-b border-(--color-navy-800)/10">
      <Container className="flex items-center justify-between gap-4 h-16">
        <Link href={base} className="flex-shrink-0" aria-label={t("site.name")}>
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-full text-(--color-navy-800)/85 hover:text-(--color-navy-800) hover:bg-(--color-navy-800)/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LocaleSwitcher current={locale} />
          </div>
          <Link
            href={cta.href}
            className="hidden md:inline-flex items-center justify-center bg-(--color-gold-500) text-(--color-navy-900) text-sm font-medium px-5 py-2.5 rounded-full hover:bg-(--color-gold-400) transition-colors"
          >
            {cta.label}
          </Link>
          <MobileNav items={items} ctaHref={cta.href} ctaLabel={cta.label} locale={locale} />
        </div>
      </Container>
      <div className="sm:hidden border-t border-(--color-navy-800)/10">
        <Container className="py-2 flex justify-end">
          <LocaleSwitcher current={locale} />
        </Container>
      </div>
    </header>
  );
}
