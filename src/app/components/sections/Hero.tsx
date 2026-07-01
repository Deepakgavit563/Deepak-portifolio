"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TypeAnimation } from "react-type-animation";
import FloatingParticles from "../effects/FloatingParticles";

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

      // Animate background gradients
      gsap.to(".gradient1", {
  x: 40,
  y: -30,
  scale: 1.15,
  rotation: 10,
  duration: 12,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to(".gradient2", {
  x: -40,
  y: 40,
  scale: 0.9,
  rotation: -10,
  duration: 15,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Background */}
      {/* Base Background */}
<div className="absolute inset-0 bg-[#09090b]" />

{/* Cyan Glow */}
<div
  className="
    gradient1
    absolute
    top-0
    left-1/2
    -translate-x-1/2
    h-[320px]
    w-[320px]
    rounded-full
    bg-cyan-500/25
    blur-[120px]

    sm:h-[450px]
    sm:w-[450px]

    md:h-[600px]
    md:w-[600px]

    lg:h-[750px]
    lg:w-[750px]
  "
/>

{/* Purple Glow */}
<div
  className="
    gradient2
    absolute
    bottom-0
    right-0
    h-[260px]
    w-[260px]
    rounded-full
    bg-indigo-600/25
    blur-[120px]

    sm:h-[380px]
    sm:w-[380px]

    md:h-[500px]
    md:w-[500px]

    lg:h-[650px]
    lg:w-[650px]
  "
/>
      <FloatingParticles />
      {/* Content */}
      <div className="relative z-10 px-6 text-center">
        <p className="welcome mb-4 uppercase tracking-[0.4em] text-cyan-400">
          Welcome
        </p>

        <h1 className="title text-5xl font-black leading-none sm:text-6xl md:text-7xl lg:text-8xl">Deepak Gavit</h1>

        <h2 className="subtitle mt-5 text-xl font-semibold text-cyan-400 sm:text-2xl md:text-3xl lg:text-4xl">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1500,
              "MERN Stack Developer",
              1500,
              "React Developer",
              1500,
              "Problem Solver",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className="description mx-auto mt-6 max-w-md px-2 text-base leading-7 text-zinc-400 sm:max-w-lg md:max-w-xl md:text-lg">
          I design and build beautiful web experiences with React, Next.js, and
          modern technologies.
        </p>

        <div className="buttons mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-full bg-cyan-500 px-8 py-3 font-semibold text-black transition hover:scale-105">
            View Projects
          </button>

          <button className="rounded-full border border-zinc-700 px-8 py-3 transition hover:border-cyan-400">
            Contact Me
          </button>
        </div>

        <div className="mt-16 animate-bounce text-zinc-500">↓</div>
      </div>
    </section>
  );
}
