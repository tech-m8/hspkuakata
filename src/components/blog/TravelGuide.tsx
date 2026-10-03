import Link from "next/link";
import { hotel } from "@/data/hotel";
import type { Locale } from "@/i18n/locales";
import { Container } from "@/components/ui/Container";

const sources = [
  {
    href: "https://beautifulbangladesh.gov.bd/district-destination/patuakhali/sea-beaches/20",
    label: "Bangladesh Tourism Board — Kuakata",
  },
  {
    href: "https://gis.beautifulbangladesh.gov.bd/spot/kuakata-sea-beach",
    label: "Beautiful Bangladesh — Kuakata Sea Beach",
  },
  {
    href: "https://beautifulbangladesh.gov.bd/cat/green-zone/144",
    label: "Beautiful Bangladesh — Fatrar Char",
  },
  {
    href: "https://kuareg.touristpolice.gov.bd/site/page/58041724-f7e6-4439-a4d7-ac19c1eb60ad/",
    label: "Kuakata Tourist Police — Gangamati Char",
  },
  {
    href: "https://kuareg.touristpolice.gov.bd/site/page/628ebda2-424c-4963-abe4-ffd865abf535/-",
    label: "Kuakata Tourist Police — Misripara Buddhist Temple",
  },
  {
    href: "https://www.tourismbangladesh.com.bd/destinations/kuakata",
    label: "Tourism Bangladesh — Kuakata planning information",
  },
];

