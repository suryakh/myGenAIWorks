"use client";
import { useRef } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -4;
    const rotY = ((x - cx) / cx) * 4;

    card.style.transition = "transform 0.08s ease, box-shadow 0.08s ease";
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(6px)`;
    card.style.boxShadow = `
      -3px 0 20px rgba(0,245,255,0.15),
      ${-rotY * 1.5}px ${rotX * 1.5}px 28px rgba(0,245,255,0.08),
      0 8px 32px rgba(0,0,0,0.5)
    `;

    const shine = card.querySelector<HTMLElement>(".card-shine");
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0,245,255,0.07) 0%, transparent 65%)`;
    }
  };

  const onMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transition =
      "transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.45s ease";
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    card.style.boxShadow = "-3px 0 20px rgba(0,245,255,0.1)";

    const shine = card.querySelector<HTMLElement>(".card-shine");
    if (shine) shine.style.background = "";
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="card-shine" />
      {children}
    </div>
  );
}
