"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChapterHeader } from "@/components/ui/EditorialHeaders";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { ArrowUpRight } from "lucide-react";

export function AchievementsCertificates() {
  return (
    <section id="achievements" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ChapterHeader
        chapter="05 / CREDENTIALS"
        category="PROOF OF WORK"
        metadata="CERTIFICATIONS • TRAINING • ACHIEVEMENTS"
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="mb-12 max-w-3xl"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
          PROOF OF WORK
        </h2>
        <p className="mt-4 max-w-2xl font-mono text-xs sm:text-sm text-neutral-400 leading-relaxed">
          Certifications, training and milestones that document my technical journey.
        </p>
      </motion.div>

      <div className="space-y-12">
        <div>
          <div className="mb-6 flex items-center justify-between gap-3 border-b border-white/[0.08] pb-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-400">
              CERTIFICATIONS
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-500">
              08 DOCUMENTS
            </span>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {PORTFOLIO_DATA.certificates.map((cert, index) => (
              <motion.a
                key={`${cert.title}-${cert.date}`}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={staggerItem}
                whileHover={{ scale: 1.01, y: -2 }}
                data-cursor="open"
                className="group block rounded-2xl border border-white/[0.08] bg-[#0b0b0b] p-5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-[#101010] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
                aria-label={`View certificate for ${cert.title}`}
              >
                <div className="flex gap-4 md:gap-5">
                  <div className="w-16 shrink-0 text-right font-mono text-lg sm:text-xl font-semibold tracking-tight text-cyan-400">
                    {String(index + 1).padStart(2, "0")}
                    <span className="block text-[10px] tracking-[0.28em] text-neutral-500">/ 08</span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-3 flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                      <span className="text-cyan-400">{cert.category}</span>
                      <span>{cert.date}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold uppercase tracking-tight text-white transition-transform duration-300 group-hover:-translate-y-0.5">
                      {cert.title}
                    </h3>

                    <div className="mt-4 flex items-center justify-between gap-4 border-t border-white/[0.06] pt-3">
                      <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-400">
                        {cert.issuer}
                      </div>

                      <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-300 group-hover:text-cyan-200">
                        <span>VIEW CERTIFICATE</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="pt-2">
          <div className="mb-6 flex items-center justify-between gap-3 border-b border-white/[0.08] pb-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-400">
              ACHIEVEMENT PROOF
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-500">
              {PORTFOLIO_DATA.achievementProofs.length} LINKS
            </span>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {PORTFOLIO_DATA.achievementProofs.map((item, index) => (
              <motion.a
                key={`${item.title}-${index}`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.01, y: -2 }}
                data-cursor="open"
                className="group flex items-center justify-between gap-3 rounded-xl border border-white/[0.08] bg-[#0b0b0b] px-4 py-3 text-left transition-all duration-300 hover:border-cyan-400/40 hover:bg-[#101010] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
                aria-label={`View achievement proof for ${item.title}`}
              >
                <div className="min-w-0">
                  <div className="font-mono text-[9px] uppercase tracking-[0.26em] text-neutral-500">
                    {item.date}
                  </div>
                  <div className="mt-2 text-sm font-semibold uppercase tracking-tight text-white">
                    {item.title}
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-cyan-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
