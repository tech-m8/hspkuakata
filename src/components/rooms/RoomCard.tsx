import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AmenityIcon } from "@/components/AmenityIcon";
import { PriceBreakdown } from "./PriceBreakdown";
import type { Room } from "@/data/rooms";
import { formatBdt, formatNumber } from "@/lib/format";
import type { Locale } from "@/i18n/locales";
import type { Translator } from "@/i18n/t";

const featureIcon: Record<string, Parameters<typeof AmenityIcon>[0]["name"]> = {
  ac: "ac",
  tv: "tv",
  wifi: "wifi",
  wardrobe: "linens",
  desk: "frontDesk",
  kettle: "kettle",
  balcony: "balcony",
  bathroom: "bathroom",
  view: "balcony",
};

export function RoomCard({
  room,
  locale,
  t,
}: {
  room: Room;
  locale: Locale;
  t: Translator;
}) {
  const waText = `${t("contact.whatsappPrefill")} (${t(room.nameKey)})`;
  return (
    <article
      id={room.id}
      className="scroll-mt-24 grid lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden ring-1 ring-(--color-navy-800)/10"
    >
      <div className="relative aspect-[4/3] lg:aspect-auto bg-(--color-navy-800)/10">
        <Image
          src={room.images[0].src}
          alt={t(room.nameKey)}
          width={room.images[0].width}
          height={room.images[0].height}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6 sm:p-8 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-2xl sm:text-3xl font-display text-(--color-navy-800)">
              {t(room.nameKey)}
            </h3>
            <p className="mt-1 text-sm text-(--color-ink)/70">
              {t("rooms.guestsLabel", { count: formatNumber(room.guests, locale) })}
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="text-xs uppercase tracking-wider text-(--color-ink)/60">
              {t("rooms.netAmount")}
            </div>
            <div className="text-2xl font-display text-(--color-navy-800) tabular-nums">
              {formatBdt(room.netBdt, locale)}
            </div>
            <div className="text-xs text-(--color-ink)/60">/ {t("rooms.perNight")}</div>
          </div>
        </div>

        <p className="mt-4 text-(--color-ink)/85 leading-relaxed">
          {t(room.summaryKey)}
        </p>

        <ul className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-2 text-sm text-(--color-ink)/85">
          {room.features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <AmenityIcon name={featureIcon[f]} className="w-4 h-4 text-(--color-gold-600)" />
              {t(`rooms.feature.${f}`)}
            </li>
          ))}
        </ul>

        <PriceBreakdown room={room} locale={locale} t={t} />

        <div className="mt-6 flex flex-wrap gap-3">
          <WhatsAppButton label={t("rooms.inquireWhatsApp")} message={waText} />
          <Button variant="ghost" href={`/${locale}/contact`}>
            {t("nav.contact")}
          </Button>
        </div>
      </div>
    </article>
  );
}
