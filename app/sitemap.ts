import { MetadataRoute } from "next";
import { POSTS } from "@/app/lib/posts";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://calculatepktax.vercel.app";
  const lastModified = new Date();

  const paths = [
    "",
    "/tax-slabs",
    "/blog",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
    ...POSTS.map((p) => `/blog/${p.slug}`),
  ];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : path.startsWith("/blog/") ? 0.7 : 0.8,
  }));
}
