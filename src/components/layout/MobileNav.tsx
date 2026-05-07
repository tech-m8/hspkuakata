"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/locales";

type NavItem = { href: string; label: string };

export function MobileNav({
  items,
  ctaHref,
  ctaLabel,
  locale,
}: {
  items: NavItem[];
  ctaHref: string;
  ctaLabel: string;
  locale: Locale;
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-(--color-navy-800) hover:bg-(--color-navy-800)/5"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-80 max-w-[85%] bg-(--color-cream) shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-(--color-navy-800)/10">
              <span className="font-display text-lg text-(--color-navy-800)">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-10 h-10 inline-flex items-center justify-center rounded-full hover:bg-(--color-navy-800)/5"
                aria-label="Close menu"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="block px-4 py-3 text-base text-(--color-navy-800) hover:bg-(--color-navy-800)/5 rounded-lg"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="p-4 border-t border-(--color-navy-800)/10">
              <Link
                href={ctaHref}
                onClick={close}
                className="block w-full text-center bg-(--color-gold-500) text-(--color-navy-900) font-medium px-5 py-3 rounded-full"
                lang={locale}
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
