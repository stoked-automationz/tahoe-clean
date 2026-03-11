"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-card rounded-lg border border-border px-6 shadow-sm"
        >
          <button
            onClick={() => toggle(index)}
            className="flex w-full items-center justify-between py-4 text-left font-semibold text-lg hover:text-primary transition-colors"
            aria-expanded={openIndex === index}
          >
            {faq.question}
            <ChevronDown
              className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === index ? "max-h-40 pb-4" : "max-h-0"
            }`}
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}