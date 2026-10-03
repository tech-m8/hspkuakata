import Link from "next/link";
import { hotel } from "@/data/hotel";
import { rooms, tariffValidUntil } from "@/data/rooms";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/i18n/locales";

export const planningPosts = {
  bestTime: "best-time-to-visit-kuakata",
  transport: "dhaka-to-kuakata",
  weekend: "kuakata-weekend-itinerary",
  family: "kuakata-family-trip-guide",
  checklist: "kuakata-travel-checklist",
  budget: "kuakata-trip-budget",
} as const;
export type PlanningPost = keyof typeof planningPosts;

type Section = { heading: string; paragraphs?: string[]; bullets?: string[] };
type Copy = { title: string; description: string; sections: Section[] };

const articles: Record<PlanningPost, Record<Locale, Copy>> = {
  bestTime: {
    en: {
      title: "Best Time to Visit Kuakata: Weather, Crowds & Seasons",
      description: "Find the best time to visit Kuakata with a month-by-month look at weather, crowds, beach conditions, and seasonal travel planning.",
      sections: [
        { heading: "When is the best time to visit Kuakata?", paragraphs: ["For many travelers, the most comfortable time to visit Kuakata is during the cooler, drier months from roughly November to February. Days are generally more pleasant for beach walks, sunrise outings, and local sightseeing. October and March can also work well, but expect warmer conditions and check the forecast close to departure.", "There is no single perfect month for everyone. Choose your dates based on what matters most: drier weather, a quieter beach, a public holiday, or lower room demand. Coastal weather can change quickly, so treat seasonal patterns as a guide rather than a forecast."] },
        { heading: "Kuakata weather by season", paragraphs: ["Bangladesh Meteorological Department describes March–May as pre-monsoon, June–September as monsoon, October–November as post-monsoon, and December–February as winter. Around Kuakata, the practical difference is how much rain, heat, humidity, and coastal weather uncertainty you are prepared to manage."] , bullets: ["December–February: usually the cooler, drier window and a popular choice for beach trips. Pack a light layer for breezy mornings and evenings.", "October–November: post-monsoon transition months. Conditions may be pleasant, but check forecasts and marine advisories before planning a boat excursion.", "March–May: hotter and more humid, with the possibility of thunderstorms. Plan outdoor walks early or late in the day and keep water with you.", "June–September: monsoon season brings more rain and higher uncertainty for beach access and boat trips. Keep plans flexible and check warnings before travel."] },
        { heading: "Crowds, weekends, and public holidays", paragraphs: ["The busiest dates are often weekends, school breaks, and major public holidays, when transport and popular room types can sell out sooner. December and January are popular for cool-weather travel, but demand depends on the holiday calendar and current conditions. A weekday stay can feel calmer and may offer more room choices.", "If you have fixed holiday dates, book transport and accommodation early, ask for written confirmation, and reconfirm departure details before leaving. If your dates are flexible, compare a weekday with the adjacent weekend and choose the quieter option that fits your plans."] },
        { heading: "Choose dates around the experience you want", paragraphs: ["For sunrise and sunset, Kuakata’s open beach is the main attraction. Check the sunrise and sunset time for your exact date, then leave enough time to reach the beach safely. For a boat visit to Fatrar Char or a trip toward Gangamati, confirm local access, tide, weather, and boat availability on the day; postpone if conditions are uncertain.", "Families with young children may prefer the cooler, drier period and a weekday arrival. Travelers focused on landscape photography can enjoy changing skies in other seasons too, but should keep a backup plan and avoid scheduling every activity tightly."] },
        { heading: "What to check before booking", paragraphs: ["Look at the Bangladesh Meteorological Department forecast and relevant marine warnings shortly before travel. Confirm your bus or road plan, hotel cancellation terms, and whether any excursion is running. Seasonal averages cannot predict a particular beach day, so keep one indoor or low-effort option in reserve.", "For a comfortable base near the beach, compare room options and confirm the current total rate directly with the hotel. See our <Link href=\"/en/rooms\">Kuakata room options</Link> and <Link href=\"/en/blog/kuakata-weekend-itinerary\">two-day Kuakata itinerary</Link>."] },
      ],
    },
    bn: {
      title: "কুয়াকাটা ভ্রমণের সেরা সময়: আবহাওয়া, ভিড় ও মৌসুমি পরিকল্পনা",
      description: "আবহাওয়া, পর্যটকের চাপ, সৈকতের অবস্থা ও মৌসুমি পরিকল্পনা বিবেচনা করে কুয়াকাটা ভ্রমণের সময় বেছে নিন।",
      sections: [
        { heading: "কুয়াকাটা যাওয়ার সেরা সময় কখন?", paragraphs: ["অনেক ভ্রমণকারীর জন্য নভেম্বর থেকে ফেব্রুয়ারির অপেক্ষাকৃত শীতল ও শুষ্ক সময় কুয়াকাটা বেড়ানোর আরামদায়ক সময়। সৈকতে হাঁটা, সূর্যোদয় দেখা ও আশপাশ ঘোরার জন্য আবহাওয়া সাধারণত সুবিধাজনক থাকে। অক্টোবর ও মার্চও ভালো হতে পারে, তবে গরম বাড়তে পারে—যাত্রার আগে পূর্বাভাস দেখুন।", "সবার জন্য একটিই সেরা মাস নেই। শুষ্ক আবহাওয়া, কম ভিড়, সরকারি ছুটি নাকি রুমের বেশি বিকল্প—কোনটি গুরুত্বপূর্ণ তার ভিত্তিতে তারিখ ঠিক করুন। উপকূলের আবহাওয়া দ্রুত বদলাতে পারে; মৌসুমি প্রবণতাকে পূর্বাভাস ধরে নেবেন না।"] },
        { heading: "ঋতু অনুযায়ী কুয়াকাটার আবহাওয়া", paragraphs: ["বাংলাদেশ আবহাওয়া অধিদপ্তর মার্চ–মে প্রাক-বর্ষা, জুন–সেপ্টেম্বর বর্ষা, অক্টোবর–নভেম্বর বর্ষা-পরবর্তী এবং ডিসেম্বর–ফেব্রুয়ারি শীতকাল হিসেবে চিহ্নিত করে। কুয়াকাটার ক্ষেত্রে বৃষ্টি, গরম, আর্দ্রতা ও উপকূলীয় আবহাওয়ার অনিশ্চয়তা কতটা সামলাতে পারবেন—সেটিই মূল বিবেচনা।"], bullets: ["ডিসেম্বর–ফেব্রুয়ারি: সাধারণত তুলনামূলক শীতল ও শুষ্ক; সৈকত ভ্রমণের জনপ্রিয় সময়। ভোর ও সন্ধ্যার বাতাসের জন্য হালকা গরম কাপড় নিন।", "অক্টোবর–নভেম্বর: বর্ষা-পরবর্তী পরিবর্তনের সময়। আবহাওয়া আরামদায়ক হতে পারে, তবে নৌভ্রমণের আগে পূর্বাভাস ও সামুদ্রিক সতর্কতা দেখুন।", "মার্চ–মে: গরম ও আর্দ্রতা বাড়ে, বজ্রঝড়ও হতে পারে। ভোর বা বিকেলে বাইরে যান এবং পানি সঙ্গে রাখুন।", "জুন–সেপ্টেম্বর: বর্ষায় বৃষ্টি বাড়ে এবং সৈকত বা নৌভ্রমণের পরিকল্পনা অনিশ্চিত হতে পারে। নমনীয় পরিকল্পনা করুন ও সতর্কতা জেনে নিন।"] },
        { heading: "ভিড়, সপ্তাহান্ত ও সরকারি ছুটি", paragraphs: ["সাপ্তাহিক ছুটি, স্কুল বন্ধ ও বড় সরকারি ছুটিতে বাস এবং জনপ্রিয় রুমের চাহিদা বাড়তে পারে। ডিসেম্বর ও জানুয়ারিতে শীতল আবহাওয়ার জন্য পর্যটক বেশি হতে পারেন, তবে ভিড় ছুটির ক্যালেন্ডার ও চলতি পরিস্থিতির ওপর নির্ভর করে। কর্মদিবসে গেলে সৈকত তুলনামূলক শান্ত এবং রুমের বিকল্প বেশি পাওয়া যেতে পারে।", "ছুটির নির্দিষ্ট তারিখে গেলে আগে পরিবহন ও থাকার জায়গা বুক করুন, লিখিত নিশ্চয়তা নিন এবং রওনা হওয়ার আগে যাত্রার তথ্য মিলিয়ে নিন। তারিখে নমনীয় হলে সপ্তাহের কর্মদিবস ও পাশের সপ্তাহান্তের চাহিদা তুলনা করে নিন।"] },
        { heading: "আপনার পছন্দের অভিজ্ঞতা অনুযায়ী তারিখ নিন", paragraphs: ["সূর্যোদয় ও সূর্যাস্ত কুয়াকাটা সৈকতের প্রধান আকর্ষণ। আপনার তারিখের সূর্যোদয়-সূর্যাস্তের সময় জেনে নিরাপদে সৈকতে পৌঁছানোর সময় রাখুন। ফাতরার চর নৌভ্রমণ বা গঙ্গামতির দিকে যাওয়ার আগে সেদিনের যাতায়াত, জোয়ার, আবহাওয়া ও নৌযানের প্রাপ্যতা নিশ্চিত করুন; অবস্থা অনিশ্চিত হলে পিছিয়ে দিন।", "ছোট শিশু নিয়ে গেলে তুলনামূলক শীতল ও শুষ্ক সময় এবং কর্মদিবস বেছে নিতে পারেন। ছবি তুলতে পছন্দ করলে অন্য ঋতুর আকাশও আকর্ষণীয় হতে পারে, তবে বিকল্প পরিকল্পনা রাখুন এবং প্রতিটি কাজের সময়সূচি খুব আঁটসাঁট করবেন না।"] },
        { heading: "বুকিংয়ের আগে কী দেখবেন", paragraphs: ["যাত্রার কাছাকাছি সময়ে বাংলাদেশ আবহাওয়া অধিদপ্তরের পূর্বাভাস ও প্রাসঙ্গিক সামুদ্রিক সতর্কতা দেখুন। বাস বা সড়কযাত্রা, হোটেলের বাতিলের শর্ত এবং কোনো নৌভ্রমণ চালু আছে কি না নিশ্চিত করুন। মৌসুমি গড় নির্দিষ্ট দিনের আবহাওয়া বলে না—তাই সহজে করা যায় এমন বিকল্প পরিকল্পনা রাখুন।", "সৈকতের কাছে থাকার জন্য রুমের বিকল্প দেখুন এবং বর্তমান মোট দাম সরাসরি নিশ্চিত করুন। আমাদের <Link href=\"/bn/rooms\">কুয়াকাটার রুম</Link> এবং <Link href=\"/bn/blog/kuakata-weekend-itinerary\">২ দিনের ভ্রমণ পরিকল্পনা</Link> দেখুন।"] },
      ],
    },
  },
  transport: {
    en: {
      title: "How to Get to Kuakata from Dhaka: Bus, Road & Travel Tips",
      description: "Plan the journey from Dhaka to Kuakata by direct bus, private car, or launch and road, with practical booking and arrival tips.",
      sections: [
        { heading: "At a glance: Dhaka to Kuakata", paragraphs: ["Kuakata is in Kalapara Upazila, Patuakhali. Most visitors from Dhaka travel by road, either on a direct intercity bus or in a private vehicle. A launch-and-road combination is another option for travelers who want a river journey, but it needs a separate onward connection. Routes, departure points, fares, and journey times vary; check them for your exact date."] },
        { heading: "Option 1: Take a direct bus", paragraphs: ["A direct Dhaka–Kuakata coach is usually the simplest choice if you do not want to arrange connections. Operators may offer different departure times, boarding points, coach types, and drop-off points. Check the operator’s own counter or booking channel for current seats, fare, luggage rules, and the exact terminal before paying.", "Choose a departure that suits your arrival plan. An overnight bus can help you use the next day, but only if you can check in or store luggage on arrival. A daytime departure may be easier with children or older travelers. Keep your ticket, operator contact, and drop-off location accessible offline."] , bullets: ["Confirm whether the bus goes all the way to Kuakata or ends in Patuakhali/another town.", "Arrive at the boarding point early and verify the coach registration or company staff before boarding.", "Keep medicines, valuables, a light layer, and water in a small hand bag.", "For holidays and weekends, book return seats at the same time if your schedule is fixed."] },
        { heading: "Option 2: Drive from Dhaka", paragraphs: ["The common road journey heads south over the Padma Bridge and continues through the Bhanga/Barishal and Patuakhali area toward Kalapara and Kuakata. Use navigation for live routing, but allow generous time for traffic, rest stops, road works, and weather. Do not plan around an exact online drive-time estimate.", "Before leaving, check your vehicle, fuel plan, toll payment method, and driver rest. If more than one person can drive, share the driving rather than pushing through fatigue. Confirm your hotel’s parking arrangement and arrival instructions before setting off."] },
        { heading: "Option 3: Launch plus road transfer", paragraphs: ["Some travelers take a launch from Dhaka toward the Barishal or Patuakhali area and continue by road. This can make the river trip part of the experience, but it is not a door-to-door route. Confirm the current launch terminal, sailing date, arrival point, onward bus or car, and the gap between connections with the operators before booking.", "Build in a buffer in case a launch is delayed. If arriving late, pre-arrange the onward ride and confirm how you will reach the hotel. Avoid assuming a historic timetable or route remains current."] },
        { heading: "Arrival and last-mile tips", paragraphs: ["Ask the bus operator where you will be dropped and how far that point is from your accommodation. Agree any local transport fare before the ride, especially if you arrive early or late. Save your hotel location and phone number, and share your arrival plan with your travel group.", "For hotel directions, see our <Link href=\"/en/location\">Kuakata location guide</Link>. Browse <Link href=\"/en/rooms\">rooms and rates</Link> and read the <Link href=\"/en/blog/kuakata-travel-checklist\">Kuakata packing checklist</Link> before leaving Dhaka."] },
      ],
    },
    bn: {
      title: "ঢাকা থেকে কুয়াকাটা যাওয়ার উপায়: বাস, সড়কপথ ও যাত্রার টিপস",
      description: "সরাসরি বাস, নিজস্ব গাড়ি অথবা লঞ্চ ও সড়কপথে ঢাকা থেকে কুয়াকাটা যাওয়ার পরিকল্পনা করুন।",
      sections: [
        { heading: "সংক্ষেপে: ঢাকা থেকে কুয়াকাটা", paragraphs: ["কুয়াকাটা পটুয়াখালীর কলাপাড়া উপজেলায়। ঢাকা থেকে অধিকাংশ ভ্রমণকারী সরাসরি দূরপাল্লার বাস অথবা নিজস্ব গাড়িতে সড়কপথে যান। নদীপথ পছন্দ হলে লঞ্চ ও সড়কযাত্রা মিলিয়ে যাওয়া যায়, তবে আলাদা সংযোগের ব্যবস্থা করতে হয়। রুট, ছাড়ার স্থান, ভাড়া ও সময় তারিখ অনুযায়ী বদলায়—নিজের যাত্রার তথ্য নিশ্চিত করুন।"] },
        { heading: "বিকল্প ১: সরাসরি বাস", paragraphs: ["সংযোগের ঝামেলা এড়াতে ঢাকা থেকে সরাসরি কুয়াকাটার বাস সহজ উপায়। অপারেটরভেদে ছাড়ার সময়, ওঠার স্থান, বাসের ধরন ও নামার স্থান আলাদা হতে পারে। টিকিট কাটার আগে অপারেটরের কাউন্টার বা নিজস্ব বুকিং মাধ্যমে আসন, ভাড়া, লাগেজের নিয়ম এবং সঠিক টার্মিনাল জেনে নিন।", "পৌঁছানোর পরিকল্পনার সঙ্গে মিলিয়ে বাসের সময় বেছে নিন। রাতের বাস পরদিনের সময় বাঁচাতে পারে, তবে সকালে পৌঁছে চেক-ইন বা লাগেজ রাখার ব্যবস্থা আছে কি না জানুন। শিশু বা বয়স্ক যাত্রী থাকলে দিনের বাস সুবিধাজনক হতে পারে। টিকিট, অপারেটরের যোগাযোগ এবং নামার স্থানের তথ্য অফলাইনে রাখুন।"], bullets: ["বাস কুয়াকাটা পর্যন্ত যাবে, নাকি পটুয়াখালী বা অন্য শহরে শেষ হবে—নিশ্চিত করুন।", "আগে পৌঁছান এবং বাসে ওঠার আগে কোম্পানির কর্মী বা কোচের পরিচয় যাচাই করুন।", "ওষুধ, মূল্যবান জিনিস, হালকা গরম কাপড় ও পানি হাতব্যাগে রাখুন।", "ছুটি বা সপ্তাহান্তে গেলে সময়সূচি নিশ্চিত থাকলে ফেরার টিকিটও একসঙ্গে কাটুন।"] },
        { heading: "বিকল্প ২: ঢাকা থেকে গাড়ি চালিয়ে", paragraphs: ["সাধারণ সড়কপথে পদ্মা সেতু পেরিয়ে ভাঙ্গা/বরিশাল ও পটুয়াখালীর দিক দিয়ে কলাপাড়া হয়ে কুয়াকাটা যেতে হয়। চলতি রাস্তার জন্য নেভিগেশন ব্যবহার করুন, তবে যানজট, বিরতি, রাস্তার কাজ ও আবহাওয়ার জন্য যথেষ্ট সময় হাতে রাখুন। অনলাইনের নির্দিষ্ট যাত্রাসময়ের ওপর পরিকল্পনা নির্ভর করাবেন না।", "রওনা হওয়ার আগে গাড়ি, জ্বালানি, টোল পরিশোধের ব্যবস্থা ও চালকের বিশ্রামের পরিকল্পনা দেখুন। একাধিক চালক থাকলে পালা করে চালান; ক্লান্ত হয়ে একটানা গাড়ি চালাবেন না। হোটেলে পার্কিং ও পৌঁছানোর নির্দেশনা আগে জেনে নিন।"] },
        { heading: "বিকল্প ৩: লঞ্চ ও সড়কপথ", paragraphs: ["কেউ কেউ ঢাকা থেকে বরিশাল বা পটুয়াখালী অঞ্চলে লঞ্চে গিয়ে এরপর সড়কপথে কুয়াকাটা যান। নদীপথ যাত্রার অভিজ্ঞতার অংশ হতে পারে, তবে এটি সরাসরি হোটেল পর্যন্ত যায় না। টিকিটের আগে বর্তমান লঞ্চঘাট, চলাচলের দিন, নামার স্থান, পরের বাস বা গাড়ি এবং সংযোগের ব্যবধান অপারেটরের সঙ্গে নিশ্চিত করুন।", "লঞ্চ দেরি হলে কাজে লাগবে এমন অতিরিক্ত সময় রাখুন। রাতে পৌঁছালে পরের যাত্রা আগে ঠিক করুন এবং হোটেলে পৌঁছানোর উপায় নিশ্চিত করুন। পুরোনো সময়সূচি বা রুট এখনো চালু আছে ধরে নেবেন না।"] },
        { heading: "পৌঁছানো ও শেষ অংশের যাত্রা", paragraphs: ["বাস কোথায় নামাবে এবং সেখান থেকে থাকার জায়গা কত দূরে—অপারেটরকে জিজ্ঞেস করুন। স্থানীয় যানবাহনে ওঠার আগে ভাড়া ঠিক করুন, বিশেষ করে ভোরে বা রাতে পৌঁছালে। হোটেলের অবস্থান ও ফোন নম্বর সংরক্ষণ করুন এবং দলের সঙ্গে পৌঁছানোর পরিকল্পনা শেয়ার করুন।", "হোটেলে যাওয়ার জন্য আমাদের <Link href=\"/bn/location\">কুয়াকাটা অবস্থান গাইড</Link> দেখুন। <Link href=\"/bn/rooms\">রুম ও ভাড়া</Link> এবং ঢাকা থেকে বের হওয়ার আগে <Link href=\"/bn/blog/kuakata-travel-checklist\">কুয়াকাটা ভ্রমণ চেকলিস্ট</Link> দেখুন।"] },
      ],
    },
  },
  weekend: {
    en: {
      title: "Kuakata Weekend Itinerary: 2 Days and 1 Night",
      description: "Make the most of a Kuakata weekend with this realistic 2-day, 1-night itinerary for the beach, sunrise, local food, and nearby sights.",
      sections: [
        { heading: "Is two days and one night enough for Kuakata?", paragraphs: ["A Kuakata weekend trip of two days and one night gives you time for the main beach, one sunrise, one sunset, and one or two nearby stops. It is a compact visit, so keep the plan flexible and avoid trying to include every char, temple, and boat trip. If you can add a second night, you will have more room for weather delays and a slower pace.", "This plan assumes you reach Kuakata early on Day 1 and leave late on Day 2. Check bus arrival and departure times before reserving a room; travel delays can change the usable hours of your weekend."] },
        { heading: "Day 1: Check in, explore the beach, and catch sunset", paragraphs: ["After arrival, leave bags at your hotel, have breakfast if available, and take a short rest. Check the day’s weather and tide information, then walk a convenient section of Kuakata Sea Beach. Keep the first outing simple after an overnight road journey.", "Have lunch and rest during the hotter hours. In the late afternoon, return to the beach for sunset. Pick a meeting point with your group and keep children within reach near the water. In the evening, try a local meal and ask your hotel or a trusted local contact about transport for the next morning."] },
        { heading: "Day 2: Sunrise and one nearby attraction", paragraphs: ["Wake early for sunrise at the main beach or, if you have arranged transport and checked conditions, toward Gangamati. Return for breakfast, then choose one outing: Jhau Forest for a short shaded walk, Misripara for Rakhine Buddhist heritage, or another nearby stop that suits your group.", "If you want a boat trip to Fatrar Char, arrange it locally and confirm weather, tide, life jackets, route, and return time. A boat excursion can take a meaningful part of the day, so do not squeeze it between several other stops. Return to your hotel, collect your luggage, and allow a generous buffer to reach your bus."] },
        { heading: "A low-stress alternative", paragraphs: ["If the return bus leaves before evening, skip a distant attraction and stay around the beach and nearby forest. If weather is poor, use the time for a long breakfast, local shops, and a relaxed meal rather than taking an unsafe boat ride. A good weekend plan has room to change."] },
        { heading: "Where to stay for a short weekend", paragraphs: ["For a one-night visit, a convenient hotel location can save time between the bus stop, beach, and meals. Confirm check-in, luggage storage, breakfast timing, parking if driving, and the total room price. Our <Link href=\"/en/rooms\">Kuakata rooms and rates</Link> page lists room options; use the <Link href=\"/en/blog/kuakata-2-day-itinerary\">full two-day itinerary</Link> for a more relaxed version."] },
      ],
    },
    bn: {
      title: "কুয়াকাটা উইকএন্ড ভ্রমণ পরিকল্পনা: ২ দিন ও ১ রাত",
      description: "সৈকত, সূর্যোদয়, স্থানীয় খাবার ও কাছের দর্শনীয় স্থান নিয়ে কুয়াকাটায় ২ দিন ১ রাতের বাস্তবসম্মত পরিকল্পনা।",
      sections: [
        { heading: "কুয়াকাটা ঘুরতে ২ দিন ১ রাত কি যথেষ্ট?", paragraphs: ["কুয়াকাটায় ২ দিন ১ রাত থাকলে মূল সৈকত, একটি সূর্যোদয়, একটি সূর্যাস্ত এবং কাছের এক-দুটি স্থান ঘোরা যায়। সময় কম, তাই পরিকল্পনা নমনীয় রাখুন; সব চর, মন্দির ও নৌভ্রমণ একসঙ্গে করার চেষ্টা করবেন না। আরেক রাত যোগ করতে পারলে আবহাওয়ার জন্য বাড়তি সময় ও ধীরেসুস্থে ঘোরার সুযোগ পাবেন।", "এই পরিকল্পনায় প্রথম দিন সকালে পৌঁছানো এবং দ্বিতীয় দিন সন্ধ্যার দিকে ফেরার কথা ধরা হয়েছে। রুম বুক করার আগে বাসের পৌঁছানো ও ছাড়ার সময় মিলিয়ে নিন; যাত্রা দেরি হলে উইকএন্ডে ঘোরার সময় কমে যেতে পারে।"] },
        { heading: "প্রথম দিন: চেক-ইন, সৈকত ও সূর্যাস্ত", paragraphs: ["পৌঁছে হোটেলে ব্যাগ রেখে নাশতা করুন এবং কিছুক্ষণ বিশ্রাম নিন। দিনের আবহাওয়া ও জোয়ারের অবস্থা জেনে কুয়াকাটা সৈকতের সহজে যাওয়া যায় এমন অংশে হাঁটুন। রাতের সড়কযাত্রার পর প্রথম ভ্রমণটি সহজ রাখুন।", "দুপুরে খেয়ে গরমের সময় বিশ্রাম নিন। বিকেলের শেষভাগে সূর্যাস্ত দেখতে সৈকতে যান। দলের জন্য দেখা করার স্থান ঠিক করুন এবং পানির কাছে শিশুদের কাছে রাখুন। সন্ধ্যায় স্থানীয় খাবার চেখে দেখুন এবং পরদিন সকালের যাতায়াত সম্পর্কে হোটেল বা বিশ্বস্ত স্থানীয় কারও কাছ থেকে জেনে নিন।"] },
        { heading: "দ্বিতীয় দিন: সূর্যোদয় ও কাছের একটি আকর্ষণ", paragraphs: ["ভোরে মূল সৈকত থেকে সূর্যোদয় দেখুন। আগে যানবাহন ঠিক করে অবস্থা জেনে থাকলে গঙ্গামতির দিকেও যেতে পারেন। নাশতার পর দলের পছন্দ অনুযায়ী একটি স্থান বেছে নিন: অল্প ছায়ায় হাঁটার জন্য ঝাউবন, রাখাইন বৌদ্ধ ঐতিহ্য জানতে মিশ্রিপাড়া, অথবা কাছের অন্য কোনো স্থান।", "ফাতরার চরে নৌভ্রমণ করতে চাইলে স্থানীয়ভাবে ব্যবস্থা করে আবহাওয়া, জোয়ার, লাইফ জ্যাকেট, পথ ও ফেরার সময় নিশ্চিত করুন। নৌভ্রমণে দিনের উল্লেখযোগ্য সময় লাগতে পারে—অনেকগুলো স্থান এর ফাঁকে গুঁজে দেবেন না। হোটেলে ফিরে লাগেজ নিয়ে বাসে যাওয়ার জন্য পর্যাপ্ত সময় রাখুন।"] },
        { heading: "আরও স্বচ্ছন্দ বিকল্প", paragraphs: ["ফেরার বাস সন্ধ্যার আগে হলে দূরের দর্শনীয় স্থান বাদ দিয়ে সৈকত ও কাছের বনাঞ্চলে থাকুন। আবহাওয়া খারাপ হলে ঝুঁকিপূর্ণ নৌভ্রমণের বদলে ধীরে নাশতা করুন, স্থানীয় দোকান ঘুরুন ও আরামে খাবার খান। ভালো পরিকল্পনা প্রয়োজনে বদলানো যায়।"] },
        { heading: "ছোট উইকএন্ডে কোথায় থাকবেন", paragraphs: ["এক রাতের ভ্রমণে বাসের নামার স্থান, সৈকত ও খাবারের জায়গা থেকে সুবিধাজনক হোটেল বেছে নিলে সময় বাঁচে। চেক-ইন, লাগেজ রাখার ব্যবস্থা, নাশতার সময়, গাড়ি থাকলে পার্কিং এবং মোট রুম ভাড়া নিশ্চিত করুন। <Link href=\"/bn/rooms\">কুয়াকাটার রুম ও ভাড়ার</Link> বিকল্প দেখুন; আরও বিস্তারিত পরিকল্পনার জন্য <Link href=\"/bn/blog/kuakata-2-day-itinerary\">২ দিনের ভ্রমণসূচি</Link> পড়ুন।"] },
      ],
    },
  },
  family: {
    en: {
      title: "Kuakata Family Trip Guide: What to Plan Before You Go",
      description: "Planning a Kuakata family trip? Use this guide to prepare transport, rooms, child-friendly timing, beach safety, meals, and essentials.",
      sections: [
        { heading: "Choose a pace your family can enjoy", paragraphs: ["A family trip to Kuakata works best when you plan fewer activities and leave breaks between them. Consider children’s ages, nap times, mobility needs, and how everyone handles a long road journey. Two nights can feel easier than arriving and leaving within one night, especially with young children or older relatives.", "Pick one main activity each morning or afternoon and treat other stops as optional. Keep a weather-friendly alternative in mind so the day still works if a boat trip or beach outing is not suitable."] },
        { heading: "Book the right room and transport", paragraphs: ["Confirm the room’s maximum occupancy, bed arrangement, child policy, extra-bed cost, and whether adjoining or nearby rooms are available. Do not assume a photo shows the exact room assignment. Ask for the total price, what breakfast includes, and the check-in time in writing.", "For a bus trip, choose seats together and keep snacks, water, medicines, wipes, and a change of clothes in an easy-to-reach bag. For a private car, plan comfort stops and driver rest. Confirm how the family will travel from the Kuakata bus drop-off to the hotel."] },
        { heading: "Plan beach time safely", paragraphs: ["Kuakata is a coastal destination, and beach and tide conditions can change. Ask locally about safe areas and follow warnings. Never assume the water is safe for swimming everywhere; keep children within arm’s reach near the shore and designate an adult to supervise rather than relying on the whole group at once.", "Schedule beach walks in cooler parts of the day, use sun protection, and bring drinking water. Avoid entering the sea during rough conditions or when local guidance says not to. If you arrange a boat, use an operator that supplies life jackets and confirms the route and return plan."] },
        { heading: "Pack family essentials", bullets: ["Prescription medicines, basic first aid, children’s usual remedies, and copies of prescriptions.", "Sun hats, sunscreen, sunglasses, light modest clothing, sandals, and one warmer layer for a breezy evening.", "Reusable water bottles, wipes, tissues, hand sanitizer, snacks, and a small bag for wet clothes.", "Chargers, power bank, offline hotel location, emergency contacts, and some small cash."] },
        { heading: "Keep meals and outings simple", paragraphs: ["Ask about meal timing and nearby food options before arrival, especially if a child has allergies or a limited diet. Tell restaurants about dietary needs and confirm ingredients rather than assuming a dish is suitable. Carry familiar snacks for the road.", "For a first family visit, the main beach, Jhau Forest, and one culturally interesting stop may be enough. Visit Misripara respectfully and ask before taking photos. Add Gangamati or a boat trip only if the group has energy and current conditions are appropriate."] },
        { heading: "A practical family booking checklist", bullets: ["Save the hotel’s phone number, map location, booking confirmation, and arrival instructions.", "Confirm cancellation terms and a backup plan if travel is delayed.", "Book holiday transport and rooms early, then reconfirm close to departure.", "See our <Link href=\"/en/rooms\">room options</Link>, <Link href=\"/en/location\">location guide</Link>, and <Link href=\"/en/blog/kuakata-travel-checklist\">packing checklist</Link>."] },
      ],
    },
    bn: {
      title: "কুয়াকাটায় পরিবার নিয়ে ভ্রমণ: যাওয়ার আগে যা পরিকল্পনা করবেন",
      description: "পরিবার নিয়ে কুয়াকাটা যাওয়ার আগে যাতায়াত, রুম, শিশুদের সময়, সৈকত নিরাপত্তা, খাবার ও প্রয়োজনীয় জিনিস পরিকল্পনা করুন।",
      sections: [
        { heading: "পরিবারের উপযোগী গতি ঠিক করুন", paragraphs: ["কম কাজ রেখে মাঝেমধ্যে বিরতি দিলে পরিবার নিয়ে কুয়াকাটা ভ্রমণ আরামদায়ক হয়। শিশুদের বয়স, ঘুমের সময়, চলাফেরার সুবিধা এবং দীর্ঘ সড়কযাত্রায় সবার স্বাচ্ছন্দ্য বিবেচনা করুন। ছোট শিশু বা বয়স্ক আত্মীয় থাকলে এক রাতের মধ্যে পৌঁছে আবার ফেরার চেয়ে দুই রাত থাকা সহজ হতে পারে।", "সকাল বা বিকেলে একটি প্রধান কাজ রাখুন; অন্য স্থানগুলো ঐচ্ছিক ভাবুন। নৌভ্রমণ বা সৈকতে যাওয়া সম্ভব না হলে ব্যবহার করা যাবে এমন বিকল্প পরিকল্পনাও রাখুন।"] },
        { heading: "উপযুক্ত রুম ও যাতায়াত বুক করুন", paragraphs: ["রুমে সর্বোচ্চ অতিথি সংখ্যা, বিছানার বিন্যাস, শিশুদের নিয়ম, অতিরিক্ত বিছানার খরচ এবং পাশাপাশি রুম পাওয়া যাবে কি না নিশ্চিত করুন। ছবিতে দেখানো রুমটিই বরাদ্দ হবে ধরে নেবেন না। মোট দাম, নাশতায় কী থাকে এবং চেক-ইনের সময় লিখিতভাবে জেনে নিন।", "বাসে গেলে একসঙ্গে বসার আসন নিন। হাতের কাছে রাখা ব্যাগে নাশতা, পানি, ওষুধ, ওয়াইপস ও অতিরিক্ত কাপড় রাখুন। গাড়িতে গেলে আরামের বিরতি এবং চালকের বিশ্রামের পরিকল্পনা করুন। কুয়াকাটায় বাস থেকে নেমে হোটেলে যাওয়ার উপায়ও নিশ্চিত করুন।"] },
        { heading: "সৈকতে নিরাপত্তার পরিকল্পনা", paragraphs: ["কুয়াকাটা উপকূলীয় এলাকা; সৈকত ও জোয়ারের অবস্থা বদলাতে পারে। নিরাপদ স্থান সম্পর্কে স্থানীয়ভাবে জেনে সতর্কতা মানুন। সব জায়গায় সাঁতার নিরাপদ ধরে নেবেন না; পানির কাছে শিশুদের হাতের নাগালে রাখুন এবং একজন নির্দিষ্ট প্রাপ্তবয়স্ককে দেখাশোনার দায়িত্ব দিন।", "দিনের অপেক্ষাকৃত ঠান্ডা সময়ে সৈকতে হাঁটুন, রোদ থেকে সুরক্ষা নিন ও পানি সঙ্গে রাখুন। উত্তাল অবস্থায় বা স্থানীয়ভাবে নিষেধ করলে পানিতে নামবেন না। নৌভ্রমণে গেলে লাইফ জ্যাকেট দেয় এবং পথ ও ফেরার ব্যবস্থা নিশ্চিত করে এমন অপারেটর বেছে নিন।"] },
        { heading: "পরিবারের জরুরি জিনিসপত্র", bullets: ["নিয়মিত ওষুধ, প্রাথমিক চিকিৎসার সামগ্রী, শিশুদের পরিচিত ওষুধ এবং প্রেসক্রিপশনের কপি।", "টুপি, সানস্ক্রিন, সানগ্লাস, হালকা শালীন পোশাক, স্যান্ডেল ও সন্ধ্যার জন্য হালকা গরম কাপড়।", "পানির বোতল, ওয়াইপস, টিস্যু, হ্যান্ড স্যানিটাইজার, নাশতা ও ভেজা কাপড় রাখার ব্যাগ।", "চার্জার, পাওয়ার ব্যাংক, হোটেলের অফলাইন অবস্থান, জরুরি যোগাযোগ এবং ছোট নোটের কিছু নগদ টাকা।"] },
        { heading: "খাবার ও বেড়ানো সহজ রাখুন", paragraphs: ["পৌঁছানোর আগে খাবারের সময় ও কাছাকাছি খাবারের ব্যবস্থা জেনে নিন—বিশেষত শিশুর অ্যালার্জি বা নির্দিষ্ট খাবারের প্রয়োজন থাকলে। রেস্তোরাঁকে খাবারের চাহিদা বলুন এবং উপকরণ নিশ্চিত করুন। যাত্রার জন্য পরিচিত কিছু নাশতা সঙ্গে রাখুন।", "প্রথম পারিবারিক ভ্রমণে মূল সৈকত, ঝাউবন এবং সাংস্কৃতিকভাবে আকর্ষণীয় একটি স্থানই যথেষ্ট হতে পারে। মিশ্রিপাড়ায় সম্মানজনক আচরণ করুন এবং ছবি তোলার আগে অনুমতি নিন। দলের শক্তি ও চলতি অবস্থা অনুকূলে থাকলেই গঙ্গামতি বা নৌভ্রমণ যোগ করুন।"] },
        { heading: "পরিবারের বুকিং চেকলিস্ট", bullets: ["হোটেলের ফোন, মানচিত্রের অবস্থান, বুকিং নিশ্চিতকরণ ও পৌঁছানোর নির্দেশনা সংরক্ষণ করুন।", "যাত্রা দেরি হলে বাতিলের শর্ত ও বিকল্প পরিকল্পনা জেনে নিন।", "ছুটির সময় রুম ও পরিবহন আগে বুক করুন; রওনার আগে আবার নিশ্চিত করুন।", "আমাদের <Link href=\"/bn/rooms\">রুমের বিকল্প</Link>, <Link href=\"/bn/location\">অবস্থান গাইড</Link> এবং <Link href=\"/bn/blog/kuakata-travel-checklist\">প্যাকিং চেকলিস্ট</Link> দেখুন।"] },
      ],
    },
  },
  checklist: {
    en: {
      title: "Kuakata Travel Checklist: What to Pack and Bring",
      description: "Use this Kuakata packing list for beach days, changing coastal weather, road travel, medicines, documents, and family essentials.",
      sections: [
        { heading: "Clothing for the beach and coastal weather", paragraphs: ["Pack light, comfortable clothes that dry easily, plus modest cover-ups for local visits. Kuakata can feel breezy near the water even when the day is warm, so bring one light layer for early mornings and evenings. Check the forecast before you leave and adjust for rain or heat."] , bullets: ["Breathable shirts and trousers/shorts appropriate for your plans.", "A light rain layer or compact umbrella during wetter months.", "Sandals plus comfortable shoes for uneven paths or longer walks.", "A spare outfit and a small bag for wet or sandy clothes."] },
        { heading: "Sun, water, and beach basics", bullets: ["Sun hat or cap, sunglasses, and sunscreen; reapply as directed.", "Reusable water bottle and oral rehydration salts if you normally use them.", "Small towel, tissues, hand sanitizer, and wet wipes.", "Waterproof pouch for phone and cash, while keeping valuables secure."] },
        { heading: "Health and personal items", paragraphs: ["Bring medicines you rely on in their original packaging and carry prescriptions for essential medication. A small first-aid kit can include plasters, antiseptic wipes, and any personal items recommended by your clinician. If you have allergies or a medical condition, keep emergency details easy to find and tell your travel companion what to do.", "Do not pack a medicine you have never used just because it appears on a generic list. If you are unsure what is suitable, ask a qualified healthcare professional before travel."] },
        { heading: "Documents, money, and devices", bullets: ["Photo ID and booking confirmations for transport and accommodation.", "Hotel phone number, saved map pin, and offline directions.", "Small cash notes for local rides and small shops, plus a secure way to carry cards.", "Phone charger, power bank, and any required charging adapter.", "Copies of important documents stored separately from the originals."] },
        { heading: "If you plan a boat trip or travel with children", paragraphs: ["For a boat excursion, confirm that life jackets are supplied and worn, keep your hands free, and follow the operator’s instructions. Check weather, tide, route, and return timing before you leave. Do not go if conditions are unsafe or the arrangement is unclear.", "With children, add familiar snacks, spare clothes, any usual medicines, wipes, and a plan for meeting if someone gets separated. Keep children within close reach by the water and follow local beach advice."] },
        { heading: "The night-before departure checklist", bullets: ["Reconfirm bus time, terminal, seat, luggage rule, and return ticket.", "Check the latest weather and any relevant coastal or marine warning.", "Charge devices, download offline maps, and share the itinerary with your group.", "Keep water, medicines, valuables, and one layer in your hand luggage.", "Confirm the hotel’s arrival time, check-in, and directions."] },
      ],
    },
    bn: {
      title: "কুয়াকাটা ভ্রমণ চেকলিস্ট: কী সঙ্গে নেবেন",
      description: "সৈকত, উপকূলের বদলানো আবহাওয়া, সড়কযাত্রা, ওষুধ, কাগজপত্র ও পরিবারের প্রয়োজনীয় জিনিসের প্যাকিং তালিকা।",
      sections: [
        { heading: "সৈকত ও উপকূলের আবহাওয়ার পোশাক", paragraphs: ["হালকা, আরামদায়ক ও সহজে শুকায় এমন পোশাক নিন; স্থানীয় দর্শনীয় স্থানে যাওয়ার জন্য শালীন ঢাকার পোশাক রাখুন। দিনের বেলা গরম থাকলেও পানির পাশে বাতাস থাকতে পারে, তাই ভোর ও সন্ধ্যার জন্য একটি হালকা কাপড় নিন। যাত্রার আগে পূর্বাভাস দেখে বৃষ্টি বা গরমের জন্য প্রস্তুতি নিন।"], bullets: ["পরিকল্পনার সঙ্গে মানানসই বাতাস চলাচল করে এমন শার্ট ও প্যান্ট/শর্টস।", "বর্ষাকালে হালকা রেইনকোট বা ছোট ছাতা।", "স্যান্ডেলের পাশাপাশি অসমান পথে হাঁটার উপযোগী জুতা।", "অতিরিক্ত এক সেট পোশাক ও ভেজা বা বালুমাখা কাপড় রাখার ব্যাগ।"] },
        { heading: "রোদ, পানি ও সৈকতের প্রয়োজনীয় জিনিস", bullets: ["টুপি, সানগ্লাস ও সানস্ক্রিন; নির্দেশনা অনুযায়ী আবার ব্যবহার করুন।", "পুনর্ব্যবহারযোগ্য পানির বোতল; নিয়মিত ব্যবহার করলে ওরাল স্যালাইন।", "ছোট তোয়ালে, টিস্যু, হ্যান্ড স্যানিটাইজার ও ওয়াইপস।", "ফোন ও নগদ টাকা রাখার জলরোধী পাউচ; মূল্যবান জিনিস নিরাপদে রাখুন।"] },
        { heading: "স্বাস্থ্য ও ব্যক্তিগত জিনিস", paragraphs: ["নিয়মিত ওষুধ মূল প্যাকেটে নিন এবং প্রয়োজনীয় ওষুধের প্রেসক্রিপশন সঙ্গে রাখুন। ছোট ফার্স্ট-এইড কিটে ব্যান্ডেজ, অ্যান্টিসেপটিক ওয়াইপস এবং চিকিৎসকের পরামর্শে দরকারি ব্যক্তিগত জিনিস রাখতে পারেন। অ্যালার্জি বা শারীরিক সমস্যা থাকলে জরুরি তথ্য সহজে পাওয়া যায় এমনভাবে রাখুন এবং সঙ্গীকে কী করতে হবে জানান।", "শুধু সাধারণ তালিকায় আছে বলে আগে কখনও ব্যবহার করেননি এমন ওষুধ নেবেন না। কী উপযোগী বুঝতে না পারলে যাত্রার আগে যোগ্য স্বাস্থ্যকর্মীর পরামর্শ নিন।"] },
        { heading: "কাগজপত্র, টাকা ও ডিভাইস", bullets: ["ছবিযুক্ত পরিচয়পত্র এবং পরিবহন ও থাকার বুকিং নিশ্চিতকরণ।", "হোটেলের ফোন নম্বর, সংরক্ষিত মানচিত্রের পিন এবং অফলাইন দিকনির্দেশ।", "স্থানীয় যানবাহন ও ছোট দোকানের জন্য ছোট নোটের নগদ টাকা; কার্ড নিরাপদে রাখুন।", "ফোনের চার্জার, পাওয়ার ব্যাংক ও প্রয়োজনীয় চার্জিং অ্যাডাপ্টার।", "গুরুত্বপূর্ণ কাগজের কপি মূল কাগজ থেকে আলাদা স্থানে রাখুন।"] },
        { heading: "নৌভ্রমণ বা শিশু নিয়ে গেলে", paragraphs: ["নৌভ্রমণে লাইফ জ্যাকেট দেওয়া ও পরা নিশ্চিত করুন, হাত খালি রাখুন এবং অপারেটরের নির্দেশনা মানুন। বের হওয়ার আগে আবহাওয়া, জোয়ার, রুট ও ফেরার সময় জেনে নিন। অবস্থা ঝুঁকিপূর্ণ বা ব্যবস্থা অস্পষ্ট হলে যাবেন না।", "শিশুদের জন্য পরিচিত নাশতা, অতিরিক্ত কাপড়, নিয়মিত ওষুধ ও ওয়াইপস রাখুন। কেউ আলাদা হয়ে গেলে কোথায় দেখা করবেন ঠিক করুন। পানির কাছে শিশুদের কাছাকাছি রাখুন এবং সৈকতের স্থানীয় নির্দেশনা মানুন।"] },
        { heading: "যাত্রার আগের রাতের চেকলিস্ট", bullets: ["বাসের সময়, টার্মিনাল, আসন, লাগেজের নিয়ম এবং ফেরার টিকিট নিশ্চিত করুন।", "সর্বশেষ আবহাওয়া ও প্রাসঙ্গিক উপকূলীয় বা সামুদ্রিক সতর্কতা দেখুন।", "ডিভাইস চার্জ করুন, অফলাইন মানচিত্র নামান এবং দলের সঙ্গে ভ্রমণসূচি ভাগ করুন।", "পানি, ওষুধ, মূল্যবান জিনিস ও একটি হালকা কাপড় হাতব্যাগে রাখুন।", "হোটেলে পৌঁছানোর সময়, চেক-ইন ও যাওয়ার পথ নিশ্চিত করুন।"] },
      ],
    },
  },
  budget: {
    en: {
      title: "Kuakata Trip Budget: Estimated Costs for Couples, Families & Groups",
      description: "Estimate a Kuakata trip budget for couples, families, and groups with clear room, bus, food, and local transport assumptions.",
      sections: [
        { heading: "How much does a Kuakata trip cost?", paragraphs: ["Your Kuakata trip budget depends on transport class, room choice, meal preferences, and how many local trips you add. The examples below estimate a 2-day, 1-night trip from Dhaka using ordinary intercity bus travel and currently published Hotel Silver Pearl room rates. Treat them as planning examples, not a quote: confirm all live fares and room availability for your dates.", "The room-rate baseline uses Hotel Silver Pearl’s published net rates through November 20, 2026: Deluxe BDT 2,475, Super Deluxe BDT 2,888 (both for up to two guests), and Family Deluxe BDT 3,301 (up to three guests) per room per night. Rates, included services, and offers can change. Buffet breakfast is listed as included on the hotel’s rate page."] },
        { heading: "Sample 2-day, 1-night budgets", paragraphs: ["These ranges assume round-trip standard bus fare of approximately BDT 1,600–2,000 per traveler based on recent published Dhaka–Kuakata fares; food beyond included breakfast at BDT 800–1,500 per person; and a shared local transport/activity allowance. A September 2026 report recorded operator fares around BDT 990 one way. Bus operators may charge different fares for AC coaches, holidays, seat configuration, and fare updates. Confirm the actual ticket price before booking.", "Couple: approximately BDT 8,000–13,000 total for two people sharing a two-person room. Family of four: approximately BDT 17,000–27,000, assuming a Family Deluxe room plus a second room or other suitable occupancy arrangement. Group of six: approximately BDT 24,000–37,000, assuming two Family Deluxe rooms. These examples include lodging, round-trip bus estimates, meals beyond the included breakfast, and a modest shared local transport/activity allowance. They exclude shopping, premium seafood orders, private vehicle hire from Dhaka, and optional boat-trip charges."] },
        { heading: "Budget breakdown: what to include", bullets: ["Transport: return bus tickets for every traveler, Dhaka terminal transfers, and any extra baggage or seat-class costs.", "Accommodation: room count based on the hotel’s maximum occupancy, total taxes/charges, and holiday rates.", "Meals: subtract any included breakfast, then budget for lunch, dinner, snacks, and drinking water.", "Local rides and activities: agree fares before starting, and ask separately about boat hire, guide charges, or entry fees.", "Buffer: keep 10–15% extra for delays, price changes, an additional meal, or an unplanned transfer."] },
        { heading: "Ways to control your Kuakata travel costs", paragraphs: ["Travel on a weekday outside major holidays if your dates are flexible. Book return transport and the room early for busy dates, compare the total room price rather than the starting rate, and choose activities that fit your group instead of paying for a rushed full-day itinerary.", "Families and groups can reduce per-person room costs by sharing rooms within the stated occupancy limits. Do not exceed the room’s maximum guest count without written confirmation. Carry some cash for local purchases but ask fares before rides. If you are driving, compare fuel, tolls, parking, and driver rest costs against bus tickets."] },
        { heading: "Get a current quote before you go", paragraphs: ["The budget above is date-sensitive. Recheck bus fares after any government fare revision and confirm the hotel’s current rates, room capacity, breakfast inclusion, and cancellation terms. Our <Link href=\"/en/rooms\">room and rate page</Link> shows current published options, and the <Link href=\"/en/blog/dhaka-to-kuakata\">Dhaka to Kuakata transport guide</Link> explains route choices."] },
      ],
    },
    bn: {
      title: "কুয়াকাটা ভ্রমণের আনুমানিক বাজেট: দম্পতি, পরিবার ও দলের খরচ",
      description: "রুম, বাস, খাবার ও স্থানীয় যাতায়াতের স্পষ্ট হিসাবসহ দম্পতি, পরিবার ও দলের কুয়াকাটা ভ্রমণ বাজেট করুন।",
      sections: [
        { heading: "কুয়াকাটা ভ্রমণে কত খরচ হয়?", paragraphs: ["কুয়াকাটা ভ্রমণের বাজেট নির্ভর করে বাসের ধরন, রুম, খাবারের পছন্দ এবং স্থানীয়ভাবে কতগুলো জায়গায় যাবেন তার ওপর। নিচের উদাহরণে ঢাকা থেকে সাধারণ দূরপাল্লার বাসে ২ দিন ১ রাতের ভ্রমণ এবং Hotel Silver Pearl-এর বর্তমানে প্রকাশিত রুম ভাড়া ধরা হয়েছে। এগুলো পরিকল্পনার নমুনা, চূড়ান্ত কোটেশন নয়—নিজের তারিখের ভাড়া ও রুম নিশ্চিত করুন।", "রুমের হিসাব Hotel Silver Pearl-এর ২০ নভেম্বর ২০২৬ পর্যন্ত প্রকাশিত নেট মূল্য ধরে: ডিলাক্স ২,৪৭৫ টাকা, সুপার ডিলাক্স ২,৮৮৮ টাকা (দুটিই সর্বোচ্চ ২ জন) এবং ফ্যামিলি ডিলাক্স ৩,৩০১ টাকা (সর্বোচ্চ ৩ জন), প্রতি রুম প্রতি রাত। ভাড়া, অন্তর্ভুক্ত সুবিধা ও অফার বদলাতে পারে। হোটেলের মূল্যতালিকায় বুফে নাশতা অন্তর্ভুক্ত বলা আছে।"] },
        { heading: "২ দিন ১ রাতের নমুনা বাজেট", paragraphs: ["এই হিসাব জনপ্রতি প্রায় ১,৬০০–২,০০০ টাকা ঢাকা–কুয়াকাটা আসা-যাওয়ার সাধারণ বাসভাড়া, অন্তর্ভুক্ত নাশতার বাইরে জনপ্রতি ৮০০–১,৫০০ টাকা খাবার এবং ভাগাভাগি স্থানীয় যাতায়াত/কার্যক্রমের বরাদ্দ ধরে করা। ২০২৬ সালের সেপ্টেম্বরে প্রকাশিত একটি প্রতিবেদনে একমুখী ভাড়া প্রায় ৯৯০ টাকা উল্লেখ করা হয়েছিল। এসি বাস, ছুটি, আসন বিন্যাস ও ভাড়া সমন্বয়ে অপারেটরের দাম আলাদা হতে পারে। বুকিংয়ের আগে প্রকৃত টিকিটের দাম নিশ্চিত করুন।", "দম্পতি: দুজনের রুম ভাগ করে মোট আনুমানিক ৮,০০০–১৩,০০০ টাকা। চারজনের পরিবার: ফ্যামিলি ডিলাক্সের সঙ্গে আরেকটি রুম বা উপযুক্ত অতিথি বিন্যাস ধরে আনুমানিক ১৭,০০০–২৭,০০০ টাকা। ছয়জনের দল: দুটি ফ্যামিলি ডিলাক্স রুম ধরে আনুমানিক ২৪,০০০–৩৭,০০০ টাকা। এতে থাকা, বাসে আসা-যাওয়া, অন্তর্ভুক্ত নাশতার বাইরের খাবার এবং সীমিত স্থানীয় যাতায়াত/কার্যক্রম ধরা হয়েছে। কেনাকাটা, দামী সামুদ্রিক খাবার, ঢাকা থেকে ব্যক্তিগত গাড়ি এবং ঐচ্ছিক নৌভ্রমণের খরচ ধরা হয়নি।"] },
        { heading: "বাজেটের খাতগুলো আলাদা করে ধরুন", bullets: ["যাতায়াত: প্রত্যেকের আসা-যাওয়ার বাসের টিকিট, ঢাকার টার্মিনালে যাতায়াত এবং অতিরিক্ত লাগেজ বা আসনশ্রেণির খরচ।", "থাকা: সর্বোচ্চ অতিথি সংখ্যার ভিত্তিতে রুমের সংখ্যা, কর/চার্জসহ মোট দাম এবং ছুটির দিনের ভাড়া।", "খাবার: অন্তর্ভুক্ত নাশতার খরচ বাদ দিয়ে দুপুর-রাতের খাবার, নাশতা ও পানীয় জল।", "স্থানীয় যাতায়াত ও কার্যক্রম: রওনার আগে ভাড়া ঠিক করুন; নৌকা, গাইড বা প্রবেশ ফি আলাদা জেনে নিন।", "জরুরি বরাদ্দ: দেরি, মূল্য পরিবর্তন, অতিরিক্ত খাবার বা বাড়তি যাত্রার জন্য ১০–১৫% রাখুন।"] },
        { heading: "কুয়াকাটা ভ্রমণের খরচ কমানোর উপায়", paragraphs: ["তারিখে নমনীয় হলে বড় ছুটি বাদ দিয়ে কর্মদিবসে যান। ব্যস্ত সময়ে রুম ও ফেরার টিকিট আগে কাটুন, সর্বনিম্ন শুরুর দাম নয় বরং মোট রুম ভাড়া তুলনা করুন, এবং তাড়াহুড়ো করে পুরো দিনের প্যাকেজ না নিয়ে দলের উপযোগী কাজ বেছে নিন।", "পরিবার ও দল নির্ধারিত অতিথি সীমার মধ্যে রুম ভাগ করে জনপ্রতি থাকার খরচ কমাতে পারে। লিখিত নিশ্চয়তা ছাড়া রুমের সর্বোচ্চ অতিথি সংখ্যা অতিক্রম করবেন না। স্থানীয় কেনাকাটার জন্য নগদ রাখুন, তবে যাত্রার আগে ভাড়া জেনে নিন। নিজস্ব গাড়ি হলে জ্বালানি, টোল, পার্কিং ও চালকের বিশ্রামের খরচ বাসভাড়ার সঙ্গে তুলনা করুন।"] },
        { heading: "যাওয়ার আগে হালনাগাদ দাম জেনে নিন", paragraphs: ["এই বাজেট তারিখভেদে বদলাতে পারে। সরকারি ভাড়া সমন্বয়ের পর বাসের টিকিটের দাম আবার দেখুন এবং হোটেলের বর্তমান ভাড়া, রুমে অতিথি সীমা, নাশতা অন্তর্ভুক্ত কি না ও বাতিলের শর্ত নিশ্চিত করুন। আমাদের <Link href=\"/bn/rooms\">রুম ও ভাড়ার পাতা</Link> এবং <Link href=\"/bn/blog/dhaka-to-kuakata\">ঢাকা থেকে কুয়াকাটা যাতায়াত গাইড</Link> দেখুন।"] },
      ],
    },
  },
};

