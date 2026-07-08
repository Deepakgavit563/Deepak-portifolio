"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import SkillCard from "../ui/SkillCard";
import { skills } from "../../data/skills";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const container = useRef<HTMLDivElement>(null);

  // Keep GSAP disabled until hydration issue is fixed
  
  useGSAP(() => {
    gsap.from(".skill-card", {
      opacity: 0,
      y: 60,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
    });
  }, { scope: container });


  return (
  <section
    id="skills"
    ref={container}
    className="relative py-32 px-6 scroll-mt-24"
  >
    <div className="mx-auto max-w-7xl">
      <p className="text-center uppercase tracking-[0.3em] text-cyan-400">
        Skills
      </p>

      <h2 className="mt-4 text-center text-4xl font-bold md:text-5xl">
        Technologies I Work With
      </h2>

      <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
  {skills.map((skill) => (
    <div key={skill.name} className="skill-card">
      <SkillCard skill={skill} />
    </div>
  ))}
</div>
    </div>
  </section>
);
}