"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user already saw loader this session
    const hasSeen = sessionStorage.getItem("sp_loaded");
    if (hasSeen) {
      setLoading(false);
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem("sp_loaded", "true");
            onComplete?.();
          }, 250);
          return 100;
        }
        return prev + 10;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-12 bg-[#080808] text-[#f5f5f5] select-none"
        >
          {/* Top metadata */}
          <div className="flex items-center justify-between font-mono text-xs text-neutral-500 tracking-wider">
            <span>PORTFOLIO / ARCHIVE</span>
            <span className="text-cyan-400">INIT 01 / 01</span>
          </div>

          {/* Center Identity */}
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs sm:text-sm font-mono tracking-widest text-cyan-400 mb-2 uppercase"
            >
              Full-Stack Web Developer
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-100"
            >
              SHUBH PORWAL
            </motion.h1>
          </div>

          {/* Bottom Progress Bar & Numbers */}
          <div className="w-full space-y-3">
            <div className="flex justify-between items-baseline font-mono text-xs text-neutral-400">
              <span className="text-neutral-500">SYSTEM ARCHITECTURE & PRODUCTS</span>
              <span className="text-cyan-400">{progress}%</span>
            </div>
            <div className="w-full h-[2px] bg-neutral-900 overflow-hidden">
              <motion.div
                className="h-full bg-cyan-400"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
