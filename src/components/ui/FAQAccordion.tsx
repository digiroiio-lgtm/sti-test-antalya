"use client";

import { useState } from "react";

interface FAQ {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQAccordion({ faqs, title = "Frequently Asked Questions" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#0A2342] mb-8 text-center">{title}</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-[#0A2342] hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.q}</span>
                <span className="ml-4 text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
