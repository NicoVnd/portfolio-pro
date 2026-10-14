"use client";

import React, { useState } from "react";
import { TIMELINE } from "@/data/timeline";

function TimelineIcon({ work }: { work: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      {work ? (
        <>
          <rect x="3" y="7" width="18" height="14" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12a23 23 0 0 0 18 0M12 12v3" />
        </>
      ) : (
        <>
          <path d="m2 9 10-5 10 5-10 5-10-5ZM6 11v6c3 3 9 3 12 0v-6M22 9v7" />
        </>
      )}
    </svg>
  );
}

export default function Experiences() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setExpandedItems((previous) => {
      const next = new Set(previous);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section id="parcours" className="w-full py-16 md:py-24 bg-[#F7F7F8] dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-5xl font-bold text-[#1F2937] dark:text-white mb-4">
            Parcours &amp; Expériences
          </h2>
          <div className="h-1 w-20 bg-[#334155] mx-auto rounded-full" />
        </div>

        <ol className="relative max-w-5xl mx-auto before:absolute before:left-4 md:before:left-[13rem] before:top-5 before:bottom-5 before:w-px before:bg-gradient-to-b before:from-[#94A3B8] before:to-[#E5E7EB] dark:before:from-slate-600 dark:before:to-gray-800">
          {TIMELINE.map((item, index) => {
            const work = item.type === "work";
            const expanded = expandedItems.has(index);
            const hasMore = item.details.length > 2;
            const contract = work ? item.title.match(/\(([^)]+)\)$/)?.[1] : undefined;
            const title = work ? item.title.replace(/\s*\([^)]+\)$/, "") : item.title;
            const detailsId = `timeline-details-${index}`;

            return (
              <li key={`${item.company}-${item.period}`} className="relative grid grid-cols-[2rem_minmax(0,1fr)] md:grid-cols-[12rem_2rem_minmax(0,1fr)] gap-x-3 md:gap-x-0 pb-5 md:pb-6 last:pb-0">
                <div className="hidden md:block pr-8 pt-6 text-right">
                  <p className="text-sm font-semibold leading-relaxed text-[#475569] dark:text-slate-300">
                    {item.period.split(/ (?:–|&) /).map((date, dateIndex) => (
                      <span key={date} className="block whitespace-nowrap">{dateIndex > 0 ? `${item.period.includes(" & ") ? "&" : "–"} ${date}` : date}</span>
                    ))}
                  </p>
                  <p className="mt-1 text-xs text-[#64748B] dark:text-gray-500">{item.education ? "Alternance & formation" : work ? "Expérience" : "Formation"}</p>
                </div>

                <div className={`relative z-10 mt-5 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#F7F7F8] dark:border-gray-950 ${index === 0 ? "bg-[#334155] text-white dark:bg-slate-300 dark:text-gray-950" : "bg-[#E2E8F0] text-[#475569] dark:bg-gray-800 dark:text-slate-400"}`}>
                  <TimelineIcon work={work} />
                </div>

                <div className="min-w-0 md:pl-6">
                  <p className="mb-2 mt-1 text-xs font-semibold text-[#64748B] dark:text-slate-400 md:hidden">{item.period}</p>
                  <article className={`rounded-2xl border bg-white dark:bg-gray-900/50 p-5 md:p-6 transition-[border-color,box-shadow] duration-200 hover:shadow-md ${index === 0 ? "border-[#94A3B8] dark:border-slate-600 shadow-sm" : "border-[#E5E7EB] dark:border-gray-800 hover:border-[#CBD5E1] dark:hover:border-slate-700"}`}>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="rounded-full border border-[#CBD5E1]/70 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 px-2.5 py-1 text-[11px] font-semibold text-[#475569] dark:text-slate-300">
                        {contract ?? (work ? "Expérience" : "Formation")}
                      </span>
                      {index === 0 && <span className="text-[11px] font-medium text-[#64748B] dark:text-slate-400">Dernière expérience</span>}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold leading-snug text-[#1F2937] dark:text-white">{title}</h3>
                    <p className="mt-1.5 mb-4 text-xs md:text-sm font-medium tracking-wide text-[#64748B] dark:text-gray-400">{item.company}</p>

                    <ul className="space-y-2.5">
                      {item.details.slice(0, 2).map((detail) => (
                        <li key={detail} className="flex gap-3 text-sm leading-relaxed text-[#64748B] dark:text-gray-400">
                          <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400 dark:bg-slate-600" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    {hasMore && (
                      <>
                        <ul id={detailsId} hidden={!expanded} className="mt-2.5 space-y-2.5">
                          {item.details.slice(2).map((detail) => (
                            <li key={detail} className="flex gap-3 text-sm leading-relaxed text-[#64748B] dark:text-gray-400">
                              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400 dark:bg-slate-600" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <button type="button" aria-expanded={expanded} aria-controls={detailsId} onClick={() => toggleItem(index)} className="mt-5 inline-flex items-center gap-2 rounded-md py-1 text-xs font-semibold text-[#334155] dark:text-slate-300 hover:text-[#1E293B] dark:hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-500">
                          {expanded ? "Réduire les missions" : "Voir les missions"}
                          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={`h-3.5 w-3.5 transition-transform duration-200 motion-reduce:transition-none ${expanded ? "rotate-180" : ""}`}><path d="m6 9 6 6 6-6" /></svg>
                        </button>
                      </>
                    )}
                    {item.education && (
                      <div className="mt-5 border-t border-[#E5E7EB] dark:border-gray-800 pt-4">
                        <div className="flex items-start gap-3 rounded-xl bg-[#F7F7F8] dark:bg-gray-800/50 p-3.5">
                          <span className="mt-0.5 shrink-0 text-[#64748B] dark:text-slate-400"><TimelineIcon work={false} /></span>
                          <div className="min-w-0">
                            <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-[#64748B] dark:text-slate-400">Formation associée</p>
                            <h4 className="text-sm font-semibold leading-snug text-[#334155] dark:text-slate-200">{item.education.title}</h4>
                            <p className="mt-1 text-xs leading-relaxed text-[#64748B] dark:text-gray-400">{item.education.company} · {item.education.period}</p>
                            {expanded && <ul className="mt-2 space-y-1 text-xs leading-relaxed text-[#64748B] dark:text-gray-400">{item.education.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}
                          </div>
                        </div>
                      </div>
                    )}
                  </article>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
