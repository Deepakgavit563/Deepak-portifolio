"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

import ContactItem from "../ui/ContactItem";
import { contact } from "@/app/data/contact";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".contact-title", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      gsap.from(".contact-card", {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
      });

      gsap.from(".contact-item", {
        opacity: 0,
        x: -40,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      id="contact"
      ref={container}
      className="relative py-32 px-6 scroll-mt-10"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-center uppercase tracking-[0.3em] text-cyan-400">
          Contact
        </p>

        <h2 className="contact-title mt-4 text-center text-5xl font-bold md:text-6xl">
          Let's Work Together
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-zinc-400">
          I'm always excited to work on meaningful projects, internships,
          freelance opportunities, and full-time roles.
        </p>

        <div className="contact-card relative mt-20 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 backdrop-blur-xl md:p-12">

          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/10" />

          <div className="relative z-10 space-y-5">

            <div className="contact-item">
              <ContactItem
                icon={FaEnvelope}
                title="Email"
                value={contact.email}
                href={`mailto:${contact.email}`}
              />
            </div>

            <div className="contact-item">
              <ContactItem
                icon={FaLinkedin}
                title="LinkedIn"
                value="Connect with me"
                href={contact.linkedin}
              />
            </div>

            <div className="contact-item">
              <ContactItem
                icon={FaGithub}
                title="GitHub"
                value="View my repositories"
                href={contact.github}
              />
            </div>

            <div className="contact-item">
              <ContactItem
                icon={FaMapMarkerAlt}
                title="Location"
                value={contact.location}
              />
            </div>

            <a
              href={contact.resume}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-cyan-500 px-7 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <FaDownload />
              Download Resume
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}