"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChapterHeader } from "@/components/ui/EditorialHeaders";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ChapterHeader
        chapter="06 / EDUCATION"
        category="ACADEMIC BACKGROUND"
        metadata="VERIFIABLE RECORDS"
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-14 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
            FOUNDATIONS
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mt-1">
            EDUCATION & SCHOLARSHIP
          </h2>
        </div>
        <p className="font-mono text-xs text-neutral-400 max-w-md">
          Academic progression in Computer Science & Engineering with strong quantitative basis.
        </p>
      </motion.div>

      {/* Timeline items */}
      <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-10 sm:space-y-12">
        {PORTFOLIO_DATA.education.map((edu, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="relative group"
          >
            {/* Timeline node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#080808] border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

            <div className="p-6 sm:p-8 rounded-xl bg-[#0c0c0c] border border-white/[0.08] hover:border-cyan-400/40 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs mb-3">
                <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.period}
                </span>
                <span className="px-3 py-1 rounded bg-white/[0.04] text-neutral-200 border border-white/10 font-bold">
                  {edu.score}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-1 group-hover:text-cyan-400 transition-colors">
                {edu.degree}
              </h3>

              <div className="text-sm font-mono text-neutral-400 mb-3">
                {edu.institution}
              </div>

              <p className="text-xs sm:text-sm text-neutral-400">
                {edu.highlight}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
