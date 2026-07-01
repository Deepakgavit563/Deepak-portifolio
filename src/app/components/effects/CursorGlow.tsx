"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const moveGlow = (e: MouseEvent) => {
      glow.animate(
        {
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
        },
        {
          duration: 300,
          fill: "forwards",
        }
      );
    };

    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="
        pointer-events-none
        fixed
        z-0
        h-72
        w-72
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-cyan-500/15
        blur-3xl
      "
    />
  );
}