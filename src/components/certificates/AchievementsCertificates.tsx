"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChapterHeader } from "@/components/ui/EditorialHeaders";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { fadeUp, staggerItem } from "@/lib/animations";
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";

const AUTO_PLAY_MS = 4200;

function getCertificateImage(url: string) {
  const fileId = url.match(/\/d\/([^/]+)/)?.[1];
  return fileId ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600` : url;
}

function getVisibleCardCount() {
  return typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches ? 1 : 3;
}

export function AchievementsCertificates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCardCount, setVisibleCardCount] = useState(getVisibleCardCount);

  const certificates = PORTFOLIO_DATA.certificates;
  const maxIndex = Math.max(0, certificates.length - visibleCardCount);
  const selected = selectedCertificate === null ? null : certificates[selectedCertificate];

  useEffect(() => {
    const updateVisibleCardCount = () => {
      const nextCount = getVisibleCardCount();
      setVisibleCardCount(nextCount);
      setActiveIndex((index) => Math.min(index, Math.max(0, certificates.length - nextCount)));
    };

    window.addEventListener("resize", updateVisibleCardCount);
    return () => window.removeEventListener("resize", updateVisibleCardCount);
  }, [certificates.length]);

  useEffect(() => {
    if (isPaused || selectedCertificate !== null) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index >= maxIndex ? 0 : index + 1));
    }, AUTO_PLAY_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, selectedCertificate, maxIndex]);

  useEffect(() => {
    if (selectedCertificate === null) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedCertificate(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [selectedCertificate]);

  const moveCarousel = (direction: number) => {
    setActiveIndex((index) => Math.min(maxIndex, Math.max(0, index + direction)));
  };

  return (
    <section id="achievements" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ChapterHeader
        chapter="05 / CREDENTIALS"
        category="PROOF OF WORK"
        metadata="CERTIFICATIONS • TRAINING • ACHIEVEMENTS"
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="mb-12 max-w-3xl"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
          PROOF OF WORK
        </h2>
        <p className="mt-4 max-w-2xl font-mono text-xs sm:text-sm text-neutral-400 leading-relaxed">
          Certifications, training and milestones that document my technical journey.
        </p>
      </motion.div>

      <div className="space-y-12">
        <div>
          <div className="mb-6 flex items-center justify-between gap-3 border-b border-white/[0.08] pb-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-400">
              CERTIFICATIONS
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-500">
              08 DOCUMENTS
            </span>
          </div>

          <div
            className="certificate-carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            <motion.div
              className="certificate-carousel__track"
              animate={{ x: `calc(-${activeIndex} * (var(--certificate-card-width) + 1rem))` }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              {certificates.map((cert, index) => (
                <motion.button
                key={`${cert.title}-${cert.date}`}
                  type="button"
                  onClick={() => setSelectedCertificate(index)}
                  variants={staggerItem}
                  whileHover={{ y: -6 }}
                  data-cursor="open"
                  className="certificate-card group"
                  aria-label={`Open certificate for ${cert.title}`}
                >
                  <div className="certificate-card__image-wrap">
                    <img
                      src={getCertificateImage(cert.url)}
                      alt={`${cert.title} certificate preview`}
                      className="certificate-card__image"
                    />
                    <span className="certificate-card__overlay">OPEN CERTIFICATE</span>
                  </div>

                  <div className="p-4 text-left">
                    <div className="mb-2 flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                      <span className="text-cyan-400">{String(index + 1).padStart(2, "0")} / 08</span>
                      <span>{cert.date}</span>
                    </div>
                    <h3 className="line-clamp-2 text-sm font-semibold uppercase tracking-tight text-white">
                      {cert.title}
                    </h3>
                    <p className="mt-2 truncate font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                      {cert.issuer}
                    </p>
                  </div>
                </motion.button>
              ))}
            </motion.div>

            <button
              type="button"
              onClick={() => moveCarousel(-1)}
              className="certificate-carousel__control certificate-carousel__control--left"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => moveCarousel(1)}
              className="certificate-carousel__control certificate-carousel__control--right"
              aria-label="Next certificate"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="mt-6 flex justify-center gap-2" aria-label="Certificate carousel navigation">
              {Array.from({ length: maxIndex + 1 }, (_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 bg-cyan-400" : "w-1.5 bg-white/25 hover:bg-white/60"}`}
                  aria-label={`Show certificate ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="pt-2">
          <div className="mb-6 flex items-center justify-between gap-3 border-b border-white/[0.08] pb-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-400">
              ACHIEVEMENT PROOF
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-500">
              {PORTFOLIO_DATA.achievementProofs.length} LINKS
            </span>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {PORTFOLIO_DATA.achievementProofs.map((item, index) => (
              <motion.a
                key={`${item.title}-${index}`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.01, y: -2 }}
                data-cursor="open"
                className="group flex items-center justify-between gap-3 rounded-xl border border-white/[0.08] bg-[#0b0b0b] px-4 py-3 text-left transition-all duration-300 hover:border-cyan-400/40 hover:bg-[#101010] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
                aria-label={`View achievement proof for ${item.title}`}
              >
                <div className="min-w-0">
                  <div className="font-mono text-[9px] uppercase tracking-[0.26em] text-neutral-500">
                    {item.date}
                  </div>
                  <div className="mt-2 text-sm font-semibold uppercase tracking-tight text-white">
                    {item.title}
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-cyan-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selected && selectedCertificate !== null && (
          <motion.div
            className="certificate-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedCertificate(null);
            }}
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.title} certificate`}
          >
            <motion.div
              className="certificate-modal__panel"
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 18 }}
            >
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                className="certificate-modal__close"
                aria-label="Close certificate"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src={getCertificateImage(selected.url)}
                alt={`${selected.title} certificate`}
                className="certificate-modal__image"
              />
              <div className="certificate-modal__footer">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400">{selected.category}</p>
                  <h3 className="mt-2 text-lg font-semibold uppercase tracking-tight text-white">{selected.title}</h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">{selected.issuer} / {selected.date}</p>
                </div>
                <a
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300 hover:text-white"
                >
                  Open original
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