export function getPlanningPost(locale: Locale, slug: string): Copy | undefined {
  const post = (Object.keys(planningPosts) as PlanningPost[]).find((key) => planningPosts[key] === slug);
  return post ? articles[post][locale] : undefined;
}

const sourceLinks = [
  { href: "https://www.bmd.gov.bd/file/2025/11/20/pdf/195905.pdf", en: "Bangladesh Meteorological Department — Bangladesh climate and seasons", bn: "বাংলাদেশ আবহাওয়া অধিদপ্তর — জলবায়ু ও ঋতু" },
  { href: "https://beautifulbangladesh.gov.bd/district-destination/patuakhali/sea-beaches/20", en: "Bangladesh Tourism Board — Kuakata", bn: "বাংলাদেশ ট্যুরিজম বোর্ড — কুয়াকাটা" },
  { href: "https://www.bmd.gov.bd/web/en/climate", en: "Bangladesh Meteorological Department — Climate data", bn: "বাংলাদেশ আবহাওয়া অধিদপ্তর — জলবায়ু তথ্য" },
  { href: "https://hspkuakata.com/en/rooms/", en: "Hotel Silver Pearl — Rooms and rates", bn: "Hotel Silver Pearl — রুম ও ভাড়া" },
  { href: "https://www.bssnews.net/news/427466", en: "Bangladesh Sangbad Sangstha — revised bus fares", bn: "বাংলাদেশ সংবাদ সংস্থা — বাসভাড়া সমন্বয়" },
  { href: "https://www.tbsnews.net/bangladesh/transport/what-can-i-do-i-have-go-home-passengers-feel-pinch-higher-fares-1553046", en: "The Business Standard — observed Dhaka–Kuakata bus fares", bn: "দ্য বিজনেস স্ট্যান্ডার্ড — ঢাকা–কুয়াকাটা বাসের প্রকাশিত ভাড়া" },
];

