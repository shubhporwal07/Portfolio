"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChapterHeader } from "@/components/ui/EditorialHeaders";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { fadeUp } from "@/lib/animations";
import {
  Mail,
  FileText,
  Copy,
  Check,
  ArrowUpRight,
  Phone,
  Send,
} from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ChapterHeader
        chapter="07 / CONTACT"
        category="DIRECT CHANNELS & COLLABORATION"
        metadata="OPEN TO OPPORTUNITIES"
      />

      <div className="relative rounded-2xl bg-[#0c0c0c] border border-white/[0.08] p-8 sm:p-14 lg:p-16 overflow-hidden">
        {/* Subtle radial ambient accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/[0.05] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-8">
          <div>
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
              NEXT CONVERSATION
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mt-2 leading-[0.98]">
              LET&apos;S BUILD SOMETHING USEFUL.
            </h2>
          </div>

          <p className="text-base sm:text-xl text-neutral-300 leading-relaxed font-light">
            I&apos;m interested in full-stack development, software engineering, AI-powered products,
            and opportunities where I can learn, build, and contribute to production-grade applications.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {/* Primary Email CTA */}
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              data-cursor="button"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded bg-cyan-400 hover:bg-cyan-300 text-black font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(0,229,255,0.25)]"
            >
              <Mail className="w-4 h-4" />
              <span>EMAIL ME</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Copy Email Button */}
            <button
              onClick={copyEmail}
              data-cursor="button"
              className="inline-flex items-center gap-2 px-5 py-4 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-neutral-200 font-mono text-xs sm:text-sm transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-400" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>

            {/* LinkedIn */}
            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="open"
              className="inline-flex items-center gap-2 px-5 py-4 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-neutral-200 hover:text-cyan-400 font-mono text-xs sm:text-sm transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* GitHub */}
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="github"
              className="inline-flex items-center gap-2 px-5 py-4 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-neutral-200 hover:text-cyan-400 font-mono text-xs sm:text-sm transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Resume */}
            <a
              href={PORTFOLIO_DATA.profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="open"
              className="inline-flex items-center gap-2 px-5 py-4 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-neutral-200 hover:text-cyan-400 font-mono text-xs sm:text-sm transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>RESUME</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Technical Metadata Strip (Subtle Phone display) */}
          <div className="pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>INQUIRIES RESPONDED WITHIN 24 HOURS</span>
            </div>
            <div className="flex items-center gap-4 text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-neutral-500" />
                <span className="tracking-wider">{PORTFOLIO_DATA.profile.phone}</span>
              </span>
              <span>•</span>
              <span>{PORTFOLIO_DATA.profile.location} (IST / UTC+5:30)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
