"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, FileText } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("position");
  const [activeNumber, setActiveNumber] = useState("01");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const totalChapters = "07";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHome) return;

      const sections = PORTFOLIO_DATA.navigation.map((n) => n.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            setActiveNumber(PORTFOLIO_DATA.navigation[i].num);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    if (!isHome) {
      window.location.href = `/#${id}`;
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#080808]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand / Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            data-cursor="button"
          >
            <div className="flex flex-col">
              <span className="font-mono text-xs font-bold tracking-widest text-neutral-100 group-hover:text-cyan-400 transition-colors uppercase">
                {PORTFOLIO_DATA.profile.name}
              </span>
              <span className="font-mono text-[10px] tracking-wider text-neutral-500 hidden sm:inline">
                {PORTFOLIO_DATA.profile.location} • FULL-STACK
              </span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse hidden sm:inline-block" />
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {PORTFOLIO_DATA.navigation.map((item) => {
              const isActive = isHome && activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  data-cursor="button"
                  className={`flex items-center gap-1.5 text-xs font-mono tracking-wider transition-colors cursor-pointer ${
                    isActive
                      ? "text-cyan-400 font-semibold"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  <span className="text-[10px] opacity-60">{item.num}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Indicator & Actions */}
          <div className="flex items-center gap-4">
            {/* Dynamic chapter indicator */}
            {isHome && (
              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-900/80 border border-white/10 font-mono text-xs text-neutral-300">
                <span className="text-cyan-400 font-semibold">{activeNumber}</span>
                <span className="text-neutral-600">/</span>
                <span className="text-neutral-500">{totalChapters}</span>
              </div>
            )}

            {/* Resume button */}
            <a
              href={PORTFOLIO_DATA.profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="open"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-xs font-mono text-neutral-200 hover:text-cyan-400 transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded text-neutral-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 lg:hidden bg-[#080808]/98 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6"
          >
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">
                NAVIGATION CHAPTERS
              </span>
              {PORTFOLIO_DATA.navigation.map((item) => {
                const isActive = isHome && activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`flex items-center justify-between py-3 border-b border-white/[0.06] text-left transition-colors ${
                      isActive ? "text-cyan-400" : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    <span className="text-xl sm:text-2xl font-bold tracking-tight">
                      {item.label}
                    </span>
                    <span className="font-mono text-xs text-neutral-500">{item.num} / {totalChapters}</span>
                  </button>
                );
              })}
            </div>

            <div className="space-y-4 pt-6">
              <a
                href={PORTFOLIO_DATA.profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded bg-cyan-400 text-black font-mono text-sm font-semibold tracking-wider hover:bg-cyan-300 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW RESUME</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-between pt-3 font-mono text-xs text-neutral-500">
                <a
                  href={PORTFOLIO_DATA.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400"
                >
                  GITHUB ↗
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400"
                >
                  LINKEDIN ↗
                </a>
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  className="hover:text-cyan-400"
                >
                  EMAIL ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
