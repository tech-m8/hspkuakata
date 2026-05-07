import type { MetadataRoute } from "next";
import { hotel } from "@/data/hotel";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = hotel.website.replace(/\/$/, "");
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
  };
}
