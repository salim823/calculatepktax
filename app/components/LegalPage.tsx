import type { ReactNode } from "react";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h1>
      <p className="mt-2 text-xs text-gray-400">Last updated: {updated}</p>
      <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-gray-700 sm:text-base">
        {children}
      </div>
    </div>
  );
}

export function LegalH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="pt-2 text-xl font-extrabold text-gray-900">{children}</h2>
  );
}
