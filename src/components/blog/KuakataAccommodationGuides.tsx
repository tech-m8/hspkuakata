import Link from "next/link";
import { hotel } from "@/data/hotel";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/i18n/locales";

export const accommodationPosts = {
  areas: "where-to-stay-in-kuakata-areas",
  choose: "how-to-choose-hotel-kuakata",
  families: "kuakata-family-hotel-guide",
  couplesGroups: "kuakata-accommodation-couples-groups",
  nearBeach: "hotel-near-kuakata-beach",
  bookingQuestions: "questions-to-ask-before-booking-kuakata-hotel",
} as const;
export type AccommodationPost = keyof typeof accommodationPosts;

const relatedGuides: Record<AccommodationPost, { en: [string, string][]; bn: [string, string][] }> = {
  areas: { en: [["how-to-choose-hotel-kuakata", "how to choose a hotel in Kuakata"], ["hotel-near-kuakata-beach", "what ‘near the beach’ means in practice"], ["questions-to-ask-before-booking-kuakata-hotel", "questions to ask before booking a Kuakata hotel"]], bn: [["how-to-choose-hotel-kuakata", "কুয়াকাটায় হোটেল বাছাইয়ের গাইড"], ["hotel-near-kuakata-beach", "সৈকতের কাছে থাকার বাস্তব অর্থ"], ["questions-to-ask-before-booking-kuakata-hotel", "হোটেল বুকিংয়ের আগে প্রশ্ন"]] },
  choose: { en: [["where-to-stay-in-kuakata-areas", "where to stay in Kuakata by area"], ["kuakata-family-hotel-guide", "the Kuakata hotel guide for families"], ["questions-to-ask-before-booking-kuakata-hotel", "the Kuakata hotel booking checklist"]], bn: [["where-to-stay-in-kuakata-areas", "এলাকা অনুযায়ী কুয়াকাটায় কোথায় থাকবেন"], ["kuakata-family-hotel-guide", "পরিবারের জন্য কুয়াকাটা হোটেল গাইড"], ["questions-to-ask-before-booking-kuakata-hotel", "কুয়াকাটা হোটেল বুকিং চেকলিস্ট"]] },
  families: { en: [["kuakata-family-trip-guide", "the Kuakata family trip planning guide"], ["kuakata-with-children", "activities and practical tips for visiting Kuakata with children"], ["questions-to-ask-before-booking-kuakata-hotel", "questions to ask before booking a Kuakata hotel"]], bn: [["kuakata-family-trip-guide", "কুয়াকাটা পারিবারিক ভ্রমণ পরিকল্পনা"], ["kuakata-with-children", "শিশুদের নিয়ে কুয়াকাটায় কার্যক্রম ও পরামর্শ"], ["questions-to-ask-before-booking-kuakata-hotel", "কুয়াকাটা হোটেল বুকিংয়ের আগে প্রশ্ন"]] },
  couplesGroups: { en: [["how-to-choose-hotel-kuakata", "how to choose a hotel in Kuakata"], ["questions-to-ask-before-booking-kuakata-hotel", "questions to ask before booking a Kuakata hotel"], ["where-to-stay-in-kuakata-areas", "Kuakata areas and nearby attractions"]], bn: [["how-to-choose-hotel-kuakata", "কুয়াকাটায় হোটেল বাছাইয়ের গাইড"], ["questions-to-ask-before-booking-kuakata-hotel", "কুয়াকাটা হোটেল বুকিংয়ের আগে প্রশ্ন"], ["where-to-stay-in-kuakata-areas", "কুয়াকাটার এলাকা ও কাছের দর্শনীয় স্থান"]] },
  nearBeach: { en: [["where-to-stay-in-kuakata-areas", "Kuakata areas and nearby attractions"], ["kuakata-beach-guide", "the Kuakata beach guide for visitors"], ["questions-to-ask-before-booking-kuakata-hotel", "hotel booking questions about beach access"]], bn: [["where-to-stay-in-kuakata-areas", "কুয়াকাটার এলাকা ও কাছের দর্শনীয় স্থান"], ["kuakata-beach-guide", "দর্শনার্থীদের জন্য কুয়াকাটা সৈকত গাইড"], ["questions-to-ask-before-booking-kuakata-hotel", "সৈকতে যাতায়াত নিয়ে হোটেল বুকিংয়ের প্রশ্ন"]] },
  bookingQuestions: { en: [["how-to-choose-hotel-kuakata", "how to choose a hotel in Kuakata"], ["kuakata-family-hotel-guide", "hotel planning for families in Kuakata"], ["kuakata-accommodation-couples-groups", "Kuakata accommodation for couples and groups"]], bn: [["how-to-choose-hotel-kuakata", "কুয়াকাটায় হোটেল বাছাইয়ের গাইড"], ["kuakata-family-hotel-guide", "পরিবারের জন্য কুয়াকাটা হোটেল পরিকল্পনা"], ["kuakata-accommodation-couples-groups", "দম্পতি ও দলের জন্য কুয়াকাটায় থাকা"]] },
};

type Section = { heading: string; paragraphs?: string[]; bullets?: string[] };
type Copy = { title: string; description: string; sections: Section[] };

