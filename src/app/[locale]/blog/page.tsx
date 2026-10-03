import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { isLocale, locales } from "@/i18n/locales";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "blog");
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const bn = locale === "bn";

  return (
    <Section>
      <SectionHeading
        eyebrow={bn ? "কুয়াকাটা ভ্রমণ পরিকল্পনা" : "Plan your Kuakata trip"}
        title={bn ? "ভ্রমণ ব্লগ" : "Kuakata Travel Blog"}
        subtitle={bn ? "কুয়াকাটা ভ্রমণ পরিকল্পনা, স্থানীয় দর্শনীয় স্থান ও থাকার জায়গা নিয়ে ব্যবহারিক গাইড।" : "Practical guides to planning a Kuakata trip, local attractions, and finding a place to stay."}
      />
      <Container className="grid max-w-4xl gap-6">
        <Link href={`/${locale}/blog/kuakata-travel-guide`} className="group block overflow-hidden rounded-3xl bg-white ring-1 ring-(--color-navy-800)/10 transition hover:-translate-y-0.5 hover:shadow-lg">
          <div className="grid md:grid-cols-[1.2fr_1fr]">
            <div className="flex min-h-64 items-center justify-center bg-[linear-gradient(135deg,var(--color-navy-800),var(--color-navy-900))] p-8 text-center text-(--color-gold-300)">
              <div>
                <span className="text-xs uppercase tracking-[0.2em]">{bn ? "কুয়াকাটা · বাংলাদেশ" : "Kuakata · Bangladesh"}</span>
                <p className="mt-3 font-display text-4xl">{bn ? "সাগরকন্যা" : "Sagor Konnya"}</p>
                <p className="mt-2 text-sm text-white/65">{bn ? "বঙ্গোপসাগরের তীরে" : "On the Bay of Bengal"}</p>
              </div>
            </div>
            <div className="p-7 md:p-9">
              <p className="text-xs uppercase tracking-[0.16em] text-(--color-gold-600)">{bn ? "সম্পূর্ণ গাইড" : "Complete guide"}</p>
              <h2 className="mt-3 font-display text-3xl text-(--color-navy-800) group-hover:text-(--color-gold-600)">
                {bn ? "কুয়াকাটা ভ্রমণ গাইড" : "Complete Kuakata Travel Guide"}
              </h2>
              <p className="mt-4 leading-relaxed text-(--color-ink)/75">
                {bn ? "কখন যাবেন, কীভাবে পৌঁছাবেন, কী দেখবেন এবং কোথায় থাকবেন—পরিকল্পনার জন্য প্রয়োজনীয় তথ্য এক জায়গায়।" : "When to go, how to get there, what to see, and where to stay: the essentials for planning your visit."}
              </p>
              <span className="mt-6 inline-block text-sm font-medium text-(--color-navy-800) underline decoration-(--color-gold-500) underline-offset-4">
                {bn ? "গাইড পড়ুন →" : "Read the guide →"}
              </span>
            </div>
          </div>
        </Link>
        <Link href={`/${locale}/blog/where-to-stay-in-kuakata`} className="group block overflow-hidden rounded-3xl bg-white ring-1 ring-(--color-navy-800)/10 transition hover:-translate-y-0.5 hover:shadow-lg">
          <div className="grid md:grid-cols-[1.2fr_1fr]">
            <div className="flex min-h-64 items-center justify-center bg-[linear-gradient(135deg,var(--color-gold-500),var(--color-gold-300))] p-8 text-center text-(--color-navy-900)">
              <div>
                <span className="text-xs uppercase tracking-[0.2em]">{bn ? "কুয়াকাটা · থাকার পরিকল্পনা" : "Kuakata · Stay planning"}</span>
                <p className="mt-3 font-display text-4xl">{bn ? "থাকার ঠিকানা" : "Find your stay"}</p>
                <p className="mt-2 text-sm text-(--color-navy-900)/70">{bn ? "সৈকতের কাছাকাছি" : "Close to the beach"}</p>
              </div>
            </div>
            <div className="p-7 md:p-9">
              <p className="text-xs uppercase tracking-[0.16em] text-(--color-gold-600)">{bn ? "থাকার গাইড" : "Stay guide"}</p>
              <h2 className="mt-3 font-display text-3xl text-(--color-navy-800) group-hover:text-(--color-gold-600)">{bn ? "কুয়াকাটায় কোথায় থাকবেন" : "Where to Stay in Kuakata"}</h2>
              <p className="mt-4 leading-relaxed text-(--color-ink)/75">{bn ? "হোটেল বাছাইয়ের আগে অবস্থান, রুম, খাবার, পার্কিং ও বুকিংয়ের শর্ত যাচাই করুন।" : "Compare location, rooms, meals, parking, and booking terms before you choose."}</p>
              <span className="mt-6 inline-block text-sm font-medium text-(--color-navy-800) underline decoration-(--color-gold-500) underline-offset-4">{bn ? "গাইড পড়ুন →" : "Read the guide →"}</span>
            </div>
          </div>
        </Link>
        <Link href={`/${locale}/blog/kuakata-2-day-itinerary`} className="group block rounded-3xl bg-white p-7 ring-1 ring-(--color-navy-800)/10 transition hover:-translate-y-0.5 hover:shadow-lg md:p-9">
          <p className="text-xs uppercase tracking-[0.16em] text-(--color-gold-600)">{bn ? "২ দিনের পরিকল্পনা" : "Two-day plan"}</p>
          <h2 className="mt-3 font-display text-3xl text-(--color-navy-800) group-hover:text-(--color-gold-600)">{bn ? "কুয়াকাটায় ২ দিনের ভ্রমণ পরিকল্পনা" : "Kuakata 2-Day Itinerary"}</h2>
          <p className="mt-4 leading-relaxed text-(--color-ink)/75">{bn ? "সৈকত, সূর্যোদয়-সূর্যাস্ত এবং কাছের দর্শনীয় স্থান নিয়ে স্বচ্ছন্দ ভ্রমণসূচি।" : "A relaxed schedule for the beach, sunrise and sunset, and nearby sights."}</p>
          <span className="mt-6 inline-block text-sm font-medium text-(--color-navy-800) underline decoration-(--color-gold-500) underline-offset-4">{bn ? "পরিকল্পনা দেখুন →" : "View the itinerary →"}</span>
        </Link>
        <Link href={`/${locale}/blog/kuakata-attractions-and-beach-guide`} className="group block rounded-3xl bg-white p-7 ring-1 ring-(--color-navy-800)/10 transition hover:-translate-y-0.5 hover:shadow-lg md:p-9">
          <p className="text-xs uppercase tracking-[0.16em] text-(--color-gold-600)">{bn ? "সৈকত ও দর্শনীয় স্থান" : "Beach & attractions"}</p>
          <h2 className="mt-3 font-display text-3xl text-(--color-navy-800) group-hover:text-(--color-gold-600)">{bn ? "কুয়াকাটার দর্শনীয় স্থান ও সৈকত গাইড" : "Kuakata Attractions and Beach Guide"}</h2>
          <p className="mt-4 leading-relaxed text-(--color-ink)/75">{bn ? "সৈকত, ঝাউবন, গঙ্গামতি, ফাতরার চর ও রাখাইন ঐতিহ্য ঘোরার তথ্য।" : "Plan visits to the beach, Jhau Forest, Gangamati, Fatrar Char, and Rakhine heritage sites."}</p>
          <span className="mt-6 inline-block text-sm font-medium text-(--color-navy-800) underline decoration-(--color-gold-500) underline-offset-4">{bn ? "গাইড পড়ুন →" : "Read the guide →"}</span>
        </Link>
      </Container>
    </Section>
  );
}