export function TravelGuide({ locale }: { locale: Locale }) {
  const bn = locale === "bn";
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: bn
      ? "কুয়াকাটা ভ্রমণ গাইড: সৈকত, দর্শনীয় স্থান ও থাকার পরিকল্পনা"
      : "Complete Kuakata Travel Guide: Beach, Attractions & Where to Stay",
    description: bn
      ? "কুয়াকাটা ভ্রমণের পরিকল্পনা করুন—সৈকত, কাছের দর্শনীয় স্থান, যাতায়াত ও থাকার জায়গা নিয়ে ব্যবহারিক তথ্য।"
      : "Plan a Kuakata trip with practical information on the beach, nearby attractions, transport, and where to stay.",
    inLanguage: bn ? "bn-BD" : "en",
    datePublished: "2026-10-03",
    dateModified: "2026-10-03",
    mainEntityOfPage: `${hotel.website.replace(/\/$/, "")}/${locale}/blog/kuakata-travel-guide/`,
    author: { "@type": "Organization", name: hotel.name },
    publisher: { "@id": `${hotel.website.replace(/\/$/, "")}/#hotel` },
  };
  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Container className="max-w-4xl py-12 md:py-16">
        <nav aria-label={bn ? "ব্রেডক্রাম্ব" : "Breadcrumb"} className="mb-8 text-sm text-(--color-ink)/60">
          <Link className="hover:text-(--color-navy-800)" href={`/${locale}/blog`}>{bn ? "ভ্রমণ ব্লগ" : "Blog"}</Link>
          <span aria-hidden="true" className="mx-2">/</span>
          <span>{bn ? "কুয়াকাটা ভ্রমণ গাইড" : "Kuakata travel guide"}</span>
        </nav>

        <header className="border-b border-(--color-navy-800)/10 pb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-(--color-gold-600)">{bn ? "কুয়াকাটা · ভ্রমণ পরিকল্পনা" : "Kuakata · Trip planning"}</p>
          <h1 className="mt-3 font-display text-4xl leading-tight text-(--color-navy-800) md:text-5xl">
            {bn ? "কুয়াকাটা ভ্রমণ গাইড: সৈকত, দর্শনীয় স্থান ও থাকার পরিকল্পনা" : "Complete Kuakata Travel Guide: Beach, Attractions & Where to Stay"}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-(--color-ink)/75">
            {bn
              ? "কুয়াকাটার সমুদ্রসৈকত, আশপাশের দর্শনীয় স্থান, যাতায়াত এবং থাকার জায়গা নিয়ে পরিকল্পনা করুন—যাতে বঙ্গোপসাগরের ধারে আপনার সময়টা সহজ ও স্বচ্ছন্দ হয়।"
              : "Plan your Kuakata beach trip with practical notes on what to see, how to get there, when to visit, and where to stay near the Bay of Bengal."}
          </p>
          <p className="mt-4 text-xs text-(--color-ink)/55">{bn ? "তথ্য যাচাই: ৩ অক্টোবর ২০২৬" : "Information checked: October 3, 2026"}</p>
        </header>

        {bn ? <BengaliGuide /> : <EnglishGuide />}

        <section className="mt-12 rounded-2xl bg-(--color-navy-800) p-7 text-white md:p-9">
          <h2 className="font-display text-2xl">{bn ? "কুয়াকাটায় থাকার জায়গা খুঁজছেন?" : "Looking for a place to stay in Kuakata?"}</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-white/75">
            {bn
              ? "Hotel Silver Pearl-এ বুফে নাশতা, ফ্রি ওয়াই-ফাই ও গাড়ি পার্কিংসহ রুমের তথ্য দেখুন। অবস্থান ও যাতায়াতের নির্দেশনাও আগে থেকে মিলিয়ে নিন।"
              : "Explore rooms at Hotel Silver Pearl, with buffet breakfast, free Wi-Fi, and car parking. Check the location and directions before you travel."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="rounded-full bg-(--color-gold-400) px-5 py-3 text-sm font-medium text-(--color-navy-900) hover:bg-(--color-gold-300)" href={`/${locale}/rooms`}>
              {bn ? "রুম ও ভাড়া দেখুন" : "View rooms & rates"}
            </Link>
            <Link className="rounded-full border border-white/30 px-5 py-3 text-sm text-white hover:bg-white/10" href={`/${locale}/location`}>
              {bn ? "অবস্থান ও যাতায়াত" : "Location & directions"}
            </Link>
          </div>
        </section>

        <aside className="mt-12 border-t border-(--color-navy-800)/10 pt-7">
          <h2 className="font-display text-xl text-(--color-navy-800)">{bn ? "তথ্যসূত্র" : "Sources"}</h2>
          <ul className="mt-4 grid gap-2 text-sm text-(--color-ink)/75 sm:grid-cols-2">
            {sources.map((source) => (
              <li key={source.href}>
                <a className="underline decoration-(--color-gold-500) underline-offset-4 hover:text-(--color-navy-800)" href={source.href} target="_blank" rel="noreferrer noopener">
                  {source.label} ↗
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-(--color-ink)/55">
            {bn
              ? "যাত্রার সময়, পরিবহন সূচি, আবহাওয়া, জোয়ার এবং স্থানীয় প্রবেশের নিয়ম বদলাতে পারে। রওনা হওয়ার আগে পরিবহন সংস্থা ও স্থানীয় কর্তৃপক্ষের কাছ থেকে হালনাগাদ তথ্য যাচাই করুন।"
              : "Travel times, transport schedules, weather, tides, and local access rules can change. Confirm current details with transport operators and local authorities before setting out."}
          </p>
        </aside>
      </Container>
    </article>
  );
}

function EnglishGuide() {
  return (
    <div className="guide-prose mt-9 space-y-9 text-base leading-8 text-(--color-ink)/85">
      <section>
        <h2>Why visit Kuakata?</h2>
        <p>Kuakata is a coastal town in Kalapara, Patuakhali, on the southern coast of Bangladesh. Its broad Bay of Bengal beach is known for open views of both sunrise and sunset from the same stretch of coast. The Bangladesh Tourism Board describes the beach as about 18 kilometres long; visitors usually choose a particular point along it rather than trying to cover the whole shoreline.</p>
        <p>Kuakata is more than a beach stop. The coast, nearby chars and tree cover, local markets, and Rakhine Buddhist heritage give a short visit a mix of sea views and local culture. Take time to travel respectfully: temples are places of worship, and villages are people’s homes.</p>
      </section>
      <section>
        <h2>Best time to visit Kuakata</h2>
        <p>For a better chance of dry weather and clear skies, plan for the cooler, drier part of the year, roughly October to March. December to February is a popular window for beach walks and sunrise or sunset viewing. Conditions still vary, so check the forecast before travelling. The monsoon months bring more rain and can make coastal excursions less predictable; avoid planning boat trips without confirming local conditions.</p>
        <p>Weekends and public holidays can be busier. If you want more choice of rooms and a quieter beach, consider a weekday and book transport and accommodation ahead of holiday periods.</p>
      </section>
      <section>
        <h2>How to get to Kuakata from Dhaka</h2>
        <p><strong>By bus:</strong> Direct buses connect Dhaka with Kuakata, generally travelling south via the Padma Bridge, Bhanga, Barishal, and Patuakhali. The exact route, departure terminal, journey time, and ticket availability depend on the operator and date. Confirm these details with the bus company before booking and allow extra time for traffic and stops.</p>
        <p><strong>By private car:</strong> The road route also crosses the Padma Bridge and continues through Barishal and Patuakhali toward Kuakata. Check current road conditions, bridge tolls, and fuel stops. If you are unfamiliar with the route, avoid relying on an old map or a fixed online journey estimate.</p>
        <p><strong>By launch and road:</strong> Some travellers take a river launch from Dhaka to the Barishal area and continue to Kuakata by road. This involves a separate onward journey, so check current launch ports, sailing days, and bus connections before choosing this option. For current hotel directions and map location, see our <Link href="/en/location">Kuakata location guide</Link>.</p>
      </section>
      <section>
        <h2>Things to see and do</h2>
        <h3>Walk the main beach</h3>
        <p>Make time for both the morning and evening light. Sunrise and sunset times shift through the year, so check the date-specific time locally. The beach can be breezy, and tide conditions change; follow any local safety instructions and do not assume every stretch is safe for swimming.</p>
        <h3>Visit Jhaubon</h3>
        <p>Jhaubon, the casuarina grove beside the beach, is a leafy place for a shaded walk and a popular spot to watch the early light. Keep to paths and take litter back with you.</p>
        <h3>Explore Gangamati Char</h3>
        <p>Gangamati lies east of the main beach and is known for its coastal landscape, waterways, and sunrise views. Kuakata Tourist Police describes it as around 10 kilometres from the beach and notes that visitors may explore parts of the area by local boat. Access and routes can depend on tide and weather, so arrange transport locally and follow safety advice.</p>
        <h3>Take a boat trip to Fatrar Char</h3>
        <p>Fatrar Char (also called Fatrar Bon) is a mangrove area reached by boat. The national tourism portal describes boat access through waterways and forest scenery. Arrange a trip with a local operator, confirm the return plan, wear a life jacket, and do not enter restricted or unsafe areas.</p>
        <h3>Learn about Rakhine heritage</h3>
        <p>Misripara is a Rakhine village with a Buddhist temple, roughly eight kilometres from Kuakata beach according to the local Tourist Police. Visit respectfully: dress modestly, ask before taking photographs of people or religious spaces, and follow any instructions from temple caretakers. Local craft and food businesses can also offer a chance to support the community directly.</p>
        <h3>Try local food</h3>
        <p>Look for fresh fish and seafood, as well as regional snacks and seasonal dried fish. Ask about the day’s catch, preparation, and prices before ordering, especially at small stalls and busy holiday times.</p>
      </section>
      <section>
        <h2>A simple 2-day Kuakata itinerary</h2>
        <h3>Day 1: Arrive and settle in</h3>
        <ul>
          <li>Arrive, check in, and take a break after the journey.</li>
          <li>Walk the main beach in the late afternoon and watch sunset.</li>
          <li>Have dinner nearby and confirm the next day’s local transport.</li>
        </ul>
        <h3>Day 2: Sunrise and nearby sights</h3>
        <ul>
          <li>Start early for sunrise at the beach or Gangamati, depending on conditions.</li>
          <li>Return for breakfast, then visit Jhaubon and the Rakhine heritage area around Misripara.</li>
          <li>If weather, tides, and time allow, arrange a boat trip to Fatrar Char; otherwise enjoy a relaxed beach afternoon.</li>
          <li>Leave enough time for your return journey and confirm your transport departure point.</li>
        </ul>
        <p>This is a flexible outline, not a promise that every attraction will be accessible on every day. Ask locally about the tide, weather, road access, and boat availability.</p>
      </section>
      <section>
        <h2>Where to stay in Kuakata</h2>
        <p>Choose accommodation based on the parts of the trip that matter most to you: beach access, meal options, parking, room configuration, and how you will reach local attractions. Before booking, confirm the exact location, current total price, included services, check-in time, and cancellation terms directly with the hotel.</p>
        <p>Hotel Silver Pearl is in Kuakata, Patuakhali, a short walk from Kuakata Sea Beach. It offers air-conditioned rooms, buffet breakfast, free Wi-Fi, and free car parking. Compare room options on our <Link href="/en/rooms">rooms and rates page</Link>, or <Link href="/en/contact">contact the hotel</Link> to check availability for your dates. “Near the beach” can mean different things, so use the map and ask about the walking route if that matters to your stay.</p>
      </section>
      <section>
        <h2>Practical tips for your trip</h2>
        <ul>
          <li>Carry sun protection, drinking water, and any personal medication you need.</li>
          <li>Bring some cash for local transport and smaller shops; ask fares before you start a ride.</li>
          <li>Check weather, tide conditions, and local beach or boat safety notices each day.</li>
          <li>Keep a light layer for a breezy evening and comfortable footwear for sandy or uneven ground.</li>
          <li>Be considerate around wildlife and local communities; use bins where available and leave natural areas as you found them.</li>
          <li>During holidays, reserve your room and transport early and reconfirm departure details close to travel day.</li>
        </ul>
      </section>
      <section>
        <h2>Frequently asked questions</h2>
        <h3>How many days do you need in Kuakata?</h3>
        <p>Two days and one night is enough for the main beach and a few nearby sights if you plan ahead. Add another night for a slower pace or more time for boat excursions and local visits.</p>
        <h3>Can you see sunrise and sunset in Kuakata?</h3>
        <p>Yes. The beach’s broad, open coastal aspect is known for views of both over the Bay of Bengal. Exact visibility depends on cloud and weather conditions.</p>
        <h3>Is Kuakata suitable for a family trip?</h3>
        <p>It can suit families who enjoy a beach holiday, but plan around travel time, weather, tides, and children’s needs. Keep children close to adults near the water and follow local safety guidance.</p>
        <h3>Is swimming safe everywhere on the beach?</h3>
        <p>No beach should be assumed safe everywhere or at every tide. Ask local authorities or lifeguards about conditions and obey warnings; choose not to swim if conditions are unclear.</p>
      </section>
    </div>
  );
}

function BengaliGuide() {
  return (
    <div className="guide-prose mt-9 space-y-9 text-base leading-8 text-(--color-ink)/85" lang="bn">
      <section>
        <h2>কেন কুয়াকাটা ঘুরতে যাবেন?</h2>
        <p>কুয়াকাটা বাংলাদেশের দক্ষিণ উপকূলে পটুয়াখালীর কলাপাড়া উপজেলার একটি সমুদ্রতীরবর্তী শহর। এখানকার প্রশস্ত বঙ্গোপসাগর সৈকত থেকে একই উপকূলের বিভিন্ন স্থান থেকে সূর্যোদয় ও সূর্যাস্ত দেখা যায়। বাংলাদেশ ট্যুরিজম বোর্ড সৈকতটির দৈর্ঘ্য প্রায় ১৮ কিলোমিটার বলে উল্লেখ করেছে; পুরো সৈকত ঘোরার বদলে আপনার পছন্দের কয়েকটি স্থান বেছে নিন।</p>
        <p>কুয়াকাটা শুধু সৈকত নয়। উপকূল, চর ও গাছপালা, স্থানীয় বাজার এবং রাখাইন বৌদ্ধ ঐতিহ্য—সব মিলিয়ে এখানে সমুদ্র ও স্থানীয় সংস্কৃতি দুটোই দেখা যায়। মন্দির উপাসনার স্থান এবং গ্রাম মানুষের বাড়িঘর—সম্মানজনক আচরণ করুন।</p>
      </section>
      <section>
        <h2>কুয়াকাটা বেড়ানোর ভালো সময়</h2>
        <p>শুষ্ক আবহাওয়া ও পরিষ্কার আকাশের সম্ভাবনা বেশি থাকে বছরের অপেক্ষাকৃত শীতল ও শুষ্ক সময়ে—মোটামুটি অক্টোবর থেকে মার্চ। ডিসেম্বর থেকে ফেব্রুয়ারি সৈকতে হাঁটা এবং সূর্যোদয়-সূর্যাস্ত দেখার জনপ্রিয় সময়। আবহাওয়া প্রতিদিন বদলাতে পারে, তাই যাত্রার আগে পূর্বাভাস দেখুন। বর্ষাকালে বৃষ্টি বেশি হয় এবং উপকূলীয় ভ্রমণ অনিশ্চিত হতে পারে; স্থানীয় অবস্থা নিশ্চিত না করে নৌভ্রমণের পরিকল্পনা করবেন না।</p>
        <p>সাপ্তাহিক ছুটি ও সরকারি ছুটিতে পর্যটকের চাপ বাড়তে পারে। তুলনামূলক শান্ত পরিবেশ ও রুমের বেশি বিকল্প চাইলে কর্মদিবসে যাওয়া এবং ছুটির সময়ের জন্য আগে থেকে পরিবহন ও থাকার জায়গা বুক করা ভালো।</p>
      </section>
      <section>
        <h2>ঢাকা থেকে কুয়াকাটা যাবেন কীভাবে</h2>
        <p><strong>বাসে:</strong> ঢাকা থেকে সরাসরি বাস কুয়াকাটায় যায়। সাধারণত পদ্মা সেতু, ভাঙ্গা, বরিশাল ও পটুয়াখালী হয়ে দক্ষিণমুখী সড়কপথে যেতে হয়। অপারেটর ও যাত্রার তারিখ অনুযায়ী রুট, ছাড়ার টার্মিনাল, সময় এবং টিকিটের প্রাপ্যতা বদলায়। টিকিটের আগে বাস কোম্পানির সঙ্গে তথ্য নিশ্চিত করুন এবং যানজট ও বিরতির জন্য অতিরিক্ত সময় রাখুন।</p>
        <p><strong>নিজস্ব গাড়িতে:</strong> পদ্মা সেতু পেরিয়ে বরিশাল ও পটুয়াখালীর দিক দিয়ে কুয়াকাটার সড়কপথে যাওয়া যায়। বর্তমান রাস্তার অবস্থা, সেতুর টোল ও জ্বালানি নেওয়ার জায়গা জেনে নিন। রুট অপরিচিত হলে পুরোনো মানচিত্র বা অনলাইনে দেখানো নির্দিষ্ট সময়ের ওপর পুরোপুরি নির্ভর করবেন না।</p>
        <p><strong>লঞ্চ ও সড়কপথে:</strong> কেউ কেউ ঢাকা থেকে নদীপথে বরিশাল অঞ্চলে এসে সড়কপথে কুয়াকাটা যান। এরপর আলাদা যাত্রা করতে হয়, তাই এই পথ বেছে নেওয়ার আগে বর্তমান লঞ্চঘাট, চলাচলের দিন ও বাস-সংযোগ যাচাই করুন। হোটেলের অবস্থান ও মানচিত্র দেখতে আমাদের <Link href="/bn/location">কুয়াকাটা অবস্থান গাইড</Link> দেখুন।</p>
      </section>
      <section>
        <h2>কী দেখবেন ও কী করবেন</h2>
        <h3>মূল সৈকতে হাঁটুন</h3>
        <p>সকাল ও সন্ধ্যার আলো—দুটোর জন্যই সময় রাখুন। সূর্যোদয় ও সূর্যাস্তের সময় বছরের সঙ্গে বদলায়, তাই সেদিনের সময় স্থানীয়ভাবে জেনে নিন। সৈকতে বাতাস থাকতে পারে এবং জোয়ার-ভাটার অবস্থা বদলায়; স্থানীয় নিরাপত্তা নির্দেশনা মানুন এবং সব জায়গাকে সাঁতারের জন্য নিরাপদ ধরে নেবেন না।</p>
        <h3>ঝাউবন ঘুরে দেখুন</h3>
        <p>সৈকতের পাশের ঝাউবনে ছায়ায় হাঁটা যায় এবং ভোরের আলো দেখার জন্য এটি জনপ্রিয় স্থান। নির্দিষ্ট পথ ব্যবহার করুন এবং নিজের ময়লা সঙ্গে করে নিয়ে যান।</p>
        <h3>গঙ্গামতি চর ঘুরুন</h3>
        <p>গঙ্গামতি মূল সৈকতের পূর্ব দিকে; উপকূলের দৃশ্য, জলপথ ও সূর্যোদয়ের জন্য পরিচিত। কুয়াকাটা ট্যুরিস্ট পুলিশ বলছে, এটি সৈকত থেকে প্রায় ১০ কিলোমিটার দূরে এবং স্থানীয় নৌকায় এলাকার কিছু অংশ ঘোরা যায়। জোয়ার ও আবহাওয়ার কারণে যাতায়াতের পথ বদলাতে পারে, তাই স্থানীয়ভাবে যানবাহনের ব্যবস্থা করুন এবং নিরাপত্তা নির্দেশনা মানুন।</p>
        <h3>নৌকায় ফাতরার চর যান</h3>
        <p>ফাতরার চর (ফাতরার বন নামেও পরিচিত) নৌকায় যাওয়া যায় এমন একটি ম্যানগ্রোভ এলাকা। জাতীয় পর্যটন পোর্টাল জলপথ ও বনের দৃশ্যের মধ্য দিয়ে নৌকায় যাওয়ার কথা জানায়। স্থানীয় অপারেটরের সঙ্গে ভ্রমণ ঠিক করুন, ফেরার ব্যবস্থা নিশ্চিত করুন, লাইফ জ্যাকেট পরুন এবং নিষিদ্ধ বা ঝুঁকিপূর্ণ এলাকায় যাবেন না।</p>
        <h3>রাখাইন ঐতিহ্য সম্পর্কে জানুন</h3>
        <p>মিশ্রিপাড়া একটি রাখাইন গ্রাম; স্থানীয় ট্যুরিস্ট পুলিশের তথ্যমতে সেখানে একটি বৌদ্ধ মন্দির রয়েছে, যা কুয়াকাটা সৈকত থেকে প্রায় আট কিলোমিটার দূরে। সম্মানের সঙ্গে ঘুরুন: শালীন পোশাক পরুন, মানুষ বা ধর্মীয় স্থানের ছবি তোলার আগে অনুমতি নিন এবং মন্দিরের দায়িত্বপ্রাপ্তদের নির্দেশনা অনুসরণ করুন। স্থানীয় হস্তশিল্প ও খাবার কিনলে সরাসরি স্থানীয় ব্যবসায়ীদের সহায়তা করা যায়।</p>
        <h3>স্থানীয় খাবার চেখে দেখুন</h3>
        <p>তাজা মাছ ও সামুদ্রিক খাবারের পাশাপাশি আঞ্চলিক নাশতা এবং মৌসুমি শুঁটকি খুঁজে দেখতে পারেন। বিশেষ করে ছোট দোকান ও ছুটির ভিড়ের সময় অর্ডারের আগে দিনের মাছ, রান্নার ধরন এবং দাম জেনে নিন।</p>
      </section>
      <section>
        <h2>কুয়াকাটায় ২ দিনের সহজ ভ্রমণ পরিকল্পনা</h2>
        <h3>প্রথম দিন: পৌঁছানো ও বিশ্রাম</h3>
        <ul>
          <li>পৌঁছে হোটেলে চেক-ইন করুন এবং যাত্রার পর বিশ্রাম নিন।</li>
          <li>বিকেলের শেষভাগে মূল সৈকতে হাঁটুন ও সূর্যাস্ত দেখুন।</li>
          <li>কাছাকাছি রাতের খাবার খান এবং পরদিনের স্থানীয় যাতায়াত ঠিক করুন।</li>
        </ul>
        <h3>দ্বিতীয় দিন: সূর্যোদয় ও কাছের দর্শনীয় স্থান</h3>
        <ul>
          <li>ভোরে আবহাওয়া ও পরিস্থিতি অনুযায়ী সৈকত বা গঙ্গামতিতে সূর্যোদয় দেখুন।</li>
          <li>নাশতার পর ঝাউবন ও মিশ্রিপাড়ার রাখাইন ঐতিহ্য এলাকা ঘুরে দেখুন।</li>
          <li>আবহাওয়া, জোয়ার ও সময় অনুকূলে থাকলে ফাতরার চরে নৌভ্রমণ করুন; তা না হলে সৈকতে অবসর সময় কাটান।</li>
          <li>ফেরার যাত্রার জন্য যথেষ্ট সময় রাখুন এবং বাসের ছাড়ার স্থান নিশ্চিত করুন।</li>
        </ul>
        <p>এটি একটি নমনীয় পরিকল্পনা; প্রতিদিন সব দর্শনীয় স্থানে যাওয়া সম্ভব হবে এমন নিশ্চয়তা নেই। জোয়ার, আবহাওয়া, সড়কপথ ও নৌকার প্রাপ্যতা স্থানীয়ভাবে জেনে নিন।</p>
      </section>
      <section>
        <h2>কুয়াকাটায় কোথায় থাকবেন</h2>
        <p>আপনার ভ্রমণে কোন বিষয়গুলো জরুরি—সৈকতে যাওয়ার সুবিধা, খাবারের ব্যবস্থা, গাড়ি পার্কিং, রুমের ধরন, নাকি দর্শনীয় স্থানে যাওয়া—সেগুলো ভেবে হোটেল বেছে নিন। বুকিংয়ের আগে সঠিক অবস্থান, বর্তমান মোট ভাড়া, অন্তর্ভুক্ত সুবিধা, চেক-ইনের সময় ও বাতিলের নিয়ম সরাসরি হোটেলের সঙ্গে নিশ্চিত করুন।</p>
        <p>Hotel Silver Pearl পটুয়াখালীর কুয়াকাটায়, কুয়াকাটা সমুদ্রসৈকত থেকে অল্প হাঁটা দূরত্বে। এখানে শীতাতপ নিয়ন্ত্রিত রুম, বুফে নাশতা, ফ্রি ওয়াই-ফাই ও ফ্রি কার পার্কিং রয়েছে। আমাদের <Link href="/bn/rooms">রুম ও ভাড়ার পৃষ্ঠা</Link> থেকে বিকল্প তুলনা করুন, অথবা আপনার তারিখে রুম খালি আছে কি না জানতে <Link href="/bn/contact">হোটেলে যোগাযোগ করুন</Link>। “সৈকতের কাছে” কথাটির অর্থ সবার কাছে এক নয়—এটি আপনার জন্য জরুরি হলে মানচিত্র দেখুন এবং হাঁটার পথ জেনে নিন।</p>
      </section>
      <section>
        <h2>ভ্রমণের জন্য কিছু ব্যবহারিক পরামর্শ</h2>
        <ul>
          <li>রোদ থেকে সুরক্ষার জিনিস, পানীয় জল এবং প্রয়োজনীয় ব্যক্তিগত ওষুধ সঙ্গে রাখুন।</li>
          <li>স্থানীয় যানবাহন ও ছোট দোকানের জন্য কিছু নগদ টাকা রাখুন; যাত্রা শুরুর আগে ভাড়া জেনে নিন।</li>
          <li>প্রতিদিন আবহাওয়া, জোয়ার এবং সৈকত বা নৌভ্রমণের নিরাপত্তা নির্দেশনা যাচাই করুন।</li>
          <li>বাতাসযুক্ত সন্ধ্যার জন্য হালকা গরম কাপড় এবং বালু বা অসমান পথে হাঁটার উপযোগী জুতা নিন।</li>
          <li>বন্যপ্রাণী ও স্থানীয় জনগোষ্ঠীর প্রতি যত্নশীল থাকুন; ময়লা নির্দিষ্ট স্থানে ফেলুন এবং প্রাকৃতিক এলাকা পরিষ্কার রাখুন।</li>
          <li>ছুটির মৌসুমে আগে রুম ও পরিবহন বুক করুন এবং যাত্রার কাছাকাছি সময়ে ছাড়ার তথ্য আবার নিশ্চিত করুন।</li>
        </ul>
      </section>
      <section>
        <h2>সাধারণ জিজ্ঞাসা</h2>
        <h3>কুয়াকাটায় কত দিন থাকা দরকার?</h3>
        <p>আগে থেকে পরিকল্পনা করলে এক রাতসহ দুই দিনে মূল সৈকত ও কয়েকটি কাছের দর্শনীয় স্থান দেখা যায়। ধীরে ঘুরতে বা নৌভ্রমণ ও স্থানীয় এলাকা দেখার জন্য আরও এক রাত রাখুন।</p>
        <h3>কুয়াকাটায় কি সূর্যোদয় ও সূর্যাস্ত দেখা যায়?</h3>
        <p>হ্যাঁ। সৈকতের বিস্তৃত খোলা উপকূল থেকে বঙ্গোপসাগরের ওপর দুটোই দেখা যায় বলে এটি পরিচিত। তবে মেঘ ও আবহাওয়ার কারণে দৃশ্যমানতা নির্ভর করে।</p>
        <h3>পরিবার নিয়ে কুয়াকাটা যাওয়া যায়?</h3>
        <p>সমুদ্রসৈকত পছন্দ হলে পরিবার নিয়ে যাওয়া যায়, তবে যাত্রার সময়, আবহাওয়া, জোয়ার ও শিশুদের প্রয়োজন অনুযায়ী পরিকল্পনা করুন। পানির কাছে শিশুদের সঙ্গে থাকুন এবং স্থানীয় নিরাপত্তা নির্দেশনা মেনে চলুন।</p>
        <h3>সৈকতের সব জায়গায় সাঁতার নিরাপদ?</h3>
        <p>না। সব জায়গা বা সব জোয়ারে সাঁতার নিরাপদ ধরে নেওয়া উচিত নয়। স্থানীয় কর্তৃপক্ষ বা লাইফগার্ডের কাছে অবস্থা জেনে সতর্কবার্তা মানুন; পরিস্থিতি পরিষ্কার না হলে সাঁতার কাটবেন না।</p>
      </section>
    </div>
  );
}
