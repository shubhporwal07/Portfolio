"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChapterHeader } from "@/components/ui/EditorialHeaders";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import {
  Code,
  Layout,
  Server,
  Database,
  Brain,
  Cpu,
  Wrench,
} from "lucide-react";

interface SkillCategory {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
  description: string;
}

const CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    label: "PROGRAMMING",
    icon: Code,
    skills: PORTFOLIO_DATA.skills.programming,
    description:
      "Core algorithms, OOP design paradigms, and typed application development.",
  },
  {
    id: "frontend",
    label: "FRONTEND",
    icon: Layout,
    skills: PORTFOLIO_DATA.skills.frontend,
    description:
      "Modern component-driven web architectures, responsive design, and state pipelines.",
  },
  {
    id: "backend",
    label: "BACKEND",
    icon: Server,
    skills: PORTFOLIO_DATA.skills.backend,
    description:
      "RESTful architecture, authentication lifecycles, and microservice integration.",
  },
  {
    id: "databases",
    label: "DATABASES",
    icon: Database,
    skills: PORTFOLIO_DATA.skills.databases,
    description:
      "Relational and NoSQL schemas, index optimization, and transactional persistence.",
  },
  {
    id: "ai",
    label: "AI & MULTIMODAL",
    icon: Brain,
    skills: PORTFOLIO_DATA.skills.ai,
    description:
      "Open-source foundation model routing, visual reasoning, and prompt engineering.",
  },
  {
    id: "fundamentals",
    label: "CS FUNDAMENTALS",
    icon: Cpu,
    skills: PORTFOLIO_DATA.skills.fundamentals,
    description:
      "Algorithms, complexity analysis, memory models, OS internals, and networking.",
  },
  {
    id: "tools",
    label: "TOOLS & DEPLOYMENT",
    icon: Wrench,
    skills: PORTFOLIO_DATA.skills.tools,
    description:
      "Version control workflows, cloud containers, CI/CD pipelines, and developer tooling.",
  },
];

const TOTAL_SKILLS = CATEGORIES.reduce((a, c) => a + c.skills.length, 0);

function SkillCard({ cat }: { cat: SkillCategory }) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const Icon = cat.icon;

  return (
    <motion.div
      variants={staggerItem}
      className="group p-6 rounded-lg bg-[#0e0e0e] border border-white/[0.08] hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded bg-white/[0.04] text-cyan-400 border border-white/10">
              <Icon className="w-4 h-4" />
            </div>
            <h3 className="font-mono text-xs font-bold text-white tracking-widest uppercase">
              {cat.label}
            </h3>
          </div>
          <span className="font-mono text-[10px] text-neutral-500">
            {cat.skills.length} TOOLS
          </span>
        </div>

        <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
          {cat.description}
        </p>

        {/* Skills Pills */}
        <div className="flex flex-wrap gap-2">
          {cat.skills.map((skill) => {
            const isHovered = hoveredSkill === skill;
            return (
              <div
                key={skill}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`relative px-3 py-1.5 rounded text-xs font-mono transition-all duration-200 cursor-default select-none ${
                  isHovered
                    ? "bg-cyan-400 text-black font-semibold shadow-[0_0_12px_rgba(0,229,255,0.4)]"
                    : "bg-neutral-900 border border-white/10 text-neutral-300 hover:border-cyan-400/60"
                }`}
              >
                {skill}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-neutral-600">
        <span>PRODUCTION READY</span>
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/50" />
      </div>
    </motion.div>
  );
}

export function SkillsToolkit() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const displayedCategories =
    activeCategory === "all"
      ? CATEGORIES
      : CATEGORIES.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ChapterHeader
        chapter="04 / TOOLKIT"
        category="TECHNICAL CAPABILITIES"
        metadata="VERIFIABLE STACK"
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
            ENGINEERING STACK
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mt-1">
            THE TOOLS I BUILD WITH
          </h2>
        </div>
        <p className="font-mono text-xs text-neutral-400 max-w-md">
          Organized by domain specialization. No fabricated percentage bars — only
          production tools utilized across real codebases.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/[0.08]">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-3 py-1.5 rounded font-mono text-xs transition-colors cursor-pointer ${
            activeCategory === "all"
              ? "bg-cyan-400 text-black font-bold"
              : "bg-white/[0.04] text-neutral-400 hover:text-white border border-white/10"
          }`}
        >
          ALL CAPABILITIES ({TOTAL_SKILLS})
        </button>

        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-1.5 rounded font-mono text-xs transition-colors cursor-pointer ${
              activeCategory === cat.id
                ? "bg-cyan-400 text-black font-bold"
                : "bg-white/[0.04] text-neutral-400 hover:text-white border border-white/10"
            }`}
          >
            {cat.label} ({cat.skills.length})
          </button>
        ))}
      </div>

      {/* Cards Grid — key forces full remount on category change, avoiding AnimatePresence layout bugs */}
      <motion.div
        key={activeCategory}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {displayedCategories.map((cat) => (
          <SkillCard key={cat.id} cat={cat} />
        ))}
      </motion.div>
    </section>
  );
}
