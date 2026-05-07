import { Button } from "@/components/ui/Button";
import { hotel } from "@/data/hotel";
import type { Locale } from "@/i18n/locales";
import type { Translator } from "@/i18n/t";

export function LocationPreview({
  locale,
  t,
}: {
  locale: Locale;
  t: Translator;
}) {
  const mapSrc = `https://www.google.com/maps?q=${hotel.coordinates.lat},${hotel.coordinates.lng}&z=12&output=embed`;
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-(--color-gold-500) mb-3">
          {t("nav.location")}
        </p>
        <h2 className="text-3xl sm:text-4xl text-(--color-navy-800) leading-tight">
          {t("home.locationTitle")}
        </h2>
        <p className="mt-4 text-base text-(--color-ink)/80 leading-relaxed">
          {t("home.locationBody")}
        </p>
        <div className="mt-6">
          <Button variant="ghost" href={`/${locale}/location`}>
            {t("home.locationCta")} →
          </Button>
        </div>
      </div>
      <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-(--color-navy-800)/10">
        <iframe
          title={t("location.mapTitle")}
          src={mapSrc}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}
