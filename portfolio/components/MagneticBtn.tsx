"use client";
import { useRef, ReactNode } from "react";

interface MagneticBtnProps {
  href: string;
  className?: string;
  children: ReactNode;
  download?: boolean;
  target?: string;
  rel?: string;
}

export default function MagneticBtn({
  href,
  className,
  children,
  download,
  target,
  rel,
}: MagneticBtnProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    el.style.transform = `translate(${x}px, ${y}px)`;
    el.style.transition = "transform 0.15s ease";
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
    el.style.transition = "transform 0.45s cubic-bezier(0.34,1.56,0.64,1)";
  };

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      download={download}
      target={target}
      rel={rel}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </a>
  );
}
