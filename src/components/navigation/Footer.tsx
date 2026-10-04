"use client";

import React from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#060606] py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="font-mono text-sm font-bold tracking-widest text-white uppercase">
            {PORTFOLIO_DATA.profile.name}
          </div>
          <div className="font-mono text-xs text-neutral-400 mt-1 uppercase tracking-wider">
            {PORTFOLIO_DATA.profile.primaryTitle} • {PORTFOLIO_DATA.profile.location}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-neutral-400">
          <a
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href={PORTFOLIO_DATA.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.profile.email}`}
            className="hover:text-cyan-400 transition-colors"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            data-cursor="button"
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-neutral-400">
        <span>© 2026 Shubh Porwal</span>
        <span>Designed &amp; built with Next.js</span>
      </div>
    </footer>
  );
}
