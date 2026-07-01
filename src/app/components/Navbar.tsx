"use client";

import { useState } from "react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
        <h1 className="text-xl font-bold tracking-wide">
          &lt;Deepak Gavit&gt;
        </h1>

        {/* Desktop */}
        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {open && (
        <div className="mx-4 mt-2 rounded-2xl border border-white/10 bg-zinc-900 p-4 backdrop-blur-lg md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-3"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}