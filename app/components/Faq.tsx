export interface FaqItem {
  q: string;
  a: string;
}

export default function Faq({ items, id = "faq" }: { items: FaqItem[]; id?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div id={id} className="scroll-mt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-white">
        {items.map((f, i) => (
          <details key={i} className="group" open={i === 0}>
            <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-brand-50/50 sm:px-6 [&::-webkit-details-marker]:hidden">
              <span className="text-sm font-bold text-gray-900 sm:text-base">
                {f.q}
              </span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-transform group-open:rotate-45">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <div className="px-5 pb-5 text-sm leading-relaxed text-gray-600 sm:px-6 sm:text-[15px]">
              {f.a}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
