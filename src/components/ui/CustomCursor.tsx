"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "view" | "open" | "github">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check touch device or reduced motion
    const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (touch || reducedMotion || window.innerWidth < 1024) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("[data-cursor]") as HTMLElement | null;
      if (target) {
        const type = target.getAttribute("data-cursor");
        if (type === "view") {
          setCursorVariant("view");
          setCursorText("VIEW");
        } else if (type === "open") {
          setCursorVariant("open");
          setCursorText("OPEN ↗");
        } else if (type === "github") {
          setCursorVariant("github");
          setCursorText("GITHUB ↗");
        } else if (type === "button") {
          setCursorVariant("hover");
          setCursorText("");
        }
      } else {
        const clickable = (e.target as HTMLElement)?.closest("a, button");
        if (clickable) {
          setCursorVariant("hover");
          setCursorText("");
        } else {
          setCursorVariant("default");
          setCursorText("");
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const isTextCursor = cursorVariant === "view" || cursorVariant === "open" || cursorVariant === "github";

  return (
    <>
      {/* Central pointer dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-cyan-400"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: isTextCursor ? 0 : 6,
          height: isTextCursor ? 0 : 6,
          opacity: isTextCursor ? 0 : 1,
        }}
      />

      {/* Smooth outer ring or expanded badge */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center font-mono text-[10px] tracking-wider font-semibold select-none ${
          isTextCursor
            ? "bg-cyan-400 text-black px-3 py-1.5 rounded-full shadow-[0_0_20px_rgba(0,229,255,0.4)]"
            : cursorVariant === "hover"
            ? "border border-cyan-400/80 bg-cyan-400/10 rounded-full"
            : "border border-white/20 rounded-full"
        }`}
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          width: isTextCursor ? "auto" : cursorVariant === "hover" ? 48 : 32,
          height: isTextCursor ? "auto" : cursorVariant === "hover" ? 48 : 32,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {isTextCursor && <span>{cursorText}</span>}
      </motion.div>
    </>
  );
}