export function KuakataPlanningArticle({ locale, post }: { locale: Locale; post: PlanningPost }) {
  const bn = locale === "bn";
  const copy = articles[post][locale];
  const url = `${hotel.website.replace(/\/$/, "")}/${locale}/blog/${planningPosts[post]}/`;
  return <article lang={bn ? "bn" : "en"}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting", headline: copy.title,
      description: copy.description, inLanguage: bn ? "bn-BD" : "en", datePublished: "2026-10-03",
      dateModified: "2026-10-03", mainEntityOfPage: url,
      author: { "@type": "Organization", name: hotel.name },
      publisher: { "@id": `${hotel.website.replace(/\/$/, "")}/#hotel` },
    }) }} />
    <Container className="max-w-4xl py-12 md:py-16">
      <nav aria-label={bn ? "ব্রেডক্রাম্ব" : "Breadcrumb"} className="mb-8 text-sm text-(--color-ink)/60">
        <Link className="hover:text-(--color-navy-800)" href={`/${locale}/blog`}>{bn ? "ভ্রমণ ব্লগ" : "Blog"}</Link>
        <span aria-hidden="true" className="mx-2">/</span><span>{copy.title}</span>
      </nav>
      <header className="border-b border-(--color-navy-800)/10 pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-(--color-gold-600)">{bn ? "কুয়াকাটা · ভ্রমণ পরিকল্পনা" : "Kuakata · Trip planning"}</p>
        <h1 className="mt-3 font-display text-4xl leading-tight text-(--color-navy-800) md:text-5xl">{copy.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-(--color-ink)/75">{copy.description}</p>
        <p className="mt-4 text-xs text-(--color-ink)/55">{bn ? "তথ্য যাচাই: ৩ অক্টোবর ২০২৬" : "Information checked: October 3, 2026"}</p>
      </header>
      <div className="guide-prose mt-9 space-y-9 text-base leading-8 text-(--color-ink)/85">
        {copy.sections.map((section) => <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((paragraph, index) => <p key={index}>{renderLinks(paragraph)}</p>)}
          {section.bullets && <ul>{section.bullets.map((bullet, index) => <li key={index}>{renderLinks(bullet)}</li>)}</ul>}
        </section>)}
        {post === "budget" && <section>
          <h2>{bn ? "রুমভাড়া: নমুনা হিসাবের ভিত্তি" : "Room rates used in the example"}</h2>
          <ul>{rooms.map((room) => <li key={room.id}>{bn ? `${room.id === "family-deluxe" ? "ফ্যামিলি ডিলাক্স" : room.id === "super-deluxe" ? "সুপার ডিলাক্স" : "ডিলাক্স"}: ${room.netBdt.toLocaleString("en-BD")} টাকা প্রতি রাত, সর্বোচ্চ ${room.guests} জন।` : `${room.id === "family-deluxe" ? "Family Deluxe" : room.id === "super-deluxe" ? "Super Deluxe" : "Deluxe"}: BDT ${room.netBdt.toLocaleString("en-BD")} per night, up to ${room.guests} guests.`}</li>)}</ul>
          <p>{bn ? `এই প্রকাশিত অফারের মেয়াদ ${tariffValidUntil} পর্যন্ত; বর্তমান ভাড়া বুকিংয়ের আগে নিশ্চিত করুন।` : `These published offer rates are valid through ${tariffValidUntil}; confirm current pricing before booking.`}</p>
        </section>}
      </div>
      {post === "family" && <nav aria-label={bn ? "সম্পর্কিত পারিবারিক ভ্রমণ গাইড" : "Related Kuakata family travel guides"} className="mt-10 rounded-2xl bg-(--color-sand-100) p-6">
        <h2 className="font-display text-xl text-(--color-navy-800)">{bn ? "সম্পর্কিত কুয়াকাটা পারিবারিক গাইড" : "Related Kuakata family guides"}</h2>
        <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
          <li><Link className="underline decoration-(--color-gold-500) underline-offset-4" href={`/${locale}/blog/kuakata-with-children`}>{bn ? "শিশুদের নিয়ে কুয়াকাটায় কার্যক্রম ও ব্যবহারিক টিপস" : "Kuakata with children: activities and practical tips"}</Link></li>
          <li><Link className="underline decoration-(--color-gold-500) underline-offset-4" href={`/${locale}/blog/kuakata-family-hotel-guide`}>{bn ? "পরিবারের জন্য কুয়াকাটা হোটেল গাইড" : "Kuakata hotel guide for families"}</Link></li>
          <li><Link className="underline decoration-(--color-gold-500) underline-offset-4" href={`/${locale}/blog/kuakata-weekend-itinerary`}>{bn ? "২ দিন ১ রাতের কুয়াকাটা ভ্রমণসূচি" : "Kuakata weekend itinerary: 2 days and 1 night"}</Link></li>
        </ul>
      </nav>}
      <section className="mt-12 rounded-2xl bg-(--color-navy-800) p-7 text-white md:p-9">
        <h2 className="font-display text-2xl">{bn ? "কুয়াকাটা ভ্রমণের পরিকল্পনা করুন" : "Plan your Kuakata stay"}</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-white/75">{bn ? "Hotel Silver Pearl-এ সৈকত থেকে অল্প হাঁটার দূরত্বে রুম, বুফে নাশতা, ফ্রি ওয়াই-ফাই ও গাড়ি পার্কিং রয়েছে। তারিখের প্রাপ্যতা ও মোট ভাড়া নিশ্চিত করুন।" : "Hotel Silver Pearl offers rooms a short walk from the beach, buffet breakfast, free Wi-Fi, and car parking. Confirm availability and the total rate for your dates."}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="rounded-full bg-(--color-gold-400) px-5 py-3 text-sm font-medium text-(--color-navy-900) hover:bg-(--color-gold-300)" href={`/${locale}/rooms`}>{bn ? "রুম ও ভাড়া দেখুন" : "View rooms & rates"}</Link>
          <Link className="rounded-full border border-white/30 px-5 py-3 text-sm text-white hover:bg-white/10" href={`/${locale}/contact`}>{bn ? "যোগাযোগ করুন" : "Contact the hotel"}</Link>
        </div>
      </section>
      <aside className="mt-12 border-t border-(--color-navy-800)/10 pt-7">
        <h2 className="font-display text-xl text-(--color-navy-800)">{bn ? "তথ্যসূত্র" : "Sources"}</h2>
        <ul className="mt-4 grid gap-2 text-sm text-(--color-ink)/75 sm:grid-cols-2">
          {sourceLinks.filter((source) => post === "budget" ? source.href.includes("hspkuakata") || source.href.includes("bssnews") || source.href.includes("tbsnews") : source.href.includes("bmd.gov.bd") || source.href.includes("beautifulbangladesh")).map((source) => <li key={source.href}><a className="underline decoration-(--color-gold-500) underline-offset-4" href={source.href} target="_blank" rel="noreferrer noopener">{bn ? source.bn : source.en} ↗</a></li>)}
        </ul>
        <p className="mt-4 text-xs leading-relaxed text-(--color-ink)/55">{bn ? "বাসের সময়, ভাড়া, আবহাওয়া, জোয়ার ও স্থানীয় প্রবেশের নিয়ম বদলাতে পারে। রওনা হওয়ার আগে অপারেটর ও স্থানীয় কর্তৃপক্ষের কাছ থেকে হালনাগাদ তথ্য নিশ্চিত করুন।" : "Bus schedules and fares, weather, tides, and local access rules can change. Confirm current details with operators and local authorities before departure."}</p>
      </aside>
    </Container>
  </article>;
}

function renderLinks(text: string) {
  const parts = text.split(/(<Link href="[^"]+">.*?<\/Link>)/g);
  return parts.map((part, index) => {
    const match = part.match(/^<Link href="([^"]+)">(.*?)<\/Link>$/);
    return match ? <Link key={index} className="underline decoration-(--color-gold-500) underline-offset-4" href={match[1]}>{match[2]}</Link> : part;
  });
}
