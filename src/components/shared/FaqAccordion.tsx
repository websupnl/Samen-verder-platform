"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  className?: string;
};

export function FaqAccordion({ items, className = "" }: FaqAccordionProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((faq, i) => (
        <div key={faq.question} className="border-b border-outline-variant/30">
          <button
            type="button"
            onClick={() => setActiveFaq(activeFaq === i ? null : i)}
            className="w-full py-6 flex justify-between items-center gap-6 text-left hover:text-primary transition-colors group"
          >
            <span className="text-lg font-bold font-headline">{faq.question}</span>
            <span className={`material-symbols-outlined transition-transform duration-300 ${activeFaq === i ? "rotate-180" : ""}`}>
              expand_more
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? "max-h-96 pb-6" : "max-h-0"}`}>
            <p className="text-on-surface-variant font-body leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
