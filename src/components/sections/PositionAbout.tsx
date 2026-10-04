"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChapterHeader } from "@/components/ui/EditorialHeaders";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Code2, Server, Cpu, Database, Award, ArrowUpRight } from "lucide-react";

function CounterItem({
  value,
  label,
  context,
}: {
  value: string;
  label: string;
  context: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // If it's a decimal like 8.33
    if (value.includes(".")) {
      const target = parseFloat(value);
      let current = 0;
      const step = target / 30;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(current.toFixed(2));
        }
      }, 30);
      return () => clearInterval(timer);
    }

    // If it has a '+' like 100+ or 10+ or 15+
    const numericPart = parseInt(value.replace(/\D/g, ""), 10);
    const hasPlus = value.includes("+");

    if (!isNaN(numericPart)) {
      let current = 0;
      const step = Math.max(1, Math.floor(numericPart / 25));
      const timer = setInterval(() => {
        current += step;
        if (current >= numericPart) {
          setDisplayValue(hasPlus ? `${numericPart}+` : `${numericPart}`);
          clearInterval(timer);
        } else {
          setDisplayValue(hasPlus ? `${current}+` : `${current}`);
        }
      }, 35);
      return () => clearInterval(timer);
    }

    setDisplayValue(value);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      className="group relative p-6 rounded-lg bg-[#0e0e0e] border border-white/[0.08] hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-100 group-hover:text-cyan-400 transition-colors">
          {displayValue}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-cyan-400 transition-colors" />
      </div>

      <div className="mt-4 pt-3 border-t border-white/[0.05]">
        <div className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-200">
          {label}
        </div>
        <div className="text-[11px] font-mono text-neutral-500 mt-1">
          {context}
        </div>
      </div>
    </motion.div>
  );
}

export function PositionAbout() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ChapterHeader
        chapter="02 / POSITION"
        category="ENGINEERING PHILOSOPHY & PROOF"
        metadata="VERIFIABLE SIGNALS"
      />

      {/* Main Philosophy Editorial Heading & Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="lg:col-span-5"
        >
          <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">
            Core Trajectory
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-[1.05]">
            BUILDING PRODUCTS, <br className="hidden sm:inline" />
            NOT JUST <span className="text-cyan-400">PROJECTS.</span>
          </h2>
          <div className="mt-6 flex items-center gap-3 font-mono text-xs text-neutral-400">
            <span className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/10">
              LPU • 2024–PRESENT
            </span>
            <span className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/10">
              CGPA: 8.33
            </span>
          </div>
        </motion.div>

        {/* Highlighted Editorial Paragraph */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="lg:col-span-7 space-y-6"
        >
          <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal">
            I am a B.Tech Computer Science and Engineering student at{" "}
            <span className="text-white font-medium border-b border-cyan-400/60 pb-0.5">
              Lovely Professional University
            </span>
            . Rather than collecting superficial certificates, my engineering focus centers on{" "}
            <span className="text-cyan-300 font-medium">
              Full-Stack Web Development, Node.js REST APIs, Database Architecture, and AI Model Integration
            </span>
            .
          </p>

          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            I believe software value is measured in the hands of real users. From architecting a
            commercial jewelry platform handling{" "}
            <span className="text-neutral-200 font-medium">100+ items and customer purchasing cycles</span>, to
            collaboratively delivering a multimodal AI workspace routing live vision and language models, I build
            reliable, scalable digital products that solve real-world problems.
          </p>

          {/* Quick Focus Tags */}
          <div className="pt-2 flex flex-wrap gap-2 font-mono text-xs">
            <span className="px-3 py-1 rounded bg-neutral-900 border border-white/10 text-neutral-300">
              Next.js & React
            </span>
            <span className="px-3 py-1 rounded bg-neutral-900 border border-white/10 text-neutral-300">
              Node.js & Express
            </span>
            <span className="px-3 py-1 rounded bg-neutral-900 border border-white/10 text-neutral-300">
              RESTful APIs
            </span>
            <span className="px-3 py-1 rounded bg-neutral-900 border border-white/10 text-neutral-300">
              PostgreSQL & MongoDB
            </span>
            <span className="px-3 py-1 rounded bg-neutral-900 border border-white/10 text-neutral-300">
              LLaVA & Qwen AI
            </span>
          </div>
        </motion.div>
      </div>

      {/* Quick Proof / Signals Section */}
      <div className="mt-20 sm:mt-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-white/[0.08]"
        >
          <div>
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
              MEASURABLE PROOF
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-neutral-100 mt-1">
              TECHNICAL SIGNALS & METRICS
            </h3>
          </div>
          <span className="font-mono text-xs text-neutral-500">
            TRUTHFUL DATA POINTS ONLY • ZERO FAKE NUMBERS
          </span>
        </motion.div>

        {/* Signals Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {PORTFOLIO_DATA.signals.map((sig, idx) => (
            <CounterItem
              key={idx}
              value={sig.value}
              label={sig.label}
              context={sig.context}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
