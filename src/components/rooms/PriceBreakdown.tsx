import type { Room } from "@/data/rooms";
import { formatBdt } from "@/lib/format";
import type { Locale } from "@/i18n/locales";
import type { Translator } from "@/i18n/t";

export function PriceBreakdown({
  room,
  locale,
  t,
}: {
  room: Room;
  locale: Locale;
  t: Translator;
}) {
  const rows: { labelKey: string; value: number; sign?: string }[] = [
    { labelKey: "rooms.breakdown.base", value: room.baseBdt },
    { labelKey: "rooms.breakdown.discount", value: room.discountBdt, sign: "−" },
    { labelKey: "rooms.breakdown.service", value: room.serviceBdt, sign: "+" },
    { labelKey: "rooms.breakdown.vat", value: room.vatBdt, sign: "+" },
  ];

  return (
    <details className="group mt-3 rounded-lg bg-(--color-navy-800)/5 open:bg-(--color-navy-800)/8">
      <summary className="cursor-pointer list-none flex items-center justify-between p-3 text-sm text-(--color-navy-800)">
        <span className="group-open:hidden">{t("rooms.showBreakdown")}</span>
        <span className="hidden group-open:inline">{t("rooms.hideBreakdown")}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="transition-transform group-open:rotate-180"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </summary>
      <div className="px-3 pb-3">
        <table className="w-full text-sm">
          <tbody>
            {rows.map((row) => (
              <tr key={row.labelKey} className="border-t border-(--color-navy-800)/8">
                <td className="py-2 text-(--color-ink)/70">{t(row.labelKey)}</td>
                <td className="py-2 text-right tabular-nums text-(--color-ink)/85">
                  {row.sign === "−" ? "−" : ""}
                  {formatBdt(row.value, locale)}
                </td>
              </tr>
            ))}
            <tr className="border-t-2 border-(--color-navy-800)/30">
              <td className="py-2 font-medium text-(--color-navy-800)">
                {t("rooms.breakdown.net")}
              </td>
              <td className="py-2 text-right font-medium tabular-nums text-(--color-navy-800)">
                {formatBdt(room.netBdt, locale)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </details>
  );
}
