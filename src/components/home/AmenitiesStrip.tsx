import { inclusions } from "@/data/amenities";
import { AmenityIcon } from "@/components/AmenityIcon";
import type { Translator } from "@/i18n/t";

export function AmenitiesStrip({ t }: { t: Translator }) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
      {inclusions.map((item) => (
        <li
          key={item.id}
          className="flex flex-col items-center text-center p-4 rounded-xl bg-white ring-1 ring-(--color-navy-800)/8"
        >
          <span className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-(--color-gold-500)/15 text-(--color-navy-800)">
            <AmenityIcon name={item.icon} className="w-5 h-5" />
          </span>
          <span className="mt-3 text-sm text-(--color-ink)/85">
            {t(item.labelKey)}
          </span>
        </li>
      ))}
    </ul>
  );
}
