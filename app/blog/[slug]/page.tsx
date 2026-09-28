import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { POSTS, getPost, getRelatedPosts } from "@/app/lib/posts";
import Faq from "@/app/components/Faq";

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.published,
      modifiedTime: post.updated,
    },
  };
}

const articleSchema = (post: NonNullable<ReturnType<typeof getPost>>) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.description,
  datePublished: post.published,
  dateModified: post.updated,
  author: { "@type": "Organization", name: "CalculatePKTax" },
});

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post)) }}
      />

      <nav className="text-xs font-semibold text-gray-400" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-brand-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-brand-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{post.category}</span>
      </nav>

      <header className="mt-4 border-b border-gray-200 pb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-600">
          {post.category}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-gray-600">
          {post.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400">
          <span>By CalculatePKTax Team</span>
          <span>•</span>
          <span>Updated: {post.updated}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      <div className="mt-8 space-y-8">
        {post.sections.map((s, i) => (
          <section key={i}>
            {s.heading && (
              <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                {s.heading}
              </h2>
            )}
            <div className="mt-3 space-y-4">
              {s.paragraphs.map((para, j) => (
                <p key={j} className="text-[15px] leading-relaxed text-gray-700 sm:text-base">
                  {para}
                </p>
              ))}
            </div>
            {s.list && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] text-gray-700 sm:text-base">
                {s.list.map((li, k) => (
                  <li key={k}>{li}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-100 sm:p-8">
        <h2 className="text-lg font-extrabold text-gray-900">
          Try it yourself — free salary tax calculator
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Enter your salary and see your exact tax, take-home pay and slab
          breakdown instantly.
        </p>
        <Link
          href="/#calculator"
          className="mt-4 inline-block rounded-xl bg-brand-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-700"
        >
          Open the Calculator
        </Link>
      </div>

      {post.faqs.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-4 text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
            Frequently Asked Questions
          </h2>
          <Faq items={post.faqs} id={`faq-${post.slug}`} />
        </div>
      )}

      <div className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-lg font-extrabold text-gray-900">Related guides</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/blog/${r.slug}`}
              target="_blank"
              rel="noopener"
              className="rounded-xl border border-gray-200 p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-brand-600">
                {r.category}
              </p>
              <p className="mt-1 text-sm font-bold leading-snug text-gray-900">
                {r.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
