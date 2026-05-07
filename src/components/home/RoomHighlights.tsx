import Image from "next/image";
import Link from "next/link";
import { rooms } from "@/data/rooms";
import { formatBdt } from "@/lib/format";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/i18n/locales";
import type { Translator } from "@/i18n/t";

export function RoomHighlights({
  locale,
  t,
}: {
  locale: Locale;
  t: Translator;
}) {
  const base = `/${locale}`;
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3">
        {rooms.map((room) => (
          <Link
            key={room.id}
            href={`${base}/rooms#${room.id}`}
            className="group block bg-white rounded-2xl overflow-hidden ring-1 ring-(--color-navy-800)/10 hover:shadow-lg transition-shadow"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={room.images[0].src}
                alt={t(room.nameKey)}
                width={room.images[0].width}
                height={room.images[0].height}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl text-(--color-navy-800)">{t(room.nameKey)}</h3>
              <p className="mt-1 text-sm text-(--color-ink)/70">
                {t("rooms.guestsLabel", { count: room.guests })}
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-2xl font-display text-(--color-navy-800)">
                  {formatBdt(room.netBdt, locale)}
                </span>
                <span className="text-xs text-(--color-ink)/60">
                  / {t("rooms.perNight")}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button variant="ghost" href={`${base}/rooms`}>
          {t("home.roomsCta")} →
        </Button>
      </div>
    </div>
  );
}
