"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".welcome", {
        opacity: 0,
        y: 30,
        duration: 0.6,
      })
        .from(".title", {
          opacity: 0,
          y: 80,
          duration: 0.8,
        })
        .from(".subtitle", {
          opacity: 0,
          y: 40,
          duration: 0.6,
        })
        .from(".description", {
          opacity: 0,
          y: 20,
          duration: 0.6,
        })
        .from(".buttons", {
          opacity: 0,
          y: 20,
          duration: 0.6,
        });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#155e75,transparent_60%)] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#312e81,transparent_60%)] opacity-30" />

      {/* Content */}
      <div className="relative z-10 px-6 text-center">
        <p className="welcome mb-4 uppercase tracking-[0.3em] text-cyan-400">
          Welcome
        </p>

        <h1 className="title text-6xl font-black md:text-8xl">
          Deepak Gavit
        </h1>

        <h2 className="subtitle mt-4 text-2xl text-zinc-300 md:text-4xl">
          Full Stack Developer
        </h2>

        <p className="description mx-auto mt-6 max-w-xl text-zinc-400">
          I design and build beautiful web experiences with React,
          Next.js, and modern technologies.
        </p>

        <div className="buttons mt-10 flex justify-center gap-4">
          <button className="rounded-full bg-cyan-500 px-8 py-3 font-semibold text-black transition hover:scale-105">
            View Projects
          </button>

          <button className="rounded-full border border-zinc-700 px-8 py-3 transition hover:border-cyan-400">
            Contact Me
          </button>
        </div>

        <div className="mt-16 animate-bounce text-zinc-500">
          ↓
        </div>
      </div>
    </section>
  );
}