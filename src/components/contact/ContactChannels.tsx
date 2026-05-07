import { hotel } from "@/data/hotel";
import { WhatsAppButton, WhatsAppIcon } from "@/components/WhatsAppButton";
import type { Translator } from "@/i18n/t";

export function ContactChannels({ t }: { t: Translator }) {
  const emailSubject = encodeURIComponent("Booking inquiry — Hotel Silver Pearl");

  return (
    <ul className="grid gap-4 sm:grid-cols-3">
      <li className="rounded-2xl bg-white ring-1 ring-(--color-navy-800)/10 p-5 flex flex-col">
        <div className="flex items-center gap-3 text-(--color-navy-800)">
          <span className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-(--color-gold-500)/15">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 2 4.1 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.82a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .75 1z" />
            </svg>
          </span>
          <span className="text-sm uppercase tracking-wider text-(--color-ink)/60">
            {t("contact.phoneLabel")}
          </span>
        </div>
        <ul className="mt-3 space-y-1">
          {hotel.phones.map((p) => (
            <li key={p}>
              <a
                href={`tel:${p.replace(/\s/g, "")}`}
                className="text-(--color-navy-800) hover:text-(--color-gold-600) break-all"
              >
                {p}
              </a>
            </li>
          ))}
        </ul>
      </li>

      <li className="rounded-2xl bg-white ring-1 ring-(--color-navy-800)/10 p-5 flex flex-col">
        <div className="flex items-center gap-3 text-[#128C7E]">
          <span className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-[#25D366]/15">
            <WhatsAppIcon className="w-5 h-5" />
          </span>
          <span className="text-sm uppercase tracking-wider text-(--color-ink)/60">
            {t("contact.whatsappLabel")}
          </span>
        </div>
        <p className="mt-3 text-sm text-(--color-ink)/70">{hotel.phones[0]}</p>
        <div className="mt-3">
          <WhatsAppButton
            size="sm"
            label={t("home.ctaPrimary")}
            message={t("contact.whatsappPrefill")}
          />
        </div>
      </li>

      <li className="rounded-2xl bg-white ring-1 ring-(--color-navy-800)/10 p-5 flex flex-col">
        <div className="flex items-center gap-3 text-(--color-navy-800)">
          <span className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-(--color-gold-500)/15">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </span>
          <span className="text-sm uppercase tracking-wider text-(--color-ink)/60">
            {t("contact.emailLabel")}
          </span>
        </div>
        <ul className="mt-3 space-y-1">
          <li>
            <a
              href={`mailto:${hotel.email}?subject=${emailSubject}`}
              className="text-(--color-navy-800) hover:text-(--color-gold-600) break-all"
            >
              {hotel.email}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
}
