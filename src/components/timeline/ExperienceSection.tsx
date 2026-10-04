"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChapterHeader } from "@/components/ui/EditorialHeaders";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Briefcase, Calendar, CheckCircle2, Rocket, Users, Target, ShieldCheck } from "lucide-react";

export function ExperienceSection() {
  const exp = PORTFOLIO_DATA.experience[0];
  const hack = PORTFOLIO_DATA.hackathon;

  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ChapterHeader
        chapter="05 / EXPERIENCE"
        category="TECHNICAL TRAINING & COMPETITION"
        metadata="TRACK RECORD"
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
            FORMATION & PRACTICE
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mt-1">
            EXPERIENCE & TRAINING
          </h2>
        </div>
        <p className="font-mono text-xs text-neutral-400 max-w-md">
          Structured algorithmic engineering training alongside national-level competitive hackathon execution.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Timeline Training */}
        <div className="lg:col-span-7">
          <div className="relative pl-8 sm:pl-10 border-l-2 border-white/10 space-y-12">
            {/* Animated dot on vertical line */}
            <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#00e5ff]" />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-xl bg-[#0c0c0c] border border-white/[0.08] hover:border-cyan-400/40 transition-all space-y-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                <span className="px-2.5 py-1 rounded bg-cyan-400/10 text-cyan-400 font-bold border border-cyan-400/20">
                  {exp.type}
                </span>
                <span className="text-neutral-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                  {exp.period}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                  {exp.role}
                </h3>
                <div className="text-sm font-mono text-neutral-400 mt-1">
                  Organization: <span className="text-neutral-200">{exp.organization}</span>
                </div>
              </div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-2.5 pt-2">
                {exp.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-400">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-neutral-500">
                <span>VERIFIABLE CURRICULUM</span>
                <span>CIPHERSCHOOLS</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Dedicated Hackathon Feature */}
        <div className="lg:col-span-5">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-xl bg-gradient-to-b from-[#101520] to-[#0c0c0c] border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 relative overflow-hidden shadow-[0_0_40px_rgba(0,229,255,0.06)]"
          >
            {/* Top Hackathon Banner */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                <Rocket className="w-4 h-4" />
                <span>NATIONAL HACKATHON</span>
              </div>
              <span className="font-mono text-xs text-neutral-400 px-2 py-0.5 rounded bg-black/40 border border-white/10">
                {hack.date}
              </span>
            </div>

            <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
              {hack.title}
            </h3>

            <div className="font-mono text-xs text-cyan-300/90 mb-4">
              Host: {hack.organization}
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              {hack.description}
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {hack.tags.map((tag) => (
                <div
                  key={tag}
                  className="px-2.5 py-1.5 rounded bg-neutral-900/80 border border-white/10 font-mono text-[11px] text-neutral-300 flex items-center gap-1.5"
                >
                  <Target className="w-3 h-3 text-cyan-400" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between font-mono text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-cyan-400" />
                <span>Team Engineering Track</span>
              </div>
              <span className="text-cyan-400 font-semibold">VERIFIED</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
