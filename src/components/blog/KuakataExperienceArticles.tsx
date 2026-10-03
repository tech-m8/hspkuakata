import Link from "next/link";
import { hotel } from "@/data/hotel";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/i18n/locales";

export const experiencePosts = {
  attractionsTime: "kuakata-attractions-time-guide",
  sunriseSunset: "kuakata-sunrise-sunset-guide",
  beach: "kuakata-beach-guide",
  dayTrips: "day-trips-from-kuakata",
  children: "kuakata-with-children",
  food: "kuakata-local-food-guide",
} as const;
export type ExperiencePost = keyof typeof experiencePosts;

type Section = { heading: string; paragraphs?: string[]; bullets?: string[] };
type Copy = { title: string; description: string; sections: Section[] };

const articles: Record<ExperiencePost, Record<Locale, Copy>> = {
  attractionsTime: {
    en: {
      title: "Kuakata Attractions: What to See and How Much Time to Allow",
      description: "Plan Kuakata sightseeing with a practical guide to the beach, Jhau Forest, Gangamati, Fatrar Char, Misripara, and visit durations.",
      sections: [
        { heading: "How many days do you need for Kuakata attractions?", paragraphs: ["For the main beach and one or two nearby places, allow at least one full day in Kuakata. Two days give you a more comfortable pace and room for sunrise, sunset, a village or forest visit, and a possible boat excursion. The timings below are planning estimates, not fixed tour durations: road conditions, tide, weather, transport availability, and how long you want to stay will change the day."] },
        { heading: "Kuakata Sea Beach: allow 1–2 hours per visit", paragraphs: ["The beach is the centerpiece of a Kuakata visit and is known for open views of sunrise and sunset. Allow an hour or two for a relaxed walk, sitting by the water, and taking photographs. You may want separate visits at dawn and late afternoon because the light and atmosphere feel different.", "Do not treat the beach as a guaranteed swimming spot. Check tide and local safety advice, keep children close, and follow any warnings. If the weather is uncomfortable, shorten the walk and return later."] },
        { heading: "Jhau Forest: around 30–60 minutes", paragraphs: ["Jhau Forest, the casuarina grove beside the beach, is an easy addition to a beach visit. Allow roughly half an hour to an hour for a shaded walk and photographs, with more time if you want a slow break. Stay on paths and leave plants and wildlife undisturbed."] },
        { heading: "Gangamati Char: allow a half-day", paragraphs: ["Gangamati lies east of the main beach and is known for its coastal landscape and sunrise views. The local Tourist Police describes it as about 10 kilometres from Kuakata beach. Plan a half-day once you include the ride, time to walk or sit by the shore, and the return. Ask locally about access, tide, and the return ride before leaving."] },
        { heading: "Misripara and Rakhine heritage: around 1–2 hours on site", paragraphs: ["Misripara is a Rakhine village with a Buddhist temple, about eight kilometres from the beach according to Kuakata Tourist Police. Allow one or two hours at the destination, plus travel time. Visit respectfully, follow caretakers’ guidance, and ask permission before photographing people or religious spaces. Consider supporting local craft sellers and businesses."] },
        { heading: "Fatrar Char and Shutki Palli: half-day or longer", paragraphs: ["Fatrar Char (Fatrar Bon) is a mangrove area reached by boat. Allow at least half a day for transfers, the boat journey, time ashore, and the return; confirm the actual route and duration with a local operator. Wear a life jacket and go only when conditions are suitable.", "Shutki Palli is a place to see dried-fish preparation and local fishing livelihoods. Work and products are seasonal, so ask locally what is active and accessible during your visit. Be considerate around working areas and ask before photographing people."] },
        { heading: "A realistic sightseeing plan", paragraphs: ["With one day, choose the beach, Jhau Forest, and either Misripara or Gangamati. With two days, add the other land-based visit and consider Fatrar Char only if weather, tide, and boat arrangements work. For hotel location and room details, see our <Link href=\"/en/location\">Kuakata location guide</Link> and <Link href=\"/en/rooms\">room options</Link>."] },
      ],
    },
    bn: {
      title: "কুয়াকাটার দর্শনীয় স্থান: কী দেখবেন ও কত সময় রাখবেন",
      description: "কুয়াকাটা সৈকত, ঝাউবন, গঙ্গামতি, ফাতরার চর ও মিশ্রিপাড়া দেখার সময়সহ ব্যবহারিক ভ্রমণ পরিকল্পনা।",
      sections: [
        { heading: "কুয়াকাটার দর্শনীয় স্থান ঘুরতে কত দিন লাগবে?", paragraphs: ["মূল সৈকত ও কাছের এক-দুটি স্থান দেখতে কুয়াকাটায় অন্তত একটি পূর্ণ দিন রাখুন। দুই দিন থাকলে সূর্যোদয়, সূর্যাস্ত, গ্রাম বা বনাঞ্চল ভ্রমণ এবং সম্ভব হলে নৌভ্রমণের জন্য সময় পাওয়া যায়। নিচের সময়গুলো পরিকল্পনার আনুমানিক হিসাব—রাস্তা, জোয়ার, আবহাওয়া, যানবাহন এবং কোনো স্থানে কতক্ষণ থাকতে চান তার ওপর সময় বদলাবে।"] },
        { heading: "কুয়াকাটা সমুদ্রসৈকত: প্রতি বার ১–২ ঘণ্টা", paragraphs: ["সৈকত কুয়াকাটা ভ্রমণের প্রধান আকর্ষণ; এখান থেকে খোলা দিগন্তে সূর্যোদয় ও সূর্যাস্ত দেখা যায়। ধীরে হাঁটা, পানির পাশে বসা ও ছবি তোলার জন্য এক-দুই ঘণ্টা রাখুন। ভোর ও বিকেলের শেষভাগে আলাদা করে গেলে আলো ও পরিবেশের ভিন্নতা উপভোগ করা যায়।", "সৈকতকে নিশ্চিত সাঁতারের জায়গা ধরে নেবেন না। জোয়ার ও স্থানীয় নিরাপত্তা নির্দেশনা জেনে নিন, শিশুদের কাছে রাখুন এবং সতর্কতা মানুন। আবহাওয়া অস্বস্তিকর হলে হাঁটা ছোট করে পরে ফিরে আসুন।"] },
        { heading: "ঝাউবন: প্রায় ৩০–৬০ মিনিট", paragraphs: ["সৈকতের পাশের ঝাউগাছের বন সৈকত ভ্রমণের সঙ্গে সহজে ঘোরা যায়। ছায়ায় হাঁটা ও ছবি তোলার জন্য আধা ঘণ্টা থেকে এক ঘণ্টা রাখুন; ধীরে বিশ্রাম নিতে চাইলে আরও সময় নিন। নির্দিষ্ট পথ ব্যবহার করুন এবং গাছপালা ও বন্যপ্রাণী বিরক্ত করবেন না।"] },
        { heading: "গঙ্গামতি চর: অর্ধেক দিন রাখুন", paragraphs: ["গঙ্গামতি মূল সৈকতের পূর্ব দিকে; উপকূলীয় দৃশ্য ও সূর্যোদয়ের জন্য পরিচিত। স্থানীয় ট্যুরিস্ট পুলিশের তথ্য অনুযায়ী, এটি কুয়াকাটা সৈকত থেকে প্রায় ১০ কিলোমিটার দূরে। যাতায়াত, হাঁটা বা সৈকতে সময় কাটানো এবং ফেরার ব্যবস্থা মিলিয়ে অর্ধেক দিন রাখুন। বের হওয়ার আগে স্থানীয়ভাবে প্রবেশপথ, জোয়ার ও ফেরার যানবাহন জেনে নিন।"] },
        { heading: "মিশ্রিপাড়া ও রাখাইন ঐতিহ্য: সেখানে ১–২ ঘণ্টা", paragraphs: ["মিশ্রিপাড়া একটি রাখাইন গ্রাম; কুয়াকাটা ট্যুরিস্ট পুলিশের তথ্যমতে সৈকত থেকে প্রায় আট কিলোমিটার দূরে এখানে একটি বৌদ্ধ মন্দির আছে। যাতায়াত বাদে সেখানে এক-দুই ঘণ্টা রাখুন। সম্মানের সঙ্গে ঘুরুন, মন্দিরের দায়িত্বপ্রাপ্তদের নির্দেশনা মানুন এবং মানুষ বা ধর্মীয় স্থানের ছবি তোলার আগে অনুমতি নিন। স্থানীয় কারুশিল্পী ও ব্যবসায়ীদের কাছ থেকে কেনাকাটা করতে পারেন।"] },
        { heading: "ফাতরার চর ও শুঁটকি পল্লি: অর্ধেক দিন বা বেশি", paragraphs: ["ফাতরার চর বা ফাতরার বন নৌকায় যাওয়া যায় এমন একটি ম্যানগ্রোভ এলাকা। যাতায়াত, নৌযাত্রা, সেখানে সময় ও ফেরার জন্য অন্তত অর্ধেক দিন রাখুন; স্থানীয় অপারেটরের কাছে প্রকৃত রুট ও সময় জেনে নিন। লাইফ জ্যাকেট পরুন এবং অবস্থা অনুকূলে থাকলেই যান।", "শুঁটকি পল্লিতে শুকনো মাছ তৈরি ও স্থানীয় মৎস্যজীবীদের কাজ দেখা যায়। কাজ ও পণ্যের প্রাপ্যতা মৌসুমি, তাই আপনার ভ্রমণের সময় কী চালু ও দর্শনার্থীদের জন্য উন্মুক্ত তা জেনে নিন। কর্মস্থলের প্রতি সম্মান দেখান এবং ছবি তোলার আগে অনুমতি নিন।"] },
        { heading: "বাস্তবসম্মত দর্শনীয় স্থান পরিকল্পনা", paragraphs: ["এক দিনে সৈকত, ঝাউবন এবং মিশ্রিপাড়া বা গঙ্গামতি—যেকোনো একটি বেছে নিন। দুই দিনে অন্য স্থলপথের স্থানটি যোগ করুন; আবহাওয়া, জোয়ার ও নৌকার ব্যবস্থা ঠিক থাকলেই ফাতরার চর যান। হোটেলের অবস্থান ও রুমের তথ্যের জন্য আমাদের <Link href=\"/bn/location\">কুয়াকাটা অবস্থান গাইড</Link> এবং <Link href=\"/bn/rooms\">রুমের বিকল্প</Link> দেখুন।"] },
      ],
    },
  },
  sunriseSunset: {
    en: {
      title: "Sunrise and Sunset at Kuakata: Where to Go and How to Plan",
      description: "Plan sunrise and sunset in Kuakata with the best beach viewpoints, timing tips, weather checks, and a simple photography plan.",
      sections: [
        { heading: "Can you see both sunrise and sunset in Kuakata?", paragraphs: ["Kuakata’s open coastal setting is known for views of both sunrise and sunset over the Bay of Bengal from the same broad beach area. The exact view depends on cloud, haze, season, and the point you choose along the shore. Treat the view as a possibility rather than a promise, and give yourself more than one viewing opportunity if it matters to your trip."] },
        { heading: "Where to watch sunrise in Kuakata", paragraphs: ["The main beach is the easiest place to plan a sunrise visit. Jhau Forest beside the beach offers a nearby shaded setting, while Gangamati to the east is another popular sunrise outing. For Gangamati, arrange a local ride in advance, check access and tide conditions, and allow extra time for the return. Do not start a remote trip in darkness without a clear transport plan."] },
        { heading: "Where to watch sunset", paragraphs: ["Choose a familiar, accessible stretch of the main beach for sunset. Arrive before the light changes so you can find your group, settle in, and walk back before it gets too dark. Ask locally about current beach conditions and avoid isolated stretches after dark. If you are staying with children or older adults, prioritize easy access back to your hotel."] },
        { heading: "How to time the sunrise and sunset", paragraphs: ["Sunrise and sunset times change through the year. Check the Bangladesh Meteorological Department’s date-specific sunrise/sunset information or a reliable local forecast the day before, then confirm transport pickup. Aim to reach the beach 20–30 minutes before the listed sunrise or sunset so you are not rushing; leave additional time for traffic or a distant viewpoint.", "For photos, arrive early, keep your phone or camera protected from sand and moisture, and avoid standing where waves or traffic can surprise you. A cloudy morning can still be atmospheric even if the sun is hidden."] },
        { heading: "A simple two-day viewing plan", bullets: ["Day 1: arrive, rest, check the weather, and watch sunset from the main beach.", "Day 2: go to the beach for sunrise; choose Gangamati only if transport and local conditions are suitable.", "Return for breakfast and rest before other sightseeing.", "If cloud or rain blocks one view, try again at the next opportunity rather than overloading the schedule."] },
        { heading: "Plan for safety and comfort", paragraphs: ["The beach is not automatically safe for swimming, and tides can change conditions. Follow local safety advice, do not enter the water in rough conditions, and keep children close. Bring a light layer for a breezy dawn, drinking water, and a charged phone. See the <Link href=\"/en/blog/kuakata-beach-guide\">Kuakata beach guide</Link> and <Link href=\"/en/blog/kuakata-weekend-itinerary\">weekend itinerary</Link> for more planning ideas."] },
      ],
    },
    bn: {
      title: "কুয়াকাটায় সূর্যোদয় ও সূর্যাস্ত: কোথায় যাবেন ও কীভাবে পরিকল্পনা করবেন",
      description: "কুয়াকাটায় সূর্যোদয়-সূর্যাস্ত দেখার স্থান, সময়, আবহাওয়া যাচাই ও ছবি তোলার সহজ পরিকল্পনা জেনে নিন।",
      sections: [
        { heading: "কুয়াকাটায় কি সূর্যোদয় ও সূর্যাস্ত দুটোই দেখা যায়?", paragraphs: ["কুয়াকাটার খোলা উপকূলীয় পরিবেশে একই প্রশস্ত সৈকত এলাকা থেকে বঙ্গোপসাগরের ওপর সূর্যোদয় ও সূর্যাস্ত দেখার জন্য স্থানটি পরিচিত। তবে মেঘ, কুয়াশা, ঋতু এবং সৈকতের কোন জায়গায় দাঁড়িয়েছেন তার ওপর দৃশ্য নির্ভর করে। দেখা নিশ্চিত ধরে না নিয়ে, এটি ভ্রমণের গুরুত্বপূর্ণ অংশ হলে একাধিক সময় সুযোগ রাখুন।"] },
        { heading: "কুয়াকাটায় সূর্যোদয় কোথায় দেখবেন", paragraphs: ["মূল সৈকত থেকে সূর্যোদয় দেখতে যাওয়া সবচেয়ে সহজ। সৈকতের পাশের ঝাউবনে কাছাকাছি ছায়াময় পরিবেশ পাওয়া যায়; পূর্ব দিকে গঙ্গামতিও সূর্যোদয়ের জন্য জনপ্রিয় স্থান। গঙ্গামতি যেতে আগে স্থানীয় যানবাহন ঠিক করুন, প্রবেশপথ ও জোয়ারের অবস্থা জেনে নিন এবং ফেরার জন্য বাড়তি সময় রাখুন। স্পষ্ট যাতায়াত পরিকল্পনা ছাড়া অন্ধকারে দূরের স্থানে রওনা হবেন না।"] },
        { heading: "সূর্যাস্ত কোথায় দেখবেন", paragraphs: ["সূর্যাস্তের জন্য মূল সৈকতের পরিচিত ও সহজে যাওয়া যায় এমন অংশ বেছে নিন। আলো বদলানোর আগে পৌঁছালে দলের সঙ্গে দেখা করা, বসার জায়গা বেছে নেওয়া এবং অন্ধকার হওয়ার আগে ফেরার সময় পাবেন। বর্তমান সৈকতের অবস্থা স্থানীয়ভাবে জেনে নিন এবং অন্ধকারের পর নির্জন অংশ এড়িয়ে চলুন। শিশু বা বয়স্ক ব্যক্তি সঙ্গে থাকলে হোটেলে সহজে ফেরার পথকে অগ্রাধিকার দিন।"] },
        { heading: "সূর্যোদয় ও সূর্যাস্তের সময় কীভাবে ঠিক করবেন", paragraphs: ["বছরের সঙ্গে সূর্যোদয় ও সূর্যাস্তের সময় বদলায়। আগের দিন বাংলাদেশ আবহাওয়া অধিদপ্তরের তারিখভিত্তিক সূর্যোদয়-সূর্যাস্তের তথ্য বা নির্ভরযোগ্য স্থানীয় পূর্বাভাস দেখুন, তারপর যানবাহনের পিক-আপ ঠিক করুন। তালিকাভুক্ত সময়ের ২০–৩০ মিনিট আগে সৈকতে পৌঁছানোর চেষ্টা করুন; যানজট বা দূরের স্থান হলে আরও সময় রাখুন।", "ছবি তুলতে আলো বদলানোর আগেই পৌঁছান, ফোন বা ক্যামেরা বালি ও আর্দ্রতা থেকে রক্ষা করুন এবং ঢেউ বা যানবাহনের পথে দাঁড়াবেন না। মেঘে সূর্য না দেখা গেলেও ভোরের আকাশ সুন্দর হতে পারে।"] },
        { heading: "দুই দিনে সূর্যোদয়-সূর্যাস্ত দেখার সহজ পরিকল্পনা", bullets: ["প্রথম দিন: পৌঁছে বিশ্রাম নিন, আবহাওয়া জেনে মূল সৈকত থেকে সূর্যাস্ত দেখুন।", "দ্বিতীয় দিন: সৈকতে সূর্যোদয় দেখুন; যাতায়াত ও স্থানীয় অবস্থা অনুকূলে থাকলে গঙ্গামতি বেছে নিন।", "নাশতা ও বিশ্রামের পর অন্য দর্শনীয় স্থানে যান।", "মেঘ বা বৃষ্টিতে একবার দৃশ্য না দেখা গেলে সময়সূচি অতিরিক্ত ভরাট না করে পরের সুযোগ রাখুন।"] },
        { heading: "নিরাপত্তা ও স্বাচ্ছন্দ্যের পরিকল্পনা", paragraphs: ["সৈকত সব সময় সাঁতারের জন্য নিরাপদ নয়; জোয়ারে পরিস্থিতি বদলাতে পারে। স্থানীয় নিরাপত্তা নির্দেশনা মানুন, উত্তাল পানিতে নামবেন না এবং শিশুদের কাছে রাখুন। ভোরের বাতাসের জন্য হালকা কাপড়, পানি ও চার্জ করা ফোন নিন। আরও পরিকল্পনার জন্য <Link href=\"/bn/blog/kuakata-beach-guide\">কুয়াকাটা সৈকত গাইড</Link> ও <Link href=\"/bn/blog/kuakata-weekend-itinerary\">উইকএন্ড পরিকল্পনা</Link> দেখুন।"] },
      ],
    },
  },
  beach: {
    en: {
      title: "Kuakata Beach Guide: Activities, Access, and Visitor Tips",
      description: "Use this Kuakata beach guide to plan beach walks, sunrise and sunset, access, local transport, safety, and a comfortable visit.",
      sections: [
        { heading: "What makes Kuakata Beach worth visiting?", paragraphs: ["Kuakata Sea Beach is a long Bay of Bengal shoreline in Patuakhali and the center of most visits to the area. Travelers come for open sea views, a broad sandy walk, and the chance to see changing light at sunrise and sunset. Conditions and beach activity vary by season, tide, weather, and local access, so plan the day around current advice."] },
        { heading: "Things to do at Kuakata Beach", bullets: ["Walk the shore in the cooler hours and choose a short or longer stretch based on your group.", "Plan one sunrise and one sunset visit; check the date-specific times and forecast.", "Visit nearby Jhau Forest for shade and a change of scenery.", "Watch local fishing activity from a respectful distance and ask before photographing people.", "Enjoy local snacks or seafood from a clean, busy outlet; check the day’s catch and price first.", "Consider a local boat excursion only after confirming weather, tide, life jackets, and the return plan."] },
        { heading: "Beach access and getting around", paragraphs: ["Kuakata’s main beach is close to the town and hotel area, but the easiest access point depends on where you are staying and which part of the shore you want to visit. Save your accommodation’s map pin, ask for the nearest safe access point, and agree local transport fares before a ride. For Gangamati or other farther stops, arrange a return ride instead of assuming a vehicle will be waiting.", "Our <Link href=\"/en/location\">Kuakata location page</Link> includes hotel directions. If you are coming from the capital, see <Link href=\"/en/blog/dhaka-to-kuakata\">how to get to Kuakata from Dhaka</Link>."] },
        { heading: "Swimming and beach safety", paragraphs: ["Never assume the entire beach is safe for swimming. Water depth, currents, waves, tide, and conditions can change along the shore and through the day. Ask local authorities or lifeguards about the specific spot, follow flags and warnings, and stay out of the water if there is no clear safety information. Tourism Bangladesh notes that the Zero Point area can be risky for swimming during high tide; follow current local advice there.", "Keep children within arm’s reach near the water, avoid turning your back on waves, and do not swim alone. On a boat, wear the life jacket provided and follow the operator’s instructions. Leave the beach if weather deteriorates."] },
        { heading: "What to bring for a beach visit", bullets: ["Drinking water, sun protection, and a light layer for a breezy evening.", "Comfortable sandals or shoes for sand and uneven paths.", "A small bag for litter and wet clothes; take rubbish back if bins are unavailable.", "Some cash for small purchases and local rides; agree prices first.", "A charged phone and your hotel contact/location saved offline."] },
        { heading: "Best time and a comfortable beach plan", paragraphs: ["Cooler, drier months are popular for beach walks, but weekends and public holidays can be busy. Arrive early for sunrise, rest during the hottest part of the day, and return near sunset. Check the weather, tide, and any local safety notices each day. For a full schedule, use the <Link href=\"/en/blog/kuakata-weekend-itinerary\">Kuakata weekend itinerary</Link>."] },
      ],
    },
    bn: {
      title: "কুয়াকাটা সৈকত গাইড: কী করবেন, কীভাবে যাবেন ও ভ্রমণ টিপস",
      description: "কুয়াকাটা সৈকতে হাঁটা, সূর্যোদয়-সূর্যাস্ত, যাতায়াত, নিরাপত্তা ও স্বচ্ছন্দ ভ্রমণের পরিকল্পনা করুন।",
      sections: [
        { heading: "কুয়াকাটা সৈকত কেন ঘুরবেন?", paragraphs: ["কুয়াকাটা সমুদ্রসৈকত পটুয়াখালীর বঙ্গোপসাগর উপকূলের দীর্ঘ সৈকত এবং এলাকার অধিকাংশ ভ্রমণের কেন্দ্র। খোলা সমুদ্রের দৃশ্য, প্রশস্ত বালুর ওপর হাঁটা এবং সূর্যোদয়-সূর্যাস্তের বদলানো আলো দেখতে পর্যটকেরা আসেন। ঋতু, জোয়ার, আবহাওয়া ও স্থানীয় প্রবেশপথ অনুযায়ী পরিস্থিতি বদলায়; সেদিনের নির্দেশনা মেনে পরিকল্পনা করুন।"] },
        { heading: "কুয়াকাটা সৈকতে কী করবেন", bullets: ["দিনের অপেক্ষাকৃত ঠান্ডা সময়ে হাঁটুন; দলের উপযোগী দূরত্ব বেছে নিন।", "একটি সূর্যোদয় ও একটি সূর্যাস্ত দেখার পরিকল্পনা করুন; তারিখভিত্তিক সময় ও পূর্বাভাস জেনে নিন।", "ছায়া ও পরিবেশ বদলের জন্য পাশের ঝাউবন ঘুরুন।", "স্থানীয় মাছ ধরার কাজ দূর থেকে দেখুন এবং ছবি তোলার আগে অনুমতি নিন।", "পরিষ্কার ও ব্যস্ত দোকান থেকে নাশতা বা সামুদ্রিক খাবার নিন; দিনের মাছ ও দাম আগে জেনে নিন।", "নৌভ্রমণের আগে আবহাওয়া, জোয়ার, লাইফ জ্যাকেট ও ফেরার ব্যবস্থা নিশ্চিত করুন।"] },
        { heading: "সৈকতে যাতায়াত ও স্থানীয় চলাচল", paragraphs: ["কুয়াকাটার মূল সৈকত শহর ও হোটেল এলাকার কাছে, তবে কোন পথ সুবিধাজনক হবে তা আপনার হোটেল ও সৈকতের পছন্দের অংশের ওপর নির্ভর করে। থাকার জায়গার মানচিত্র সংরক্ষণ করুন, কাছের নিরাপদ প্রবেশপথ জেনে নিন এবং স্থানীয় যানবাহনে ওঠার আগে ভাড়া ঠিক করুন। গঙ্গামতি বা দূরের অন্য স্থানে গেলে ফেরার যানবাহনও আগে ঠিক করুন।", "হোটেলের দিকনির্দেশনার জন্য আমাদের <Link href=\"/bn/location\">কুয়াকাটা অবস্থান পাতা</Link> দেখুন। ঢাকা থেকে এলে <Link href=\"/bn/blog/dhaka-to-kuakata\">ঢাকা থেকে কুয়াকাটা যাওয়ার উপায়</Link> পড়ুন।"] },
        { heading: "সাঁতার ও সৈকত নিরাপত্তা", paragraphs: ["সৈকতের সব অংশে সাঁতার নিরাপদ ধরে নেবেন না। পানির গভীরতা, স্রোত, ঢেউ, জোয়ার ও পরিস্থিতি সৈকতের অংশ ও দিনের সময় অনুযায়ী বদলাতে পারে। নির্দিষ্ট স্থানের জন্য স্থানীয় কর্তৃপক্ষ বা লাইফগার্ডের পরামর্শ নিন, সতর্কতা মানুন এবং নিরাপত্তার স্পষ্ট তথ্য না থাকলে পানিতে নামবেন না। Tourism Bangladesh জানায়, ভরা জোয়ারে জিরো পয়েন্টের অংশ সাঁতারের জন্য ঝুঁকিপূর্ণ হতে পারে; সেখানেও বর্তমান স্থানীয় নির্দেশনা মানুন।", "পানির কাছে শিশুদের হাতের নাগালে রাখুন, ঢেউয়ের দিকে পিঠ দেবেন না এবং একা সাঁতার কাটবেন না। নৌকায় দেওয়া লাইফ জ্যাকেট পরুন ও অপারেটরের নির্দেশনা মানুন। আবহাওয়া খারাপ হলে সৈকত ছেড়ে নিরাপদ স্থানে যান।"] },
        { heading: "সৈকতে কী সঙ্গে নেবেন", bullets: ["পানির বোতল, রোদ থেকে সুরক্ষা এবং সন্ধ্যার বাতাসের জন্য হালকা কাপড়।", "বালু ও অসমান পথে হাঁটার উপযোগী স্যান্ডেল বা জুতা।", "ময়লা ও ভেজা কাপড় রাখার ছোট ব্যাগ; বিন না থাকলে ময়লা সঙ্গে ফিরিয়ে আনুন।", "ছোট কেনাকাটা ও স্থানীয় যাতায়াতের জন্য কিছু নগদ টাকা; আগে দাম ঠিক করুন।", "চার্জ করা ফোন এবং অফলাইনে সংরক্ষিত হোটেলের যোগাযোগ ও অবস্থান।"] },
        { heading: "সৈকত ভ্রমণের ভালো সময় ও আরামদায়ক পরিকল্পনা", paragraphs: ["শীতল ও শুষ্ক মাসে সৈকতে হাঁটা জনপ্রিয়, তবে সপ্তাহান্ত ও সরকারি ছুটিতে ভিড় হতে পারে। সূর্যোদয়ের জন্য আগে যান, দিনের গরমে বিশ্রাম নিন এবং সূর্যাস্তের আগে আবার সৈকতে ফিরুন। প্রতিদিন আবহাওয়া, জোয়ার ও স্থানীয় নিরাপত্তা নির্দেশনা দেখে নিন। পূর্ণ সময়সূচির জন্য <Link href=\"/bn/blog/kuakata-weekend-itinerary\">কুয়াকাটা উইকএন্ড পরিকল্পনা</Link> দেখুন।"] },
      ],
    },
  },
  dayTrips: {
    en: {
      title: "Day Trips from Kuakata: Nearby Places Worth Considering",
      description: "Explore the best day trips from Kuakata, including Gangamati, Misripara, Fatrar Char, Jhau Forest, and Shutki Palli.",
      sections: [
        { heading: "How to choose a day trip from Kuakata", paragraphs: ["Kuakata’s nearby attractions range from short local visits to outings that need a boat and much of the day. Choose based on weather, tide, transport, and your group’s energy. Before leaving, agree the fare and return time with your driver or boat operator, carry water, and check whether the place is accessible that day."] },
        { heading: "Gangamati Char: coastal scenery to the east", paragraphs: ["Gangamati is east of the main beach and is known for its coastal landscape and early-morning views. Kuakata Tourist Police places it about 10 kilometres from the beach. Allow several hours for the ride, time at the shore, and return. Ask locally about tide and road access, especially if you plan to go near sunrise."] },
        { heading: "Misripara: Rakhine village and Buddhist temple", paragraphs: ["Misripara offers a chance to learn about Rakhine heritage and visit a Buddhist temple. The local Tourist Police describes the village as about eight kilometres from Kuakata beach. Plan roughly half a day including transport and time to visit. Dress respectfully, follow temple guidance, and ask before photographing residents or religious spaces."] },
        { heading: "Fatrar Char: mangrove boat excursion", paragraphs: ["Fatrar Char, also called Fatrar Bon, is a mangrove destination reached by boat. It suits travelers who have enough time and are comfortable with a water excursion. Ask a local operator about the route, total duration, weather and tide limits, life jackets, permitted access, and return plan. Do not go if conditions are unsafe or unclear."] },
        { heading: "Shutki Palli and Lembur Bon", paragraphs: ["Shutki Palli is associated with dried-fish production, while Lembur Bon is another coastal attraction in the wider Kuakata area. Work at fish-drying sites can be seasonal and conditions at coastal spots can change. Ask locally which places are accessible, how to get there, and whether visitors can observe the work without disrupting it. Buy directly from local producers where appropriate and ask permission before taking photos."] },
        { heading: "Jhau Forest: an easy short outing", paragraphs: ["Jhau Forest beside the beach is the easiest addition if you want a brief shaded walk rather than a full day trip. Pair it with the main beach and keep the rest of the day open. This is a good option for families or visitors with limited time."] },
        { heading: "Plan the day-trip logistics", bullets: ["Start early for farther destinations and share your return plan with someone at your hotel.", "Carry drinking water, sun protection, cash, and a charged phone.", "Confirm local transport and boat availability on the day; do not rely on old schedules.", "Keep a backup plan for rain, rough seas, or access changes.", "For an overview of stops and timing, read our <Link href=\"/en/blog/kuakata-attractions-time-guide\">Kuakata attractions guide</Link>."] },
      ],
    },
    bn: {
      title: "কুয়াকাটা থেকে এক দিনের ভ্রমণ: কাছাকাছি যেসব স্থান ঘুরতে পারেন",
      description: "গঙ্গামতি, মিশ্রিপাড়া, ফাতরার চর, ঝাউবন ও শুঁটকি পল্লিসহ কুয়াকাটার কাছের দর্শনীয় স্থানে এক দিনের ভ্রমণ পরিকল্পনা করুন।",
      sections: [
        { heading: "কুয়াকাটা থেকে এক দিনের ভ্রমণ কীভাবে বাছবেন", paragraphs: ["কুয়াকাটার কাছের দর্শনীয় স্থানগুলোর মধ্যে অল্প সময়ে যাওয়া যায় এমন জায়গা যেমন আছে, তেমনি নৌকা ও দিনের বেশিরভাগ সময় লাগে এমন স্থানও আছে। আবহাওয়া, জোয়ার, যাতায়াত ও দলের শক্তি বিবেচনা করে বেছে নিন। বের হওয়ার আগে চালক বা নৌকার অপারেটরের সঙ্গে ভাড়া ও ফেরার সময় ঠিক করুন, পানি সঙ্গে নিন এবং সেদিন স্থানটি যাওয়ার উপযোগী কি না জেনে নিন।"] },
        { heading: "গঙ্গামতি চর: পূর্ব দিকের উপকূলীয় দৃশ্য", paragraphs: ["গঙ্গামতি মূল সৈকতের পূর্বে এবং উপকূলীয় দৃশ্য ও ভোরের আলোর জন্য পরিচিত। কুয়াকাটা ট্যুরিস্ট পুলিশের তথ্য অনুযায়ী, সৈকত থেকে এটি প্রায় ১০ কিলোমিটার দূরে। যাতায়াত, সৈকতে সময় ও ফেরাসহ কয়েক ঘণ্টা রাখুন। ভোরে গেলে জোয়ার ও সড়কপথের অবস্থা স্থানীয়ভাবে জেনে নিন।"] },
        { heading: "মিশ্রিপাড়া: রাখাইন গ্রাম ও বৌদ্ধ মন্দির", paragraphs: ["মিশ্রিপাড়ায় রাখাইন ঐতিহ্য সম্পর্কে জানা ও একটি বৌদ্ধ মন্দির দেখার সুযোগ আছে। স্থানীয় ট্যুরিস্ট পুলিশ গ্রামটিকে কুয়াকাটা সৈকত থেকে প্রায় আট কিলোমিটার দূরে বলে উল্লেখ করেছে। যাতায়াত ও সেখানে সময়সহ আনুমানিক অর্ধেক দিন রাখুন। শালীন পোশাক পরুন, মন্দিরের নির্দেশনা মানুন এবং বাসিন্দা বা ধর্মীয় স্থানের ছবি তোলার আগে অনুমতি নিন।"] },
        { heading: "ফাতরার চর: ম্যানগ্রোভ নৌভ্রমণ", paragraphs: ["ফাতরার চর বা ফাতরার বন নৌকায় যাওয়া যায় এমন ম্যানগ্রোভ এলাকা। যাদের হাতে যথেষ্ট সময় আছে এবং নৌভ্রমণে স্বাচ্ছন্দ্য বোধ করেন, তাদের জন্য উপযোগী। স্থানীয় অপারেটরের কাছে পথ, মোট সময়, আবহাওয়া ও জোয়ারের সীমা, লাইফ জ্যাকেট, অনুমোদিত প্রবেশ এবং ফেরার পরিকল্পনা জেনে নিন। অবস্থা ঝুঁকিপূর্ণ বা অস্পষ্ট হলে যাবেন না।"] },
        { heading: "শুঁটকি পল্লি ও লেবুর বন", paragraphs: ["শুঁটকি পল্লি শুকনো মাছ তৈরির জন্য পরিচিত; লেবুর বন কুয়াকাটা এলাকার আরেকটি উপকূলীয় আকর্ষণ। মাছ শুকানোর কাজ মৌসুমি হতে পারে এবং উপকূলীয় স্থানের অবস্থা বদলায়। কোন জায়গা খোলা ও যাওয়ার উপযোগী, কীভাবে যাবেন এবং কাজ ব্যাহত না করে দেখা যাবে কি না স্থানীয়ভাবে জেনে নিন। সুযোগ থাকলে স্থানীয় উৎপাদকের কাছ থেকে কিনুন এবং ছবি তোলার আগে অনুমতি নিন।"] },
        { heading: "ঝাউবন: কাছের ছোট ভ্রমণ", paragraphs: ["পুরো দিনের ভ্রমণের বদলে অল্প সময়ের ছায়াময় হাঁটা চাইলে সৈকতের পাশের ঝাউবন সহজ বিকল্প। মূল সৈকতের সঙ্গে এটি ঘুরে বাকি সময় খালি রাখতে পারেন। পরিবার বা অল্প সময়ের পর্যটকদের জন্য এটি সুবিধাজনক।"] },
        { heading: "এক দিনের ভ্রমণের প্রস্তুতি", bullets: ["দূরের স্থানে ভোরে বের হন এবং হোটেলে ফেরার পরিকল্পনা জানিয়ে যান।", "পানি, রোদ থেকে সুরক্ষা, নগদ টাকা ও চার্জ করা ফোন নিন।", "সেদিন স্থানীয় যানবাহন ও নৌকার প্রাপ্যতা নিশ্চিত করুন; পুরোনো সময়সূচির ওপর নির্ভর করবেন না।", "বৃষ্টি, উত্তাল সমুদ্র বা প্রবেশপথ বদলালে ব্যবহারযোগ্য বিকল্প রাখুন।", "স্থান ও সময়ের সারাংশের জন্য আমাদের <Link href=\"/bn/blog/kuakata-attractions-time-guide\">কুয়াকাটার দর্শনীয় স্থান গাইড</Link> পড়ুন।"] },
      ],
    },
  },
  children: {
    en: {
      title: "Kuakata with Children: Family Activities and Practical Tips",
      description: "Visiting Kuakata with children? Plan manageable beach activities, safe transport, comfortable rooms, meals, and child-friendly routines.",
      sections: [
        { heading: "Is Kuakata a good destination with children?", paragraphs: ["Kuakata can be an enjoyable family destination for children who like open spaces, beach walks, and watching the changing light. The key is to plan around travel fatigue, heat, tides, and easy access to restrooms, meals, and your hotel. Keep the daily schedule light and let children rest between outings."] },
        { heading: "Choose child-friendly activities", bullets: ["Take a short beach walk in the cooler morning or late afternoon rather than staying in direct sun at midday.", "Watch sunrise or sunset from an accessible area and agree on a meeting point.", "Visit Jhau Forest for a shaded walk, staying on clear paths.", "Look at local fishing activity from a respectful distance; do not approach boats or work areas without permission.", "Consider a farther trip only if the child is comfortable with the ride and you can return before they become overtired."] },
        { heading: "Beach safety with children", paragraphs: ["Keep children within arm’s reach near the sea. Appoint one adult to supervise whenever the group is near the water, and avoid distractions such as phone photography while responsible for watching a child. Conditions can change with tides, waves, and weather. Ask local authorities about safe areas and do not assume a calm-looking patch is safe for swimming.", "Use sun protection, offer water regularly, and leave the beach if a child is cold, tired, or distressed. For a boat trip, confirm life jackets in the right size for each child and follow the operator’s instructions. Skip boating if weather or safety arrangements are uncertain."] },
        { heading: "Make the journey and hotel stay easier", paragraphs: ["For a long bus ride, choose seats together and pack familiar snacks, water, medicines, wipes, and a change of clothes in a small bag. For a private car, plan breaks and safe rest for the driver. On arrival, confirm how far the hotel is from the bus drop-off and whether early luggage storage or early check-in is possible.", "Check room occupancy, bed layout, child policy, bathroom access, and meal timing before booking. A room with enough sleeping space and an easy route to the beach can make the trip smoother than adding multiple distant excursions."] },
        { heading: "What to pack for Kuakata with children", bullets: ["Sun hat, sunscreen, light clothing, sandals, and a spare outfit.", "Regular medicines, basic first aid, and allergy details.", "Water bottle, familiar snacks, wipes, tissues, and a wet-clothes bag.", "A small toy or quiet activity for bus waits and meal breaks.", "Hotel contact details and a note with the child’s name and family phone number, kept safely with an adult."] },
        { heading: "A gentle family day plan", paragraphs: ["Start with breakfast and a short beach visit, return for shade and rest during the hottest hours, then go out again near sunset. Add one nearby attraction only if everyone has energy. Our <Link href=\"/en/blog/kuakata-family-trip-guide\">family trip planning guide</Link>, <Link href=\"/en/blog/kuakata-beach-guide\">beach guide</Link>, and <Link href=\"/en/rooms\">room options</Link> can help you prepare."] },
      ],
    },
    bn: {
      title: "শিশুদের নিয়ে কুয়াকাটা ভ্রমণ: পারিবারিক কাজ ও ব্যবহারিক টিপস",
      description: "শিশু নিয়ে কুয়াকাটা গেলে সৈকত ভ্রমণ, নিরাপদ যাতায়াত, আরামদায়ক রুম, খাবার ও দৈনন্দিন রুটিন পরিকল্পনা করুন।",
      sections: [
        { heading: "শিশুদের নিয়ে কুয়াকাটা যাওয়া কি ভালো?", paragraphs: ["খোলা জায়গা, সৈকতে হাঁটা ও বদলানো আলো দেখতে পছন্দ করে এমন শিশুদের জন্য কুয়াকাটা আনন্দদায়ক পারিবারিক গন্তব্য হতে পারে। দীর্ঘ যাত্রার ক্লান্তি, গরম, জোয়ার এবং বিশ্রামাগার, খাবার ও হোটেলে সহজে ফেরার বিষয়গুলো মাথায় রেখে পরিকল্পনা করুন। দিনের কর্মসূচি হালকা রাখুন এবং বেড়ানোর মাঝে শিশুদের বিশ্রাম দিন।"] },
        { heading: "শিশুদের উপযোগী কাজ বেছে নিন", bullets: ["দুপুরের কড়া রোদের বদলে সকালে বা বিকেলের শেষভাগে অল্প সময় সৈকতে হাঁটুন।", "সহজে যাওয়া যায় এমন স্থান থেকে সূর্যোদয় বা সূর্যাস্ত দেখুন এবং দলের দেখা করার জায়গা ঠিক করুন।", "পরিষ্কার পথে থেকে ছায়ার জন্য ঝাউবন ঘুরুন।", "স্থানীয় মাছ ধরার কাজ দূর থেকে দেখুন; অনুমতি ছাড়া নৌকা বা কর্মস্থলের কাছে যাবেন না।", "দূরে যাওয়ার আগে শিশু যাত্রায় স্বচ্ছন্দ কি না ভাবুন এবং অতিরিক্ত ক্লান্ত হওয়ার আগেই ফেরার পরিকল্পনা করুন।"] },
        { heading: "শিশুদের নিয়ে সৈকত নিরাপত্তা", paragraphs: ["সমুদ্রের কাছে শিশুদের হাতের নাগালে রাখুন। পানির কাছাকাছি থাকলে একজন প্রাপ্তবয়স্ককে দেখাশোনার দায়িত্ব দিন; শিশুকে দেখার দায়িত্বে থাকলে ফোনে ছবি তোলার মতো কাজে মনোযোগ সরাবেন না। জোয়ার, ঢেউ ও আবহাওয়ায় পরিস্থিতি বদলায়। নিরাপদ স্থান সম্পর্কে স্থানীয় কর্তৃপক্ষকে জিজ্ঞেস করুন; শান্ত দেখালেও সাঁতারের জন্য নিরাপদ ধরে নেবেন না।", "রোদ থেকে সুরক্ষা দিন, নিয়মিত পানি পান করান এবং শিশু ঠান্ডা, ক্লান্ত বা অস্বস্তিতে পড়লে সৈকত ছেড়ে আসুন। নৌভ্রমণে গেলে প্রতিটি শিশুর মাপমতো লাইফ জ্যাকেট নিশ্চিত করুন ও অপারেটরের কথা মানুন। আবহাওয়া বা নিরাপত্তার ব্যবস্থা অনিশ্চিত হলে নৌভ্রমণ বাদ দিন।"] },
        { heading: "যাত্রা ও হোটেলে থাকা সহজ করুন", paragraphs: ["দীর্ঘ বাসযাত্রায় পাশাপাশি আসন নিন। ছোট ব্যাগে পরিচিত নাশতা, পানি, ওষুধ, ওয়াইপস ও অতিরিক্ত কাপড় রাখুন। গাড়িতে গেলে বিরতি ও চালকের বিশ্রাম নিশ্চিত করুন। পৌঁছে বাসের নামার স্থান থেকে হোটেল কত দূরে এবং আগে লাগেজ রাখা বা আগাম চেক-ইন সম্ভব কি না জেনে নিন।", "বুকিংয়ের আগে রুমের অতিথি সীমা, বিছানার বিন্যাস, শিশুদের নিয়ম, বাথরুমে যাওয়ার সুবিধা ও খাবারের সময় জেনে নিন। পর্যাপ্ত ঘুমের জায়গা ও সৈকতে সহজে যাওয়ার পথ অনেক দূরের একাধিক ভ্রমণের চেয়ে বেশি স্বস্তি দিতে পারে।"] },
        { heading: "শিশুদের নিয়ে কুয়াকাটায় কী নেবেন", bullets: ["টুপি, সানস্ক্রিন, হালকা পোশাক, স্যান্ডেল ও অতিরিক্ত কাপড়।", "নিয়মিত ওষুধ, প্রাথমিক চিকিৎসা ও অ্যালার্জির তথ্য।", "পানির বোতল, পরিচিত নাশতা, ওয়াইপস, টিস্যু ও ভেজা কাপড় রাখার ব্যাগ।", "বাসের অপেক্ষা ও খাবারের বিরতির জন্য ছোট খেলনা বা শান্ত কাজ।", "হোটেলের যোগাযোগ এবং নিরাপদে রাখা কাগজে শিশুর নাম ও পরিবারের ফোন নম্বর।"] },
        { heading: "আরামদায়ক পারিবারিক দিনের পরিকল্পনা", paragraphs: ["নাশতার পর অল্প সময় সৈকতে যান, দিনের গরমে ছায়ায় ফিরে বিশ্রাম নিন এবং সূর্যাস্তের সময় আবার বের হন। সবার শক্তি থাকলেই কাছের একটি দর্শনীয় স্থান যোগ করুন। প্রস্তুতির জন্য আমাদের <Link href=\"/bn/blog/kuakata-family-trip-guide\">পরিবার নিয়ে ভ্রমণ গাইড</Link>, <Link href=\"/bn/blog/kuakata-beach-guide\">সৈকত গাইড</Link> এবং <Link href=\"/bn/rooms\">রুমের বিকল্প</Link দেখুন।"] },
      ],
    },
  },
  food: {
    en: {
      title: "Local Food in Kuakata: What to Try and Dining Tips for Visitors",
      description: "Discover local food in Kuakata, from fresh seafood and dried fish to regional flavors, with practical tips for choosing where to eat.",
      sections: [
        { heading: "What food is Kuakata known for?", paragraphs: ["Kuakata’s coastal setting makes fish and seafood an important part of the local food experience. What is available depends on the day’s catch, season, weather, and restaurant supply. Ask what is fresh today rather than assuming a particular fish or dish will always be on the menu.", "The wider area is also home to Rakhine communities and local food traditions. Look for opportunities to try regional cooking respectfully, but avoid treating a community’s culture as a tourist display. Buy from local businesses and ask about ingredients, spice, and preparation if you have dietary needs."] },
        { heading: "Fresh fish and seafood dishes", paragraphs: ["Ask what is fresh that day and look for familiar preparations such as fish curry with rice, fried or grilled fish, prawns, or crab when available. Hilsa (ilish) may appear depending on season and supply, but do not assume a particular catch will always be on the menu. Ask how the fish is cooked, whether it is sold by weight, and whether the price includes preparation.", "Choose a clean, busy place where food is handled and cooked properly. If seafood allergies are a concern, tell the staff clearly and ask about shared cooking surfaces or oil; cross-contact can happen even when you order a different dish."] },
        { heading: "Visit Shutki Palli for local food culture", paragraphs: ["Shutki Palli is a place associated with dried-fish production near Kuakata and on the way toward Lembur Bon. Bangladesh Tourism Board describes visitors observing the preparation process and buying dried fish. Activity is seasonal, so check locally before making a special trip. Ask permission before photographing workers and buy directly from producers when possible.", "Dried fish has a strong aroma and distinctive taste. If you want to take some home, ask about the type, preparation, packaging, and any travel or storage considerations. Keep food securely packed in your luggage."] },
        { heading: "Local dining tips for visitors", bullets: ["Ask for the menu and price before ordering, especially for fish sold by weight.", "Check whether a dish is spicy, contains bones, or includes ingredients you avoid.", "Choose freshly cooked food and drink sealed or otherwise safe water.", "Carry cash for small shops and ask whether card or mobile payment is accepted before the meal.", "If visiting a local community or market, be polite, ask before photographing, and avoid blocking people at work."] },
        { heading: "Vegetarian, allergy, and family needs", paragraphs: ["If you do not eat fish or meat, ask in advance which vegetable, lentil, rice, or egg dishes can be prepared without fish paste, dried shrimp, or shared utensils. Do not rely on a dish name alone to confirm it is vegetarian. Families with children can request less chili and check carefully for fish bones.", "For allergies, explain the ingredient in simple terms and confirm with the cook. If staff cannot confidently answer, choose another meal. Pack any essential medication and familiar snacks for the journey."] },
        { heading: "Make food part of your Kuakata itinerary", paragraphs: ["Pair a market or Shutki Palli visit with a nearby sightseeing day rather than making a rushed detour. Return to a familiar restaurant for dinner if you have dietary restrictions. For more planning, read our <Link href=\"/en/blog/day-trips-from-kuakata\">day trips from Kuakata</Link> and <Link href=\"/en/blog/kuakata-weekend-itinerary\">weekend itinerary</Link>."] },
      ],
    },
    bn: {
      title: "কুয়াকাটার স্থানীয় খাবার: কী খাবেন ও কোথায় খাওয়ার টিপস",
      description: "তাজা সামুদ্রিক খাবার, শুঁটকি ও আঞ্চলিক স্বাদসহ কুয়াকাটার স্থানীয় খাবার এবং খাবারের জায়গা বাছাইয়ের পরামর্শ জানুন।",
      sections: [
        { heading: "কুয়াকাটা কোন খাবারের জন্য পরিচিত?", paragraphs: ["কুয়াকাটা উপকূলীয় এলাকা হওয়ায় মাছ ও সামুদ্রিক খাবার স্থানীয় খাবারের অভিজ্ঞতার গুরুত্বপূর্ণ অংশ। দিনের মাছ, ঋতু, আবহাওয়া ও রেস্তোরাঁর সরবরাহ অনুযায়ী কী পাওয়া যাবে বদলায়। নির্দিষ্ট মাছ বা পদ সব সময় থাকবে ধরে না নিয়ে আজ কী তাজা আছে জিজ্ঞেস করুন।", "এলাকাটিতে রাখাইন জনগোষ্ঠী ও স্থানীয় খাবারের ঐতিহ্যও আছে। সম্মানের সঙ্গে আঞ্চলিক রান্না চেখে দেখার সুযোগ নিন, তবে কোনো সম্প্রদায়ের সংস্কৃতিকে পর্যটকদের প্রদর্শনী ভাববেন না। স্থানীয় ব্যবসায়ীদের কাছ থেকে কিনুন এবং খাবারের উপকরণ, ঝাল ও রান্নার ধরন জেনে নিন।"] },
        { heading: "তাজা মাছ ও সামুদ্রিক খাবারের পদ", paragraphs: ["সেদিন কী তাজা আছে জিজ্ঞেস করুন। সরবরাহ থাকলে ভাতের সঙ্গে মাছের ঝোল, ভাজা বা গ্রিল করা মাছ, চিংড়ি কিংবা কাঁকড়ার পদ খুঁজে দেখতে পারেন। মৌসুম ও সরবরাহ অনুযায়ী ইলিশ থাকতে পারে, তবে নির্দিষ্ট মাছ সব সময় মেনুতে থাকবে ধরে নেবেন না। কীভাবে রান্না হবে, ওজন ধরে বিক্রি হচ্ছে কি না এবং রান্নার খরচ দামের মধ্যে আছে কি না জেনে নিন।", "পরিষ্কার ও ব্যস্ত এমন জায়গা বেছে নিন যেখানে খাবার ঠিকভাবে সংরক্ষণ ও রান্না করা হয়। সামুদ্রিক খাবারে অ্যালার্জি থাকলে কর্মীদের স্পষ্ট করে জানান এবং একই রান্নার তেল বা পাত্র ব্যবহৃত হয় কি না জিজ্ঞেস করুন; অন্য পদ নিলেও খাবারের সংস্পর্শ ঘটতে পারে।"] },
        { heading: "স্থানীয় খাবার সংস্কৃতি জানতে শুঁটকি পল্লি", paragraphs: ["কুয়াকাটার কাছে এবং লেবুর বনের পথে শুঁটকি পল্লি শুকনো মাছ তৈরির সঙ্গে যুক্ত একটি স্থান। বাংলাদেশ ট্যুরিজম বোর্ডের তথ্য অনুযায়ী, দর্শনার্থীরা তৈরির প্রক্রিয়া দেখতে ও শুঁটকি কিনতে পারেন। কাজ মৌসুমি, তাই বিশেষভাবে যাওয়ার আগে স্থানীয়ভাবে জেনে নিন। কর্মীদের ছবি তোলার আগে অনুমতি নিন এবং সম্ভব হলে সরাসরি উৎপাদকের কাছ থেকে কিনুন।", "শুঁটকির গন্ধ তীব্র ও স্বাদ আলাদা। বাড়িতে নিতে চাইলে মাছের ধরন, প্রস্তুতপ্রণালি, প্যাকেট এবং যাত্রাপথে সংরক্ষণের বিষয় জেনে নিন। লাগেজে খাবার ভালোভাবে প্যাক করুন।"] },
        { heading: "দর্শনার্থীদের জন্য খাবারের পরামর্শ", bullets: ["বিশেষ করে ওজন ধরে মাছ কিনলে মেনু ও দাম আগে জেনে নিন।", "পদটি ঝাল কি না, কাঁটা আছে কি না বা এড়িয়ে চলার উপকরণ রয়েছে কি না জিজ্ঞেস করুন।", "তাজা রান্না করা খাবার নিন এবং নিরাপদ পানি পান করুন।", "ছোট দোকানে নগদ টাকা রাখুন; খাবারের আগে কার্ড বা মোবাইল পেমেন্ট চলে কি না জেনে নিন।", "স্থানীয় গ্রাম বা বাজারে ভদ্র আচরণ করুন, ছবি তোলার আগে অনুমতি নিন এবং কাজের পথে বাধা দেবেন না।"] },
        { heading: "নিরামিষ, অ্যালার্জি ও পরিবারের খাবার", paragraphs: ["মাছ-মাংস না খেলে আগে জেনে নিন কোন সবজি, ডাল, ভাত বা ডিমের পদ মাছের পেস্ট, শুকনো চিংড়ি ও একই পাত্র ছাড়া রান্না করা সম্ভব। শুধু পদের নাম দেখে নিরামিষ নিশ্চিত ধরে নেবেন না। শিশুদের জন্য কম ঝাল চাইতে পারেন এবং মাছের কাঁটা সাবধানে দেখে নিন।", "অ্যালার্জি থাকলে উপকরণটি সহজ ভাষায় বুঝিয়ে রান্নার দায়িত্বে থাকা ব্যক্তির সঙ্গে নিশ্চিত করুন। কর্মীরা নিশ্চিত উত্তর দিতে না পারলে অন্য খাবার বেছে নিন। জরুরি ওষুধ ও পরিচিত নাশতা সঙ্গে রাখুন।"] },
        { heading: "ভ্রমণসূচির সঙ্গে খাবার ঘোরাও মিলিয়ে নিন", paragraphs: ["বাজার বা শুঁটকি পল্লি দেখতে গেলে কাছের দর্শনীয় স্থানের সঙ্গে একই দিনের পরিকল্পনায় রাখুন, তাড়াহুড়োর আলাদা যাত্রা করবেন না। খাদ্যসংক্রান্ত বিশেষ প্রয়োজন থাকলে রাতের খাবারের জন্য পরিচিত রেস্তোরাঁ বেছে নিন। আরও পরিকল্পনার জন্য <Link href=\"/bn/blog/day-trips-from-kuakata\">কুয়াকাটা থেকে এক দিনের ভ্রমণ</Link> এবং <Link href=\"/bn/blog/kuakata-weekend-itinerary\">উইকএন্ড পরিকল্পনা</Link> পড়ুন।"] },
      ],
    },
  },
};

