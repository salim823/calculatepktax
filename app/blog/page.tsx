import Link from "next/link";
import type { Metadata } from "next";
import { POSTS } from "@/app/lib/posts";

export const metadata: Metadata = {
  title: "Pakistan Tax Guides & Blog",
  description:
    "Tax guides for Pakistan: FBR slabs 2026-27 explained, salary tax examples, take-home pay guides and employer deduction rules.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-600">
          Blog
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Pakistan Tax Guides
        </h1>
        <p className="mt-3 text-base leading-relaxed text-gray-600">
          Simple, accurate guides on salary tax, FBR slabs, and take-home pay —
          written for Pakistani salaried individuals.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            target="_blank"
            rel="noopener"
            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="bg-brand-700 px-5 py-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-200">
                {p.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h2 className="text-lg font-extrabold leading-snug text-gray-900 group-hover:text-brand-700">
                {p.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                {p.description}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                <span>{p.readTime}</span>
                <span className="font-bold text-brand-600 group-hover:underline">
                  Read guide →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
