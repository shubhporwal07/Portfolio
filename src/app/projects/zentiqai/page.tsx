"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { fadeUp } from "@/lib/animations";
import {
  ArrowLeft,
  ExternalLink,
  Bot,
  Eye,
  Brain,
  Layers,
  ShieldCheck,
  Cpu,
  Users,
  ArrowDown,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { Github } from "@/components/ui/Icons";

export default function ZentiqAICaseStudy() {
  const project = PORTFOLIO_DATA.projects.find((p) => p.slug === "zentiqai")!;

  return (
    <div className="min-h-screen bg-[#080808] text-[#f5f5f5] pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Back button */}
      <div className="mb-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL PROJECTS</span>
        </Link>
      </div>

      {/* Hero Header */}
      <motion.header
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="space-y-6 pb-12 border-b border-white/[0.08]"
      >
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
          <span className="text-cyan-400 font-bold">CASE STUDY 02</span>
          <span className="text-white/20">•</span>
          <span className="text-neutral-400">{project.category}</span>
          <span className="text-white/20">•</span>
          <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[10px]">
            {project.badge}
          </span>
          <span className="text-neutral-500 ml-auto">{project.date}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.0]">
          {project.title}
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-300 font-light max-w-3xl leading-relaxed">
          {project.tagline}
        </p>

        {/* Group project attribution badge */}
        <div className="p-4 rounded-lg bg-neutral-900/90 border border-cyan-400/30 font-mono text-xs text-neutral-300 flex items-center gap-3 max-w-2xl">
          <Users className="w-5 h-5 text-cyan-400 shrink-0" />
          <span>
            <strong>Collaborative Engineering Effort:</strong> Developed alongside university peers with dedicated contribution to frontend UI/UX components, state handling, and multimodal model API routing.
          </span>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-cyan-400 hover:bg-cyan-300 text-black font-mono text-xs font-bold tracking-wider transition-all"
          >
            <span>LAUNCH ZENTIQAI</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 font-mono text-xs text-neutral-200 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>TEAM REPOSITORY</span>
          </a>
        </div>
      </motion.header>

      {/* Key Metric Highlights Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-b border-white/[0.08]">
        {project.metrics.map((m, idx) => (
          <div key={idx} className="p-4 rounded bg-[#0e0e0e] border border-white/[0.06]">
            <div className="font-mono text-xl sm:text-2xl font-black text-cyan-400">
              {m.value}
            </div>
            <div className="font-mono text-xs text-neutral-400 mt-1 uppercase">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Case Study 12 Structured Chapters */}
      <div className="mt-16 space-y-20">
        {/* 01 OVERVIEW */}
        <section className="space-y-4">
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            01 / OVERVIEW
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white">
            PROJECT OVERVIEW
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-4xl">
            {project.overview}
          </p>
        </section>

        {/* 02 PROBLEM */}
        <section className="space-y-4">
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            02 / THE PROBLEM
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white">
            PROPRIETARY SILOS &amp; FRAGMENTED VISION
          </h2>
          <div className="p-6 rounded-xl bg-[#0e0e0e] border border-white/[0.08] max-w-4xl">
            <p className="text-neutral-300 text-base leading-relaxed">
              {project.theProblem}
            </p>
          </div>
        </section>

        {/* 03 SOLUTION */}
        <section className="space-y-4">
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            03 / THE SOLUTION
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white">
            UNIFIED MULTIMODAL INFERENCE CONSOLE
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-4xl">
            {project.solution}
          </p>
        </section>

        {/* 04 MULTIMODAL ARCHITECTURE (EXPLICIT ARCHITECTURE FLOW) */}
        <section className="space-y-6">
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            04 / MULTIMODAL ARCHITECTURE FLOW
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white">
            PIPELINE ORCHESTRATION
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed max-w-4xl">
            The end-to-end request lifecycle coordinates user inputs, authentication, modal routing, foundation models, and streaming responses back to the client:
          </p>

          {/* Visual Architecture Flow Diagram */}
          <div className="p-8 sm:p-12 rounded-xl bg-[#0a0a0a] border border-cyan-500/30 relative overflow-hidden shadow-[0_0_50px_rgba(0,229,255,0.06)]">
            <div className="flex flex-col items-center space-y-3 max-w-lg mx-auto font-mono text-xs">
              {/* Step 1: User */}
              <div className="w-full p-4 rounded-lg bg-neutral-900 border border-white/20 text-center font-bold text-neutral-100 flex items-center justify-center gap-2">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>USER INTERACTION (PROMPT / IMAGE UPLOAD)</span>
              </div>
              <ArrowDown className="w-4 h-4 text-cyan-400 animate-bounce" />

              {/* Step 2: Next.js Frontend */}
              <div className="w-full p-4 rounded-lg bg-neutral-900 border border-white/20 text-center font-bold text-cyan-300 flex items-center justify-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>NEXT.JS FRONTEND (15+ REACT COMPONENTS)</span>
              </div>
              <ArrowDown className="w-4 h-4 text-cyan-400" />

              {/* Step 3: Authentication */}
              <div className="w-full p-4 rounded-lg bg-neutral-900 border border-white/20 text-center font-bold text-amber-300 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>AUTHENTICATION (FIREBASE SESSION &amp; TOKEN GATE)</span>
              </div>
              <ArrowDown className="w-4 h-4 text-cyan-400" />

              {/* Step 4: AI Request Dispatcher */}
              <div className="w-full p-4 rounded-lg bg-neutral-900 border border-white/20 text-center font-bold text-purple-300 flex items-center justify-center gap-2">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>AI REQUEST DISPATCHER (PAYLOAD ROUTING)</span>
              </div>
              <ArrowDown className="w-4 h-4 text-cyan-400" />

              {/* Step 5: Foundation Models */}
              <div className="w-full grid grid-cols-2 gap-3">
                <div className="p-4 rounded-lg bg-cyan-950/40 border border-cyan-500/50 text-center">
                  <div className="text-cyan-400 font-bold">QWEN</div>
                  <div className="text-[10px] text-neutral-400 mt-1">TEXT REASONING &amp; DIALOGUE</div>
                </div>
                <div className="p-4 rounded-lg bg-purple-950/40 border border-purple-500/50 text-center">
                  <div className="text-purple-400 font-bold">LLAVA-13B</div>
                  <div className="text-[10px] text-neutral-400 mt-1">VISION SCENE COMPREHENSION</div>
                </div>
              </div>
              <ArrowDown className="w-4 h-4 text-cyan-400" />

              {/* Step 6: AI Response Formatter */}
              <div className="w-full p-4 rounded-lg bg-neutral-900 border border-white/20 text-center font-bold text-neutral-200 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>AI RESPONSE FORMATTER &amp; STREAMING</span>
              </div>
              <ArrowDown className="w-4 h-4 text-cyan-400" />

              {/* Step 7: Final User Presentation */}
              <div className="w-full p-4 rounded-lg bg-cyan-400 text-black text-center font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                <Bot className="w-4 h-4" />
                <span>RENDERED STREAMING RESPONSE IN USER INTERFACE</span>
              </div>
            </div>
          </div>
        </section>

        {/* 05 TEXT INTERACTION */}
        <section className="space-y-4">
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            05 / TEXT INTERACTION
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white">
            NATURAL LANGUAGE PROCESSING CONSOLE
          </h2>
          <div className="p-6 rounded-xl bg-[#0e0e0e] border border-white/[0.08] max-w-4xl space-y-3">
            <p className="text-neutral-300 text-base leading-relaxed">
              Equipped with context-aware session memory, users can conduct multi-turn dialogs covering software architecture, mathematical proofs, code review, and general inquiries. Text inputs are preprocessed, formatted into optimal chat tokens, and streamed back with code syntax highlighting.
            </p>
          </div>
        </section>

        {/* 06 IMAGE ANALYSIS */}
        <section className="space-y-4">
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            06 / IMAGE ANALYSIS
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white">
            VISUAL REASONING ENGINE
          </h2>
          <div className="p-6 rounded-xl bg-[#0e0e0e] border border-white/[0.08] max-w-4xl space-y-3">
            <p className="text-neutral-300 text-base leading-relaxed">
              Users can drag-and-drop or upload diagrams, screenshots, system charts, and photographs. The file ingestion layer sanitizes and encodes the image tensor for consumption by LLaVA-13B, enabling visual question answering, OCR transcription, and architectural critique.
            </p>
          </div>
        </section>

        {/* 07 AI MODELS */}
        <section className="space-y-6">
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            07 / AI MODELS INTEGRATED
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white">
            OPEN-SOURCE WEIGHTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[#0c0c0c] border border-white/[0.08] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-cyan-400 font-bold">MODEL 01</span>
                <span className="px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 font-mono text-[10px]">
                  VISION + LANGUAGE
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white uppercase">LLaVA-13B</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Large Language and Vision Assistant combining a vision encoder with an LLM for versatile multimodal visual and language comprehension.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0c0c0c] border border-white/[0.08] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-cyan-400 font-bold">MODEL 02</span>
                <span className="px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 font-mono text-[10px]">
                  LLM FOUNDATION
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white uppercase">Qwen</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Advanced transformer model proficient across conversational nuances, logic deductions, multilingual dialogue, and technical comprehension.
              </p>
            </div>
          </div>
        </section>

        {/* 08 FRONTEND */}
        <section className="space-y-4">
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            08 / FRONTEND COMPONENT SYSTEM
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white">
            15+ RESPONSIVE NEXT.JS COMPONENTS
          </h2>
          <div className="p-6 rounded-xl bg-[#0e0e0e] border border-white/[0.08] max-w-4xl space-y-3">
            <p className="text-neutral-300 text-base leading-relaxed">
              Architected a component library using Next.js App Router and Tailwind CSS, comprising reusable prompt input bars, image dropzones, chat bubbles, markdown formatters, model switchers, and session drawers tailored for mobile and desktop screens.
            </p>
          </div>
        </section>

        {/* 09 AUTHENTICATION */}
        <section className="space-y-4">
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            09 / AUTHENTICATION GATE
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white">
            FIREBASE IDENTITY
          </h2>
          <div className="p-6 rounded-xl bg-[#0e0e0e] border border-white/[0.08] max-w-4xl space-y-3">
            <p className="text-neutral-300 text-base leading-relaxed">
              Integrated Firebase Authentication offering 2+ sign-on options to verify users, protect API usage from unauthorized scripts, and associate conversation threads securely with authenticated IDs.
            </p>
          </div>
        </section>

        {/* 10 DEPLOYMENT */}
        <section className="space-y-4">
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            10 / DEPLOYMENT INFRASTRUCTURE
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white">
            PRODUCTION DEPLOYMENT ON VERCEL
          </h2>
          <div className="p-6 rounded-xl bg-[#0e0e0e] border border-white/[0.08] max-w-4xl space-y-3">
            <p className="text-neutral-300 text-base leading-relaxed">
              Hosted on Vercel with automatic continuous integration hooked to team GitHub branches. Edge optimizations ensure minimal first-contentful paint across worldwide CDNs.
            </p>
          </div>
        </section>

        {/* 11 TEAM / CONTRIBUTION (CRITICAL DISCLOSURE) */}
        <section className="space-y-4">
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            11 / TEAM &amp; COLLABORATION
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white">
            COLLABORATIVE CREDIT &amp; OWNERSHIP
          </h2>
          <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-r from-neutral-900 to-[#121212] border border-white/10 max-w-4xl space-y-4">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-cyan-400" />
              <span className="font-mono text-sm font-bold text-white uppercase">
                Group Engineering Initiative
              </span>
            </div>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              ZentiqAI was designed and delivered collaboratively with engineering peers. In accordance with truthful developer attribution, this project represents shared team innovation. My contributions centered on the frontend architecture, modular UI components, image preview states, and API dispatch routing.
            </p>
          </div>
        </section>

        {/* 12 LINKS */}
        <section className="pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-6">
          <div>
            <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
              12 / PROJECT ACCESS
            </div>
            <div className="text-lg font-bold text-white mt-1">
              Live Production &amp; Repository
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-cyan-400 text-black font-mono text-xs font-bold tracking-wider hover:bg-cyan-300 transition-colors"
            >
              <span>OPEN ZENTIQAI.VERCEL.APP</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white/[0.05] border border-white/10 font-mono text-xs text-neutral-200 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>TEAM REPO</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
