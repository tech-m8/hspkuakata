import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TravelGuide } from "@/components/blog/TravelGuide";
import { WhereToStay } from "@/components/blog/WhereToStay";
import { KuakataPlans } from "@/components/blog/KuakataPlans";
import { getPlanningPost, KuakataPlanningArticle, planningPosts } from "@/components/blog/KuakataPlanningArticles";
import { experiencePosts, getExperiencePost, KuakataExperienceArticle } from "@/components/blog/KuakataExperienceArticles";
import { getPracticalPost, KuakataPracticalGuide, practicalPosts } from "@/components/blog/KuakataPracticalGuides";
import { accommodationPosts, getAccommodationPost, KuakataAccommodationGuide } from "@/components/blog/KuakataAccommodationGuides";
import { hotel } from "@/data/hotel";
import { isLocale, locales, type Locale } from "@/i18n/locales";

const slug = "kuakata-travel-guide";
const staySlug = "where-to-stay-in-kuakata";
const itinerarySlug = "kuakata-2-day-itinerary";
const attractionsSlug = "kuakata-attractions-and-beach-guide";
const postSlugs = [slug, staySlug, itinerarySlug, attractionsSlug] as const;
const allPostSlugs = [...postSlugs, ...Object.values(planningPosts), ...Object.values(experiencePosts), ...Object.values(practicalPosts), ...Object.values(accommodationPosts)];
export function generateStaticParams() {
  return locales.flatMap((locale) => allPostSlugs.map((postSlug) => ({ locale, slug: postSlug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug: currentSlug } = await params;
  if (!isLocale(locale) || !allPostSlugs.includes(currentSlug)) return {};
  const planningPost = getPlanningPost(locale, currentSlug);
  if (planningPost) {
    const path = `/${locale}/blog/${currentSlug}/`;
    const languages = Object.fromEntries(locales.map((item) => [item, `/${item}/blog/${currentSlug}/`]));
    return {
      title: planningPost.title,
      description: planningPost.description,
      alternates: { canonical: path, languages: { ...languages, "x-default": `/${locales[0]}/blog/${currentSlug}/` } },
      openGraph: {
        type: "article",
        title: planningPost.title,
        description: planningPost.description,
        url: `${hotel.website.replace(/\/$/, "")}${path}`,
        siteName: "Hotel Silver Pearl Kuakata",
        locale: locale === "bn" ? "bn_BD" : "en_US",
        publishedTime: "2026-10-03T00:00:00+06:00",
        modifiedTime: "2026-10-03T00:00:00+06:00",
      },
    };
  }
  const experiencePost = getExperiencePost(locale, currentSlug);
  if (experiencePost) {
    const path = `/${locale}/blog/${currentSlug}/`;
    const languages = Object.fromEntries(locales.map((item) => [item, `/${item}/blog/${currentSlug}/`]));
    return {
      title: experiencePost.title,
      description: experiencePost.description,
      alternates: { canonical: path, languages: { ...languages, "x-default": `/${locales[0]}/blog/${currentSlug}/` } },
      openGraph: {
        type: "article",
        title: experiencePost.title,
        description: experiencePost.description,
        url: `${hotel.website.replace(/\/$/, "")}${path}`,
        siteName: "Hotel Silver Pearl Kuakata",
        locale: locale === "bn" ? "bn_BD" : "en_US",
        publishedTime: "2026-10-03T00:00:00+06:00",
        modifiedTime: "2026-10-03T00:00:00+06:00",
      },
    };
  }
  const practicalPost = getPracticalPost(locale, currentSlug);
  if (practicalPost) {
    const path = `/${locale}/blog/${currentSlug}/`;
    const languages = Object.fromEntries(locales.map((item) => [item, `/${item}/blog/${currentSlug}/`]));
    return {
      title: practicalPost.title,
      description: practicalPost.description,
      alternates: { canonical: path, languages: { ...languages, "x-default": `/${locales[0]}/blog/${currentSlug}/` } },
      openGraph: {
        type: "article",
        title: practicalPost.title,
        description: practicalPost.description,
        url: `${hotel.website.replace(/\/$/, "")}${path}`,
        siteName: "Hotel Silver Pearl Kuakata",
        locale: locale === "bn" ? "bn_BD" : "en_US",
        publishedTime: "2026-10-03T00:00:00+06:00",
        modifiedTime: "2026-10-03T00:00:00+06:00",
      },
    };
  }
  const accommodationPost = getAccommodationPost(locale, currentSlug);
  if (accommodationPost) {
    const path = `/${locale}/blog/${currentSlug}/`;
    const languages = Object.fromEntries(locales.map((item) => [item, `/${item}/blog/${currentSlug}/`]));
    return {
      title: accommodationPost.title,
      description: accommodationPost.description,
      alternates: { canonical: path, languages: { ...languages, "x-default": `/${locales[0]}/blog/${currentSlug}/` } },
      openGraph: {
        type: "article",
        title: accommodationPost.title,
        description: accommodationPost.description,
        url: `${hotel.website.replace(/\/$/, "")}${path}`,
        siteName: "Hotel Silver Pearl Kuakata",
        locale: locale === "bn" ? "bn_BD" : "en_US",
        publishedTime: "2026-10-03T00:00:00+06:00",
        modifiedTime: "2026-10-03T00:00:00+06:00",
      },
    };
  }
  const postSlug = currentSlug;
  const postContent: Record<string, { titles: Record<Locale, string>; descriptions: Record<Locale, string> }> = {
    [staySlug]: {
      titles: {
        en: "Choosing a Hotel in Kuakata: A Practical Stay Guide",
        bn: "কুয়াকাটায় হোটেল বাছাই: থাকার ব্যবহারিক গাইড",
      },
      descriptions: {
        en: "Choose where to stay in Kuakata by comparing beach access, room needs, meals, parking, and booking terms before you reserve.",
        bn: "কুয়াকাটায় থাকার জায়গা বাছাইয়ের আগে সৈকতের দূরত্ব, রুম, খাবার, পার্কিং ও বুকিংয়ের শর্ত কীভাবে যাচাই করবেন জানুন।",
      },
    },
    [itinerarySlug]: {
      titles: { en: "Kuakata 2-Day Itinerary: A Relaxed Two-Night Plan", bn: "কুয়াকাটায় ২ দিনের ভ্রমণ পরিকল্পনা: আরামদায়ক ২ রাত" },
      descriptions: {
        en: "Plan two full days in Kuakata with two nights for the beach, sunrise and sunset, local food, and nearby sights.",
        bn: "দুই দিনে কুয়াকাটা সৈকত, সূর্যোদয়-সূর্যাস্ত ও কাছের দর্শনীয় স্থান ঘুরে দেখার নমনীয় পরিকল্পনা।",
      },
    },
    [attractionsSlug]: {
      titles: { en: "Kuakata Attractions and Beach Guide", bn: "কুয়াকাটার দর্শনীয় স্থান ও সৈকত ভ্রমণ গাইড" },
      descriptions: {
        en: "A practical guide to Kuakata Sea Beach, Jhau Forest, Gangamati, Fatrar Char, and local Rakhine heritage.",
        bn: "কুয়াকাটা সৈকত, ঝাউবন, গঙ্গামতি, ফাতরার চর ও রাখাইন ঐতিহ্য ঘোরার ব্যবহারিক নির্দেশনা।",
      },
    },
    [slug]: {
      titles: { en: "Complete Kuakata Travel Guide: Beach, Attractions & Where to Stay", bn: "কুয়াকাটা ভ্রমণ গাইড: সৈকত, দর্শনীয় স্থান ও থাকার পরিকল্পনা" },
      descriptions: {
        en: "Plan a Kuakata trip with practical information on the beach, nearby attractions, transport from Dhaka, when to visit, and where to stay.",
        bn: "কুয়াকাটা ভ্রমণের পরিকল্পনা করুন—সৈকত, কাছের দর্শনীয় স্থান, ঢাকা থেকে যাতায়াত, বেড়ানোর ভালো সময় ও থাকার জায়গা নিয়ে ব্যবহারিক তথ্য।",
      },
    },
  };
  const { titles, descriptions } = postContent[postSlug];
  const path = `/${locale}/blog/${postSlug}/`;
  const languages = Object.fromEntries(locales.map((item) => [item, `/${item}/blog/${postSlug}/`]));
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: { canonical: path, languages: { ...languages, "x-default": `/${locales[0]}/blog/${postSlug}/` } },
    openGraph: {
      type: "article",
      title: titles[locale],
      description: descriptions[locale],
      url: `${hotel.website.replace(/\/$/, "")}${path}`,
      siteName: "Hotel Silver Pearl Kuakata",
      locale: locale === "bn" ? "bn_BD" : "en_US",
      publishedTime: "2026-10-03T00:00:00+06:00",
      modifiedTime: "2026-10-03T00:00:00+06:00",
    },
  };
}

export default async function TravelGuidePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug: currentSlug } = await params;
  if (!isLocale(locale) || !allPostSlugs.includes(currentSlug)) notFound();
  if (currentSlug === staySlug) return <WhereToStay locale={locale} />;
  if (currentSlug === itinerarySlug) return <KuakataPlans locale={locale} post="itinerary" />;
  if (currentSlug === attractionsSlug) return <KuakataPlans locale={locale} post="attractions" />;
  const planningPost = (Object.keys(planningPosts) as (keyof typeof planningPosts)[]).find((key) => planningPosts[key] === currentSlug);
  if (planningPost) return <KuakataPlanningArticle locale={locale} post={planningPost} />;
  const experiencePost = (Object.keys(experiencePosts) as (keyof typeof experiencePosts)[]).find((key) => experiencePosts[key] === currentSlug);
  if (experiencePost) return <KuakataExperienceArticle locale={locale} post={experiencePost} />;
  const practicalPost = (Object.keys(practicalPosts) as (keyof typeof practicalPosts)[]).find((key) => practicalPosts[key] === currentSlug);
  if (practicalPost) return <KuakataPracticalGuide locale={locale} post={practicalPost} />;
  const accommodationPost = (Object.keys(accommodationPosts) as (keyof typeof accommodationPosts)[]).find((key) => accommodationPosts[key] === currentSlug);
  if (accommodationPost) return <KuakataAccommodationGuide locale={locale} post={accommodationPost} />;
  return <TravelGuide locale={locale} />;
}
