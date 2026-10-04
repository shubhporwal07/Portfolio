"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Server,
  Layers,
  Database,
  ShieldCheck,
  ShoppingBag,
  Cpu,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Github } from "@/components/ui/Icons";

export default function AnilJewellersCaseStudy() {
  const project = PORTFOLIO_DATA.projects.find((p) => p.slug === "anil-jewellers")!;

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
          <span className="text-cyan-400 font-bold">CASE STUDY 01</span>
          <span className="text-white/20">•</span>
          <span className="text-neutral-400">{project.category}</span>
          <span className="text-white/20">•</span>
          <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[10px]">
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

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-cyan-400 hover:bg-cyan-300 text-black font-mono text-xs font-bold tracking-wider transition-all"
          >
            <span>VISIT LIVE SHOP</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 font-mono text-xs text-neutral-200 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>SOURCE CODE</span>
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

      {/* Case Study 10 Structured Chapters */}
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

        {/* 02 THE PROBLEM */}
        <section className="space-y-4">
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            02 / THE PROBLEM
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white">
            PHYSICAL BOUTIQUE BOTTLENECKS
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
            ENGINEERED FULL-STACK COMMERCE
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-4xl">
            {project.solution}
          </p>
        </section>

        {/* 04 ARCHITECTURE */}
        <section className="space-y-6">
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            04 / ARCHITECTURE & SYSTEM FLOW
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white">
            {project.architecture.title}
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed max-w-4xl">
            {project.architecture.description}
          </p>

          {/* Visual Architecture Flow */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#0c0c0c] border border-white/10 space-y-6">
            <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
              END-TO-END TRANSACTION & DATA FLOW:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.architecture.flow.map((node, i) => (
                <div
                  key={i}
                  className="p-4 rounded bg-[#121212] border border-white/10 flex items-center justify-between"
                >
                  <span className="font-mono text-xs text-neutral-200">
                    <span className="text-cyan-400 font-bold mr-2">0{i + 1}</span>
                    {node}
                  </span>
                  {i < project.architecture.flow.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-500 hidden lg:block" />
                  )}
                </div>
              ))}
            </div>

            {/* Architecture Details Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
              {project.architecture.details.map((item, i) => (
                <div key={i} className="p-4 rounded bg-neutral-900/60 border border-white/5 space-y-1">
                  <div className="font-mono text-xs text-cyan-300 font-bold uppercase">
                    {item.title}
                  </div>
                  <div className="text-xs text-neutral-400 leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 FEATURES */}
        <section className="space-y-6">
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            05 / KEY FEATURES
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white">
            PLATFORM CAPABILITIES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feat, i) => (
              <div
                key={i}
                className="p-6 rounded-lg bg-[#0e0e0e] border border-white/[0.08] space-y-2"
              >
                <div className="flex items-center gap-2 font-mono text-sm font-bold text-white uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{feat.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 06 TECHNOLOGY */}
        <section className="space-y-6">
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            06 / TECHNOLOGY STACK
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white">
            TOOLS & LIBRARIES
          </h2>

          <div className="flex flex-wrap gap-2.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded bg-white/[0.04] border border-white/10 font-mono text-xs text-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* 07 DEVELOPMENT */}
        <section className="space-y-6">
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            07 / DEVELOPMENT METHODOLOGY
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white">
            IMPLEMENTATION DISCIPLINE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.development.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-lg bg-[#0e0e0e] border border-white/[0.08] space-y-2"
              >
                <div className="font-mono text-xs text-cyan-400 font-bold uppercase">
                  {item.title}
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 08 DEPLOYMENT */}
        <section className="space-y-4">
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            08 / DEPLOYMENT & DEVOPS
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white">
            PRODUCTION HOSTING
          </h2>
          <div className="p-6 rounded-xl bg-[#0c0c0c] border border-white/[0.08] space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.deployment.platforms.map((p) => (
                <span
                  key={p}
                  className="px-3 py-1 rounded bg-neutral-900 border border-white/10 font-mono text-xs text-cyan-300"
                >
                  {p}
                </span>
              ))}
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {project.deployment.strategy}
            </p>
          </div>
        </section>

        {/* 09 RESULTS / SCALE */}
        <section className="space-y-4">
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            09 / RESULTS & SCALE
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white">
            MEASURABLE FOOTPRINT
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.results.map((res, i) => (
              <div
                key={i}
                className="p-5 rounded-lg bg-[#0e0e0e] border border-white/[0.08] space-y-1"
              >
                <div className="font-mono text-lg font-bold text-white">
                  {res.metric}
                </div>
                <div className="text-xs text-neutral-400">
                  {res.context}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 10 LINKS */}
        <section className="pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-6">
          <div>
            <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
              10 / PROJECT ACCESS
            </div>
            <div className="text-lg font-bold text-white mt-1">
              Live Domain &amp; Code Repository
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-cyan-400 text-black font-mono text-xs font-bold tracking-wider hover:bg-cyan-300 transition-colors"
            >
              <span>OPEN ANILJEWELLERS.SHOP</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white/[0.05] border border-white/10 font-mono text-xs text-neutral-200 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GITHUB REPO</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
