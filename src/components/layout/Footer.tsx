import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";
import { WhatsAppIcon } from "@/components/WhatsAppButton";
import { hotel } from "@/data/hotel";
import type { Locale } from "@/i18n/locales";
import type { Translator } from "@/i18n/t";

export function Footer({ locale, t }: { locale: Locale; t: Translator }) {
  const base = `/${locale}`;
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-(--color-navy-800) text-(--color-cream)">
      <Container className="py-12 grid gap-10 md:grid-cols-3">
        <div>
          <Logo variant="light" />
          <p className="mt-4 text-sm text-white/75 leading-relaxed">
            {t("site.shortDescription")}
          </p>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-[0.2em] text-(--color-gold-300) mb-4">
            {t("contact.channelsTitle")}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              {t("location.addressLabel")}: {t("location.addressLine")}
            </li>
            {hotel.phones.map((p) => (
              <li key={p}>
                <a className="hover:text-(--color-gold-300)" href={`tel:${p.replace(/\s/g, "")}`}>
                  {p}
                </a>
              </li>
            ))}
            <li>
              <a className="hover:text-(--color-gold-300)" href={`mailto:${hotel.email}`}>
                {hotel.email}
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-1.5 text-[#25D366] hover:text-[#1faa50]"
                href={`https://wa.me/${hotel.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-[0.2em] text-(--color-gold-300) mb-4">
            {t("nav.home")}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:text-(--color-gold-300)" href={`${base}/rooms`}>
                {t("nav.rooms")}
              </Link>
            </li>
            <li>
              <Link className="hover:text-(--color-gold-300)" href={`${base}/amenities`}>
                {t("nav.amenities")}
              </Link>
            </li>
            <li>
              <Link className="hover:text-(--color-gold-300)" href={`${base}/gallery`}>
                {t("nav.gallery")}
              </Link>
            </li>
            <li>
              <Link className="hover:text-(--color-gold-300)" href={`${base}/location`}>
                {t("nav.location")}
              </Link>
            </li>
            <li>
              <Link className="hover:text-(--color-gold-300)" href={`${base}/contact`}>
                {t("nav.contact")}
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-5 text-xs text-white/60">
          <span>
            © {year} {t("site.name")}. {t("footer.rights")}
          </span>
        </Container>
      </div>
    </footer>
  );
}
