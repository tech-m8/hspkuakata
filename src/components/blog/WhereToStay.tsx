import Link from "next/link";
import { hotel } from "@/data/hotel";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/i18n/locales";

export function WhereToStay({ locale }: { locale: Locale }) {
  const bn = locale === "bn";
  const title = bn ? "কুয়াকাটায় কোথায় থাকবেন: হোটেল বাছাইয়ের সহজ গাইড" : "Where to Stay in Kuakata: A Practical Guide to Choosing a Hotel";
  const description = bn
    ? "কুয়াকাটায় থাকার জায়গা বাছাইয়ের আগে সৈকতের দূরত্ব, রুম, খাবার, পার্কিং ও বুকিংয়ের শর্ত কীভাবে যাচাই করবেন জানুন।"
    : "Choose where to stay in Kuakata by comparing beach access, room needs, meals, parking, and booking terms before you reserve.";
  const url = `${hotel.website.replace(/\/$/, "")}/${locale}/blog/where-to-stay-in-kuakata/`;
  return (
    <article lang={bn ? "bn" : "en"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting", headline: title,
        description, inLanguage: bn ? "bn-BD" : "en", datePublished: "2026-10-03",
        dateModified: "2026-10-03", mainEntityOfPage: url,
        author: { "@type": "Organization", name: hotel.name },
        publisher: { "@id": `${hotel.website.replace(/\/$/, "")}/#hotel` },
      }) }} />
      <Container className="max-w-4xl py-12 md:py-16">
        <nav aria-label={bn ? "ব্রেডক্রাম্ব" : "Breadcrumb"} className="mb-8 text-sm text-(--color-ink)/60">
          <Link className="hover:text-(--color-navy-800)" href={`/${locale}/blog`}>{bn ? "ভ্রমণ ব্লগ" : "Blog"}</Link>
          <span aria-hidden="true" className="mx-2">/</span><span>{bn ? "কোথায় থাকবেন" : "Where to stay"}</span>
        </nav>
        <header className="border-b border-(--color-navy-800)/10 pb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-(--color-gold-600)">{bn ? "কুয়াকাটা · থাকার পরিকল্পনা" : "Kuakata · Stay planning"}</p>
          <h1 className="mt-3 font-display text-4xl leading-tight text-(--color-navy-800) md:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-(--color-ink)/75">{description}</p>
          <p className="mt-4 text-xs text-(--color-ink)/55">{bn ? "তথ্য যাচাই: ৩ অক্টোবর ২০২৬" : "Information checked: October 3, 2026"}</p>
        </header>
        {bn ? <BengaliContent /> : <EnglishContent />}
        <section className="mt-12 rounded-2xl bg-(--color-navy-800) p-7 text-white md:p-9">
          <h2 className="font-display text-2xl">{bn ? "Hotel Silver Pearl-এ থাকুন" : "Stay at Hotel Silver Pearl"}</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-white/75">{bn
            ? "কুয়াকাটা সমুদ্রসৈকত থেকে অল্প হাঁটার দূরত্বে Hotel Silver Pearl-এ শীতাতপ নিয়ন্ত্রিত রুম, বুফে নাশতা, ফ্রি ওয়াই-ফাই ও গাড়ি পার্কিং রয়েছে। তারিখ অনুযায়ী রুম ও বর্তমান ভাড়া জেনে নিন।"
            : "Hotel Silver Pearl is a short walk from Kuakata Sea Beach and offers air-conditioned rooms, buffet breakfast, free Wi-Fi, and car parking. Check room availability and current rates for your dates."}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="rounded-full bg-(--color-gold-400) px-5 py-3 text-sm font-medium text-(--color-navy-900) hover:bg-(--color-gold-300)" href={`/${locale}/rooms`}>{bn ? "রুম ও ভাড়া দেখুন" : "View rooms & rates"}</Link>
            <Link className="rounded-full border border-white/30 px-5 py-3 text-sm text-white hover:bg-white/10" href={`/${locale}/contact`}>{bn ? "যোগাযোগ করুন" : "Contact the hotel"}</Link>
          </div>
        </section>
        <p className="mt-8 text-sm text-(--color-ink)/65">{bn ? "আরও পরিকল্পনার জন্য " : "For more trip planning, read the "}<Link className="underline decoration-(--color-gold-500) underline-offset-4" href={`/${locale}/blog/kuakata-travel-guide`}>{bn ? "কুয়াকাটা ভ্রমণ গাইড" : "complete Kuakata travel guide"}</Link>.</p>
      </Container>
    </article>
  );
}

