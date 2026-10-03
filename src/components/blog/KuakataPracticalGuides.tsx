import Link from "next/link";
import { hotel } from "@/data/hotel";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/i18n/locales";

export const practicalPosts = {
  firstTime: "kuakata-travel-tips-first-time-visitors",
  holidays: "kuakata-holiday-travel-planning",
  monsoon: "kuakata-monsoon-travel-guide",
  accessibility: "kuakata-accessibility-mobility-guide",
  faqs: "kuakata-travel-faqs",
} as const;
export type PracticalPost = keyof typeof practicalPosts;

type Section = { heading: string; paragraphs?: string[]; bullets?: string[] };
type Copy = { title: string; description: string; sections: Section[] };

const articles: Record<PracticalPost, Record<Locale, Copy>> = {
  firstTime: {
    en: {
      title: "Kuakata Travel Tips for First-Time Visitors",
      description: "Plan your first trip to Kuakata with practical advice on transport, timing, beach safety, local travel, accommodation, and packing.",
      sections: [
        { heading: "Start with a realistic Kuakata itinerary", paragraphs: ["For a first visit, plan at least two days if you want time for the beach, sunrise or sunset, and one or two nearby attractions. A one-night weekend can work, but it leaves less room for road delays or changing weather. Pick the experiences that matter most and leave unplanned time between them.", "The main beach, Jhau Forest, Gangamati, Misripara, and Fatrar Char do not all fit comfortably into a short stay. A boat trip needs extra coordination and depends on local conditions. Use our <Link href=\"/en/blog/kuakata-attractions-time-guide\">Kuakata attractions guide</Link> to decide how much time to allow."] },
        { heading: "Choose your travel route and confirm the details", paragraphs: ["Direct buses from Dhaka are a common way to reach Kuakata. A private car gives more control over stops, while a launch followed by a road transfer takes more coordination. Departure points, routes, ticket prices, and travel times can change, so verify them with the operator for your date and confirm exactly where you will be dropped.", "Book the return leg as well as the outbound journey during busy weekends and holidays. Save tickets, operator numbers, your hotel map pin, and arrival instructions where you can access them offline. See our <Link href=\"/en/blog/dhaka-to-kuakata\">Dhaka to Kuakata transport guide</Link> for route-planning advice."] },
        { heading: "Pick dates with weather and crowds in mind", paragraphs: ["The cooler, drier part of the year is popular for beach visits, but weekends and public holidays can be busy. Bangladesh Meteorological Department describes June through September as the monsoon season. In wetter months, build flexibility into your plan and check forecasts and marine warnings before traveling or arranging a boat excursion.", "For sunrise and sunset, look up the times for your exact date and arrive early. Clouds can hide the sun, so avoid making the whole trip depend on one perfect view."] },
        { heading: "Stay comfortable and travel respectfully", bullets: ["Confirm your room’s location, occupancy, check-in, included meals, total rate, and cancellation terms before paying.", "Ask local transport providers for the fare and return arrangement before you start a ride.", "At the beach, follow local safety guidance; conditions vary by tide and location, and swimming is not safe everywhere.", "At temples and in local villages, dress respectfully, follow caretakers’ instructions, and ask before taking photographs.", "Carry drinking water, sun protection, comfortable footwear, needed medicines, and some cash for small purchases."] },
        { heading: "What first-time visitors often overlook", paragraphs: ["Kuakata is a coastal destination, so a clear sky or boat departure cannot be guaranteed. Keep one low-key alternative for rain or rough conditions. Allow time to return from farther attractions and reach your bus terminal, especially if you are leaving on the same day.", "If this is your first visit with children, older relatives, or someone with limited mobility, confirm transport, walking distances, and room features directly with providers rather than assuming access from a photo. For a useful packing list, read our <Link href=\"/en/blog/kuakata-travel-checklist\">Kuakata travel checklist</Link>."] },
      ],
    },
    bn: {
      title: "প্রথমবার কুয়াকাটা ভ্রমণের টিপস",
      description: "প্রথম কুয়াকাটা ভ্রমণের জন্য যাতায়াত, সময়, সৈকত নিরাপত্তা, স্থানীয় চলাচল, থাকা ও প্যাকিংয়ের পরামর্শ।",
      sections: [
        { heading: "বাস্তবসম্মত ভ্রমণসূচি দিয়ে শুরু করুন", paragraphs: ["সৈকত, সূর্যোদয় বা সূর্যাস্ত এবং কাছের এক-দুটি স্থান দেখতে প্রথমবার অন্তত দুই দিন রাখুন। এক রাতের উইকএন্ডে ঘোরা যায়, তবে সড়কযাত্রায় দেরি বা আবহাওয়া বদলের জন্য সময় কম থাকে। সবচেয়ে গুরুত্বপূর্ণ অভিজ্ঞতাগুলো বেছে নিয়ে কাজের মাঝে অবসর রাখুন।", "মূল সৈকত, ঝাউবন, গঙ্গামতি, মিশ্রিপাড়া ও ফাতরার চর—সবগুলো অল্প সময়ে স্বচ্ছন্দে ঘোরা যায় না। নৌভ্রমণে বাড়তি ব্যবস্থা লাগে এবং স্থানীয় পরিস্থিতির ওপর নির্ভর করে। কত সময় রাখবেন জানতে <Link href=\"/bn/blog/kuakata-attractions-time-guide\">কুয়াকাটার দর্শনীয় স্থান গাইড</Link> দেখুন।"] },
        { heading: "যাতায়াতের পথ বেছে তথ্য নিশ্চিত করুন", paragraphs: ["ঢাকা থেকে সরাসরি বাসে যাওয়া কুয়াকাটার সাধারণ উপায়। নিজস্ব গাড়িতে বিরতির ওপর নিয়ন্ত্রণ থাকে, আর লঞ্চের পর সড়কপথে গেলে আলাদা সংযোগের ব্যবস্থা করতে হয়। ছাড়ার স্থান, রুট, টিকিটের দাম ও যাত্রার সময় বদলাতে পারে—তারিখ অনুযায়ী অপারেটরের সঙ্গে নিশ্চিত করুন এবং বাস কোথায় নামাবে জেনে নিন।", "ব্যস্ত সপ্তাহান্ত ও ছুটিতে যাওয়া-আসার দুটো টিকিটই আগে বুক করুন। টিকিট, অপারেটরের ফোন, হোটেলের মানচিত্রের পিন ও পৌঁছানোর নির্দেশনা অফলাইনে রাখুন। রুটের পরামর্শের জন্য <Link href=\"/bn/blog/dhaka-to-kuakata\">ঢাকা থেকে কুয়াকাটা যাতায়াত গাইড</Link> পড়ুন।"] },
        { heading: "আবহাওয়া ও ভিড় বুঝে তারিখ নিন", paragraphs: ["বছরের শীতল ও শুষ্ক সময়ে সৈকত ভ্রমণ জনপ্রিয়, তবে সপ্তাহান্ত ও সরকারি ছুটিতে ভিড় হতে পারে। বাংলাদেশ আবহাওয়া অধিদপ্তর জুন থেকে সেপ্টেম্বরকে বর্ষাকাল বলে। বৃষ্টির মাসে পরিকল্পনা নমনীয় রাখুন এবং যাত্রা বা নৌভ্রমণের আগে পূর্বাভাস ও সামুদ্রিক সতর্কতা দেখুন।", "সূর্যোদয়-সূর্যাস্ত দেখতে আপনার তারিখের সময় জেনে আগে পৌঁছান। মেঘে সূর্য আড়াল হতে পারে, তাই পুরো ভ্রমণ একটি নির্দিষ্ট দৃশ্যের ওপর নির্ভর করাবেন না।"] },
        { heading: "স্বাচ্ছন্দ্যে থাকুন ও সম্মান দেখিয়ে ঘুরুন", bullets: ["টাকা দেওয়ার আগে রুমের অবস্থান, অতিথি সীমা, চেক-ইন, খাবার অন্তর্ভুক্ত কি না, মোট দাম ও বাতিলের শর্ত নিশ্চিত করুন।", "স্থানীয় যানবাহনে ওঠার আগে ভাড়া ও ফেরার ব্যবস্থা ঠিক করুন।", "সৈকতে স্থানীয় নিরাপত্তা নির্দেশনা মানুন; জোয়ার ও অবস্থান অনুযায়ী পরিস্থিতি বদলায়, সব জায়গায় সাঁতার নিরাপদ নয়।", "মন্দির ও গ্রামে শালীন পোশাক পরুন, দায়িত্বপ্রাপ্তদের নির্দেশনা মানুন এবং ছবি তোলার আগে অনুমতি নিন।", "পানি, রোদ থেকে সুরক্ষা, আরামদায়ক জুতা, প্রয়োজনীয় ওষুধ ও ছোট কেনাকাটার নগদ টাকা রাখুন।"] },
        { heading: "প্রথমবারের ভ্রমণকারীরা যা ভুলে যেতে পারেন", paragraphs: ["কুয়াকাটা উপকূলীয় গন্তব্য—পরিষ্কার আকাশ বা নৌযাত্রা নিশ্চিত নয়। বৃষ্টি বা উত্তাল অবস্থার জন্য সহজ বিকল্প রাখুন। দূরের দর্শনীয় স্থান থেকে ফিরে বাস টার্মিনালে পৌঁছানোর জন্য যথেষ্ট সময় রাখুন, বিশেষত একই দিনে ফিরলে।", "শিশু, বয়স্ক আত্মীয় বা চলাফেরায় অসুবিধা আছে এমন কাউকে নিয়ে গেলে ছবি দেখে সুবিধা অনুমান না করে পরিবহন, হাঁটার দূরত্ব ও রুমের বৈশিষ্ট্য সংশ্লিষ্ট প্রতিষ্ঠানের সঙ্গে নিশ্চিত করুন। কী নেবেন জানতে <Link href=\"/bn/blog/kuakata-travel-checklist\">কুয়াকাটা ভ্রমণ চেকলিস্ট</Link> দেখুন।"] },
      ],
    },
  },
  holidays: {
    en: {
      title: "Visiting Kuakata During Holidays: Transport and Hotel Planning",
      description: "Plan a Kuakata holiday trip with a practical booking timeline for buses, rooms, local transport, arrival times, and backup plans.",
      sections: [
        { heading: "Why holiday planning matters in Kuakata", paragraphs: ["Public holidays and long weekends concentrate travel demand into a few dates. Direct buses, preferred departure times, popular room types, and local rides may become harder to arrange close to departure. Holiday operations and ticket-sale rules can also differ by provider and year, so do not rely on a previous season’s timetable.", "Start by choosing your travel dates and deciding whether everyone can shift by a day. Leaving before or after the busiest departure window may give you more options, but check your work, school, and return commitments first."] },
        { heading: "Book transport before the seats you need disappear", paragraphs: ["Check current departure and return options directly with bus operators or their authorized booking channels. Confirm the boarding terminal in Dhaka, Kuakata drop-off point, coach type, luggage allowance, fare, and rules for changing or refunding a ticket. Save the ticket and operator contact number.", "If traveling by private car, plan fuel, tolls, driver rest, and rest stops ahead of time. For a launch-plus-road journey, verify both legs separately and leave a generous transfer buffer. The <Link href=\"/en/blog/dhaka-to-kuakata\">Dhaka to Kuakata travel guide</Link> explains the main route options."] },
        { heading: "Reserve accommodation with clear terms", paragraphs: ["For holiday dates, contact the hotel early and ask for the total rate for your exact dates and guest count. Confirm room occupancy, bed arrangement, included breakfast, check-in time, deposit, cancellation terms, and whether parking or luggage storage is available. Get the confirmation in writing and keep the hotel’s direct contact details.", "Do not assume a room shown online is still available or that a published starting rate applies to a holiday. Reconfirm your reservation and expected arrival time a few days before traveling. Compare room options on our <Link href=\"/en/rooms\">rooms and rates page</Link>."] },
        { heading: "Plan the last mile and your arrival", paragraphs: ["Ask where your bus will stop and how you will reach the hotel from there. During busy periods, local rides can be in higher demand; agree the fare before starting and arrange a return ride for a distant attraction. If your bus arrives before check-in, ask whether you can leave bags or enter the room early—do not assume it is included.", "Keep a flexible first few hours in case the bus is late. Share the hotel address and arrival plan with your group, and save directions offline in case mobile data is unreliable."] },
        { heading: "Avoid overloading a holiday itinerary", bullets: ["Reserve the first afternoon for check-in, rest, and a nearby beach walk.", "Choose one farther attraction per half-day instead of stacking several trips.", "Book a boat only after checking the weather, tide, operator, life jackets, and return plan.", "Leave a generous buffer before your return bus and keep an alternative if an attraction is crowded or closed."] },
        { heading: "Holiday planning checklist", paragraphs: ["Before you leave, reconfirm outbound and return tickets, hotel booking, transport from the drop-off point, and current weather or marine advisories. Carry some cash, water, needed medicines, and a charged phone. For a packing list, see our <Link href=\"/en/blog/kuakata-travel-checklist\">Kuakata travel checklist</Link>; for a shorter holiday schedule, use the <Link href=\"/en/blog/kuakata-weekend-itinerary\">2-day, 1-night itinerary</Link>."] },
      ],
    },
    bn: {
      title: "ছুটিতে কুয়াকাটা ভ্রমণ: বাস ও হোটেল কীভাবে পরিকল্পনা করবেন",
      description: "ছুটির সময় কুয়াকাটা ভ্রমণে বাস, রুম, স্থানীয় যাতায়াত, পৌঁছানোর সময় ও বিকল্প পরিকল্পনা আগে ঠিক করুন।",
      sections: [
        { heading: "ছুটিতে কুয়াকাটা ভ্রমণের পরিকল্পনা জরুরি কেন", paragraphs: ["সরকারি ছুটি ও লম্বা সপ্তাহান্তে অল্প কয়েকটি তারিখে ভ্রমণের চাপ বাড়ে। যাত্রার কাছাকাছি সময়ে সরাসরি বাস, পছন্দের ছাড়ার সময়, জনপ্রিয় রুম ও স্থানীয় যানবাহনের ব্যবস্থা কঠিন হতে পারে। ছুটির সময় পরিবহন অপারেটরভেদে ব্যবস্থা ও টিকিট বিক্রির নিয়মও বদলায়; আগের বছরের সময়সূচির ওপর নির্ভর করবেন না।", "আগে তারিখ ঠিক করুন এবং দলের সবাই এক দিন আগে বা পরে যেতে পারবেন কি না দেখুন। ব্যস্ত যাত্রার দিনের আগে বা পরে গেলে বিকল্প বেশি পেতে পারেন, তবে কাজ, স্কুল ও ফেরার বাধ্যবাধকতা মিলিয়ে নিন।"] },
        { heading: "প্রয়োজনীয় আসন শেষ হওয়ার আগে পরিবহন বুক করুন", paragraphs: ["বাস অপারেটর বা অনুমোদিত বুকিং মাধ্যমে বর্তমান যাওয়া-আসার সময় জেনে নিন। ঢাকায় ওঠার টার্মিনাল, কুয়াকাটায় নামার স্থান, বাসের ধরন, লাগেজের নিয়ম, ভাড়া এবং টিকিট বদল বা ফেরতের শর্ত নিশ্চিত করুন। টিকিট ও অপারেটরের নম্বর সংরক্ষণ করুন।", "নিজস্ব গাড়িতে গেলে জ্বালানি, টোল, চালকের বিশ্রাম ও বিরতির পরিকল্পনা আগে করুন। লঞ্চ ও সড়কপথে গেলে দুই অংশ আলাদাভাবে নিশ্চিত করে সংযোগের মাঝে যথেষ্ট সময় রাখুন। প্রধান রুটের জন্য <Link href=\"/bn/blog/dhaka-to-kuakata\">ঢাকা থেকে কুয়াকাটা ভ্রমণ গাইড</Link> দেখুন।"] },
        { heading: "স্পষ্ট শর্তে থাকার জায়গা বুক করুন", paragraphs: ["ছুটির তারিখে আগে হোটেলে যোগাযোগ করে নির্দিষ্ট তারিখ ও অতিথি সংখ্যার মোট ভাড়া জেনে নিন। রুমে অতিথি সীমা, বিছানা, নাশতা অন্তর্ভুক্ত কি না, চেক-ইন, অগ্রিম, বাতিলের শর্ত এবং পার্কিং বা লাগেজ রাখার ব্যবস্থা নিশ্চিত করুন। লিখিত বুকিং নিশ্চিতকরণ নিন এবং সরাসরি যোগাযোগের তথ্য রাখুন।", "অনলাইনে দেখানো রুম তখনও খালি আছে বা প্রারম্ভিক ভাড়া ছুটির দিনেও প্রযোজ্য—এমন ধরে নেবেন না। যাওয়ার কয়েক দিন আগে বুকিং ও পৌঁছানোর সময় আবার নিশ্চিত করুন। আমাদের <Link href=\"/bn/rooms\">রুম ও ভাড়ার পাতা</Link> দেখুন।"] },
        { heading: "শেষ অংশের যাত্রা ও পৌঁছানোর সময় ঠিক করুন", paragraphs: ["বাস কোথায় নামাবে এবং সেখান থেকে হোটেলে কীভাবে যাবেন জেনে নিন। ব্যস্ত সময়ে স্থানীয় যানবাহনের চাহিদা বাড়তে পারে; যাত্রার আগে ভাড়া ঠিক করুন এবং দূরের দর্শনীয় স্থানে গেলে ফেরার যানবাহনও ঠিক করুন। বাস চেক-ইনের আগে পৌঁছালে লাগেজ রাখা বা আগাম রুমে ঢোকা যাবে কি না জিজ্ঞেস করুন—এটি অন্তর্ভুক্ত ধরে নেবেন না।", "বাস দেরি হলে কাজে লাগবে এমন নমনীয় প্রথম কয়েক ঘণ্টা রাখুন। দলের সঙ্গে হোটেলের ঠিকানা ও পৌঁছানোর পরিকল্পনা ভাগ করুন এবং মোবাইল ডেটা না থাকলেও চলবে এমন অফলাইন দিকনির্দেশ সংরক্ষণ করুন।"] },
        { heading: "ছুটির সময় অতিরিক্ত ভ্রমণসূচি এড়ান", bullets: ["প্রথম বিকেল চেক-ইন, বিশ্রাম ও কাছের সৈকতে হাঁটার জন্য রাখুন।", "এক অর্ধদিবসে একটির বেশি দূরের স্থান রাখবেন না।", "নৌভ্রমণের আগে আবহাওয়া, জোয়ার, অপারেটর, লাইফ জ্যাকেট ও ফেরার ব্যবস্থা নিশ্চিত করুন।", "ফেরার বাসের আগে বাড়তি সময় রাখুন এবং কোনো স্থান ভিড় বা বন্ধ থাকলে বিকল্প রাখুন।"] },
        { heading: "ছুটির ভ্রমণ চেকলিস্ট", paragraphs: ["রওনা হওয়ার আগে যাওয়া-আসার টিকিট, হোটেল বুকিং, নামার স্থান থেকে যাতায়াত এবং আবহাওয়া বা সামুদ্রিক সতর্কতা আবার নিশ্চিত করুন। নগদ টাকা, পানি, প্রয়োজনীয় ওষুধ ও চার্জ করা ফোন নিন। কী প্যাক করবেন জানতে <Link href=\"/bn/blog/kuakata-travel-checklist\">কুয়াকাটা ভ্রমণ চেকলিস্ট</Link> এবং অল্প সময়ের পরিকল্পনার জন্য <Link href=\"/bn/blog/kuakata-weekend-itinerary\">২ দিন ১ রাতের ভ্রমণসূচি</Link> দেখুন।"] },
      ],
    },
  },
  monsoon: {
    en: {
      title: "Kuakata Monsoon Travel Guide: What to Expect and Prepare For",
      description: "Visiting Kuakata in the monsoon? Learn what rain, humidity, coastal warnings, flexible sightseeing, and packing mean for your trip.",
      sections: [
        { heading: "What is monsoon season like in Kuakata?", paragraphs: ["Bangladesh Meteorological Department identifies June through September as the monsoon season, with widespread rain and high humidity across the country. Kuakata’s coastal location means conditions can affect beach comfort, roads, boat availability, and sightseeing plans. Rainfall and sea conditions vary from day to day, so use current forecasts rather than assuming every monsoon day will be wet—or safe for an excursion.", "The monsoon can bring dramatic skies and a quieter-feeling trip, but it is not the easiest season for a tightly scheduled beach holiday. Decide whether you are comfortable shifting activities or staying indoors if conditions change."] },
        { heading: "Check weather and marine warnings before travel", paragraphs: ["Before leaving Dhaka, check the Bangladesh Meteorological Department forecast and warnings for the coast. Recheck while in Kuakata, especially before a boat trip, a long ride to a char, or an early beach outing. Follow local authority advice and postpone travel on the water when warnings or unsafe conditions apply.", "Do not rely only on a general phone weather icon. Ask the hotel or local operator about current beach, road, tide, and boat conditions. Confirm cancellation and rescheduling terms before paying for an excursion."] },
        { heading: "Plan a flexible monsoon itinerary", bullets: ["Keep the main beach walk short and choose a safe, accessible area when rain or wind picks up.", "Treat Fatrar Char and other boat outings as optional; confirm conditions and operator availability on the day.", "Pair nearby stops so you can return to your hotel quickly if weather changes.", "Leave spare time between transport connections and do not schedule a long excursion before a fixed return bus.", "Keep an indoor or low-effort backup such as a relaxed meal, rest, or local shopping."] },
        { heading: "What to pack for a rainy Kuakata trip", bullets: ["Light rain jacket or compact umbrella, plus a dry bag for phone and documents.", "Quick-drying clothes, spare socks, sandals with grip, and a change of clothes.", "Waterproof protection for medicines, chargers, and other essentials.", "Insect repellent if you normally use it, personal medicines, and a small first-aid kit.", "A flexible attitude: do not try to recover a missed activity by taking a risk in unsafe weather."] },
        { heading: "Should you visit Kuakata in the monsoon?", paragraphs: ["You can visit if you are comfortable with uncertainty, can change plans, and are not depending on a specific boat or clear-sky view. Travelers whose priority is predictable outdoor time may prefer the cooler, drier months. Families and visitors with mobility needs should be especially careful about wet, sandy, or uneven paths and confirm room and transport arrangements in advance.", "Book accommodation with clear cancellation terms and confirm current services for your dates. Explore our <Link href=\"/en/rooms\">room options</Link>, read the <Link href=\"/en/blog/kuakata-travel-checklist\">packing checklist</Link>, and use the <Link href=\"/en/blog/kuakata-beach-guide\">beach guide</Link> to plan around local conditions."] },
      ],
    },
    bn: {
      title: "বর্ষায় কুয়াকাটা ভ্রমণ গাইড: কী আশা করবেন ও কী প্রস্তুতি নেবেন",
      description: "বর্ষায় কুয়াকাটা গেলে বৃষ্টি, আর্দ্রতা, উপকূলীয় সতর্কতা, নমনীয় ভ্রমণসূচি ও প্যাকিং সম্পর্কে জানুন।",
      sections: [
        { heading: "বর্ষায় কুয়াকাটার আবহাওয়া কেমন?", paragraphs: ["বাংলাদেশ আবহাওয়া অধিদপ্তর জুন থেকে সেপ্টেম্বরকে বর্ষাকাল বলে; এ সময় দেশে বিস্তৃত বৃষ্টি ও উচ্চ আর্দ্রতা থাকে। কুয়াকাটা উপকূলে হওয়ায় সৈকতে স্বাচ্ছন্দ্য, রাস্তা, নৌযান ও দর্শনীয় স্থান ঘোরার পরিকল্পনায় আবহাওয়ার প্রভাব পড়তে পারে। বৃষ্টি ও সমুদ্রের অবস্থা প্রতিদিন বদলায়—বর্ষার প্রতিদিন বৃষ্টি হবেই বা নৌভ্রমণ নিরাপদ, কোনোটিই ধরে নেবেন না; চলতি পূর্বাভাস দেখুন।", "বর্ষায় আকাশের দৃশ্য নাটকীয় হতে পারে এবং ভ্রমণ তুলনামূলক শান্ত লাগতে পারে, তবে খুব আঁটসাঁট সৈকত ভ্রমণসূচির জন্য এটি সহজ ঋতু নয়। আবহাওয়া বদলালে কাজ সরানো বা ঘরে বিশ্রাম নেওয়া আপনার জন্য ঠিক কি না ভেবে তারিখ নিন।"] },
        { heading: "যাত্রার আগে আবহাওয়া ও সামুদ্রিক সতর্কতা দেখুন", paragraphs: ["ঢাকা থেকে রওনা হওয়ার আগে বাংলাদেশ আবহাওয়া অধিদপ্তরের উপকূলীয় পূর্বাভাস ও সতর্কতা দেখুন। কুয়াকাটায় পৌঁছেও, বিশেষত নৌভ্রমণ, চরে দীর্ঘ যাত্রা বা ভোরের সৈকত ভ্রমণের আগে আবার দেখুন। স্থানীয় কর্তৃপক্ষের পরামর্শ মানুন; সতর্কতা বা ঝুঁকিপূর্ণ অবস্থা থাকলে পানিতে যাত্রা পিছিয়ে দিন।", "ফোনের সাধারণ আবহাওয়া আইকনের ওপর নির্ভর করবেন না। সৈকত, রাস্তা, জোয়ার ও নৌযানের বর্তমান অবস্থা হোটেল বা স্থানীয় অপারেটরের কাছে জেনে নিন। ভ্রমণের টাকা দেওয়ার আগে বাতিল ও তারিখ বদলের শর্ত নিশ্চিত করুন।"] },
        { heading: "নমনীয় বর্ষার ভ্রমণসূচি করুন", bullets: ["বৃষ্টি বা বাতাস বাড়লে নিরাপদ ও সহজে যাওয়া যায় এমন অংশে সৈকত হাঁটা সংক্ষিপ্ত রাখুন।", "ফাতরার চরসহ নৌভ্রমণকে ঐচ্ছিক রাখুন; সেদিনের অবস্থা ও অপারেটরের প্রাপ্যতা নিশ্চিত করুন।", "কাছাকাছি স্থানগুলো একসঙ্গে রাখুন যাতে আবহাওয়া বদলালে দ্রুত হোটেলে ফিরতে পারেন।", "যাতায়াতের সংযোগের মাঝে সময় রাখুন; নির্দিষ্ট ফেরার বাসের আগে দীর্ঘ ভ্রমণ রাখবেন না।", "বিকল্প হিসেবে বিশ্রাম, আরামে খাওয়া বা স্থানীয় দোকান ঘোরার মতো কাজ রাখুন।"] },
        { heading: "বর্ষায় কুয়াকাটা গেলে কী নেবেন", bullets: ["হালকা রেইনকোট বা ছোট ছাতা এবং ফোন ও কাগজপত্রের জন্য জলরোধী ব্যাগ।", "সহজে শুকায় এমন পোশাক, অতিরিক্ত মোজা, পিছলে যায় না এমন স্যান্ডেল ও বদলানোর কাপড়।", "ওষুধ, চার্জার ও জরুরি জিনিস শুকনো রাখার ব্যবস্থা।", "আপনি সাধারণত ব্যবহার করলে পোকামাকড় প্রতিরোধক, ব্যক্তিগত ওষুধ ও ছোট ফার্স্ট-এইড কিট।", "পরিকল্পনা বদলানোর মানসিকতা—ঝুঁকিপূর্ণ আবহাওয়ায় বাদ পড়া কাজ পুষিয়ে নিতে চেষ্টা করবেন না।"] },
        { heading: "বর্ষায় কুয়াকাটা যাওয়া কি উচিত?", paragraphs: ["অনিশ্চয়তা মেনে নিতে, পরিকল্পনা বদলাতে এবং নির্দিষ্ট নৌযাত্রা বা পরিষ্কার আকাশের ওপর নির্ভর না করতে পারলে বর্ষায় যেতে পারেন। বাইরে নির্ভরযোগ্য সময় কাটানো প্রধান লক্ষ্য হলে শীতল ও শুষ্ক মাস বেছে নেওয়া ভালো। পরিবার ও চলাফেরায় অসুবিধা আছে এমন ভ্রমণকারীদের ভেজা, বালুময় বা অসমান পথ নিয়ে বিশেষ সতর্ক হওয়া এবং রুম ও যাতায়াত আগে নিশ্চিত করা দরকার।", "স্পষ্ট বাতিলের শর্তে থাকার জায়গা বুক করুন এবং তারিখের জন্য কী কী সুবিধা চালু আছে নিশ্চিত করুন। <Link href=\"/bn/rooms\">রুমের বিকল্প</Link> দেখুন, <Link href=\"/bn/blog/kuakata-travel-checklist\">প্যাকিং চেকলিস্ট</Link> পড়ুন এবং স্থানীয় পরিস্থিতির জন্য <Link href=\"/bn/blog/kuakata-beach-guide\">সৈকত গাইড</Link দেখুন।"] },
      ],
    },
  },
  accessibility: {
    en: {
      title: "Accessibility in Kuakata: Mobility and Trip Planning Considerations",
      description: "Planning an accessible Kuakata trip? Check transport, walking surfaces, hotel room details, beach access, rest stops, and support before booking.",
      sections: [
        { heading: "Plan around your specific access needs", paragraphs: ["Accessibility in Kuakata can vary from one hotel, vehicle, beach entrance, and attraction to another. Public information may not describe step-free routes, ramps, lifts, accessible toilets, beach wheelchairs, or firm paths in enough detail to plan confidently. Do not assume a place is accessible because it is a hotel or tourist attraction; contact each provider and ask for current, specific details.", "List what you need to make the trip work: step-free entry, few stairs, a lift, a shower seat, handrails, space for a wheelchair, an easy transfer into a vehicle, frequent rest stops, or a companion’s help. Ask about each item rather than relying on a general answer such as “accessible” or “easy to reach.”"] },
        { heading: "Ask the hotel detailed room questions", paragraphs: ["Before booking, ask the hotel to describe the route from drop-off to reception and from the room to meals. Confirm whether there are steps, the number of stairs, lift access, door and bathroom layout, bed height, grab rails, shower type, and space to turn or transfer. Request recent photographs or a short video of the exact route and room if those details affect your decision.", "Ask whether staff can assist with luggage or mobility equipment, whether the room is near the entrance, and what happens if a lift or other facility is unavailable. Confirm all arrangements in writing. The hotel’s <Link href=\"/en/rooms\">room page</Link> lists standard room features, but contact the property to discuss individual access requirements."] },
        { heading: "Consider the beach, paths, and local transport", paragraphs: ["Loose sand, uneven surfaces, wet paths, steps, and changing tide lines can make coastal movement difficult for wheelchair users and people with limited stamina or balance. Ask the local authority or accommodation provider which access point is currently most manageable, how close vehicles can get, and whether there is a firm path to the area you want to visit. Conditions can change after rain or with the tide.", "For Gangamati, Misripara, Fatrar Char, or other farther stops, ask about the full vehicle transfer, boarding surface, walking distance, seating, restroom availability, and return plan. A boat excursion may involve a transfer over an uneven or moving surface; do not book until the operator can explain the boarding process and available assistance."] },
        { heading: "Build a lower-strain itinerary", bullets: ["Choose fewer stops and schedule rest breaks in shaded or indoor places.", "Visit the beach at a cooler time and confirm the shortest manageable route in advance.", "Avoid combining a long road transfer, a boat trip, and a beach walk in one day.", "Arrange a vehicle that can accommodate your mobility aid and confirm loading space before departure.", "Keep extra time for transfers, meals, and unexpected access barriers."] },
        { heading: "Prepare information and support", paragraphs: ["Carry essential medicines, a short written note about access or communication needs, emergency contacts, and any equipment supplies. If traveling with a companion, agree who will handle transfers, luggage, and communication with providers. Save the hotel’s location and phone number offline.", "If a provider cannot answer your questions clearly, consider another arrangement or change the itinerary. For directions, use our <Link href=\"/en/location\">Kuakata location page</Link>; for direct questions about hotel rooms and on-site arrangements, use the <Link href=\"/en/contact\">contact page</Link> before you book."] },
      ],
    },
    bn: {
      title: "কুয়াকাটায় প্রবেশগম্যতা: চলাফেরা ও ভ্রমণ পরিকল্পনার বিবেচনা",
      description: "সহজে চলাচলযোগ্য কুয়াকাটা ভ্রমণের জন্য পরিবহন, হাঁটার পথ, হোটেল রুম, সৈকতে প্রবেশ ও সহায়তা বুকিংয়ের আগে যাচাই করুন।",
      sections: [
        { heading: "আপনার নির্দিষ্ট প্রয়োজন অনুযায়ী পরিকল্পনা করুন", paragraphs: ["কুয়াকাটায় হোটেল, যানবাহন, সৈকতের প্রবেশপথ ও দর্শনীয় স্থানভেদে চলাচলের সুবিধা আলাদা হতে পারে। প্রকাশ্য তথ্য থেকে ধাপবিহীন পথ, র‍্যাম্প, লিফট, উপযোগী শৌচাগার, বিচ হুইলচেয়ার বা শক্ত হাঁটার পথের বিস্তারিত সব সময় জানা যায় না। হোটেল বা পর্যটনকেন্দ্র বলেই প্রবেশগম্য ধরে নেবেন না; সংশ্লিষ্ট প্রতিষ্ঠানের কাছে বর্তমান ও নির্দিষ্ট তথ্য জেনে নিন।", "ভ্রমণ সম্ভব করতে আপনার কী দরকার তার তালিকা করুন: ধাপবিহীন প্রবেশ, কম সিঁড়ি, লিফট, শাওয়ার সিট, হাতল, হুইলচেয়ার ঘোরানোর জায়গা, গাড়িতে ওঠানামার সুবিধা, ঘন ঘন বিশ্রাম বা সঙ্গীর সহায়তা। “সহজে যাওয়া যায়” এমন সাধারণ উত্তরের বদলে প্রতিটি সুবিধা আলাদা করে জিজ্ঞেস করুন।"] },
        { heading: "হোটেলের রুম সম্পর্কে নির্দিষ্ট প্রশ্ন করুন", paragraphs: ["বুকিংয়ের আগে নামার স্থান থেকে রিসেপশন এবং রুম থেকে খাবারের জায়গা পর্যন্ত পথ বর্ণনা করতে বলুন। সিঁড়ি আছে কি না, কয়টি ধাপ, লিফট, দরজা ও বাথরুমের বিন্যাস, বিছানার উচ্চতা, হাতল, শাওয়ারের ধরন এবং হুইলচেয়ার ঘোরানো বা স্থানান্তরের জায়গা নিশ্চিত করুন। সিদ্ধান্তের জন্য দরকার হলে নির্দিষ্ট পথ ও রুমের সাম্প্রতিক ছবি বা ছোট ভিডিও চাইতে পারেন।", "লাগেজ বা চলাচলের সরঞ্জামে কর্মীরা সাহায্য করতে পারবেন কি না, প্রবেশপথের কাছে রুম আছে কি না এবং লিফট বা অন্য সুবিধা চালু না থাকলে কী হবে—জেনে নিন। ব্যবস্থা লিখিতভাবে নিশ্চিত করুন। হোটেলের <Link href=\"/bn/rooms\">রুম পাতা</Link> সাধারণ সুবিধা জানায়; ব্যক্তিগত প্রয়োজন নিয়ে সরাসরি যোগাযোগ করুন।"] },
        { heading: "সৈকত, পথ ও স্থানীয় যানবাহন বিবেচনা করুন", paragraphs: ["ঢিলা বালু, অসমান মাটি, ভেজা পথ, সিঁড়ি এবং জোয়ারে বদলানো তীর—হুইলচেয়ার ব্যবহারকারী ও কম শক্তি বা ভারসাম্য আছে এমন ব্যক্তির চলাচল কঠিন করতে পারে। স্থানীয় কর্তৃপক্ষ বা হোটেলকে জিজ্ঞেস করুন বর্তমানে কোন প্রবেশপথ তুলনামূলক সুবিধাজনক, গাড়ি কত কাছে যেতে পারে এবং পছন্দের স্থানে শক্ত হাঁটার পথ আছে কি না। বৃষ্টি বা জোয়ারে অবস্থা বদলাতে পারে।", "গঙ্গামতি, মিশ্রিপাড়া, ফাতরার চর বা দূরের স্থানে গেলে পুরো যানবাহন বদল, ওঠার জায়গা, হাঁটার দূরত্ব, বসার ব্যবস্থা, শৌচাগার ও ফেরার পরিকল্পনা জেনে নিন। নৌকায় ওঠা-নামায় অসমান বা নড়ন্ত পৃষ্ঠ থাকতে পারে; ওঠার প্রক্রিয়া ও সহায়তা স্পষ্ট না হওয়া পর্যন্ত বুকিং করবেন না।"] },
        { heading: "কম পরিশ্রমের ভ্রমণসূচি করুন", bullets: ["কম স্থান বেছে ছায়াযুক্ত বা ঘরের ভেতরের স্থানে বিশ্রামের বিরতি রাখুন।", "ঠান্ডা সময়ে সৈকতে যান এবং সবচেয়ে সহজ পথ আগে নিশ্চিত করুন।", "এক দিনে দীর্ঘ সড়কযাত্রা, নৌভ্রমণ ও সৈকতে হাঁটা একসঙ্গে রাখবেন না।", "চলাচলের সরঞ্জাম নেওয়া যায় এমন যানবাহন ঠিক করে রওনার আগে রাখার জায়গা নিশ্চিত করুন।", "যাতায়াত, খাবার ও অপ্রত্যাশিত বাধার জন্য বাড়তি সময় রাখুন।"] },
        { heading: "তথ্য ও সহায়তা প্রস্তুত রাখুন", paragraphs: ["জরুরি ওষুধ, চলাচল বা যোগাযোগের প্রয়োজনের সংক্ষিপ্ত লিখিত বিবরণ, জরুরি যোগাযোগ এবং প্রয়োজনীয় সরঞ্জাম সঙ্গে রাখুন। সঙ্গী থাকলে কে যাতায়াত, লাগেজ ও প্রতিষ্ঠানের সঙ্গে যোগাযোগ সামলাবেন ঠিক করুন। হোটেলের অবস্থান ও ফোন অফলাইনে সংরক্ষণ করুন।", "কোনো প্রতিষ্ঠান স্পষ্টভাবে প্রশ্নের উত্তর দিতে না পারলে বিকল্প ব্যবস্থা বা ভিন্ন ভ্রমণসূচি বিবেচনা করুন। দিকনির্দেশনার জন্য আমাদের <Link href=\"/bn/location\">কুয়াকাটা অবস্থান পাতা</Link> দেখুন; রুম ও হোটেলের ব্যবস্থাপনা সম্পর্কে সরাসরি জানতে বুকিংয়ের আগে <Link href=\"/bn/contact\">যোগাযোগ পাতায়</Link> যোগাযোগ করুন।"] },
      ],
    },
  },
  faqs: {
    en: {
      title: "Kuakata Travel FAQs: Answers to Common Visitor Questions",
      description: "Get practical answers to common Kuakata travel questions about timing, transport, beaches, safety, trip length, family visits, and hotel planning.",
      sections: [
        { heading: "When is the best time to visit Kuakata?", paragraphs: ["Many visitors prefer the cooler, drier months, but the best dates depend on your weather preference and tolerance for crowds. Weekends and public holidays can be busier. Check the forecast close to travel, especially in the monsoon season."] },
        { heading: "How many days should I spend in Kuakata?", paragraphs: ["Two days and one night can cover the main beach and a nearby attraction, but it is a quick trip. Two full days or an extra night gives more time for sunrise, sunset, local sightseeing, rest, and weather changes. See the <Link href=\"/en/blog/kuakata-weekend-itinerary\">2-day, 1-night itinerary</Link> for a compact plan."] },
        { heading: "How do I get from Dhaka to Kuakata?", paragraphs: ["Direct buses are a common option. You can also drive or combine a launch journey with a road transfer, but the latter needs separate connections. Routes, fares, terminals, and timetables change; verify your date with the transport operator. Read the <Link href=\"/en/blog/dhaka-to-kuakata\">Dhaka to Kuakata transport guide</Link>."] },
        { heading: "Can I see both sunrise and sunset in Kuakata?", paragraphs: ["Kuakata is known for open views of both from the same broad coastal area. Cloud and weather determine whether the sun is visible on a particular day. Check the date-specific times and plan more than one viewing opportunity if it is important to you. See our <Link href=\"/en/blog/kuakata-sunrise-sunset-guide\">sunrise and sunset guide</Link>."] },
        { heading: "Is it safe to swim at Kuakata Beach?", paragraphs: ["Do not assume every section or tide is safe for swimming. Ask local authorities or lifeguards about the exact area, obey warnings, and stay out of the water if conditions are unclear or rough. Keep children close to an adult near the shoreline."] },
        { heading: "Which attractions can I visit near Kuakata?", paragraphs: ["Commonly considered stops include Jhau Forest, Gangamati, Misripara, Fatrar Char, and Shutki Palli. Some need only a short visit; others require road transfers or a boat and can take half a day or more. Confirm current access and allow time to return. Use the <Link href=\"/en/blog/kuakata-attractions-time-guide\">attractions and visit-time guide</Link>."] },
        { heading: "Is Kuakata suitable for a family trip?", paragraphs: ["It can work well for families who enjoy a beach setting, provided you plan around the long journey, heat, rest breaks, and beach safety. Choose fewer activities, check room occupancy and meal arrangements, and keep children within reach near the water. Our <Link href=\"/en/blog/kuakata-family-trip-guide\">family trip guide</Link> has a preparation checklist."] },
        { heading: "What should I pack for Kuakata?", paragraphs: ["Bring comfortable clothes and walking footwear, sun protection, water, personal medicines, a light layer, and some cash. Add rain protection in wetter months and keep documents, valuables, and a charged phone handy. See the full <Link href=\"/en/blog/kuakata-travel-checklist\">Kuakata packing checklist</Link>."] },
        { heading: "How much does a Kuakata trip cost?", paragraphs: ["The total depends on bus class, room count, meal choices, and local trips. Check live transport fares and accommodation rates for your dates. Our <Link href=\"/en/blog/kuakata-trip-budget\">Kuakata budget guide</Link> shows sample assumptions for couples, families, and groups; use it as a starting estimate rather than a booking quote."] },
        { heading: "How can I check whether a hotel meets my access needs?", paragraphs: ["Ask the property about the exact path from drop-off to room, steps, lift, bathroom layout, bed height, and assistance. Public descriptions may not include enough detail, so get answers and any essential arrangements in writing before booking. See our <Link href=\"/en/blog/kuakata-accessibility-mobility-guide\">accessibility and mobility guide</Link>."] },
      ],
    },
    bn: {
      title: "কুয়াকাটা ভ্রমণ FAQ: দর্শনার্থীদের সাধারণ প্রশ্নের উত্তর",
      description: "সময়, যাতায়াত, সৈকত, নিরাপত্তা, ভ্রমণের দৈর্ঘ্য, পরিবার ও হোটেল পরিকল্পনা নিয়ে কুয়াকাটা ভ্রমণের সাধারণ প্রশ্নের উত্তর।",
      sections: [
        { heading: "কুয়াকাটা যাওয়ার সেরা সময় কখন?", paragraphs: ["অনেক ভ্রমণকারী শীতল ও শুষ্ক মাস পছন্দ করেন, তবে তারিখ নির্ভর করে আপনার আবহাওয়ার পছন্দ ও ভিড় সহ্য করার ওপর। সপ্তাহান্ত ও সরকারি ছুটিতে ভিড় বাড়তে পারে। যাত্রার কাছাকাছি সময়ে পূর্বাভাস দেখুন, বিশেষ করে বর্ষায়।"] },
        { heading: "কুয়াকাটায় কত দিন থাকা উচিত?", paragraphs: ["২ দিন ১ রাতে মূল সৈকত ও কাছের একটি স্থান দেখা যায়, তবে ভ্রমণটি সংক্ষিপ্ত হয়। দুই পূর্ণ দিন বা আরও একটি রাত থাকলে সূর্যোদয়, সূর্যাস্ত, স্থানীয় দর্শনীয় স্থান, বিশ্রাম ও আবহাওয়ার পরিবর্তনের জন্য সময় পাওয়া যায়। সংক্ষিপ্ত পরিকল্পনার জন্য <Link href=\"/bn/blog/kuakata-weekend-itinerary\">২ দিন ১ রাতের ভ্রমণসূচি</Link> দেখুন।"] },
        { heading: "ঢাকা থেকে কুয়াকাটা কীভাবে যাব?", paragraphs: ["সরাসরি বাস সাধারণ উপায়। নিজস্ব গাড়িতেও যেতে পারেন অথবা লঞ্চের সঙ্গে সড়কযাত্রা মিলিয়ে যেতে পারেন, তবে শেষের ক্ষেত্রে আলাদা সংযোগ লাগে। রুট, ভাড়া, টার্মিনাল ও সময়সূচি বদলায়—আপনার তারিখের তথ্য অপারেটরের সঙ্গে নিশ্চিত করুন। <Link href=\"/bn/blog/dhaka-to-kuakata\">ঢাকা থেকে কুয়াকাটা যাতায়াত গাইড</Link> পড়ুন।"] },
        { heading: "কুয়াকাটায় কি সূর্যোদয় ও সূর্যাস্ত দুটোই দেখা যায়?", paragraphs: ["একই প্রশস্ত উপকূলীয় এলাকা থেকে দুটোই দেখার খোলা দৃশ্যের জন্য কুয়াকাটা পরিচিত। নির্দিষ্ট দিনে সূর্য দেখা যাবে কি না তা মেঘ ও আবহাওয়ার ওপর নির্ভর করে। তারিখ অনুযায়ী সময় জেনে নিন এবং দৃশ্যটি গুরুত্বপূর্ণ হলে একাধিক সুযোগ রাখুন। আমাদের <Link href=\"/bn/blog/kuakata-sunrise-sunset-guide\">সূর্যোদয়-সূর্যাস্ত গাইড</Link> দেখুন।"] },
        { heading: "কুয়াকাটা সৈকতে সাঁতার কাটা কি নিরাপদ?", paragraphs: ["সৈকতের সব অংশ বা জোয়ারের সব সময় সাঁতার নিরাপদ ধরে নেবেন না। নির্দিষ্ট স্থান সম্পর্কে স্থানীয় কর্তৃপক্ষ বা লাইফগার্ডের পরামর্শ নিন, সতর্কতা মানুন এবং অবস্থা অস্পষ্ট বা উত্তাল হলে পানিতে নামবেন না। পানির কাছে শিশুদের প্রাপ্তবয়স্কের সঙ্গে রাখুন।"] },
        { heading: "কুয়াকাটার কাছে কোন দর্শনীয় স্থান ঘুরতে পারি?", paragraphs: ["ঝাউবন, গঙ্গামতি, মিশ্রিপাড়া, ফাতরার চর ও শুঁটকি পল্লি সাধারণত বিবেচনা করা হয়। কিছু স্থানে অল্প সময় লাগে; অন্যগুলোর জন্য সড়কযাত্রা বা নৌকা লাগে এবং অর্ধেক দিন বা বেশি সময় লাগতে পারে। বর্তমান প্রবেশপথ নিশ্চিত করুন এবং ফেরার সময় রাখুন। <Link href=\"/bn/blog/kuakata-attractions-time-guide\">দর্শনীয় স্থান ও সময়ের গাইড</Link> দেখুন।"] },
        { heading: "পরিবার নিয়ে কুয়াকাটা যাওয়া কি উপযুক্ত?", paragraphs: ["সৈকত পছন্দ করা পরিবারের জন্য যেতে পারেন, তবে দীর্ঘ যাত্রা, গরম, বিশ্রাম ও সৈকত নিরাপত্তা মাথায় রেখে পরিকল্পনা করুন। কম কাজ বেছে নিন, রুমের অতিথি সীমা ও খাবারের ব্যবস্থা জেনে নিন এবং পানির কাছে শিশুদের কাছে রাখুন। প্রস্তুতির জন্য <Link href=\"/bn/blog/kuakata-family-trip-guide\">পরিবার নিয়ে ভ্রমণ গাইড</Link> পড়ুন।"] },
        { heading: "কুয়াকাটা ভ্রমণে কী সঙ্গে নেব?", paragraphs: ["আরামদায়ক পোশাক ও হাঁটার জুতা, রোদ থেকে সুরক্ষা, পানি, ব্যক্তিগত ওষুধ, হালকা কাপড় এবং কিছু নগদ টাকা নিন। বৃষ্টির সময় রেইন প্রোটেকশন যোগ করুন; কাগজপত্র, মূল্যবান জিনিস ও চার্জ করা ফোন হাতের কাছে রাখুন। পূর্ণ <Link href=\"/bn/blog/kuakata-travel-checklist\">কুয়াকাটা প্যাকিং চেকলিস্ট</Link> দেখুন।"] },
        { heading: "কুয়াকাটা ভ্রমণে কত খরচ হয়?", paragraphs: ["বাসের ধরন, রুমের সংখ্যা, খাবার ও স্থানীয় ভ্রমণের ওপর মোট খরচ নির্ভর করে। আপনার তারিখের বর্তমান যাতায়াত ও থাকার ভাড়া যাচাই করুন। <Link href=\"/bn/blog/kuakata-trip-budget\">কুয়াকাটা বাজেট গাইডে</Link> দম্পতি, পরিবার ও দলের জন্য নমুনা হিসাব আছে; বুকিংয়ের চূড়ান্ত কোটেশন নয়, প্রাথমিক ধারণা হিসেবে ব্যবহার করুন।"] },
        { heading: "হোটেল আমার চলাচলের প্রয়োজন মেটাবে কি না কীভাবে জানব?", paragraphs: ["নামার স্থান থেকে রুম পর্যন্ত পথ, সিঁড়ি, লিফট, বাথরুম, বিছানার উচ্চতা ও সহায়তা সম্পর্কে সরাসরি জিজ্ঞেস করুন। প্রকাশ্য বর্ণনায় যথেষ্ট তথ্য নাও থাকতে পারে; বুকিংয়ের আগে জরুরি ব্যবস্থা লিখিতভাবে নিশ্চিত করুন। <Link href=\"/bn/blog/kuakata-accessibility-mobility-guide\">প্রবেশগম্যতা ও চলাচল গাইড</Link> দেখুন।"] },
      ],
    },
  },
};

