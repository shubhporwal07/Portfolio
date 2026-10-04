"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulseOffset: number;
}

export function NeuralNetworkBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const timeRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // More nodes for full-page coverage
    const NODE_COUNT = Math.min(90, Math.floor((window.innerWidth * window.innerHeight) / 14000));
    const MAX_DISTANCE = 180;
    const MOUSE_RADIUS = 220;
    const ACCENT_R = 0;
    const ACCENT_G = 229;
    const ACCENT_B = 255;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initNodes = () => {
      nodesRef.current = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        radius: Math.random() * 1.6 + 0.6,
        pulseOffset: Math.random() * Math.PI * 2,
      }));
    };

    resize();
    initNodes();

    const handleResize = () => {
      resize();
      initNodes();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const draw = (timestamp: number) => {
      timeRef.current = timestamp * 0.001;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;
      const t = timeRef.current;

      // Update positions
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        // Wrap around edges
        if (node.x < -20) node.x = canvas.width + 20;
        if (node.x > canvas.width + 20) node.x = -20;
        if (node.y < -20) node.y = canvas.height + 20;
        if (node.y > canvas.height + 20) node.y = -20;

        // Mouse repulsion
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * 0.04;
          node.vx += (dx / dist) * force;
          node.vy += (dy / dist) * force;
          // Speed cap
          const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
          if (speed > 1.4) {
            node.vx = (node.vx / speed) * 1.4;
            node.vy = (node.vy / speed) * 1.4;
          }
        } else {
          // Gentle drift back to base speed
          node.vx *= 0.999;
          node.vy *= 0.999;
        }
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < MAX_DISTANCE * MAX_DISTANCE) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / MAX_DISTANCE) * 0.14;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${ACCENT_R},${ACCENT_G},${ACCENT_B},${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw nodes with subtle pulse
      for (const node of nodes) {
        const pulse = Math.sin(t * 1.2 + node.pulseOffset) * 0.3 + 0.7;
        const alpha = 0.35 * pulse;
        const r = node.radius * (0.9 + pulse * 0.15);

        // Glow halo
        const grad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 4);
        grad.addColorStop(0, `rgba(${ACCENT_R},${ACCENT_G},${ACCENT_B},${alpha})`);
        grad.addColorStop(1, `rgba(${ACCENT_R},${ACCENT_G},${ACCENT_B},0)`);
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT_R},${ACCENT_G},${ACCENT_B},${alpha * 2.2})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
}