function EnglishContent() {
  return <div className="guide-prose mt-9 space-y-9 text-base leading-8 text-(--color-ink)/85">
    <section><h2>Start with the kind of trip you want</h2><p>Kuakata has accommodation options for different budgets and travel styles. Before comparing properties, decide what matters most: an easy walk to the beach, a quiet place to rest, meals on site, parking, or enough beds for everyone. A clear priority list makes it easier to compare the total value instead of choosing by a photo or a headline rate alone.</p></section>
    <section><h2>Choose a location that fits your plans</h2><p>If sunrise and sunset walks are central to your visit, look for a hotel with convenient access to the beach. Check the exact map pin and ask how long the walk takes from the entrance; “near the beach” can mean different things. If you plan to visit places such as Gangamati or Misripara, ask the hotel about arranging local transport and leave time for changing road, weather, and tide conditions.</p><p>Travelling by private car? Confirm whether parking is available and whether it is on the property. If you arrive by bus, ask how to get from your drop-off point to the hotel and confirm the fare before setting off.</p></section>
    <section><h2>Match the room to your group</h2><p>Check the stated maximum occupancy, bed arrangement, and whether children count toward that limit. Couples may prefer a simple double room; families or small groups may need extra beds or a larger room. Confirm any extra-person charge and whether the room shown online is the one you will receive.</p><p>Also check practical details you will use: air conditioning, private bathroom, Wi-Fi, a kettle, balcony, or a view. Availability can vary by room type, so ask before booking if a specific feature is important.</p></section>
    <section><h2>Compare the full price and what is included</h2><p>Ask for the total price for your dates and number of guests, including taxes, service charges, and any extra bed. Confirm whether breakfast is included, what time it is served, and whether other meals are available. Do not assume a displayed starting rate applies to weekends, public holidays, or every room category.</p></section>
    <section><h2>Book with clear terms</h2><p>Before paying, confirm check-in and check-out times, deposit and payment methods, cancellation or date-change terms, and the hotel’s contact number. Keep your booking confirmation. Around public holidays and busy weekends, reserve early and reconfirm the booking and arrival details shortly before travelling.</p><p>For a balanced stay near the beach, <strong>Hotel Silver Pearl</strong> offers air-conditioned rooms, buffet breakfast, free Wi-Fi, and car parking. Review the room options and ask the hotel to confirm current availability, total price, and details for your dates.</p></section>
  </div>;
}