export function getExperiencePost(locale: Locale, slug: string): Copy | undefined {
  const post = (Object.keys(experiencePosts) as ExperiencePost[]).find((key) => experiencePosts[key] === slug);
  return post ? articles[post][locale] : undefined;
}

const sources = [
  { href: "https://gis.beautifulbangladesh.gov.bd/spot/kuakata-sea-beach", en: "Bangladesh Tourism Board — Kuakata Sea Beach", bn: "বাংলাদেশ ট্যুরিজম বোর্ড — কুয়াকাটা সমুদ্রসৈকত", groups: ["sunriseSunset", "beach"] },
  { href: "https://kuareg.touristpolice.gov.bd/site/page/58041724-f7e6-4439-a4d7-ac19c1eb60ad/", en: "Kuakata Tourist Police — Gangamati Char", bn: "কুয়াকাটা ট্যুরিস্ট পুলিশ — গঙ্গামতি চর", groups: ["attractionsTime", "dayTrips"] },
  { href: "https://kuareg.touristpolice.gov.bd/site/page/628ebda2-424c-4963-abe4-ffd865abf535/-", en: "Kuakata Tourist Police — Misripara Buddhist Temple", bn: "কুয়াকাটা ট্যুরিস্ট পুলিশ — মিশ্রিপাড়া বৌদ্ধ মন্দির", groups: ["attractionsTime", "dayTrips"] },
  { href: "https://beautifulbangladesh.gov.bd/cat/green-zone/144", en: "Bangladesh Tourism Board — Fatrar Char", bn: "বাংলাদেশ ট্যুরিজম বোর্ড — ফাতরার চর", groups: ["attractionsTime", "dayTrips"] },
  { href: "https://beautifulbangladesh.gov.bd/district-destination/patuakhali/landmarks/149", en: "Bangladesh Tourism Board — Shutki Palli", bn: "বাংলাদেশ ট্যুরিজম বোর্ড — শুঁটকি পল্লি", groups: ["attractionsTime", "dayTrips", "food"] },
  { href: "https://bmd.gov.bd/web/en/", en: "Bangladesh Meteorological Department — Sunrise and sunset times", bn: "বাংলাদেশ আবহাওয়া অধিদপ্তর — সূর্যোদয় ও সূর্যাস্তের সময়", groups: ["sunriseSunset"] },
  { href: "https://www.tourismbangladesh.com.bd/destinations/kuakata", en: "Tourism Bangladesh — Kuakata planning and beach safety", bn: "Tourism Bangladesh — কুয়াকাটা ভ্রমণ পরিকল্পনা ও সৈকত নিরাপত্তা", groups: ["beach", "sunriseSunset"] },
  { href: "https://online-d11.thedailystar.net/news/bangladesh/news/dried-fish-season-begins-kuakata-4033031", en: "The Daily Star — Dried fish season in Kuakata", bn: "দ্য ডেইলি স্টার — কুয়াকাটায় শুঁটকি মৌসুম", groups: ["food"] },
];

