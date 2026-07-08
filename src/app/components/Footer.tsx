"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-800 bg-zinc-950 py-12">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        {/* Name */}
        <h2 className="text-2xl font-bold text-white">
          Deepak Gavit
        </h2>

        {/* Tagline */}
        <p className="mt-3 text-zinc-400">
          Full Stack Developer • MERN Stack Developer
        </p>

        {/* Tech Stack */}
        <p className="mt-2 text-sm text-zinc-500">
          Crafted with Next.js, React, Tailwind CSS & GSAP
        </p>

        {/* Social Links */}
        <div className="mt-8 flex items-center gap-5">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-700 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-700 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="mailto:your@email.com"
            className="rounded-full border border-zinc-700 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full max-w-md bg-zinc-800" />

        {/* Copyright */}
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Deepak Gavit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}