"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!bar.current) return;

    gsap.set(bar.current, {
      width: "0%",
    });

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        gsap.set(bar.current, {
          width: `${self.progress * 100}%`,
        });
      },
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[9999] h-[2px] w-full">
      <div
        ref={bar}
        className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
      />
    </div>
  );
}