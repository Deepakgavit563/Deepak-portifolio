"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import ExperienceCard from "../ui/ExperienceCard";
import { experiences } from "../../data/experience";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
  // Timeline line animation
  gsap.from(".timeline-line", {
    scaleY: 0,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: container.current,
      start: "top 70%",
    },
  });

  // Cards animation
  gsap.from(".experience-card", {
    opacity: 0,
    x: 80,
    duration: 0.8,
    stagger: 0.25,
    ease: "power3.out",
    scrollTrigger: {
      trigger: container.current,
      start: "top 75%",
    },
  });

  // Timeline dots animation
  gsap.from(".timeline-dot", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.25,
    ease: "back.out(2)",
    scrollTrigger: {
      trigger: container.current,
      start: "top 75%",
    },
  });
}, { scope: container });

  return (
    <section
      id="experience"
      ref={container}
      className="bg-[#09090b] py-28 px-6 scroll-mt-24"
    >
      <div className="mx-auto max-w-5xl">

        <p className="text-center uppercase tracking-[0.3em] text-cyan-400">
          Experience
        </p>

        <h2 className="mt-4 text-center text-5xl font-bold">
          My Journey
        </h2>

        <div className="relative mt-20">

          {/* Vertical Line */}
          <div className="timeline-line absolute left-4.5 top-0 h-full w-1 origin-top rounded-full bg-cyan-400" />

          {experiences.map((experience) => (
            <div
              key={experience.year}
              className="experience-card relative mb-12 flex items-start gap-8"
            >
              {/* Timeline Dot */}
              <div className="timeline-dot relative z-10 h-10 w-10 rounded-full border-4 border-cyan-400 bg-[#09090b] shadow-[0_0_20px_rgba(34,211,238,0.7)]" />

              {/* Card */}
              <div className="flex-1">
                <ExperienceCard experience={experience} />
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}