const articles: Record<AccommodationPost, Record<Locale, Copy>> = {
  areas: {
    en: {
      title: "Where to Stay in Kuakata: Areas and Nearby Attractions",
      description: "Choose where to stay in Kuakata based on beach access, transport, and the attractions you want to visit. Includes practical location tips for Hotel Silver Pearl.",
      sections: [
        { heading: "How to choose an area to stay in Kuakata", paragraphs: ["When deciding where to stay in Kuakata, start with your itinerary rather than a vague claim that a place is central or close to everything. Kuakata’s long sea beach is the main draw, while several other sights require a separate local ride or boat. Think about how often you want to walk to the shore, where your bus will drop you, and whether you plan to visit places beyond the main beach.", "Use a map pin to understand a property’s position, then ask for the walking route from its entrance to the beach access point. A straight-line distance does not show road crossings, sandy sections, heat, or the time needed to reach the part of the shore you want."] },
        { heading: "Stay near the main beach for sunrise and sunset", paragraphs: ["If sunrise and sunset walks are the priority, choose a base with a straightforward route to Kuakata Sea Beach. The Bangladesh Tourism Board describes Kuakata as an 18-kilometre beach known for views of both sunrise and sunset. The exact access point still matters: ask which entrance is easiest from your accommodation and how you will get back after dark.", "Hotel Silver Pearl describes itself as a short walk from Kuakata Sea Beach and a few minutes from the shore. Check the <Link href=\"/en/location\">map and directions</Link>, and ask the hotel which walking route guests should use for your planned beach visit."] },
        { heading: "Plan separately for farther attractions", paragraphs: ["Some places around Kuakata are outings rather than quick walks. Gangamati lies east of the main beach; Misripara is a Rakhine village with a Buddhist temple; Fatrar Char is reached by boat. Confirm the current route and transport for each before you leave. Tide, weather, and boat availability can change what is practical on a particular day.", "If your plan includes several farther stops, ask Hotel Silver Pearl whether local transport can be arranged and how much time to allow. Read our <Link href=\"/en/blog/kuakata-attractions-time-guide\">Kuakata attractions guide</Link> before deciding how many trips fit your stay."] },
        { heading: "Consider transport, meals, and your return journey", paragraphs: ["If arriving by bus, find out how far the drop-off point is from your accommodation and what local ride you will need with luggage. Drivers should confirm parking and arrival directions before setting off. Check whether breakfast is included and when it is served if you plan an early sunrise outing or an early departure.", "Hotel Silver Pearl lists buffet breakfast, free Wi-Fi, and free car parking among its stay inclusions. Confirm current availability, room occupancy, and the total rate for your dates directly before booking."] },
        { heading: "Quick location checklist", bullets: ["Save the exact map pin and ask for the practical route from the entrance to the beach.", "Check walking time at the time of day you expect to go, including after sunset.", "Confirm how to reach Gangamati, Misripara, or a boat departure point and arrange the return.", "Ask where your bus drops you and how to reach Hotel Silver Pearl with luggage.", "Review our <Link href=\"/en/rooms\">room options</Link> and <Link href=\"/en/location\">location guide</Link> before you reserve."] },
      ],
    },
    bn: {
      title: "কুয়াকাটায় কোথায় থাকবেন: এলাকা ও কাছের দর্শনীয় স্থান",
      description: "সৈকতে যাতায়াত, পরিবহন ও পছন্দের দর্শনীয় স্থান বিবেচনা করে কুয়াকাটায় থাকার জায়গা বেছে নিন। Hotel Silver Pearl-এর অবস্থান সম্পর্কেও ব্যবহারিক তথ্য।",
      sections: [
        { heading: "কুয়াকাটায় থাকার এলাকা কীভাবে বাছবেন", paragraphs: ["কুয়াকাটায় কোথায় থাকবেন ঠিক করতে “কেন্দ্রে” বা “সবকিছুর কাছে” কথার বদলে আপনার ভ্রমণসূচি দিয়ে শুরু করুন। দীর্ঘ সমুদ্রসৈকত প্রধান আকর্ষণ; অন্য কয়েকটি দর্শনীয় স্থানে আলাদা স্থানীয় যানবাহন বা নৌকা লাগে। সৈকতে কতবার হাঁটতে যাবেন, বাস কোথায় নামাবে এবং মূল সৈকতের বাইরে কোথায় যাবেন—এসব ভেবে নিন।", "মানচিত্রের পিন দেখে অবস্থান বুঝুন, তারপর হোটেলের প্রবেশপথ থেকে সৈকতের প্রবেশস্থল পর্যন্ত হাঁটার পথ জিজ্ঞেস করুন। সরলরেখার দূরত্বে রাস্তা পার হওয়া, বালুর পথ, রোদ এবং সৈকতের পছন্দের অংশে পৌঁছাতে কত সময় লাগে বোঝা যায় না।"] },
        { heading: "সূর্যোদয় ও সূর্যাস্তের জন্য মূল সৈকতের কাছে থাকুন", paragraphs: ["ভোর ও সন্ধ্যায় সৈকতে হাঁটতে চাইলে কুয়াকাটা সমুদ্রসৈকতে যাওয়ার সহজ পথ আছে এমন থাকার জায়গা বেছে নিন। বাংলাদেশ ট্যুরিজম বোর্ড কুয়াকাটাকে প্রায় ১৮ কিলোমিটার দীর্ঘ এবং সূর্যোদয়-সূর্যাস্তের দৃশ্যের জন্য পরিচিত বলে বর্ণনা করে। তবে কোন প্রবেশপথে যাবেন সেটিও গুরুত্বপূর্ণ—আপনার থাকার স্থান থেকে কোন পথ সুবিধাজনক এবং অন্ধকারে কীভাবে ফিরবেন জেনে নিন।", "Hotel Silver Pearl জানায়, এটি কুয়াকাটা সমুদ্রসৈকত থেকে অল্প হাঁটার দূরত্বে, সৈকতে যেতে কয়েক মিনিট লাগে। আমাদের <Link href=\"/bn/location\">মানচিত্র ও দিকনির্দেশ</Link> দেখুন এবং পরিকল্পিত সৈকত ভ্রমণের জন্য কোন হাঁটার পথ ব্যবহার করবেন হোটেলকে জিজ্ঞেস করুন।"] },
        { heading: "দূরের দর্শনীয় স্থানের যাতায়াত আলাদা করে ঠিক করুন", paragraphs: ["কুয়াকাটার আশপাশের কিছু স্থান হেঁটে যাওয়ার জায়গা নয়, আলাদা ভ্রমণ। গঙ্গামতি মূল সৈকতের পূর্বে; মিশ্রিপাড়া একটি রাখাইন গ্রাম যেখানে বৌদ্ধ মন্দির আছে; ফাতরার চরে নৌকায় যেতে হয়। রওনা হওয়ার আগে প্রতিটির চলতি রুট ও যানবাহন নিশ্চিত করুন। জোয়ার, আবহাওয়া ও নৌযানের প্রাপ্যতা সেদিনের পরিকল্পনা বদলাতে পারে।", "একাধিক দূরের স্থানে যাওয়ার পরিকল্পনা থাকলে Hotel Silver Pearl-কে স্থানীয় যাতায়াতের ব্যবস্থা ও সময় সম্পর্কে জিজ্ঞেস করুন। থাকার সময়ে কতগুলো ভ্রমণ সম্ভব ঠিক করতে <Link href=\"/bn/blog/kuakata-attractions-time-guide\">কুয়াকাটার দর্শনীয় স্থান গাইড</Link> পড়ুন।"] },
        { heading: "যাতায়াত, খাবার ও ফেরার পরিকল্পনা ভাবুন", paragraphs: ["বাসে এলে নামার স্থান থেকে থাকার জায়গা কত দূরে এবং লাগেজ নিয়ে কী স্থানীয় যানবাহন লাগবে জেনে নিন। নিজস্ব গাড়িতে গেলে চালককে পার্কিং ও পৌঁছানোর নির্দেশনা নিশ্চিত করুন। সূর্যোদয় দেখতে ভোরে বা সকালে তাড়াতাড়ি রওনা হলে নাশতা অন্তর্ভুক্ত কি না এবং কখন পরিবেশন হয় জেনে নিন।", "Hotel Silver Pearl থাকার অন্তর্ভুক্ত সুবিধা হিসেবে বুফে নাশতা, ফ্রি ওয়াই-ফাই ও ফ্রি গাড়ি পার্কিং উল্লেখ করে। বুকিংয়ের আগে আপনার তারিখে প্রাপ্যতা, রুমের অতিথি সীমা ও মোট ভাড়া সরাসরি নিশ্চিত করুন।"] },
        { heading: "অবস্থান যাচাইয়ের সংক্ষিপ্ত তালিকা", bullets: ["সঠিক মানচিত্রের পিন সংরক্ষণ করে প্রবেশপথ থেকে সৈকতের ব্যবহারিক পথ জেনে নিন।", "সূর্যাস্তের পর ফেরাসহ যে সময় হাঁটবেন সেই সময়ের যাত্রা বিবেচনা করুন।", "গঙ্গামতি, মিশ্রিপাড়া বা নৌযাত্রার ঘাটে যাওয়া ও ফেরার ব্যবস্থা নিশ্চিত করুন।", "বাস কোথায় নামাবে এবং লাগেজসহ Hotel Silver Pearl-এ কীভাবে যাবেন জেনে নিন।", "বুকিংয়ের আগে আমাদের <Link href=\"/bn/rooms\">রুমের বিকল্প</Link> ও <Link href=\"/bn/location\">অবস্থান গাইড</Link> দেখুন।"] },
      ],
    },
  },
  choose: {
    en: {
      title: "How to Choose a Hotel in Kuakata: Location, Amenities and What to Check",
      description: "Compare location, room fit, amenities, breakfast, parking, rates, and booking terms when choosing a hotel in Kuakata. See what Hotel Silver Pearl publishes.",
      sections: [
        { heading: "Start with location and the route you will actually use", paragraphs: ["When choosing a hotel in Kuakata, check the exact map pin and the route from the entrance to the beach, bus drop-off, and attractions on your itinerary. Ask for walking time along the usable route rather than relying only on a straight-line map measurement. Consider whether you will return after sunset, carry children, or walk over sand and uneven ground.", "Hotel Silver Pearl is in Kuakata, Patuakhali, and describes Kuakata Sea Beach as a short walk away. Open the <Link href=\"/en/location\">location page</Link> and confirm the route that fits your plans."] },
        { heading: "Match room capacity to your group", paragraphs: ["Check the maximum number of guests for the specific room, bed arrangement, and rules for children. Hotel Silver Pearl lists Deluxe and Super Deluxe rooms for up to two guests and Family Deluxe for up to three. If you need an extra bed or more than one room, ask about availability and charges before paying.", "For a group, work out who will share each room and whether your party needs rooms near each other. Requests should be confirmed directly; do not assume a particular floor or adjoining-room arrangement is guaranteed."] },
        { heading: "Compare useful amenities, not just a headline", paragraphs: ["Make a short list of the features you will use: air conditioning, attached bathroom, Wi-Fi, kettle, balcony, breakfast, parking, or a place to store luggage. Hotel Silver Pearl’s published room descriptions list air conditioning and attached bathrooms, while its stay inclusions list buffet breakfast, free Wi-Fi, a welcome drink, drinking water, an in-room kettle, and free car parking. Confirm that the exact room and dates include the items you need.", "If you are arriving early for sunrise or leaving before breakfast, ask about breakfast hours or alternatives. If you are driving, confirm parking arrangements before arrival."] },
        { heading: "Understand the total rate and booking terms", paragraphs: ["Ask for the total amount for your dates, guest count, and room configuration, including taxes, service charges, and any extra bed. Confirm deposit, accepted payment methods, check-in and check-out, cancellation or date-change rules, and whether the rate changes on weekends or public holidays. Keep your confirmation and the hotel’s direct contact number.", "Rates and offers change over time. Check Hotel Silver Pearl’s <Link href=\"/en/rooms\">current room and rate page</Link> and request confirmation for your specific dates rather than budgeting from an old screenshot."] },
        { heading: "Ask practical questions before you book", bullets: ["How long is the walk from the hotel entrance to the beach access point, and what is the route like?", "What is the maximum occupancy and exact bed setup for my room?", "Is breakfast included, and what time is it served?", "Can you confirm parking, luggage storage, and arrival instructions?", "What is the full price and cancellation policy for my dates?", "Can you help arrange local transport to attractions, and how are fares confirmed?"] },
      ],
    },
    bn: {
      title: "কুয়াকাটায় হোটেল বাছাই: অবস্থান, সুবিধা ও যা যাচাই করবেন",
      description: "কুয়াকাটায় হোটেল বাছার সময় অবস্থান, রুম, সুবিধা, নাশতা, পার্কিং, ভাড়া ও বুকিংয়ের শর্ত তুলনা করুন। Hotel Silver Pearl-এর প্রকাশিত তথ্য দেখুন।",
      sections: [
        { heading: "প্রথমে আপনার ব্যবহারিক যাতায়াতের পথ দেখুন", paragraphs: ["কুয়াকাটায় হোটেল বাছার সময় সঠিক মানচিত্রের পিন এবং প্রবেশপথ থেকে সৈকত, বাসের নামার স্থান ও ভ্রমণসূচির দর্শনীয় স্থানের পথ যাচাই করুন। সরলরেখার মানচিত্র-দূরত্ব নয়, চলাচলের উপযোগী পথে হাঁটতে কত সময় লাগে জিজ্ঞেস করুন। সূর্যাস্তের পর ফিরবেন কি না, শিশু সঙ্গে থাকবে কি না এবং বালু বা অসমান পথে হাঁটতে হবে কি না ভাবুন।", "Hotel Silver Pearl পটুয়াখালীর কুয়াকাটায় এবং জানায় কুয়াকাটা সমুদ্রসৈকত অল্প হাঁটার দূরত্বে। <Link href=\"/bn/location\">অবস্থান পাতা</Link> দেখুন এবং আপনার পরিকল্পনার উপযোগী পথ নিশ্চিত করুন।"] },
        { heading: "দলের সঙ্গে রুমের ধারণক্ষমতা মিলিয়ে নিন", paragraphs: ["নির্দিষ্ট রুমে সর্বোচ্চ অতিথি, বিছানার বিন্যাস এবং শিশুদের নিয়ম যাচাই করুন। Hotel Silver Pearl-এর তথ্য অনুযায়ী ডিলাক্স ও সুপার ডিলাক্স রুমে সর্বোচ্চ দুইজন এবং ফ্যামিলি ডিলাক্সে সর্বোচ্চ তিনজন থাকতে পারেন। অতিরিক্ত বিছানা বা একাধিক রুম লাগলে টাকা দেওয়ার আগে প্রাপ্যতা ও চার্জ জেনে নিন।", "দল হলে কে কোন রুমে থাকবেন ঠিক করুন এবং পাশাপাশি রুম দরকার কি না ভাবুন। নির্দিষ্ট তলা বা পাশাপাশি রুমের অনুরোধ সরাসরি নিশ্চিত করুন; এগুলো নিশ্চিতভাবে পাওয়া যাবে ধরে নেবেন না।"] },
        { heading: "শুধু শিরোনাম নয়, কাজে লাগে এমন সুবিধা তুলনা করুন", paragraphs: ["আপনার দরকারি সুবিধার ছোট তালিকা করুন: শীতাতপ নিয়ন্ত্রণ, অ্যাটাচড বাথরুম, ওয়াই-ফাই, কেটলি, বারান্দা, নাশতা, পার্কিং বা লাগেজ রাখার ব্যবস্থা। Hotel Silver Pearl-এর রুমের বিবরণে শীতাতপ নিয়ন্ত্রণ ও অ্যাটাচড বাথরুম আছে; থাকার অন্তর্ভুক্ত সুবিধায় বুফে নাশতা, ফ্রি ওয়াই-ফাই, ওয়েলকাম ড্রিংক, পানীয় জল, রুমের কেটলি ও ফ্রি গাড়ি পার্কিং উল্লেখ আছে। আপনার রুম ও তারিখে দরকারি সুবিধাগুলো অন্তর্ভুক্ত কি না নিশ্চিত করুন।", "সূর্যোদয়ের জন্য ভোরে বের হলে বা নাশতার আগে চলে গেলে নাশতার সময় কিংবা বিকল্প ব্যবস্থা জেনে নিন। গাড়িতে গেলে পৌঁছানোর আগে পার্কিং নিশ্চিত করুন।"] },
        { heading: "মোট ভাড়া ও বুকিংয়ের শর্ত বুঝুন", paragraphs: ["আপনার তারিখ, অতিথি সংখ্যা ও রুম বিন্যাসের জন্য কর, সার্ভিস চার্জ ও অতিরিক্ত বিছানাসহ মোট দাম জেনে নিন। অগ্রিম, পরিশোধের পদ্ধতি, চেক-ইন ও চেক-আউট, বাতিল বা তারিখ পরিবর্তনের নিয়ম এবং সপ্তাহান্ত বা ছুটিতে ভাড়া বদলায় কি না নিশ্চিত করুন। বুকিংয়ের প্রমাণ ও হোটেলের সরাসরি যোগাযোগ নম্বর রাখুন।", "ভাড়া ও অফার সময়ের সঙ্গে বদলায়। Hotel Silver Pearl-এর <Link href=\"/bn/rooms\">বর্তমান রুম ও ভাড়ার পাতা</Link> দেখুন এবং পুরোনো স্ক্রিনশটের বদলে নিজের তারিখের জন্য নিশ্চিত ভাড়া নিন।"] },
        { heading: "বুকিংয়ের আগে ব্যবহারিক প্রশ্ন করুন", bullets: ["হোটেলের প্রবেশপথ থেকে সৈকতের প্রবেশস্থলে হাঁটতে কত সময় এবং পথটি কেমন?", "আমার রুমে সর্বোচ্চ কতজন এবং বিছানার সঠিক বিন্যাস কী?", "নাশতা অন্তর্ভুক্ত কি না এবং কখন পরিবেশন হয়?", "পার্কিং, লাগেজ রাখা ও পৌঁছানোর নির্দেশনা নিশ্চিত করবেন?", "আমার তারিখের মোট দাম ও বাতিলের নিয়ম কী?", "দর্শনীয় স্থানে স্থানীয় যাতায়াতের ব্যবস্থা করতে সাহায্য করা যায় কি, ভাড়া কীভাবে নিশ্চিত হবে?"] },
      ],
    },
  },
  families: {
    en: {
      title: "Kuakata Hotel Guide for Families: Rooms, Meals and Practical Questions",
      description: "Planning a family stay in Kuakata? Compare room occupancy, beds, breakfast, beach access, parking, and the questions to ask Hotel Silver Pearl.",
      sections: [
        { heading: "Choose the room around your family’s actual needs", paragraphs: ["Before booking a family hotel in Kuakata, count every guest and check the room’s stated capacity and bed layout. Hotel Silver Pearl’s Family Deluxe room is listed for up to three guests and has one king bed and one single bed. If your family has four or more people, ask about booking an additional room and confirm the arrangement directly.", "Tell the hotel if a child needs a separate bed, a cot, or a particular room location. Confirm any age policy and extra-person charge in writing; never assume a child can be added without affecting occupancy or price."] },
        { heading: "Check breakfast, food, and the daily routine", paragraphs: ["Hotel Silver Pearl lists buffet breakfast as included with every stay. Ask when breakfast is served, especially if you plan to leave early for sunrise or have children with a fixed meal routine. Confirm drinking water and other listed inclusions for your exact booking, and ask about nearby food options if your family needs meals outside breakfast.", "If anyone has an allergy or dietary restriction, explain it before arrival and ask what can be accommodated. Carry familiar snacks and any essential food or medicine for the road journey."] },
        { heading: "Think through beach access and rest breaks", paragraphs: ["Hotel Silver Pearl describes Kuakata Sea Beach as a short walk away. For a family, ask how long the walk takes from the hotel entrance, where the accessible beach entry is, and whether the route includes sand or busy road crossings. A practical route can matter more than a map’s straight-line distance, particularly with strollers, tired children, or older relatives.", "Plan short beach visits in cooler hours and leave time for rest during the heat. Ask locally about current beach conditions and keep children close to an adult near the water. A walkable beach location does not mean swimming is safe at every place or tide."] },
        { heading: "Confirm parking, arrival, and local transport", paragraphs: ["If driving, Hotel Silver Pearl lists free car parking; confirm availability and the arrival route for your dates. If arriving by bus, ask where the bus stops, how to reach the hotel with luggage, and whether early luggage storage is possible. For farther attractions, arrange local transport and a return pickup rather than assuming a ride will be waiting.", "Keep the day’s itinerary simple: the main beach and one nearby outing may be plenty with young children. Read our <Link href=\"/en/blog/kuakata-with-children\">Kuakata with children guide</Link> before planning a longer trip."] },
        { heading: "Family booking questions to send Hotel Silver Pearl", bullets: ["Can you confirm the room’s occupancy and bed configuration for our family?", "What are the current rates, taxes, and extra-person or extra-room charges?", "What time is breakfast, and can you advise on meal options for children?", "How long is the walk from the hotel entrance to the beach, and what is the route surface?", "Can you confirm parking, luggage storage, and our arrival arrangements?", "What cancellation or date-change terms apply to our booking?"] },
      ],
    },
    bn: {
      title: "পরিবারের জন্য কুয়াকাটা হোটেল গাইড: রুম, খাবার ও ব্যবহারিক প্রশ্ন",
      description: "পরিবার নিয়ে কুয়াকাটায় থাকবেন? Hotel Silver Pearl-এ রুমের ধারণক্ষমতা, বিছানা, নাশতা, সৈকতের পথ, পার্কিং ও করণীয় প্রশ্ন যাচাই করুন।",
      sections: [
        { heading: "পরিবারের প্রকৃত প্রয়োজন অনুযায়ী রুম নিন", paragraphs: ["কুয়াকাটায় পরিবারের জন্য হোটেল বুক করার আগে সব অতিথির সংখ্যা গুনে রুমের ধারণক্ষমতা ও বিছানার বিন্যাস যাচাই করুন। Hotel Silver Pearl-এর ফ্যামিলি ডিলাক্স রুমে সর্বোচ্চ তিনজন থাকতে পারেন; এতে একটি কিং বেড ও একটি সিঙ্গেল বেড আছে। পরিবারে চারজন বা তার বেশি হলে অতিরিক্ত রুমের ব্যবস্থা জিজ্ঞেস করে সরাসরি নিশ্চিত করুন।", "শিশুর আলাদা বিছানা, বেবি কট বা নির্দিষ্ট অবস্থানের রুম লাগলে হোটেলকে জানান। বয়সসংক্রান্ত নিয়ম ও অতিরিক্ত অতিথির চার্জ লিখিতভাবে নিশ্চিত করুন; শিশু যোগ করলেও ধারণক্ষমতা বা ভাড়া বদলাবে না ধরে নেবেন না।"] },
        { heading: "নাশতা, খাবার ও দৈনন্দিন রুটিন জেনে নিন", paragraphs: ["Hotel Silver Pearl প্রতিটি থাকার সঙ্গে বুফে নাশতা অন্তর্ভুক্ত বলে উল্লেখ করে। সূর্যোদয় দেখতে ভোরে বের হলে বা শিশুদের নির্দিষ্ট খাবারের সময় থাকলে নাশতা কখন দেওয়া হয় জেনে নিন। আপনার বুকিংয়ে পানীয় জল ও অন্য উল্লেখিত সুবিধা নিশ্চিত করুন এবং নাশতার বাইরে খাবারের জন্য কাছাকাছি ব্যবস্থা সম্পর্কে জিজ্ঞেস করুন।", "কারও অ্যালার্জি বা বিশেষ খাবারের নিয়ম থাকলে আগেই জানান এবং কী ব্যবস্থা সম্ভব জিজ্ঞেস করুন। সড়কযাত্রার জন্য পরিচিত নাশতা ও জরুরি খাবার বা ওষুধ সঙ্গে রাখুন।"] },
        { heading: "সৈকতে যাতায়াত ও বিশ্রামের কথা ভাবুন", paragraphs: ["Hotel Silver Pearl জানায় কুয়াকাটা সমুদ্রসৈকত অল্প হাঁটার দূরত্বে। পরিবারের জন্য হোটেলের প্রবেশপথ থেকে হাঁটতে কত সময়, কোন প্রবেশপথ সুবিধাজনক এবং পথে বালু বা ব্যস্ত রাস্তা পার হতে হয় কি না জিজ্ঞেস করুন। ব্যবহারিক পথ মানচিত্রের সরলরেখার দূরত্বের চেয়ে গুরুত্বপূর্ণ—বিশেষ করে স্ট্রলার, ক্লান্ত শিশু বা বয়স্ক আত্মীয় থাকলে।", "ঠান্ডা সময়ে অল্পক্ষণ সৈকতে যান এবং গরমে বিশ্রামের সময় রাখুন। বর্তমান সৈকতের অবস্থা স্থানীয়ভাবে জেনে নিন এবং পানির কাছে শিশুদের বড়দের সঙ্গে রাখুন। সৈকতে হেঁটে যাওয়া যায় মানেই সব জায়গা বা জোয়ারে সাঁতার নিরাপদ নয়।"] },
        { heading: "পার্কিং, পৌঁছানো ও স্থানীয় যাতায়াত নিশ্চিত করুন", paragraphs: ["গাড়িতে গেলে Hotel Silver Pearl ফ্রি পার্কিংয়ের কথা জানায়; আপনার তারিখে প্রাপ্যতা ও পৌঁছানোর পথ নিশ্চিত করুন। বাসে এলে বাস কোথায় নামাবে, লাগেজ নিয়ে হোটেলে কীভাবে যাবেন এবং আগে লাগেজ রাখা যাবে কি না জিজ্ঞেস করুন। দূরের দর্শনীয় স্থানে স্থানীয় যাতায়াত ও ফেরার পিকআপ ঠিক করুন—গাড়ি অপেক্ষা করবে ধরে নেবেন না।", "দিনের পরিকল্পনা সহজ রাখুন: মূল সৈকত ও কাছের একটি ভ্রমণই ছোট শিশুদের জন্য যথেষ্ট হতে পারে। দীর্ঘ ভ্রমণ ঠিক করার আগে <Link href=\"/bn/blog/kuakata-with-children\">শিশুদের নিয়ে কুয়াকাটা গাইড</Link> পড়ুন।"] },
        { heading: "Hotel Silver Pearl-কে পাঠানোর পারিবারিক বুকিং প্রশ্ন", bullets: ["আমাদের পরিবারের জন্য রুমের অতিথি সীমা ও বিছানার বিন্যাস নিশ্চিত করবেন?", "বর্তমান ভাড়া, কর এবং অতিরিক্ত অতিথি বা রুমের চার্জ কত?", "নাশতা কখন, এবং শিশুদের খাবার সম্পর্কে কী পরামর্শ দিতে পারবেন?", "হোটেল থেকে সৈকতে হাঁটতে কত সময় এবং পথের পৃষ্ঠ কেমন?", "পার্কিং, লাগেজ রাখা ও পৌঁছানোর ব্যবস্থা নিশ্চিত করবেন?", "বুকিং বাতিল বা তারিখ বদলের শর্ত কী?"] },
      ],
    },
  },
  couplesGroups: {
    en: {
      title: "Kuakata Accommodation for Couples and Groups: What to Consider",
      description: "Compare room capacity, privacy, bed arrangements, breakfast, and booking logistics for couples and groups staying at Hotel Silver Pearl in Kuakata.",
      sections: [
        { heading: "For couples: choose a room that fits two guests", paragraphs: ["Couples looking for Kuakata accommodation should compare privacy, bed arrangement, bathroom, air conditioning, and the route to the beach. Hotel Silver Pearl lists Deluxe and Super Deluxe rooms for up to two guests. Check the room description and ask for the total price for your dates before booking.", "If a balcony or another specific feature matters to you, confirm that it belongs to the exact room category you are reserving. Ask about check-in, late arrival, breakfast timing, and cancellation terms so your stay fits your transport schedule."] },
        { heading: "For groups: plan rooms by stated occupancy", paragraphs: ["Groups should decide who will share each room before requesting a quote. Hotel Silver Pearl lists rooms for up to two guests in Deluxe and Super Deluxe, and up to three in Family Deluxe. Divide your guests within those capacities and ask how many rooms are available for your dates.", "If your group wants rooms close together, request that when booking and wait for confirmation. Ask whether payments can be made together or separately, how deposits work, and who should contact the hotel if arrival times differ. Do not assume an extra person can be added to an occupied room without approval."] },
        { heading: "Compare group totals, not just the room rate", paragraphs: ["For couples, the total usually starts with one room and transport; for a larger group, room count and meal costs can change the overall budget. Ask for a quote covering all rooms, guests, taxes, service charges, and any extra bed. Hotel Silver Pearl lists buffet breakfast, free Wi-Fi, drinking water, a kettle, a welcome drink, and car parking as stay inclusions; confirm the package details for your booking.", "Review room choices on the <Link href=\"/en/rooms\">Hotel Silver Pearl rates page</Link> and use our <Link href=\"/en/blog/kuakata-trip-budget\">Kuakata trip budget guide</Link> as a planning aid, not as a live quote."] },
        { heading: "Location and shared plans", paragraphs: ["A convenient beach route can help couples plan an early walk and groups coordinate a meeting time. Hotel Silver Pearl describes the beach as a short walk away. Share the hotel map pin with everyone, agree on a meeting point, and ask about local transport for attractions that are farther away.", "For groups arriving on different buses, give each traveler the hotel’s phone number and arrival directions. Check parking if anyone is driving and confirm whether breakfast timing suits the group’s plans."] },
        { heading: "Questions for couples and group organizers", bullets: ["What is the room’s exact maximum occupancy and bed layout?", "How many rooms are available on our dates, and can rooms be near each other?", "What is the total price including taxes, service charges, and any additional bed?", "Are breakfast and the listed inclusions part of each room booking?", "How long is the practical walk to the beach from the hotel entrance?", "What are the deposit, cancellation, and arrival-time arrangements?"] },
      ],
    },
    bn: {
      title: "দম্পতি বা দলের জন্য কুয়াকাটায় থাকার ব্যবস্থা: কী বিবেচনা করবেন",
      description: "কুয়াকাটায় Hotel Silver Pearl-এ দম্পতি ও দলের জন্য রুমের ধারণক্ষমতা, গোপনীয়তা, বিছানা, নাশতা ও বুকিংয়ের ব্যবস্থা মিলিয়ে নিন।",
      sections: [
        { heading: "দম্পতির জন্য: দুজনের উপযোগী রুম বেছে নিন", paragraphs: ["কুয়াকাটায় থাকার জায়গা খোঁজা দম্পতিরা গোপনীয়তা, বিছানা, বাথরুম, শীতাতপ নিয়ন্ত্রণ ও সৈকতে যাওয়ার পথ তুলনা করুন। Hotel Silver Pearl-এর তথ্য অনুযায়ী ডিলাক্স ও সুপার ডিলাক্স রুমে সর্বোচ্চ দুইজন থাকতে পারেন। বুকিংয়ের আগে রুমের বিবরণ দেখুন এবং আপনার তারিখের মোট দাম জেনে নিন।", "বারান্দা বা নির্দিষ্ট সুবিধা গুরুত্বপূর্ণ হলে বুক করা রুমের ধরনে সেটি আছে কি না নিশ্চিত করুন। যাতায়াতের সময়ের সঙ্গে মিলিয়ে চেক-ইন, দেরিতে পৌঁছানো, নাশতার সময় ও বাতিলের শর্ত জেনে নিন।"] },
        { heading: "দলের জন্য: ঘোষিত ধারণক্ষমতা অনুযায়ী রুম ভাগ করুন", paragraphs: ["দল হলে মূল্য জানতে চাওয়ার আগে কে কোন রুম ভাগ করবেন ঠিক করুন। Hotel Silver Pearl-এর ডিলাক্স ও সুপার ডিলাক্সে সর্বোচ্চ দুইজন এবং ফ্যামিলি ডিলাক্সে সর্বোচ্চ তিনজন থাকতে পারেন। এই সীমার মধ্যে অতিথি ভাগ করে আপনার তারিখে কয়টি রুম খালি আছে জিজ্ঞেস করুন।", "দলের রুম কাছাকাছি চাইলে বুকিংয়ের সময় অনুরোধ করে নিশ্চয়তা নিন। একসঙ্গে বা আলাদা টাকা দেওয়া যায় কি না, অগ্রিম কীভাবে এবং পৌঁছানোর সময় আলাদা হলে কার সঙ্গে যোগাযোগ করবেন জেনে নিন। অনুমতি ছাড়া রুমে অতিরিক্ত অতিথি যোগ করা যাবে ধরে নেবেন না।"] },
        { heading: "শুধু রুম ভাড়া নয়, দলের মোট খরচ তুলনা করুন", paragraphs: ["দম্পতির মোট খরচে সাধারণত একটি রুম ও যাতায়াত থাকে; বড় দলের ক্ষেত্রে রুমের সংখ্যা ও খাবারের খরচ বদলায়। সব রুম, অতিথি, কর, সার্ভিস চার্জ ও অতিরিক্ত বিছানাসহ মোট কোটেশন নিন। Hotel Silver Pearl থাকার অন্তর্ভুক্ত সুবিধা হিসেবে বুফে নাশতা, ফ্রি ওয়াই-ফাই, পানীয় জল, কেটলি, ওয়েলকাম ড্রিংক ও গাড়ি পার্কিং উল্লেখ করে; আপনার বুকিংয়ে কী অন্তর্ভুক্ত তা নিশ্চিত করুন।", "<Link href=\"/bn/rooms\">Hotel Silver Pearl-এর ভাড়ার পাতা</Link> দেখুন এবং <Link href=\"/bn/blog/kuakata-trip-budget\">কুয়াকাটা ভ্রমণ বাজেট গাইড</Link> প্রাথমিক পরিকল্পনার জন্য ব্যবহার করুন, বর্তমান কোটেশন হিসেবে নয়।"] },
        { heading: "অবস্থান ও একসঙ্গে ঘোরার পরিকল্পনা", paragraphs: ["দম্পতির ভোরে হাঁটা বা দলের একসঙ্গে দেখা করার জন্য সৈকতে সুবিধাজনক পথ কাজে দেয়। Hotel Silver Pearl জানায় সৈকত অল্প হাঁটার দূরত্বে। সবার সঙ্গে হোটেলের মানচিত্রের পিন ভাগ করুন, দেখা করার স্থান ঠিক করুন এবং দূরের দর্শনীয় স্থানে স্থানীয় যাতায়াত সম্পর্কে জেনে নিন।", "দলের সদস্যরা আলাদা বাসে এলে প্রত্যেককে হোটেলের ফোন ও পৌঁছানোর নির্দেশনা দিন। কেউ গাড়িতে এলে পার্কিং এবং দলের সময়সূচির সঙ্গে নাশতার সময় মেলে কি না নিশ্চিত করুন।"] },
        { heading: "দম্পতি ও দলের আয়োজকদের প্রশ্ন", bullets: ["রুমের সঠিক সর্বোচ্চ অতিথি সংখ্যা ও বিছানার বিন্যাস কী?", "আমাদের তারিখে কয়টি রুম আছে, এবং রুমগুলো কাছাকাছি দেওয়া যাবে?", "কর, সার্ভিস চার্জ ও অতিরিক্ত বিছানাসহ মোট দাম কত?", "প্রতিটি রুম বুকিংয়ে নাশতা ও তালিকাভুক্ত সুবিধা অন্তর্ভুক্ত?", "হোটেলের প্রবেশপথ থেকে সৈকতে ব্যবহারিকভাবে হাঁটতে কত সময়?", "অগ্রিম, বাতিল ও পৌঁছানোর সময়ের ব্যবস্থা কী?"] },
      ],
    },
  },
  nearBeach: {
    en: {
      title: "Hotel Near Kuakata Beach: What ‘Near the Beach’ Means in Practice",
      description: "Searching for a hotel near Kuakata Beach? Learn how to check the map pin, beach entrance, real walking route, timing, and Hotel Silver Pearl’s location.",
      sections: [
        { heading: "‘Near the beach’ is more than a map measurement", paragraphs: ["A hotel may look close to Kuakata Beach on a map, but a useful beach walk depends on the actual entrance, road layout, sand, crossings, and the stretch of shore you want to reach. A straight-line distance can differ from the route you walk. Before booking, open the map pin and ask the property for the practical path from its front door to a beach access point.", "Ask how long the walk usually takes at your pace, whether the route is lit after sunset, and whether local transport is recommended at certain times. If you are traveling with young children, older relatives, or mobility equipment, ask about the surface and any steps rather than relying on a short distance claim."] },
        { heading: "How close is Hotel Silver Pearl to Kuakata Sea Beach?", paragraphs: ["Hotel Silver Pearl describes itself as a short walk from Kuakata Sea Beach and says the beach is a few minutes away. The property does not publish a precise walking distance in metres, so contact the hotel if you need an exact route or time for your plans. Open our <Link href=\"/en/location\">location map</Link> and request directions from the hotel entrance to the beach access point you expect to use.", "For sunrise or sunset, allow time to reach the shore before the light changes and to return safely. The route and walking time can feel different in the heat, after rain, or in the dark."] },
        { heading: "Questions that make ‘near’ meaningful", bullets: ["Which beach access point should I use from the hotel?", "How long does the walk take from the entrance, not just from the map pin?", "Is the route paved, sandy, uneven, or across a busy road?", "Can I comfortably walk back after sunset, or should I arrange a ride?", "How far is the hotel from my bus drop-off and the attractions on my itinerary?", "Can the hotel confirm directions or suggest local transport for my dates?"] },
        { heading: "Keep beach access and beach safety separate", paragraphs: ["A short walk to the shore does not mean every area is safe for swimming or that conditions stay the same through the day. Ask locally about tides, waves, warnings, and suitable areas. Follow safety advice and keep children close to an adult near the water.", "Hotel Silver Pearl offers a convenient base with air-conditioned rooms, buffet breakfast, free Wi-Fi, and free car parking listed on its website. Check the current room details and contact the hotel about your arrival and beach route."] },
        { heading: "Check the route before you book", paragraphs: ["Compare the exact map pin with the beach route and your transport arrival point. Save the directions and ask the hotel to confirm the practical walk for your planned beach visit. See our <Link href=\"/en/rooms\">rooms and rates</Link> and <Link href=\"/en/location\">location and directions</Link> pages to plan your stay at Hotel Silver Pearl."] },
      ],
    },
    bn: {
      title: "কুয়াকাটা সৈকতের কাছে হোটেল: ‘কাছে’ কথাটির ব্যবহারিক অর্থ",
      description: "কুয়াকাটা সৈকতের কাছে হোটেল খুঁজছেন? মানচিত্রের পিন, প্রবেশপথ, হাঁটার বাস্তব পথ ও Hotel Silver Pearl-এর অবস্থান যাচাই করুন।",
      sections: [
        { heading: "‘সৈকতের কাছে’ শুধু মানচিত্রের দূরত্ব নয়", paragraphs: ["মানচিত্রে কোনো থাকার জায়গা কুয়াকাটা সৈকতের কাছে মনে হলেও বাস্তবে হাঁটা নির্ভর করে প্রবেশপথ, রাস্তা, বালু, রাস্তা পারাপার এবং সৈকতের কোন অংশে যাবেন তার ওপর। সরলরেখার দূরত্ব হাঁটার পথের সমান নাও হতে পারে। বুকিংয়ের আগে মানচিত্রের পিন খুলে হোটেলের দরজা থেকে সৈকতের প্রবেশপথ পর্যন্ত ব্যবহারিক পথ জিজ্ঞেস করুন।", "আপনার গতিতে সাধারণত কত সময় লাগে, সূর্যাস্তের পর পথে আলো থাকে কি না এবং কোনো সময় স্থানীয় যানবাহন নেওয়া সুবিধাজনক কি না জেনে নিন। ছোট শিশু, বয়স্ক আত্মীয় বা চলাচলের সরঞ্জাম থাকলে অল্প দূরত্বের দাবি দেখে সিদ্ধান্ত না নিয়ে পথের পৃষ্ঠ ও সিঁড়ি সম্পর্কে জিজ্ঞেস করুন।"] },
        { heading: "কুয়াকাটা সমুদ্রসৈকত থেকে Hotel Silver Pearl কতটা কাছে?", paragraphs: ["Hotel Silver Pearl জানায় এটি কুয়াকাটা সমুদ্রসৈকত থেকে অল্প হাঁটার দূরত্বে এবং সৈকতে যেতে কয়েক মিনিট লাগে। হোটেল নির্দিষ্ট মিটারে হাঁটার দূরত্ব প্রকাশ করেনি; নির্দিষ্ট পথ বা সময় দরকার হলে সরাসরি যোগাযোগ করুন। আমাদের <Link href=\"/bn/location\">অবস্থানের মানচিত্র</Link> খুলে হোটেলের প্রবেশপথ থেকে আপনার পছন্দের সৈকত প্রবেশস্থলের দিকনির্দেশ জেনে নিন।", "সূর্যোদয় বা সূর্যাস্ত দেখতে আলো বদলানোর আগে সৈকতে পৌঁছানো এবং নিরাপদে ফেরার সময় রাখুন। গরম, বৃষ্টির পর বা অন্ধকারে পথ ও হাঁটার সময় আলাদা লাগতে পারে।"] },
        { heading: "‘কাছে’ কথাটি পরিষ্কার করতে যেসব প্রশ্ন করবেন", bullets: ["হোটেল থেকে সৈকতে যেতে কোন প্রবেশপথ ব্যবহার করব?", "মানচিত্রের পিন নয়, হোটেলের প্রবেশপথ থেকে হাঁটতে কত সময় লাগে?", "পথটি পাকা, বালুময়, অসমান নাকি ব্যস্ত রাস্তা পার হতে হয়?", "সূর্যাস্তের পর হেঁটে ফিরতে পারব, নাকি যানবাহন ঠিক করা ভালো?", "বাসের নামার স্থান ও আমার ভ্রমণসূচির দর্শনীয় স্থান থেকে হোটেল কত দূরে?", "আমার তারিখের জন্য দিকনির্দেশ বা স্থানীয় যাতায়াতের পরামর্শ দিতে পারবেন?"] },
        { heading: "সৈকতে যাওয়ার সুবিধা ও সৈকত নিরাপত্তা আলাদা বিষয়", paragraphs: ["সৈকতে অল্প হাঁটা দূরত্ব মানেই সব জায়গায় সাঁতার নিরাপদ বা সারাদিন পরিস্থিতি একই—এমন নয়। জোয়ার, ঢেউ, সতর্কতা ও উপযুক্ত স্থান সম্পর্কে স্থানীয়ভাবে জেনে নিন। নিরাপত্তা নির্দেশনা মানুন এবং পানির কাছে শিশুদের বড়দের সঙ্গে রাখুন।", "Hotel Silver Pearl-এর ওয়েবসাইটে শীতাতপ নিয়ন্ত্রিত রুম, বুফে নাশতা, ফ্রি ওয়াই-ফাই ও ফ্রি গাড়ি পার্কিং উল্লেখ আছে। বর্তমান রুমের বিবরণ দেখুন এবং পৌঁছানো ও সৈকতের পথ সম্পর্কে হোটেলে জিজ্ঞেস করুন।"] },
        { heading: "বুকিংয়ের আগে হাঁটার পথ যাচাই করুন", paragraphs: ["সঠিক মানচিত্রের পিনের সঙ্গে সৈকতের হাঁটার পথ এবং আপনার পৌঁছানোর স্থান তুলনা করুন। দিকনির্দেশ সংরক্ষণ করে পরিকল্পিত সৈকত ভ্রমণের ব্যবহারিক পথ হোটেলের কাছ থেকে নিশ্চিত করুন। Hotel Silver Pearl-এ থাকার পরিকল্পনার জন্য আমাদের <Link href=\"/bn/rooms\">রুম ও ভাড়ার</Link> এবং <Link href=\"/bn/location\">অবস্থান ও দিকনির্দেশ</Link> পাতা দেখুন।"] },
      ],
    },
  },
  bookingQuestions: {
    en: {
      title: "Questions to Ask Before Booking a Kuakata Hotel",
      description: "Use this Kuakata hotel booking checklist to confirm room capacity, total price, breakfast, beach access, parking, transport, and policies at Hotel Silver Pearl.",
      sections: [
        { heading: "1. What is the full price for my exact dates?", paragraphs: ["Ask for a written total for your dates, room type, and number of guests. Confirm whether taxes, service charges, breakfast, and any extra bed are included. Check whether the quote is valid through the time you expect to book and whether public holidays change the rate. Hotel Silver Pearl publishes room and rate details on its <Link href=\"/en/rooms\">rooms page</Link>; confirm the current amount directly before payment."] },
        { heading: "2. How many guests can this room accommodate?", paragraphs: ["Confirm the room’s maximum occupancy, bed layout, and rules for children. Hotel Silver Pearl lists two-person capacities for Deluxe and Super Deluxe and up to three guests for Family Deluxe. Ask what arrangement is available if your party is larger, needs another bed, or wants more than one room."] },
        { heading: "3. What is included with the booking?", paragraphs: ["Ask whether buffet breakfast, Wi-Fi, drinking water, an in-room kettle, welcome drink, and car parking are included in your selected booking. Confirm the breakfast serving time if you plan an early start. Published inclusions can change, so ask the hotel to confirm for your dates."] },
        { heading: "4. How practical is the walk to Kuakata Beach?", paragraphs: ["Ask which beach access point to use and how long the walk takes from the hotel entrance. Find out whether the route includes sand, uneven ground, steps, or a road crossing, and what return options are available after sunset. Hotel Silver Pearl describes the beach as a short walk away; it does not publish a precise metre distance, so request the route detail you need."] },
        { heading: "5. What are check-in, payment, and cancellation rules?", bullets: ["What time can I check in and when must I check out?", "Is a deposit required, and which payment methods are accepted?", "Can I change dates or cancel, and what refund terms apply?", "What should I do if my bus is delayed or I arrive late?", "Can you confirm my reservation and total price in writing?"] },
        { heading: "6. What arrival and transport help is available?", paragraphs: ["If arriving by bus, ask which drop-off point is most practical and how to get from there to Hotel Silver Pearl. If driving, confirm the parking entrance and whether space is available on your dates. For nearby attractions, ask whether the hotel can suggest local transport, how fares are agreed, and when you should arrange a return ride."] },
        { heading: "A ready-to-send booking message", paragraphs: ["You can send a concise inquiry with your dates, arrival time, guest count, preferred room, and essential needs. Ask for the total price, occupancy and bed arrangement, breakfast details, beach walking route, parking or transfer information, and cancellation terms in one reply. Keep the confirmation and contact number until after checkout.", "Contact Hotel Silver Pearl through the <Link href=\"/en/contact\">contact page</Link> or review the <Link href=\"/en/rooms\">room options</Link> before you send your request."] },
      ],
    },
    bn: {
      title: "কুয়াকাটায় হোটেল বুক করার আগে যেসব প্রশ্ন করবেন",
      description: "রুমের ধারণক্ষমতা, মোট ভাড়া, নাশতা, সৈকতের পথ, পার্কিং, যাতায়াত ও Hotel Silver Pearl-এর শর্ত নিশ্চিত করতে এই বুকিং চেকলিস্ট ব্যবহার করুন।",
      sections: [
        { heading: "১. আমার নির্দিষ্ট তারিখের মোট ভাড়া কত?", paragraphs: ["আপনার তারিখ, রুমের ধরন ও অতিথি সংখ্যার জন্য লিখিত মোট দাম চান। কর, সার্ভিস চার্জ, নাশতা ও অতিরিক্ত বিছানা অন্তর্ভুক্ত কি না নিশ্চিত করুন। কোটেশন বুকিং করার সময় পর্যন্ত কার্যকর কি না এবং সরকারি ছুটিতে ভাড়া বদলায় কি না জেনে নিন। Hotel Silver Pearl-এর <Link href=\"/bn/rooms\">রুম পাতায়</Link> ভাড়া ও বিবরণ আছে; টাকা দেওয়ার আগে বর্তমান অঙ্ক সরাসরি নিশ্চিত করুন।"] },
        { heading: "২. এই রুমে সর্বোচ্চ কতজন থাকতে পারবেন?", paragraphs: ["রুমের সর্বোচ্চ অতিথি সংখ্যা, বিছানার বিন্যাস ও শিশুদের নিয়ম নিশ্চিত করুন। Hotel Silver Pearl-এর ডিলাক্স ও সুপার ডিলাক্সে সর্বোচ্চ দুইজন এবং ফ্যামিলি ডিলাক্সে সর্বোচ্চ তিনজন থাকতে পারেন। দলের সদস্য বেশি হলে, বাড়তি বিছানা বা একাধিক রুম লাগলে কী ব্যবস্থা সম্ভব জিজ্ঞেস করুন।"] },
        { heading: "৩. বুকিংয়ে কী কী অন্তর্ভুক্ত?", paragraphs: ["বুফে নাশতা, ওয়াই-ফাই, পানীয় জল, রুমের কেটলি, ওয়েলকাম ড্রিংক ও গাড়ি পার্কিং আপনার বেছে নেওয়া বুকিংয়ে আছে কি না জেনে নিন। ভোরে বের হলে নাশতা দেওয়ার সময় নিশ্চিত করুন। প্রকাশিত সুবিধা বদলাতে পারে, তাই আপনার তারিখের জন্য হোটেলকে আবার নিশ্চিত করতে বলুন।"] },
        { heading: "৪. কুয়াকাটা সৈকতে হাঁটার পথটি কেমন?", paragraphs: ["কোন সৈকত প্রবেশপথ ব্যবহার করবেন এবং হোটেলের প্রবেশপথ থেকে হাঁটতে কত সময় জিজ্ঞেস করুন। পথে বালু, অসমান জায়গা, সিঁড়ি বা রাস্তা পার হতে হয় কি না এবং সূর্যাস্তের পর ফেরার ব্যবস্থা কী জেনে নিন। Hotel Silver Pearl জানায় সৈকত অল্প হাঁটার দূরত্বে; নির্দিষ্ট মিটারে দূরত্ব প্রকাশ করেনি, তাই দরকারি পথের তথ্য সরাসরি চান।"] },
        { heading: "৫. চেক-ইন, পেমেন্ট ও বাতিলের নিয়ম কী?", bullets: ["কখন চেক-ইন এবং কখন চেক-আউট করতে হবে?", "অগ্রিম লাগবে কি এবং কোন পদ্ধতিতে টাকা দেওয়া যায়?", "তারিখ বদল বা বুকিং বাতিল করা যাবে কি, টাকা ফেরতের শর্ত কী?", "বাস দেরি হলে বা রাতে পৌঁছালে কী করব?", "বুকিং ও মোট দাম লিখিতভাবে নিশ্চিত করবেন?"] },
        { heading: "৬. পৌঁছানো ও যাতায়াতে কী সহায়তা পাব?", paragraphs: ["বাসে এলে কোন নামার স্থান সুবিধাজনক এবং সেখান থেকে Hotel Silver Pearl-এ কীভাবে যাবেন জিজ্ঞেস করুন। গাড়িতে গেলে পার্কিংয়ের প্রবেশপথ ও আপনার তারিখে জায়গা আছে কি না নিশ্চিত করুন। কাছের দর্শনীয় স্থানে যেতে হোটেল স্থানীয় যানবাহনের পরামর্শ দিতে পারবে কি না, ভাড়া কীভাবে ঠিক হয় এবং ফেরার গাড়ি কখন ঠিক করবেন জেনে নিন।"] },
        { heading: "পাঠানোর জন্য প্রস্তুত বুকিং বার্তা", paragraphs: ["তারিখ, পৌঁছানোর সময়, অতিথি সংখ্যা, পছন্দের রুম ও জরুরি প্রয়োজন লিখে সংক্ষিপ্ত বার্তা পাঠাতে পারেন। একই উত্তরে মোট ভাড়া, অতিথি সীমা ও বিছানা, নাশতা, সৈকতে হাঁটার পথ, পার্কিং বা যাতায়াত এবং বাতিলের শর্ত জানতে চান। চেক-আউট না করা পর্যন্ত বুকিং নিশ্চিতকরণ ও যোগাযোগ নম্বর রাখুন।", "অনুরোধ পাঠানোর আগে <Link href=\"/bn/contact\">যোগাযোগ পাতায়</Link> Hotel Silver Pearl-কে লিখুন বা <Link href=\"/bn/rooms\">রুমের বিকল্প</Link দেখুন।"] },
      ],
    },
  },
};

