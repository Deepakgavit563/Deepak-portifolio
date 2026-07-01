"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });

      tl.from(".profile-image", {
        x: -100,
        opacity: 0,
        duration: 1,
      })
        .from(
          ".about-content",
          {
            x: 100,
            opacity: 0,
            duration: 1,
          },
          "-=0.7"
        )
        .from(
          ".stat-card",
          {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 0.5,
          },
          "-=0.5"
        );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      id="about"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        {/* Left */}
        <div className="profile-image flex justify-center">
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-3 rounded-3xl bg-cyan-500/20 blur-3xl" />

            <Image
              src="/images/profile.jpg"
              alt="Deepak Gavit"
              width={350}
              height={350}
              className="relative rounded-3xl border border-zinc-700 object-cover shadow-2xl"
            />
          </div>
        </div>

        {/* Right */}
        <div className="about-content">
          <p className="uppercase tracking-widest text-cyan-400">
            About Me
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            Building products people enjoy using.
          </h2>

          <p className="mt-6 leading-8 text-zinc-400">
            I'm Deepak Gavit, a Full Stack Developer passionate about
            creating modern web applications with React, Next.js,
            Node.js, and scalable backend technologies.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="stat-card rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-400">
              <h3 className="text-3xl font-bold text-cyan-400">10+</h3>
              <p className="text-sm text-zinc-400">Projects</p>
            </div>

            <div className="stat-card rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-400">
              <h3 className="text-3xl font-bold text-cyan-400">15+</h3>
              <p className="text-sm text-zinc-400">Technologies</p>
            </div>

            <div className="stat-card rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-400">
              <h3 className="text-3xl font-bold text-cyan-400">1000+</h3>
              <p className="text-sm text-zinc-400">Hours Coding</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}