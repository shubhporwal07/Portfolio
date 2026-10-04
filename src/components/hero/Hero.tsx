"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText, Sparkles, Terminal } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

import { PORTFOLIO_DATA } from "@/data/portfolio";

/* ---------- micro animation helpers ---------- */
const ease = [0.16, 1, 0.3, 1] as const;

const reveal = (delay: number) => ({
  hidden: { opacity: 0, y: 32, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, delay, ease },
  },
});

const fadeSlide = (delay: number, dir: "up" | "left" = "up") => ({
  hidden: { opacity: 0, y: dir === "up" ? 20 : 0, x: dir === "left" ? -16 : 0 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.6, delay, ease },
  },
});

/* ---------- Animated hero letter component ---------- */
function AnimatedChar({ char, delay }: { char: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 40, rotateX: -30 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.5, delay, ease }}
      className="inline-block"
      style={{ transformOrigin: "bottom center" }}
    >
      {char === " " ? "\u00a0" : char}
    </motion.span>
  );
}

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const titleLine1 = "FULL-STACK";
  const titleLine2 = "WEB DEVELOPER";

  return (
    <section
      id="position"
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* ── Radial vignette mask ensures hero text stays readable over global canvas ── */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_90%_at_50%_50%,transparent_10%,rgba(8,8,8,0.55)_75%)] pointer-events-none" />

      {/* ── Soft ambient glow accents ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-cyan-500/[0.06] rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, delay: 0.4, ease: "easeOut" }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-sky-500/[0.04] rounded-full blur-3xl pointer-events-none"
      />

      {/* ── Top Chapter & Metadata Bar ── */}
      <motion.div
        variants={fadeSlide(0.2, "up")}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-white/[0.08]"
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-semibold tracking-widest text-cyan-400">
            01 / POSITION
          </span>
          <span className="text-white/20">•</span>
          <span className="font-mono text-xs text-neutral-400 tracking-wider">
            {PORTFOLIO_DATA.profile.educationBrief}
          </span>
        </div>

        <motion.div
          variants={fadeSlide(0.35, "up")}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-2 font-mono text-[11px] text-neutral-400 tracking-wider uppercase"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{PORTFOLIO_DATA.profile.status}</span>
          <span className="text-white/20">|</span>
          <span className="text-neutral-500">{PORTFOLIO_DATA.profile.location}</span>
        </motion.div>
      </motion.div>

      {/* ── Main Hero Content ── */}
      <div className="my-auto py-8 sm:py-12">

        {/* Name slug with terminal icon */}
        <motion.div
          variants={reveal(0.45)}
          initial="hidden"
          animate="visible"
          className="font-mono text-sm sm:text-base tracking-widest text-neutral-400 uppercase mb-4 flex items-center gap-2"
        >
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            className="text-cyan-400"
          >
            <Terminal className="w-4 h-4" />
          </motion.span>
          <span>{PORTFOLIO_DATA.profile.name}</span>
        </motion.div>

        {/* Animated large title – char-by-char reveal */}
        <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.5rem] font-black tracking-tight text-white uppercase leading-[0.92] select-none perspective-[800px]">
          <div className="overflow-hidden">
            {titleLine1.split("").map((char, i) => (
              <AnimatedChar key={`l1-${i}`} char={char} delay={0.55 + i * 0.045} />
            ))}
          </div>
          <div className="overflow-hidden mt-1">
            {titleLine2.split("").map((char, i) => (
              <AnimatedChar
                key={`l2-${i}`}
                char={char}
                delay={0.55 + titleLine1.length * 0.045 + i * 0.045}
              />
            ))}
          </div>
        </h1>

        {/* Animated line under title */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.25, ease }}
          className="mt-4 h-px bg-gradient-to-r from-cyan-400/60 via-cyan-400/20 to-transparent max-w-md"
        />

        {/* Supporting statement */}
        <motion.div
          variants={reveal(1.1)}
          initial="hidden"
          animate="visible"
          className="mt-8 sm:mt-10 max-w-2xl"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 leading-relaxed font-light">
            &ldquo;{PORTFOLIO_DATA.profile.heroStatement}&rdquo;
          </p>
          <p className="mt-3 text-xs sm:text-sm font-mono text-cyan-400/90 tracking-wide uppercase">
            {PORTFOLIO_DATA.profile.secondaryTitle}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeSlide(1.3)}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
        >
          {/* View Work */}
          <motion.button
            onClick={() => scrollTo("projects")}
            data-cursor="button"
            whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(0,229,255,0.45)" }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded bg-cyan-400 text-black font-mono text-xs sm:text-sm font-bold tracking-wider cursor-pointer shadow-[0_0_25px_rgba(0,229,255,0.25)]"
          >
            <span>VIEW MY WORK</span>
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.span>
          </motion.button>

          {/* Connect */}
          <motion.button
            onClick={() => scrollTo("contact")}
            data-cursor="button"
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.12)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded bg-white/[0.05] border border-white/15 text-neutral-200 font-mono text-xs sm:text-sm font-semibold tracking-wider cursor-pointer transition-colors"
          >
            <span>LET&apos;S CONNECT</span>
            <ArrowUpRight className="w-4 h-4 text-cyan-400" />
          </motion.button>

          {/* Resume */}
          <motion.a
            href={PORTFOLIO_DATA.profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="open"
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-2 px-4 py-3.5 rounded border border-white/10 hover:border-cyan-400/50 text-neutral-400 hover:text-cyan-400 font-mono text-xs sm:text-sm transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>RESUME</span>
          </motion.a>

          {/* Social icons */}
          <div className="flex items-center gap-3 sm:ml-2">
            {[
              {
                href: PORTFOLIO_DATA.profile.github,
                icon: <Github className="w-4 h-4" />,
                label: "GitHub",
                cursor: "github",
              },
              {
                href: PORTFOLIO_DATA.profile.linkedin,
                icon: <Linkedin className="w-4 h-4" />,
                label: "LinkedIn",
                cursor: "open",
              },
            ].map(({ href, icon, label, cursor }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor={cursor}
                aria-label={label}
                whileHover={{ scale: 1.15, borderColor: "rgba(0,229,255,0.6)" }}
                className="p-3 rounded border border-white/10 text-neutral-400 hover:text-white transition-colors"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Hero Technical Footer Bar ── */}
      <motion.div
        variants={fadeSlide(1.5)}
        initial="hidden"
        animate="visible"
        className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-neutral-500"
      >
        <div className="flex items-center gap-2">
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          </motion.span>
          <span>PRODUCTION-FIRST • ZERO COMPROMISE ON PERFORMANCE</span>
        </div>
        <div className="flex items-center gap-4">
          <span>28.6139° N / 77.2090° E</span>
          <span className="text-neutral-700">|</span>
          <span>EST. 2024</span>
        </div>
      </motion.div>
    </section>
  );
}