export function KuakataExperienceArticle({ locale, post }: { locale: Locale; post: ExperiencePost }) {
  const bn = locale === "bn";
  const copy = articles[post][locale];
  const url = `${hotel.website.replace(/\/$/, "")}/${locale}/blog/${experiencePosts[post]}/`;
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
        <p className="text-xs uppercase tracking-[0.2em] text-(--color-gold-600)">{bn ? "কুয়াকাটা · স্থানীয় ভ্রমণ গাইড" : "Kuakata · Local travel guide"}</p>
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
        <h2 className="font-display text-2xl">{bn ? "কুয়াকাটায় থাকার পরিকল্পনা করুন" : "Plan your stay in Kuakata"}</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-white/75">{bn ? "Hotel Silver Pearl-এ সৈকত থেকে অল্প হাঁটার দূরত্বে রুম, বুফে নাশতা, ফ্রি ওয়াই-ফাই ও গাড়ি পার্কিং রয়েছে। তারিখ অনুযায়ী প্রাপ্যতা ও ভাড়া নিশ্চিত করুন।" : "Hotel Silver Pearl offers rooms a short walk from the beach, buffet breakfast, free Wi-Fi, and car parking. Confirm availability and rates for your dates."}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="rounded-full bg-(--color-gold-400) px-5 py-3 text-sm font-medium text-(--color-navy-900) hover:bg-(--color-gold-300)" href={`/${locale}/rooms`}>{bn ? "রুম ও ভাড়া দেখুন" : "View rooms & rates"}</Link>
          <Link className="rounded-full border border-white/30 px-5 py-3 text-sm text-white hover:bg-white/10" href={`/${locale}/location`}>{bn ? "অবস্থান ও যাতায়াত" : "Location & directions"}</Link>
        </div>
      </section>
      <aside className="mt-12 border-t border-(--color-navy-800)/10 pt-7">
        <h2 className="font-display text-xl text-(--color-navy-800)">{bn ? "তথ্যসূত্র" : "Sources"}</h2>
        <ul className="mt-4 grid gap-2 text-sm text-(--color-ink)/75 sm:grid-cols-2">
          {sources.filter((source) => source.groups.includes(post)).map((source) => <li key={source.href}><a className="underline decoration-(--color-gold-500) underline-offset-4" href={source.href} target="_blank" rel="noreferrer noopener">{bn ? source.bn : source.en} ↗</a></li>)}
        </ul>
        <p className="mt-4 text-xs leading-relaxed text-(--color-ink)/55">{bn ? "আবহাওয়া, জোয়ার, নৌযান ও স্থানীয় প্রবেশের নিয়ম বদলাতে পারে। বের হওয়ার আগে হালনাগাদ অবস্থা ও নিরাপত্তা নির্দেশনা জেনে নিন।" : "Weather, tides, boat access, and local rules can change. Check current conditions and safety guidance before setting out."}</p>
      </aside>
    </Container>
  </article>;
}

function renderLinks(text: string) {
  return text.split(/(<Link href="[^"]+">.*?<\/Link>)/g).map((part, index) => {
    const match = part.match(/^<Link href="([^"]+)">(.*?)<\/Link>$/);
    return match ? <Link key={index} className="underline decoration-(--color-gold-500) underline-offset-4" href={match[1]}>{match[2]}</Link> : part;
  });
}