export function getAccommodationPost(locale: Locale, slug: string): Copy | undefined {
  const post = (Object.keys(accommodationPosts) as AccommodationPost[]).find((key) => accommodationPosts[key] === slug);
  return post ? articles[post][locale] : undefined;
}

const sources = [
  { href: "https://hspkuakata.com/en/rooms/", en: "Hotel Silver Pearl — rooms and rates", bn: "Hotel Silver Pearl — রুম ও ভাড়া", posts: ["areas", "choose", "families", "couplesGroups", "nearBeach", "bookingQuestions"] },
  { href: "https://hspkuakata.com/en/location/", en: "Hotel Silver Pearl — location and directions", bn: "Hotel Silver Pearl — অবস্থান ও দিকনির্দেশ", posts: ["areas", "choose", "families", "nearBeach", "bookingQuestions"] },
  { href: "https://beautifulbangladesh.gov.bd/district-destination/patuakhali/sea-beaches/20", en: "Bangladesh Tourism Board — Kuakata Sea Beach", bn: "বাংলাদেশ ট্যুরিজম বোর্ড — কুয়াকাটা সমুদ্রসৈকত", posts: ["areas", "nearBeach"] },
  { href: "https://kuareg.touristpolice.gov.bd/site/page/58041724-f7e6-4439-a4d7-ac19c1eb60ad/", en: "Kuakata Tourist Police — Gangamati Char", bn: "কুয়াকাটা ট্যুরিস্ট পুলিশ — গঙ্গামতি চর", posts: ["areas"] },
  { href: "https://kuareg.touristpolice.gov.bd/site/page/628ebda2-424c-4963-abe4-ffd865abf535/-", en: "Kuakata Tourist Police — Misripara Buddhist Temple", bn: "কুয়াকাটা ট্যুরিস্ট পুলিশ — মিশ্রিপাড়া বৌদ্ধ মন্দির", posts: ["areas"] },
];

