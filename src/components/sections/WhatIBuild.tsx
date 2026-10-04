"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { ArrowRight, Bot, Layers3, Workflow } from "lucide-react";

const icons = [Layers3, Bot, Workflow];

export function WhatIBuild() {
  return (
    <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4"
      >
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-400">
            02 / WHAT I BUILD
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
            BUILDING SYSTEMS ACROSS THE STACK.
          </h2>
        </div>
        <p className="max-w-xl font-mono text-[11px] sm:text-xs text-neutral-400 leading-relaxed">
          Product thinking, modern frontend architecture, backend systems, and AI-powered experiences built to solve real problems.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 xl:grid-cols-3 gap-5"
      >
        {PORTFOLIO_DATA.whatIBuild.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <motion.article
              key={item.id}
              variants={staggerItem}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0b0b] p-6 sm:p-7 transition-all duration-300 hover:border-cyan-400/40 hover:bg-[#111111]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,229,255,0.12),transparent_35%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-neutral-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase tracking-tight text-white transition-transform duration-300 group-hover:-translate-y-0.5">
                  {item.label}
                </h3>

                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-400/90">
                  {item.summary}
                </p>

                <ul className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-neutral-300">
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
