"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChapterHeader } from "@/components/ui/EditorialHeaders";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import {
  ExternalLink,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Bot,
  Layers,
  Database,
  Eye,
  CheckCircle2,
} from "lucide-react";
import { Github } from "@/components/ui/Icons";

export function SelectedProjects() {
  const anil = PORTFOLIO_DATA.projects.find((p) => p.slug === "anil-jewellers")!;
  const zentiq = PORTFOLIO_DATA.projects.find((p) => p.slug === "zentiqai")!;

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ChapterHeader
        chapter="03 / SELECTED WORK"
        category="FLAGSHIP DEPLOYED PLATFORMS"
        metadata="COMMERCIAL & AI SYSTEMS"
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
            ENGINEERING CASE STUDIES
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mt-1">
            WHAT I&apos;VE BUILT
          </h2>
        </div>
        <p className="font-mono text-xs text-neutral-400 max-w-md">
          Two production-grade systems: a full-stack commercial e-commerce platform and an open-source multimodal AI application.
        </p>
      </motion.div>

      <div className="space-y-24 sm:space-y-36">
        {/* PROJECT 01: ANIL JEWELLERS */}
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="group relative rounded-xl border border-white/[0.08] bg-[#0c0c0c] hover:border-cyan-400/40 transition-all duration-500 overflow-hidden"
        >
          {/* Subtle backdrop glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/[0.06] transition-colors" />

          {/* Top Project Bar */}
          <div className="px-6 py-4 border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="text-cyan-400 font-bold">PROJECT 01</span>
              <span className="text-white/20">•</span>
              <span className="text-neutral-300 font-semibold">{anil.category}</span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[10px]">
                {anil.badge}
              </span>
            </div>
            <div className="flex items-center gap-4 text-neutral-400">
              <span>{anil.date}</span>
              <span className="text-white/20">•</span>
              <span>RENDER + VERCEL</span>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  {anil.title}
                </h3>
                <p className="mt-2 text-sm font-mono text-cyan-400/80 tracking-wide uppercase">
                  {anil.tagline}
                </p>
              </div>

              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                {anil.description}
              </p>

              {/* Verified Highlights */}
              <div className="space-y-2.5 pt-2">
                {anil.highlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-400">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="pt-2">
                <span className="block font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-2.5">
                  STACK & INFRASTRUCTURE
                </span>
                <div className="flex flex-wrap gap-2">
                  {anil.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href={`/projects/${anil.slug}`}
                  data-cursor="view"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded bg-neutral-100 hover:bg-cyan-400 text-black font-mono text-xs font-bold tracking-wider transition-all duration-200"
                >
                  <span>EXPLORE CASE STUDY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={anil.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="open"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-neutral-200 hover:text-white transition-colors"
                >
                  <span>LIVE PLATFORM</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>

                <a
                  href={anil.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="github"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-neutral-200 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>REPOSITORY</span>
                </a>
              </div>
            </div>

            {/* Right Abstract Visual Showcase */}
            <div className="lg:col-span-6">
              <Link
                href={`/projects/${anil.slug}`}
                data-cursor="view"
                className="block relative rounded-lg border border-white/[0.12] bg-[#080808] p-5 shadow-2xl overflow-hidden group-hover:border-cyan-400/50 transition-all duration-300"
              >
                {/* Browser Top Bar Mockup */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                  </div>
                  <div className="font-mono text-[10px] text-neutral-500 bg-neutral-900 px-3 py-0.5 rounded border border-white/5 truncate max-w-[200px]">
                    https://www.aniljewellers.shop
                  </div>
                  <div className="w-8" />
                </div>

                {/* Abstract Interactive Store UI Simulation */}
                <div className="space-y-4">
                  {/* Luxury Header Banner */}
                  <div className="p-4 rounded bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-amber-950/20 border border-amber-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-serif text-sm tracking-widest text-amber-200 font-semibold uppercase">
                          Anil Jewellers
                        </div>
                        <div className="font-mono text-[10px] text-neutral-400">
                          100+ CERTIFIED GOLD & DIAMOND ORNAMENTS
                        </div>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      LIVE
                    </span>
                  </div>

                  {/* Product Cards Grid Simulation */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded bg-neutral-900/80 border border-white/5 space-y-2">
                      <div className="h-20 rounded bg-gradient-to-br from-neutral-800 to-amber-950/30 flex items-center justify-center border border-white/5">
                        <span className="font-mono text-[11px] text-amber-300/80 tracking-widest">
                          [GOLD NECKLACE]
                        </span>
                      </div>
                      <div className="font-mono text-[11px] text-neutral-300">Royal Kundan Set</div>
                      <div className="flex justify-between font-mono text-[10px] text-cyan-400">
                        <span>100% Certified</span>
                        <span className="text-neutral-500">View Details</span>
                      </div>
                    </div>

                    <div className="p-3 rounded bg-neutral-900/80 border border-white/5 space-y-2">
                      <div className="h-20 rounded bg-gradient-to-br from-neutral-800 to-amber-950/30 flex items-center justify-center border border-white/5">
                        <span className="font-mono text-[11px] text-amber-300/80 tracking-widest">
                          [DIAMOND RING]
                        </span>
                      </div>
                      <div className="font-mono text-[11px] text-neutral-300">Solitaire Diamond Band</div>
                      <div className="flex justify-between font-mono text-[10px] text-cyan-400">
                        <span>In Stock</span>
                        <span className="text-neutral-500">View Details</span>
                      </div>
                    </div>
                  </div>

                  {/* Technical Architecture Strip */}
                  <div className="p-3 rounded bg-neutral-900/50 border border-white/5 flex items-center justify-between font-mono text-[10px] text-neutral-400">
                    <span className="text-cyan-400 font-semibold">10+ REST API ENDPOINTS</span>
                    <span>FIREBASE AUTH VERIFIED</span>
                    <span className="text-neutral-500">15+ REACT MODULES</span>
                  </div>
                </div>

                {/* Subtle Hover Reveal Tag */}
                <div className="absolute inset-0 bg-cyan-950/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="font-mono text-xs px-4 py-2 rounded-full bg-cyan-400 text-black font-bold tracking-widest shadow-xl">
                    VIEW CASE STUDY ↗
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </motion.article>

        {/* PROJECT 02: ZENTIQAI */}
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="group relative rounded-xl border border-white/[0.08] bg-[#0c0c0c] hover:border-cyan-400/40 transition-all duration-500 overflow-hidden"
        >
          {/* Subtle backdrop glow */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/[0.04] rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/[0.08] transition-colors" />

          {/* Top Project Bar */}
          <div className="px-6 py-4 border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="text-cyan-400 font-bold">PROJECT 02</span>
              <span className="text-white/20">•</span>
              <span className="text-neutral-300 font-semibold">{zentiq.category}</span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[10px]">
                {zentiq.badge}
              </span>
            </div>
            <div className="flex items-center gap-4 text-neutral-400">
              <span>{zentiq.date}</span>
              <span className="text-white/20">•</span>
              <span>VERCEL CLOUD</span>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  {zentiq.title}
                </h3>
                <p className="mt-2 text-sm font-mono text-cyan-400/80 tracking-wide uppercase">
                  {zentiq.tagline}
                </p>
              </div>

              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                {zentiq.description}
              </p>

              {/* Group Project Credibility Tag */}
              <div className="p-3 rounded bg-neutral-900 border border-cyan-400/20 text-xs font-mono text-neutral-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>
                  <strong>Collaborative Engineering:</strong> Built alongside team engineers with focus on frontend architecture and multimodal API routing.
                </span>
              </div>

              {/* Verified Highlights */}
              <div className="space-y-2.5 pt-1">
                {zentiq.highlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-400">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="pt-2">
                <span className="block font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-2.5">
                  STACK & FOUNDATION MODELS
                </span>
                <div className="flex flex-wrap gap-2">
                  {zentiq.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href={`/projects/${zentiq.slug}`}
                  data-cursor="view"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded bg-neutral-100 hover:bg-cyan-400 text-black font-mono text-xs font-bold tracking-wider transition-all duration-200"
                >
                  <span>EXPLORE CASE STUDY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={zentiq.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="open"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-neutral-200 hover:text-white transition-colors"
                >
                  <span>LIVE CHATBOT</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>

                <a
                  href={zentiq.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="github"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-neutral-200 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>REPOSITORY</span>
                </a>
              </div>
            </div>

            {/* Right Abstract Visual Showcase */}
            <div className="lg:col-span-6">
              <Link
                href={`/projects/${zentiq.slug}`}
                data-cursor="view"
                className="block relative rounded-lg border border-white/[0.12] bg-[#080808] p-5 shadow-2xl overflow-hidden group-hover:border-cyan-400/50 transition-all duration-300"
              >
                {/* Browser Top Bar Mockup */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                  </div>
                  <div className="font-mono text-[10px] text-neutral-500 bg-neutral-900 px-3 py-0.5 rounded border border-white/5 truncate max-w-[200px]">
                    https://zentiqai.vercel.app
                  </div>
                  <div className="w-8" />
                </div>

                {/* Abstract Interactive Chatbot UI Simulation */}
                <div className="space-y-4">
                  {/* Console Header */}
                  <div className="p-3 rounded bg-neutral-900/90 border border-cyan-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="font-mono text-xs font-bold text-neutral-200">
                        ZentiqAI Workspace
                      </div>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[10px]">
                      <span className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-400">
                        MODELS: QWEN + LLAVA
                      </span>
                    </div>
                  </div>

                  {/* Chat Stream Preview */}
                  <div className="space-y-3 font-mono text-xs">
                    {/* User Prompt with Image Upload */}
                    <div className="flex justify-end">
                      <div className="max-w-[85%] p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-neutral-200 space-y-2">
                        <div className="text-[11px] text-cyan-300">
                          &gt; Analyze this circuit diagram and identify potential bottlenecks:
                        </div>
                        <div className="flex items-center gap-2 px-2.5 py-1.5 rounded bg-black/40 border border-white/10 text-[10px] text-neutral-400">
                          <Eye className="w-3.5 h-3.5 text-cyan-400" />
                          <span>circuit-schematic-v2.png (480KB)</span>
                        </div>
                      </div>
                    </div>

                    {/* AI Response Stream */}
                    <div className="flex justify-start">
                      <div className="max-w-[85%] p-3 rounded-lg bg-neutral-900/80 border border-white/10 text-neutral-300 space-y-2">
                        <div className="flex items-center gap-2 text-[10px] text-cyan-400">
                          <Sparkles className="w-3 h-3" />
                          <span>LLaVA-13B Multimodal Vision Engine:</span>
                        </div>
                        <p className="text-[11px] leading-relaxed text-neutral-300">
                          Visual inspection indicates impedance mismatch at node 4. Recommend inserting shunt capacitor to stabilize high-frequency ripple.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Dual Mode Indicator Strip */}
                  <div className="p-3 rounded bg-neutral-900/50 border border-white/5 flex items-center justify-between font-mono text-[10px] text-neutral-400">
                    <span className="text-cyan-400">MODE 1: TEXT DIALOGUE (QWEN)</span>
                    <span className="text-white/20">|</span>
                    <span className="text-cyan-400">MODE 2: IMAGE ANALYSIS (LLAVA-13B)</span>
                  </div>
                </div>

                {/* Subtle Hover Reveal Tag */}
                <div className="absolute inset-0 bg-cyan-950/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="font-mono text-xs px-4 py-2 rounded-full bg-cyan-400 text-black font-bold tracking-widest shadow-xl">
                    VIEW CASE STUDY ↗
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
