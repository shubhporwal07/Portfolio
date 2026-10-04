"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Search, Compass, Hammer, Rocket } from "lucide-react";

const STEP_ICONS = [Search, Compass, Hammer, Rocket];

export function HowIBuild() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
      >
        <div>
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
            METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mt-1">
            HOW I BUILD
          </h2>
        </div>
        <p className="font-mono text-xs text-neutral-400 max-w-md">
          A disciplined engineering loop designed for reliable deliverables, clean interfaces, and resilient infrastructure.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {PORTFOLIO_DATA.howIBuild.map((step, idx) => {
          const Icon = STEP_ICONS[idx];
          return (
            <motion.div
              key={step.step}
              variants={staggerItem}
              className="group relative p-6 rounded-lg bg-[#0e0e0e] border border-white/[0.08] hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-cyan-400">
                    STAGE {step.step}
                  </span>
                  <div className="p-2 rounded bg-white/[0.03] text-neutral-400 group-hover:text-cyan-400 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-neutral-600 group-hover:text-neutral-400 transition-colors">
                <span>PHASE 0{idx + 1}</span>
                <span>SYSTEM DISCIPLINE</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
