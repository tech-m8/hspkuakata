"use client";

import { Fragment, useMemo, useState, type ReactNode } from "react";
import { rooms } from "@/data/rooms";
import { hotel } from "@/data/hotel";
import type { Dictionary } from "@/i18n/getDictionary";
import { makeTranslator, type Translator } from "@/i18n/t";

function renderWithEmail(template: string, email: string): ReactNode {
  const parts = template.split("{{email}}");
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && (
        <a
          href={`mailto:${email}`}
          className="text-(--color-navy-800) underline underline-offset-4 hover:text-(--color-gold-600)"
        >
          {email}
        </a>
      )}
    </Fragment>
  ));
}

export function ContactForm({ dict }: { dict: Dictionary }) {
  const t: Translator = useMemo(() => makeTranslator(dict), [dict]);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => (data.get(k) as string | null)?.trim() || "";

    const lines = [
      `*${t("contact.formTitle")}*`,
      "",
      `${t("contact.form.name")}: ${get("name")}`,
      get("email") && `${t("contact.form.email")}: ${get("email")}`,
      get("phone") && `${t("contact.form.phone")}: ${get("phone")}`,
      get("checkin") && `${t("contact.form.checkin")}: ${get("checkin")}`,
      get("checkout") && `${t("contact.form.checkout")}: ${get("checkout")}`,
      get("guests") && `${t("contact.form.guests")}: ${get("guests")}`,
      get("room_type") && `${t("contact.form.roomType")}: ${get("room_type")}`,
      get("message") && `\n${t("contact.form.message")}:\n${get("message")}`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${hotel.whatsapp}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-(--color-navy-800)/5 ring-1 ring-(--color-navy-800)/10 p-6">
        <h3 className="font-display text-2xl text-(--color-navy-800)">
          {t("contact.form.successTitle")}
        </h3>
        <p className="mt-2 text-(--color-ink)/85">
          {renderWithEmail(t("contact.form.successBody"), hotel.email)}
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm underline underline-offset-4 text-(--color-navy-800)"
        >
          ↺
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white ring-1 ring-(--color-navy-800)/10 p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      <Field label={t("contact.form.name")}>
        <input name="name" type="text" required autoComplete="name" className={inputCls} />
      </Field>

      <Field label={t("contact.form.email")}>
        <input name="email" type="email" autoComplete="email" className={inputCls} />
      </Field>

      <Field label={t("contact.form.phone")}>
        <input name="phone" type="tel" autoComplete="tel" className={inputCls} />
      </Field>

      <Field label={t("contact.form.guests")}>
        <input
          name="guests"
          type="number"
          min={1}
          max={10}
          defaultValue={2}
          className={inputCls}
        />
      </Field>

      <Field label={t("contact.form.checkin")}>
        <input name="checkin" type="date" className={inputCls} />
      </Field>

      <Field label={t("contact.form.checkout")}>
        <input name="checkout" type="date" className={inputCls} />
      </Field>

      <Field label={t("contact.form.roomType")} className="sm:col-span-2">
        <select name="room_type" defaultValue="" className={inputCls}>
          <option value="">{t("contact.form.roomTypeAny")}</option>
          {rooms.map((r) => (
            <option key={r.id} value={t(r.nameKey)}>
              {t(r.nameKey)}
            </option>
          ))}
        </select>
      </Field>

      <Field label={t("contact.form.message")} className="sm:col-span-2">
        <textarea name="message" rows={4} className={inputCls} />
      </Field>

      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-medium hover:bg-[#1faa50]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.15 1.6 5.96L2 22l4.27-1.7a9.86 9.86 0 0 0 5.77 1.55h0c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0 0 12.04 2zm0 18.2h0a8.27 8.27 0 0 1-4.21-1.15l-.3-.18-2.53 1.01.85-2.61-.2-.31a8.25 8.25 0 0 1-1.27-4.4c0-4.55 3.71-8.26 8.27-8.26 2.21 0 4.28.86 5.84 2.42a8.21 8.21 0 0 1 2.42 5.84c0 4.55-3.71 8.26-8.27 8.26zm4.78-6.18c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.82 1.02-.15.17-.3.2-.56.07-.26-.13-1.1-.4-2.1-1.3-.78-.69-1.3-1.55-1.46-1.81-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.59-1.42-.81-1.94-.21-.51-.43-.44-.59-.45-.15-.01-.32-.01-.5-.01-.17 0-.45.06-.69.32-.24.26-.91.89-.91 2.17 0 1.28.93 2.52 1.06 2.69.13.17 1.84 2.81 4.46 3.94.62.27 1.11.43 1.49.55.62.2 1.19.17 1.64.1.5-.07 1.55-.63 1.77-1.24.22-.61.22-1.13.15-1.24-.07-.11-.24-.17-.5-.3z"/>
          </svg>
          {t("contact.form.submit")}
        </button>
        <span className="text-xs text-(--color-ink)/60">
          {renderWithEmail(t("contact.form.fallbackNote"), hotel.email)}
        </span>
      </div>
    </form>
  );
}

const inputCls =
  "w-full rounded-lg border border-(--color-navy-800)/15 bg-white px-3 py-2.5 text-sm text-(--color-ink) focus:outline-none focus:ring-2 focus:ring-(--color-gold-500)/40 focus:border-(--color-navy-800)/30";

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs uppercase tracking-wider text-(--color-ink)/60 mb-1.5">
        {label}
      </span>
      {children}
    </label>
  );
}