function BengaliContent() {
  return <div className="guide-prose mt-9 space-y-9 text-base leading-8 text-(--color-ink)/85">
    <section><h2>আপনার ভ্রমণের ধরন অনুযায়ী বাছুন</h2><p>কুয়াকাটায় বিভিন্ন বাজেট ও ভ্রমণ পরিকল্পনার জন্য থাকার জায়গা আছে। তুলনা শুরুর আগে ঠিক করুন কোন বিষয়টি আপনার কাছে বেশি জরুরি: সৈকতে সহজে যাওয়া, নিরিবিলি পরিবেশ, হোটেলে খাবার, গাড়ি পার্কিং, নাকি সবার জন্য পর্যাপ্ত বিছানা। শুধু ছবি বা শুরুর দাম দেখে সিদ্ধান্ত না নিয়ে নিজের প্রয়োজন অনুযায়ী মোট সুবিধা বিবেচনা করুন।</p></section>
    <section><h2>আপনার পরিকল্পনার সঙ্গে মানানসই অবস্থান নিন</h2><p>সূর্যোদয় ও সূর্যাস্ত দেখতে সৈকতে হাঁটতে চাইলে সহজে যাওয়া যায় এমন হোটেল দেখুন। মানচিত্রে সঠিক অবস্থান মিলিয়ে নিন এবং হোটেলের প্রবেশপথ থেকে সৈকতে হাঁটতে কত সময় লাগে জেনে নিন—“সৈকতের কাছে” কথাটির অর্থ একেক জায়গায় একেক রকম হতে পারে। গঙ্গামতি বা মিশ্রিপাড়া যাওয়ার পরিকল্পনা থাকলে স্থানীয় যাতায়াতের ব্যবস্থা সম্পর্কে জিজ্ঞেস করুন; রাস্তা, আবহাওয়া ও জোয়ারের অবস্থা অনুযায়ী সময় হাতে রাখুন।</p><p>নিজস্ব গাড়িতে গেলে পার্কিং আছে কি না এবং সেটি হোটেল প্রাঙ্গণে কি না নিশ্চিত করুন। বাসে এলে নামার স্থান থেকে হোটেলে যাওয়ার উপায় জেনে নিন এবং যাত্রা শুরুর আগে ভাড়া ঠিক করুন।</p></section>
    <section><h2>দলের সঙ্গে মিলিয়ে রুম বাছুন</h2><p>রুমে সর্বোচ্চ কতজন থাকতে পারবেন, বিছানার বিন্যাস কী এবং শিশুদের ওই সংখ্যায় ধরা হয় কি না যাচাই করুন। দম্পতির জন্য সাধারণ ডাবল রুম যথেষ্ট হতে পারে; পরিবার বা ছোট দলের বড় রুম কিংবা অতিরিক্ত বিছানা লাগতে পারে। অতিরিক্ত অতিথির চার্জ এবং অনলাইনে দেখানো রুমটিই পাবেন কি না জেনে নিন।</p><p>শীতাতপ নিয়ন্ত্রণ, নিজস্ব বাথরুম, ওয়াই-ফাই, কেটলি, বারান্দা বা দৃশ্য—আপনার কাজে লাগবে এমন সুবিধাগুলোও নিশ্চিত করুন। রুমের ধরন অনুযায়ী সুবিধা ও প্রাপ্যতা বদলাতে পারে।</p></section>
    <section><h2>মোট খরচ ও অন্তর্ভুক্ত সুবিধা বুঝে নিন</h2><p>আপনার তারিখ ও অতিথি সংখ্যার জন্য কর, সার্ভিস চার্জ এবং অতিরিক্ত বিছানাসহ মোট দাম জেনে নিন। নাশতা অন্তর্ভুক্ত কি না, কখন পরিবেশন করা হয় এবং অন্য খাবারের ব্যবস্থা আছে কি না জিজ্ঞেস করুন। অনলাইনে দেখানো সর্বনিম্ন দাম ছুটির দিন, সাপ্তাহিক ছুটি বা সব ধরনের রুমের ক্ষেত্রে প্রযোজ্য ধরে নেবেন না।</p></section>
    <section><h2>শর্ত জেনে বুকিং নিশ্চিত করুন</h2><p>টাকা দেওয়ার আগে চেক-ইন ও চেক-আউটের সময়, অগ্রিম ও পরিশোধের পদ্ধতি, বাতিল বা তারিখ পরিবর্তনের নিয়ম এবং হোটেলের যোগাযোগ নম্বর নিশ্চিত করুন। বুকিংয়ের প্রমাণ সংরক্ষণ করুন। সরকারি ছুটি ও ব্যস্ত সপ্তাহান্তে আগে বুক করুন এবং যাত্রার কাছাকাছি সময়ে বুকিং ও পৌঁছানোর তথ্য আবার মিলিয়ে নিন।</p><p>সৈকতের কাছে সুবিধাজনক থাকার জন্য <strong>Hotel Silver Pearl</strong>-এ শীতাতপ নিয়ন্ত্রিত রুম, বুফে নাশতা, ফ্রি ওয়াই-ফাই এবং গাড়ি পার্কিং রয়েছে। রুমের বিকল্প দেখুন এবং আপনার তারিখের বর্তমান প্রাপ্যতা ও মোট দাম হোটেলের সঙ্গে নিশ্চিত করুন।</p></section>
  </div>;
}
