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
  const planningArticles = [
    { slug: "best-time-to-visit-kuakata", title: bn ? "কুয়াকাটা ভ্রমণের সেরা সময়" : "Best Time to Visit Kuakata", description: bn ? "আবহাওয়া, ভিড় ও ঋতু বুঝে ভ্রমণের তারিখ ঠিক করুন।" : "Choose your dates around weather, crowds, and seasonal conditions." },
    { slug: "dhaka-to-kuakata", title: bn ? "ঢাকা থেকে কুয়াকাটা যাওয়ার উপায়" : "How to Get to Kuakata from Dhaka", description: bn ? "বাস, সড়কপথ, লঞ্চ ও যাত্রা পরিকল্পনার পরামর্শ।" : "Compare bus, road, and launch-plus-road options." },
    { slug: "kuakata-weekend-itinerary", title: bn ? "কুয়াকাটা উইকএন্ড ভ্রমণ: ২ দিন ১ রাত" : "Kuakata Weekend Itinerary: 2 Days and 1 Night", description: bn ? "কুয়াকাটা সৈকত ও কাছের দর্শনীয় স্থান ঘুরে স্বল্প সফরের পরিকল্পনা।" : "Plan a short Kuakata stay with beach time and nearby sights in 2 days and 1 night." },
    { slug: "kuakata-family-trip-guide", title: bn ? "পরিবার নিয়ে কুয়াকাটা ভ্রমণ গাইড" : "Kuakata Family Trip Guide", description: bn ? "কুয়াকাটা যাতায়াত, হোটেল রুম, শিশুদের নিরাপত্তা ও খাবারের প্রস্তুতি।" : "Plan Kuakata transport, hotel rooms, child safety, meals, and family essentials." },
    { slug: "kuakata-travel-checklist", title: bn ? "কুয়াকাটা ভ্রমণ চেকলিস্ট" : "Kuakata Travel Checklist", description: bn ? "সৈকত, আবহাওয়া ও সড়কযাত্রার জন্য কী নেবেন।" : "What to pack for beach days, coastal weather, and the road." },
    { slug: "kuakata-trip-budget", title: bn ? "কুয়াকাটা ভ্রমণের আনুমানিক বাজেট" : "Estimated Kuakata Trip Budget", description: bn ? "দম্পতি, পরিবার ও দলের জন্য নমুনা খরচের হিসাব।" : "Sample cost estimates for couples, families, and groups." },
  ];
  const experienceArticles = [
    { slug: "kuakata-attractions-time-guide", title: bn ? "কুয়াকাটার দর্শনীয় স্থান: কী দেখবেন ও কত সময় রাখবেন" : "Kuakata Attractions: What to See and How Much Time to Allow", description: bn ? "প্রতিটি স্থানের জন্য আনুমানিক সময়সহ ঘোরার পরিকল্পনা।" : "Plan your stops with practical visit-time estimates." },
    { slug: "kuakata-sunrise-sunset-guide", title: bn ? "কুয়াকাটায় সূর্যোদয় ও সূর্যাস্ত" : "Sunrise and Sunset at Kuakata", description: bn ? "দেখার স্থান, সময় ও আবহাওয়া নিয়ে পরিকল্পনা করুন।" : "Plan viewpoints, timing, weather checks, and photography." },
    { slug: "kuakata-beach-guide", title: bn ? "কুয়াকাটা সৈকত গাইড" : "Kuakata Beach Guide", description: bn ? "কী করবেন, কীভাবে যাবেন এবং নিরাপদে ঘোরার টিপস।" : "Activities, access, safety, and practical visitor tips." },
    { slug: "day-trips-from-kuakata", title: bn ? "কুয়াকাটা থেকে এক দিনের ভ্রমণ" : "Day Trips from Kuakata", description: bn ? "কাছের উপকূল, বন, গ্রাম ও স্থানীয় আকর্ষণ ঘুরুন।" : "Consider nearby coastal, forest, village, and local stops." },
    { slug: "kuakata-with-children", title: bn ? "শিশুদের নিয়ে কুয়াকাটা ভ্রমণ" : "Kuakata with Children", description: bn ? "পরিবারের জন্য কার্যক্রম, নিরাপত্তা ও ব্যবহারিক পরামর্শ।" : "Family activities, beach safety, and practical planning tips." },
    { slug: "kuakata-local-food-guide", title: bn ? "কুয়াকাটার স্থানীয় খাবার" : "Local Food in Kuakata", description: bn ? "সামুদ্রিক খাবার, শুঁটকি ও খাবার বাছাইয়ের পরামর্শ।" : "Seafood, dried fish, and dining advice for visitors." },
  ];
  const practicalArticles = [
    { slug: "kuakata-travel-tips-first-time-visitors", title: bn ? "প্রথমবার কুয়াকাটা ভ্রমণের টিপস" : "Kuakata Travel Tips for First-Time Visitors", description: bn ? "যাতায়াত, আবহাওয়া, সৈকত নিরাপত্তা ও থাকার পরিকল্পনা।" : "Practical advice on transport, weather, beach safety, and stays." },
    { slug: "kuakata-holiday-travel-planning", title: bn ? "ছুটিতে কুয়াকাটা ভ্রমণ পরিকল্পনা" : "Kuakata Holiday Travel Planning", description: bn ? "ব্যস্ত সময়ে কুয়াকাটার বাস, হোটেল ও স্থানীয় যাতায়াত বুক করুন।" : "Plan Kuakata buses, hotel accommodation, and local transport for busy dates." },
    { slug: "kuakata-monsoon-travel-guide", title: bn ? "বর্ষায় কুয়াকাটা ভ্রমণ গাইড" : "Kuakata Monsoon Travel Guide", description: bn ? "বৃষ্টি, উপকূলীয় সতর্কতা ও প্রস্তুতির পরামর্শ।" : "What rain, coastal warnings, and flexible planning mean for your trip." },
    { slug: "kuakata-accessibility-mobility-guide", title: bn ? "কুয়াকাটায় প্রবেশগম্যতা ও চলাচল গাইড" : "Accessibility and Mobility in Kuakata", description: bn ? "রুম, পরিবহন, পথ ও সৈকতের প্রবেশাধিকার আগে যাচাই করুন।" : "Questions to ask about rooms, transport, paths, and beach access." },
    { slug: "kuakata-travel-faqs", title: bn ? "কুয়াকাটা ভ্রমণ FAQ" : "Kuakata Travel FAQs", description: bn ? "ভ্রমণকারীদের সাধারণ পরিকল্পনা-সংক্রান্ত প্রশ্নের উত্তর।" : "Answers to common planning questions about a Kuakata visit." },
  ];
  const accommodationArticles = [
    { slug: "where-to-stay-in-kuakata-areas", title: bn ? "কুয়াকাটায় কোথায় থাকবেন: এলাকা ও দর্শনীয় স্থান" : "Where to Stay in Kuakata: Areas, Beach Access and Attractions", description: bn ? "সৈকত, যাতায়াত ও দর্শনীয় স্থান অনুযায়ী অবস্থান বাছুন; Hotel Silver Pearl-এর অবস্থানও দেখুন।" : "Choose where to stay in Kuakata by beach access, transport, and nearby sights, with Hotel Silver Pearl location details." },
    { slug: "how-to-choose-hotel-kuakata", title: bn ? "কুয়াকাটায় হোটেল কীভাবে বাছবেন" : "How to Choose a Hotel in Kuakata", description: bn ? "কুয়াকাটায় হোটেল বাছতে অবস্থান, রুম, সুবিধা, ভাড়া ও বুকিংয়ের শর্ত যাচাই করুন।" : "Compare Kuakata hotel location, room fit, amenities, rates, and booking terms." },
    { slug: "kuakata-family-hotel-guide", title: bn ? "পরিবারের জন্য কুয়াকাটা হোটেল গাইড" : "Kuakata Hotel Guide for Families", description: bn ? "রুম, নাশতা, সৈকতের পথ ও বুকিং প্রশ্ন নিয়ে পরিকল্পনা।" : "Plan rooms, breakfast, beach access, and practical booking questions." },
    { slug: "kuakata-accommodation-couples-groups", title: bn ? "দম্পতি বা দলের জন্য কুয়াকাটায় থাকা" : "Kuakata Accommodation for Couples or Groups", description: bn ? "অতিথি সংখ্যা, রুম ভাগ ও মোট খরচ বিবেচনা করুন।" : "Consider capacity, room sharing, and the total group cost." },
    { slug: "hotel-near-kuakata-beach", title: bn ? "কুয়াকাটা সৈকতের কাছে হোটেল" : "Hotel Near Kuakata Beach", description: bn ? "মানচিত্রের দূরত্ব ও হাঁটার বাস্তব পথের পার্থক্য বুঝুন।" : "Understand the difference between map distance and the real walk." },
    { slug: "questions-to-ask-before-booking-kuakata-hotel", title: bn ? "কুয়াকাটা হোটেল বুকের আগে প্রশ্ন" : "Questions to Ask Before Booking a Kuakata Hotel", description: bn ? "রুম, ভাড়া, নাশতা, সৈকতের পথ ও বাতিলের শর্ত নিশ্চিত করুন।" : "Confirm room fit, total price, breakfast, beach route, and policies." },
  ];

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
              <h2 className="mt-3 font-display text-3xl text-(--color-navy-800) group-hover:text-(--color-gold-600)">{bn ? "কুয়াকাটায় হোটেল বাছাই" : "Choosing a Hotel in Kuakata"}</h2>
              <p className="mt-4 leading-relaxed text-(--color-ink)/75">{bn ? "হোটেল বাছাইয়ের আগে অবস্থান, রুম, খাবার, পার্কিং ও বুকিংয়ের শর্ত যাচাই করুন।" : "Compare location, rooms, meals, parking, and booking terms before you choose."}</p>
              <span className="mt-6 inline-block text-sm font-medium text-(--color-navy-800) underline decoration-(--color-gold-500) underline-offset-4">{bn ? "গাইড পড়ুন →" : "Read the guide →"}</span>
            </div>
          </div>
        </Link>
        <Link href={`/${locale}/blog/kuakata-2-day-itinerary`} className="group block rounded-3xl bg-white p-7 ring-1 ring-(--color-navy-800)/10 transition hover:-translate-y-0.5 hover:shadow-lg md:p-9">
          <p className="text-xs uppercase tracking-[0.16em] text-(--color-gold-600)">{bn ? "২ দিনের পরিকল্পনা" : "Two-day plan"}</p>
          <h2 className="mt-3 font-display text-3xl text-(--color-navy-800) group-hover:text-(--color-gold-600)">{bn ? "কুয়াকাটায় ২ দিনের ভ্রমণ পরিকল্পনা: ২ রাত" : "Kuakata 2-Day Itinerary: Two Nights"}</h2>
          <p className="mt-4 leading-relaxed text-(--color-ink)/75">{bn ? "সৈকত, সূর্যোদয়-সূর্যাস্ত এবং কাছের দর্শনীয় স্থান নিয়ে স্বচ্ছন্দ ভ্রমণসূচি।" : "A relaxed schedule for the beach, sunrise and sunset, and nearby sights."}</p>
          <span className="mt-6 inline-block text-sm font-medium text-(--color-navy-800) underline decoration-(--color-gold-500) underline-offset-4">{bn ? "পরিকল্পনা দেখুন →" : "View the itinerary →"}</span>
        </Link>
        <Link href={`/${locale}/blog/kuakata-attractions-and-beach-guide`} className="group block rounded-3xl bg-white p-7 ring-1 ring-(--color-navy-800)/10 transition hover:-translate-y-0.5 hover:shadow-lg md:p-9">
          <p className="text-xs uppercase tracking-[0.16em] text-(--color-gold-600)">{bn ? "সৈকত ও দর্শনীয় স্থান" : "Beach & attractions"}</p>
          <h2 className="mt-3 font-display text-3xl text-(--color-navy-800) group-hover:text-(--color-gold-600)">{bn ? "কুয়াকাটার দর্শনীয় স্থান ও সৈকত গাইড" : "Kuakata Attractions and Beach Guide"}</h2>
          <p className="mt-4 leading-relaxed text-(--color-ink)/75">{bn ? "সৈকত, ঝাউবন, গঙ্গামতি, ফাতরার চর ও রাখাইন ঐতিহ্য ঘোরার তথ্য।" : "Plan visits to the beach, Jhau Forest, Gangamati, Fatrar Char, and Rakhine heritage sites."}</p>
          <span className="mt-6 inline-block text-sm font-medium text-(--color-navy-800) underline decoration-(--color-gold-500) underline-offset-4">{bn ? "গাইড পড়ুন →" : "Read the guide →"}</span>
        </Link>
        {planningArticles.map((article) => <Link key={article.slug} href={`/${locale}/blog/${article.slug}`} className="group block rounded-3xl bg-white p-7 ring-1 ring-(--color-navy-800)/10 transition hover:-translate-y-0.5 hover:shadow-lg md:p-9">
          <p className="text-xs uppercase tracking-[0.16em] text-(--color-gold-600)">{bn ? "কুয়াকাটা ভ্রমণ গাইড" : "Kuakata travel guide"}</p>
          <h2 className="mt-3 font-display text-3xl text-(--color-navy-800) group-hover:text-(--color-gold-600)">{article.title}</h2>
          <p className="mt-4 leading-relaxed text-(--color-ink)/75">{article.description}</p>
          <span className="mt-6 inline-block text-sm font-medium text-(--color-navy-800) underline decoration-(--color-gold-500) underline-offset-4">{bn ? "গাইড পড়ুন →" : "Read the guide →"}</span>
        </Link>)}
        {experienceArticles.map((article) => <Link key={article.slug} href={`/${locale}/blog/${article.slug}`} className="group block rounded-3xl bg-white p-7 ring-1 ring-(--color-navy-800)/10 transition hover:-translate-y-0.5 hover:shadow-lg md:p-9">
          <p className="text-xs uppercase tracking-[0.16em] text-(--color-gold-600)">{bn ? "কুয়াকাটা ভ্রমণ গাইড" : "Kuakata travel guide"}</p>
          <h2 className="mt-3 font-display text-3xl text-(--color-navy-800) group-hover:text-(--color-gold-600)">{article.title}</h2>
          <p className="mt-4 leading-relaxed text-(--color-ink)/75">{article.description}</p>
          <span className="mt-6 inline-block text-sm font-medium text-(--color-navy-800) underline decoration-(--color-gold-500) underline-offset-4">{bn ? "গাইড পড়ুন →" : "Read the guide →"}</span>
        </Link>)}
        {practicalArticles.map((article) => <Link key={article.slug} href={`/${locale}/blog/${article.slug}`} className="group block rounded-3xl bg-white p-7 ring-1 ring-(--color-navy-800)/10 transition hover:-translate-y-0.5 hover:shadow-lg md:p-9">
          <p className="text-xs uppercase tracking-[0.16em] text-(--color-gold-600)">{bn ? "কুয়াকাটা ভ্রমণ গাইড" : "Kuakata travel guide"}</p>
          <h2 className="mt-3 font-display text-3xl text-(--color-navy-800) group-hover:text-(--color-gold-600)">{article.title}</h2>
          <p className="mt-4 leading-relaxed text-(--color-ink)/75">{article.description}</p>
          <span className="mt-6 inline-block text-sm font-medium text-(--color-navy-800) underline decoration-(--color-gold-500) underline-offset-4">{bn ? "গাইড পড়ুন →" : "Read the guide →"}</span>
        </Link>)}
        {accommodationArticles.map((article) => <Link key={article.slug} href={`/${locale}/blog/${article.slug}`} className="group block rounded-3xl bg-white p-7 ring-1 ring-(--color-navy-800)/10 transition hover:-translate-y-0.5 hover:shadow-lg md:p-9">
          <p className="text-xs uppercase tracking-[0.16em] text-(--color-gold-600)">{bn ? "কুয়াকাটা থাকার গাইড" : "Kuakata accommodation guide"}</p>
          <h2 className="mt-3 font-display text-3xl text-(--color-navy-800) group-hover:text-(--color-gold-600)">{article.title}</h2>
          <p className="mt-4 leading-relaxed text-(--color-ink)/75">{article.description}</p>
          <span className="mt-6 inline-block text-sm font-medium text-(--color-navy-800) underline decoration-(--color-gold-500) underline-offset-4">{bn ? "গাইড পড়ুন →" : "Read the guide →"}</span>
        </Link>)}
      </Container>
    </Section>
  );
}
