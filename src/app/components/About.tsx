"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-6xl grid gap-16 md:grid-cols-2 items-center">

        {/* Left */}
        <div className="flex justify-center">
  <div className="relative">
    <div className="absolute -inset-2 rounded-3xl bg-cyan-500/20 blur-2xl" />

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
        <div>
          <p className="text-cyan-400 uppercase tracking-widest">
            About Me
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            Building products people enjoy using.
          </h2>

          <p className="mt-6 text-zinc-400 leading-8">
            I'm Deepak Gavit, a Full Stack Developer passionate about
            creating modern web applications with React, Next.js,
            Node.js, and scalable backend technologies.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="rounded-2xl bg-zinc-900 p-5">
              <h3 className="text-3xl font-bold text-cyan-400">10+</h3>
              <p className="text-sm text-zinc-400">Projects</p>
            </div>

            <div className="rounded-2xl bg-zinc-900 p-5">
              <h3 className="text-3xl font-bold text-cyan-400">15+</h3>
              <p className="text-sm text-zinc-400">Technologies</p>
            </div>

            <div className="rounded-2xl bg-zinc-900 p-5">
              <h3 className="text-3xl font-bold text-cyan-400">1000+</h3>
              <p className="text-sm text-zinc-400">Hours Coding</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}