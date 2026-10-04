"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface ChapterHeaderProps {
  chapter: string;
  category?: string;
  metadata?: string;
}

export function ChapterHeader({ chapter, category, metadata }: ChapterHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-8 sm:mb-12 border-b border-white/[0.08]"
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase">
          {chapter}
        </span>
        {category && (
          <>
            <span className="text-white/20">•</span>
            <span className="font-mono text-xs text-neutral-400 tracking-wider uppercase">
              {category}
            </span>
          </>
        )}
      </div>

      {metadata && (
        <span className="font-mono text-[11px] text-neutral-500 tracking-widest uppercase">
          {metadata}
        </span>
      )}
    </motion.div>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`space-y-4 max-w-3xl ${className}`}
    >
      {subtitle && (
        <div className="font-mono text-xs tracking-widest text-cyan-400 uppercase">
          {subtitle}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-100 uppercase leading-[1.08]">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </motion.div>
  );
}
