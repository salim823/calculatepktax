import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://calculatepktax.vercel.app";
  const lastModified = new Date();

  const paths = [
    "",
    "/calculator",
    "/tax-slabs",
    "/blog",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
    "/blog/pakistan-tax-calculator",
    "/blog/understanding-salary-tax-slabs-pakistan",
    "/blog/pakistan-income-tax-calculator",
  ];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));
}