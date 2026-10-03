import Link from "next/link";
import { hotel } from "@/data/hotel";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/i18n/locales";

type Post = "itinerary" | "attractions";
const slugs = { itinerary: "kuakata-2-day-itinerary", attractions: "kuakata-attractions-and-beach-guide" } as const;

export function KuakataPlans({ locale, post }: { locale: Locale; post: Post }) {
  const bn = locale === "bn";
  const isItinerary = post === "itinerary";
  const title = bn
    ? isItinerary ? "কুয়াকাটায় ২ দিনের ভ্রমণ পরিকল্পনা" : "কুয়াকাটার দর্শনীয় স্থান ও সৈকত ভ্রমণ গাইড"
    : isItinerary ? "Kuakata 2-Day Itinerary: A Relaxed Two-Night Plan" : "Kuakata Attractions and Beach Guide";
  const description = bn
    ? isItinerary ? "দুই দিনে কুয়াকাটা সৈকত, সূর্যোদয়-সূর্যাস্ত ও কাছের দর্শনীয় স্থান ঘুরে দেখার নমনীয় পরিকল্পনা।" : "কুয়াকাটা সৈকত, ঝাউবন, গঙ্গামতি, ফাতরার চর ও রাখাইন ঐতিহ্য ঘোরার ব্যবহারিক নির্দেশনা।"
    : isItinerary ? "Plan two full days in Kuakata with two nights for the beach, sunrise and sunset, local food, and nearby sights." : "A practical guide to Kuakata Sea Beach, Jhau Forest, Gangamati, Fatrar Char, and local Rakhine heritage.";
  const url = `${hotel.website.replace(/\/$/, "")}/${locale}/blog/${slugs[post]}/`;
  return <article lang={bn ? "bn" : "en"}>
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
        <span aria-hidden="true" className="mx-2">/</span><span>{title}</span>
      </nav>
      <header className="border-b border-(--color-navy-800)/10 pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-(--color-gold-600)">{bn ? "কুয়াকাটা · ভ্রমণ পরিকল্পনা" : "Kuakata · Trip planning"}</p>
        <h1 className="mt-3 font-display text-4xl leading-tight text-(--color-navy-800) md:text-5xl">{title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-(--color-ink)/75">{description}</p>
        <p className="mt-4 text-xs text-(--color-ink)/55">{bn ? "তথ্য যাচাই: ৩ অক্টোবর ২০২৬" : "Information checked: October 3, 2026"}</p>
      </header>
      {isItinerary ? (bn ? <BengaliItinerary /> : <EnglishItinerary />) : (bn ? <BengaliAttractions /> : <EnglishAttractions />)}
      <section className="mt-12 rounded-2xl bg-(--color-navy-800) p-7 text-white md:p-9">
        <h2 className="font-display text-2xl">{bn ? "কুয়াকাটায় থাকার ব্যবস্থা করুন" : "Arrange your stay in Kuakata"}</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-white/75">{bn ? "পরিকল্পনার সুবিধার জন্য সৈকত থেকে অল্প হাঁটার দূরত্বে Hotel Silver Pearl-এ রুমের বিকল্প দেখুন।" : "For a convenient base, explore room options at Hotel Silver Pearl, a short walk from Kuakata Sea Beach."}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="rounded-full bg-(--color-gold-400) px-5 py-3 text-sm font-medium text-(--color-navy-900) hover:bg-(--color-gold-300)" href={`/${locale}/rooms`}>{bn ? "রুম ও ভাড়া দেখুন" : "View rooms & rates"}</Link>
          <Link className="rounded-full border border-white/30 px-5 py-3 text-sm text-white hover:bg-white/10" href={`/${locale}/location`}>{bn ? "অবস্থান ও যাতায়াত" : "Location & directions"}</Link>
        </div>
      </section>
      <aside className="mt-12 border-t border-(--color-navy-800)/10 pt-7">
        <h2 className="font-display text-xl text-(--color-navy-800)">{bn ? "তথ্যসূত্র" : "Sources"}</h2>
        <ul className="mt-4 grid gap-2 text-sm text-(--color-ink)/75 sm:grid-cols-2">
          <li><a className="underline decoration-(--color-gold-500) underline-offset-4" href="https://gis.beautifulbangladesh.gov.bd/spot/kuakata-sea-beach" target="_blank" rel="noreferrer noopener">Beautiful Bangladesh — Kuakata Sea Beach ↗</a></li>
          <li><a className="underline decoration-(--color-gold-500) underline-offset-4" href="https://beautifulbangladesh.gov.bd/district-destination/patuakhali/green-zone/151" target="_blank" rel="noreferrer noopener">Bangladesh Tourism Board — Jhau Forest ↗</a></li>
          <li><a className="underline decoration-(--color-gold-500) underline-offset-4" href="https://kuareg.touristpolice.gov.bd/site/page/58041724-f7e6-4439-a4d7-ac19c1eb60ad/" target="_blank" rel="noreferrer noopener">Kuakata Tourist Police — Gangamati Char ↗</a></li>
          <li><a className="underline decoration-(--color-gold-500) underline-offset-4" href="https://kuareg.touristpolice.gov.bd/site/page/628ebda2-424c-4963-abe4-ffd865abf535/-" target="_blank" rel="noreferrer noopener">Kuakata Tourist Police — Misripara Temple ↗</a></li>
          <li><a className="underline decoration-(--color-gold-500) underline-offset-4" href="https://beautifulbangladesh.gov.bd/cat/green-zone/144" target="_blank" rel="noreferrer noopener">Bangladesh Tourism Board — Fatrar Char ↗</a></li>
        </ul>
        <p className="mt-4 text-xs leading-relaxed text-(--color-ink)/55">{bn ? "আবহাওয়া, জোয়ার, নৌযান ও স্থানীয় যাতায়াত বদলাতে পারে। বের হওয়ার আগে স্থানীয়ভাবে অবস্থা ও নিরাপত্তা নির্দেশনা জেনে নিন।" : "Weather, tides, boats, and local transport can change. Check current conditions and safety guidance locally before setting out."}</p>
      </aside>
      <p className="mt-8 text-sm text-(--color-ink)/65">{bn ? "আরও তথ্যের জন্য " : "For more planning details, read the "}<Link className="underline decoration-(--color-gold-500) underline-offset-4" href={`/${locale}/blog/${slugs[isItinerary ? "attractions" : "itinerary"]}`}>{bn ? (isItinerary ? "দর্শনীয় স্থান ও সৈকত গাইড" : "২ দিনের ভ্রমণ পরিকল্পনা") : (isItinerary ? "Kuakata attractions and beach guide" : "full two-day Kuakata itinerary")}</Link>{isItinerary && <> {bn ? "অথবা স্বল্প সফরের " : " or use the "}<Link className="underline decoration-(--color-gold-500) underline-offset-4" href={`/${locale}/blog/kuakata-weekend-itinerary`}>{bn ? "২ দিন ১ রাতের উইকএন্ড পরিকল্পনা" : "Kuakata weekend itinerary for 2 days and 1 night"}</Link></>}. {bn ? "থাকার এলাকা বাছতে " : "To choose where to stay in Kuakata, see "}<Link className="underline decoration-(--color-gold-500) underline-offset-4" href={`/${locale}/blog/where-to-stay-in-kuakata-areas`}>{bn ? "এলাকা ও কাছের দর্শনীয় স্থানের গাইড" : "our area and nearby attractions guide"}</Link>.</p>
    </Container>
  </article>;
}

function EnglishItinerary() {
  return <div className="guide-prose mt-9 space-y-9 text-base leading-8 text-(--color-ink)/85">
    <section><h2>Before you go</h2><p>This two-day plan works best as two nights in Kuakata, so you can enjoy an evening and a full day without rushing. If you only have one night, choose either the eastern sights or a boat trip rather than trying to fit everything in. Travel times and access can shift with traffic, weather, and tides; confirm local transport and conditions on the day.</p></section>
    <section><h2>Day 1: Arrive, settle in, and watch sunset</h2><ul><li><strong>Afternoon:</strong> Check in, rest after the journey, and ask your hotel about current beach conditions and local transport.</li><li><strong>Late afternoon:</strong> Walk a convenient stretch of Kuakata Sea Beach. Leave time to find a comfortable spot before sunset; clouds can affect the view.</li><li><strong>Evening:</strong> Have dinner in town, try local fish if available, and agree the next morning’s departure time with your driver or guide.</li></ul></section>
    <section><h2>Day 2: Sunrise, coastal sights, and a flexible afternoon</h2><ul><li><strong>Early morning:</strong> Watch sunrise from the main beach or travel east toward Gangamati if conditions and transport allow. Check the sunrise time for your date.</li><li><strong>Breakfast:</strong> Return to your hotel and take a proper break.</li><li><strong>Late morning:</strong> Visit Jhau Forest for a shaded walk, then consider Misripara to learn about local Rakhine Buddhist heritage. Be respectful at religious sites and ask before taking photographs.</li><li><strong>Afternoon:</strong> Choose a locally arranged boat trip to Fatrar Char only if weather, tide, boat availability, and safety advice are suitable. Otherwise, enjoy a relaxed beach visit or browse local shops.</li><li><strong>Before leaving:</strong> Allow enough time to return, collect belongings, and reach your bus departure point.</li></ul><p>If you are leaving on day two, simplify the plan: sunrise, breakfast, and one nearby stop will make for a more comfortable morning.</p></section>
    <section><h2>Keep the plan comfortable</h2><p>Carry drinking water, sun protection, and some cash for local rides. Ask the fare before starting a trip, wear a life jacket on boats, and follow local warnings around the water. Children should stay with an adult near the shoreline. Skip a stop if weather or access is uncertain.</p></section>
  </div>;
}

function BengaliItinerary() {
  return <div className="guide-prose mt-9 space-y-9 text-base leading-8 text-(--color-ink)/85" lang="bn">
    <section><h2>যাওয়ার আগে</h2><p>দুই রাত থাকলে এই দুই দিনের পরিকল্পনায় তাড়াহুড়ো না করে একটি সন্ধ্যা ও পুরো দিন উপভোগ করা যায়। এক রাত থাকলে সবকিছু করার চেষ্টা না করে পূর্ব দিকের দর্শনীয় স্থান অথবা নৌভ্রমণ—একটি বেছে নিন। যানজট, আবহাওয়া ও জোয়ারের কারণে যাতায়াতের সময় ও প্রবেশপথ বদলাতে পারে; সেদিনের অবস্থা ও স্থানীয় যানবাহন নিশ্চিত করুন।</p></section>
    <section><h2>প্রথম দিন: পৌঁছানো, বিশ্রাম ও সূর্যাস্ত</h2><ul><li><strong>বিকেল:</strong> হোটেলে চেক-ইন করে যাত্রার পর বিশ্রাম নিন। সৈকতের অবস্থা ও স্থানীয় যাতায়াত সম্পর্কে জেনে নিন।</li><li><strong>বিকেলের শেষভাগ:</strong> কুয়াকাটা সমুদ্রসৈকতের সুবিধাজনক একটি অংশে হাঁটুন। সূর্যাস্তের আগে পছন্দের জায়গায় পৌঁছানোর সময় রাখুন; মেঘে দৃশ্য আড়াল হতে পারে।</li><li><strong>সন্ধ্যা:</strong> শহরে রাতের খাবার খান। পরদিন সকালে কখন ও কীভাবে বের হবেন, চালক বা গাইডের সঙ্গে ঠিক করুন।</li></ul></section>
    <section><h2>দ্বিতীয় দিন: সূর্যোদয়, উপকূল ও নমনীয় বিকেল</h2><ul><li><strong>ভোর:</strong> মূল সৈকত থেকে সূর্যোদয় দেখুন, অথবা অবস্থা ও যাতায়াত অনুকূলে থাকলে গঙ্গামতির দিকে যান। আপনার তারিখের সূর্যোদয়ের সময় জেনে নিন।</li><li><strong>নাশতা:</strong> হোটেলে ফিরে নাশতা করে কিছুক্ষণ বিশ্রাম নিন।</li><li><strong>বেলা:</strong> ছায়ায় হাঁটার জন্য ঝাউবন ঘুরুন। এরপর স্থানীয় রাখাইন বৌদ্ধ ঐতিহ্য জানতে মিশ্রিপাড়া যেতে পারেন। ধর্মীয় স্থানে সম্মানজনক আচরণ করুন এবং ছবি তোলার আগে অনুমতি নিন।</li><li><strong>বিকেল:</strong> আবহাওয়া, জোয়ার, নৌযানের প্রাপ্যতা ও নিরাপত্তা নির্দেশনা অনুকূলে থাকলেই স্থানীয়ভাবে ঠিক করা নৌভ্রমণে ফাতরার চর যান। তা না হলে সৈকতে সময় কাটান বা স্থানীয় দোকান ঘুরুন।</li><li><strong>ফেরার আগে:</strong> হোটেলে ফিরে জিনিসপত্র নেওয়া এবং বাসের ছাড়ার স্থানে পৌঁছানোর জন্য পর্যাপ্ত সময় রাখুন।</li></ul><p>দ্বিতীয় দিনেই ফিরতে হলে পরিকল্পনা ছোট করুন: সূর্যোদয়, নাশতা এবং কাছের একটি স্থান—এতেই সকালটা স্বচ্ছন্দ থাকবে।</p></section>
    <section><h2>ভ্রমণ স্বচ্ছন্দ রাখুন</h2><p>পানির বোতল, রোদ থেকে সুরক্ষার জিনিস এবং স্থানীয় যাতায়াতের জন্য কিছু নগদ টাকা রাখুন। রওনা হওয়ার আগে ভাড়া ঠিক করুন, নৌকায় লাইফ জ্যাকেট পরুন এবং পানির কাছে স্থানীয় সতর্কতা মেনে চলুন। শিশুদের সৈকতে বড়দের সঙ্গে রাখুন। আবহাওয়া বা প্রবেশপথ নিয়ে অনিশ্চয়তা থাকলে সেই স্থান বাদ দিন।</p></section>
  </div>;
}

function EnglishAttractions() {
  return <div className="guide-prose mt-9 space-y-9 text-base leading-8 text-(--color-ink)/85">
    <section><h2>Kuakata Sea Beach</h2><p>The broad Bay of Bengal shoreline is the main reason many visitors come to Kuakata. The beach is known for open sunrise and sunset views, but the exact view depends on cloud and weather. Pick a stretch that is easy to reach, check local conditions, and follow any safety notices. Do not assume every area or tide is suitable for swimming.</p></section>
    <section><h2>Jhau Forest</h2><p>The casuarina grove beside the coast offers shade and a change of pace from the open sand. Walk on established paths, avoid disturbing plants or wildlife, and take litter with you. It is an easy pairing with a beach visit, especially when the sun is strong.</p></section>
    <section><h2>Gangamati Char and the eastern coast</h2><p>Gangamati lies east of the main beach and is known for its coastal scenery and sunrise views. Local Tourist Police information places it about 10 kilometres from Kuakata beach. Arrange transport locally and ask about road or beach access before you leave; tide and weather may affect the route. Carry water and return before your transport becomes difficult to find.</p></section>
    <section><h2>Fatrar Char</h2><p>Fatrar Char, also known as Fatrar Bon, is a mangrove area reached by boat. Use a local operator, confirm the route and return time, and wear a life jacket. Boat trips depend on conditions and availability, so do not treat them as guaranteed. Stay within permitted areas and follow the operator’s safety instructions.</p></section>
    <section><h2>Misripara and Rakhine heritage</h2><p>Misripara is a Rakhine village with a Buddhist temple, around eight kilometres from the beach according to Kuakata Tourist Police. Visit with care: dress respectfully, ask permission before photographing people or religious spaces, and follow the temple caretakers’ guidance. Consider buying crafts or food from local businesses.</p></section>
    <section><h2>Make a simple route</h2><p>For a short visit, pair the main beach and Jhau Forest with one farther stop. Gangamati and Misripara are land-based outings; Fatrar Char needs a boat and more time. Confirm current access, transport, weather, and tide conditions before setting out, and leave room in your schedule to return safely.</p></section>
  </div>;
}

function BengaliAttractions() {
  return <div className="guide-prose mt-9 space-y-9 text-base leading-8 text-(--color-ink)/85" lang="bn">
    <section><h2>কুয়াকাটা সমুদ্রসৈকত</h2><p>বঙ্গোপসাগরের প্রশস্ত উপকূল কুয়াকাটায় আসার প্রধান আকর্ষণ। খোলা দিগন্তে সূর্যোদয় ও সূর্যাস্তের দৃশ্যের জন্য সৈকতটি পরিচিত, তবে মেঘ ও আবহাওয়ার কারণে দৃশ্য বদলাতে পারে। সহজে যাওয়া যায় এমন একটি অংশ বেছে নিন, স্থানীয় অবস্থা জেনে নিন এবং নিরাপত্তা নির্দেশনা মানুন। সব জায়গা বা জোয়ারের সময় সাঁতারের জন্য উপযুক্ত ধরে নেবেন না।</p></section>
    <section><h2>ঝাউবন</h2><p>উপকূলের পাশের ঝাউগাছের বনে ছায়ায় হাঁটা যায়, খোলা বালুর সৈকত থেকে পরিবেশও বদলে যায়। নির্ধারিত পথে হাঁটুন, গাছপালা ও বন্যপ্রাণী বিরক্ত করবেন না এবং নিজের ময়লা সঙ্গে নিয়ে ফিরুন। রোদ বেশি থাকলে সৈকত ভ্রমণের সঙ্গে এই স্থানটি ঘুরে নিতে পারেন।</p></section>
    <section><h2>গঙ্গামতি চর ও পূর্ব উপকূল</h2><p>গঙ্গামতি মূল সৈকতের পূর্ব দিকে এবং উপকূলীয় দৃশ্য ও সূর্যোদয়ের জন্য পরিচিত। স্থানীয় ট্যুরিস্ট পুলিশের তথ্যমতে, এটি কুয়াকাটা সৈকত থেকে প্রায় ১০ কিলোমিটার দূরে। স্থানীয়ভাবে যানবাহন ঠিক করুন এবং রওনা হওয়ার আগে রাস্তা বা সৈকতপথে যাতায়াত সম্ভব কি না জেনে নিন; জোয়ার ও আবহাওয়ায় পথের অবস্থা বদলাতে পারে। পানি সঙ্গে রাখুন এবং ফেরার যানবাহন পাওয়া কঠিন হওয়ার আগেই ফিরে আসুন।</p></section>
    <section><h2>ফাতরার চর</h2><p>ফাতরার চর বা ফাতরার বন নৌকায় যাওয়া যায় এমন একটি ম্যানগ্রোভ এলাকা। স্থানীয় অপারেটরের সঙ্গে ভ্রমণ ঠিক করুন, যাত্রাপথ ও ফেরার সময় নিশ্চিত করুন এবং লাইফ জ্যাকেট পরুন। আবহাওয়া ও নৌযানের প্রাপ্যতার ওপর ভ্রমণ নির্ভর করে, তাই এটি নিশ্চিত ধরে পরিকল্পনা করবেন না। অনুমোদিত এলাকার মধ্যে থাকুন এবং নিরাপত্তা নির্দেশনা অনুসরণ করুন।</p></section>
    <section><h2>মিশ্রিপাড়া ও রাখাইন ঐতিহ্য</h2><p>মিশ্রিপাড়া একটি রাখাইন গ্রাম; কুয়াকাটা ট্যুরিস্ট পুলিশের তথ্যমতে, সৈকত থেকে প্রায় আট কিলোমিটার দূরে এখানে একটি বৌদ্ধ মন্দির রয়েছে। সম্মানের সঙ্গে ঘুরুন: শালীন পোশাক পরুন, মানুষ বা ধর্মীয় স্থানের ছবি তোলার আগে অনুমতি নিন এবং মন্দিরের দায়িত্বপ্রাপ্তদের নির্দেশনা মানুন। স্থানীয় ব্যবসায়ীদের কাছ থেকে হস্তশিল্প বা খাবার কিনতে পারেন।</p></section>
    <section><h2>সহজ ভ্রমণপথ ঠিক করুন</h2><p>অল্প সময় থাকলে মূল সৈকত ও ঝাউবনের সঙ্গে দূরের একটি স্থান বেছে নিন। গঙ্গামতি ও মিশ্রিপাড়ায় সড়কপথে যাওয়া যায়; ফাতরার চর যেতে নৌকা ও বেশি সময় লাগে। বের হওয়ার আগে বর্তমান যাতায়াত, আবহাওয়া ও জোয়ারের অবস্থা নিশ্চিত করুন এবং নিরাপদে ফেরার জন্য সময় হাতে রাখুন।</p></section>
  </div>;
}