export function KuakataAccommodationGuide({ locale, post }: { locale: Locale; post: AccommodationPost }) {
  const bn = locale === "bn";
  const copy = articles[post][locale];
  const url = `${hotel.website.replace(/\/$/, "")}/${locale}/blog/${accommodationPosts[post]}/`;
  const linkedSources = sources.filter((source) => source.posts.includes(post));
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
        <p className="text-xs uppercase tracking-[0.2em] text-(--color-gold-600)">{bn ? "কুয়াকাটা · হোটেল বুকিং গাইড" : "Kuakata · Hotel booking guide"}</p>
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
      <nav aria-label={bn ? "সম্পর্কিত হোটেল গাইড" : "Related Kuakata hotel guides"} className="mt-10 rounded-2xl bg-(--color-sand-100) p-6">
        <h2 className="font-display text-xl text-(--color-navy-800)">{bn ? "সম্পর্কিত কুয়াকাটা হোটেল গাইড" : "Related Kuakata hotel guides"}</h2>
        <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">{relatedGuides[post][locale].map(([slug, label]) => <li key={slug}><Link className="underline decoration-(--color-gold-500) underline-offset-4" href={`/${locale}/blog/${slug}`}>{label}</Link></li>)}</ul>
      </nav>
      <section className="mt-12 rounded-2xl bg-(--color-navy-800) p-7 text-white md:p-9">
        <h2 className="font-display text-2xl">{bn ? "Hotel Silver Pearl-এ আপনার রুম বুক করুন" : "Book your room at Hotel Silver Pearl"}</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-white/75">{bn ? "সৈকত থেকে অল্প হাঁটার দূরত্বে রুমের বিকল্প, বুফে নাশতা, ফ্রি ওয়াই-ফাই ও গাড়ি পার্কিং রয়েছে। আপনার তারিখের রুম ও মোট ভাড়া সরাসরি নিশ্চিত করুন।" : "Choose from rooms a short walk from the beach, with buffet breakfast, free Wi-Fi, and car parking listed among the stay inclusions. Confirm room availability and the total rate for your dates."}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="rounded-full bg-(--color-gold-400) px-5 py-3 text-sm font-medium text-(--color-navy-900) hover:bg-(--color-gold-300)" href={`/${locale}/rooms`}>{bn ? "রুম ও ভাড়া দেখুন" : "View rooms & rates"}</Link>
          <Link className="rounded-full border border-white/30 px-5 py-3 text-sm text-white hover:bg-white/10" href={`/${locale}/contact`}>{bn ? "যোগাযোগ করুন" : "Contact Hotel Silver Pearl"}</Link>
        </div>
      </section>
      <aside className="mt-12 border-t border-(--color-navy-800)/10 pt-7">
        <h2 className="font-display text-xl text-(--color-navy-800)">{bn ? "তথ্যসূত্র" : "Sources"}</h2>
        <ul className="mt-4 grid gap-2 text-sm text-(--color-ink)/75 sm:grid-cols-2">
          {linkedSources.map((source) => <li key={source.href}><a className="underline decoration-(--color-gold-500) underline-offset-4" href={source.href} target="_blank" rel="noreferrer noopener">{bn ? source.bn : source.en} ↗</a></li>)}
        </ul>
        <p className="mt-4 text-xs leading-relaxed text-(--color-ink)/55">{bn ? "রুমের সুবিধা, ভাড়া, সৈকতের পথ ও স্থানীয় প্রবেশের অবস্থা বদলাতে পারে। বুকিংয়ের আগে আপনার তারিখের তথ্য ও ব্যবস্থা সরাসরি নিশ্চিত করুন।" : "Room features, rates, beach routes, and local access can change. Confirm current details and arrangements for your dates before booking."}</p>
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
