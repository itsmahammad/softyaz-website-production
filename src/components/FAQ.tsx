"use client";

import { useState } from "react";

export function FAQList({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mx-auto max-w-4xl divide-y divide-cyan-300/8 overflow-hidden rounded-2xl border border-cyan-300/10 bg-[#050816]/42">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        return (
          <div key={item.q} className="group">
            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left text-base font-bold text-white transition duration-200 hover:bg-[#38E8FF]/6 md:p-6"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              {item.q}
              <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-cyan-300/12 text-[#67E8F9] transition duration-200 motion-reduce:transition-none ${isOpen ? "rotate-45 bg-[#38E8FF]/8" : ""}`}>+</span>
            </button>
            <div
              id={panelId}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-base leading-7 text-slate-300 md:px-6 md:pb-6">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
