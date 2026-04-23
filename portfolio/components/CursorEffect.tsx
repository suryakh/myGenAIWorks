"use client";
import { useEffect, useRef } from "react";

export default function CursorEffect() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0;
    let rx = 0, ry = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
      }

      // Ring changes on interactive element hover
      const target = e.target as Element;
      const isInteractive = !!target.closest("a, button, [data-interactive]");
      if (ringRef.current) {
        const size = isInteractive ? 56 : 36;
        ringRef.current.style.width  = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.marginLeft = `${-size / 2}px`;
        ringRef.current.style.marginTop  = `${-size / 2}px`;
        ringRef.current.style.borderColor = isInteractive
          ? "rgba(0,245,255,1)"
          : "rgba(0,245,255,0.5)";
        ringRef.current.style.boxShadow = isInteractive
          ? "0 0 20px rgba(0,245,255,0.55), inset 0 0 20px rgba(0,245,255,0.07)"
          : "0 0 8px rgba(0,245,255,0.2)";
        ringRef.current.style.background = isInteractive
          ? "rgba(0,245,255,0.04)"
          : "transparent";
      }
    };

    const animate = () => {
      // Ring follows mouse with lag
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
      }

      // Spotlight follows ring (same position)
      if (spotRef.current) {
        spotRef.current.style.background =
          `radial-gradient(700px circle at ${rx}px ${ry}px, rgba(0,245,255,0.04) 0%, transparent 40%)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Cursor spotlight — sits above content, purely additive */}
      <div
        ref={spotRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 20, transition: "none", mixBlendMode: "screen" }}
      />

      {/* Dot cursor */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none rounded-full"
        style={{
          zIndex: 9999,
          width: 6,
          height: 6,
          background: "#00f5ff",
          boxShadow: "0 0 10px 3px rgba(0,245,255,0.8)",
          transition: "none",
          willChange: "transform",
        }}
      />

      {/* Ring cursor */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none rounded-full border"
        style={{
          zIndex: 9998,
          width: 36,
          height: 36,
          marginLeft: -18,
          marginTop: -18,
          borderColor: "rgba(0,245,255,0.5)",
          boxShadow: "0 0 8px rgba(0,245,255,0.2)",
          /* only animate size/color, NOT transform */
          transition:
            "width 0.2s ease, height 0.2s ease, margin 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