export function getPracticalPost(locale: Locale, slug: string): Copy | undefined {
  const post = (Object.keys(practicalPosts) as PracticalPost[]).find((key) => practicalPosts[key] === slug);
  return post ? articles[post][locale] : undefined;
}

const sources = [
  { href: "https://www.bmd.gov.bd/file/2025/11/20/pdf/195905.pdf", label: "Bangladesh Meteorological Department — climate and seasons", bn: "বাংলাদেশ আবহাওয়া অধিদপ্তর — জলবায়ু ও ঋতু", groups: ["firstTime", "monsoon"] },
  { href: "https://www.bmd.gov.bd/web/", label: "Bangladesh Meteorological Department — weather and warnings", bn: "বাংলাদেশ আবহাওয়া অধিদপ্তর — আবহাওয়া ও সতর্কতা", groups: ["monsoon", "faqs"] },
  { href: "https://beautifulbangladesh.gov.bd/district-destination/patuakhali/sea-beaches/20", label: "Bangladesh Tourism Board — Kuakata", bn: "বাংলাদেশ ট্যুরিজম বোর্ড — কুয়াকাটা", groups: ["firstTime", "holidays", "faqs"] },
];

export function KuakataPracticalGuide({ locale, post }: { locale: Locale; post: PracticalPost }) {
  const bn = locale === "bn";
  const copy = articles[post][locale];
  const linkedSources = sources.filter((source) => source.groups.includes(post));
  const url = `${hotel.website.replace(/\/$/, "")}/${locale}/blog/${practicalPosts[post]}/`;
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
        <p className="text-xs uppercase tracking-[0.2em] text-(--color-gold-600)">{bn ? "কুয়াকাটা · ব্যবহারিক ভ্রমণ গাইড" : "Kuakata · Practical travel guide"}</p>
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
      </div>
      <section className="mt-12 rounded-2xl bg-(--color-navy-800) p-7 text-white md:p-9">
        <h2 className="font-display text-2xl">{bn ? "কুয়াকাটা ভ্রমণের পরিকল্পনা করুন" : "Plan your Kuakata stay"}</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-white/75">{bn ? "Hotel Silver Pearl-এ সৈকত থেকে অল্প হাঁটার দূরত্বে রুম, বুফে নাশতা, ফ্রি ওয়াই-ফাই ও গাড়ি পার্কিং রয়েছে। তারিখ অনুযায়ী প্রাপ্যতা ও ভাড়া নিশ্চিত করুন।" : "Hotel Silver Pearl offers rooms a short walk from the beach, buffet breakfast, free Wi-Fi, and car parking. Confirm availability and rates for your dates."}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="rounded-full bg-(--color-gold-400) px-5 py-3 text-sm font-medium text-(--color-navy-900) hover:bg-(--color-gold-300)" href={`/${locale}/rooms`}>{bn ? "রুম ও ভাড়া দেখুন" : "View rooms & rates"}</Link>
          <Link className="rounded-full border border-white/30 px-5 py-3 text-sm text-white hover:bg-white/10" href={`/${locale}/contact`}>{bn ? "যোগাযোগ করুন" : "Contact the hotel"}</Link>
        </div>
      </section>
      {(linkedSources.length > 0 || post === "accessibility") && <aside className="mt-12 border-t border-(--color-navy-800)/10 pt-7">
        <h2 className="font-display text-xl text-(--color-navy-800)">{bn ? "তথ্যসূত্র" : "Sources"}</h2>
        <ul className="mt-4 grid gap-2 text-sm text-(--color-ink)/75 sm:grid-cols-2">
          {linkedSources.map((source) => <li key={source.href}><a className="underline decoration-(--color-gold-500) underline-offset-4" href={source.href} target="_blank" rel="noreferrer noopener">{bn ? source.bn : source.label} ↗</a></li>)}
          {post === "accessibility" && <li><Link className="underline decoration-(--color-gold-500) underline-offset-4" href={`/${locale}/rooms`}>{bn ? "হোটেলের রুমের বিবরণ" : "Hotel room details"} ↗</Link></li>}
        </ul>
        <p className="mt-4 text-xs leading-relaxed text-(--color-ink)/55">{bn ? "আবহাওয়া, পরিবহন, প্রবেশপথ ও স্থানীয় নিয়ম বদলাতে পারে। যাওয়ার আগে সংশ্লিষ্ট অপারেটর ও কর্তৃপক্ষের কাছ থেকে হালনাগাদ তথ্য নিশ্চিত করুন।" : "Weather, transport, access, and local rules can change. Confirm current details with operators and relevant authorities before departure."}</p>
      </aside>}
    </Container>
  </article>;
}

function renderLinks(text: string) {
  return text.split(/(<Link href="[^"]+">.*?<\/Link>)/g).map((part, index) => {
    const match = part.match(/^<Link href="([^"]+)">(.*?)<\/Link>$/);
    return match ? <Link key={index} className="underline decoration-(--color-gold-500) underline-offset-4" href={match[1]}>{match[2]}</Link> : part;
  });
}
