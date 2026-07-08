export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A modern developer portfolio built with Next.js, GSAP, Tailwind CSS, and TypeScript featuring smooth animations and responsive design.",
    image: "/projects/portfolio.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind", "GSAP"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://portfolio.vercel.app",
    featured: true,
  },
  {
    title: "E-Commerce Store",
    description:
      "Full-stack e-commerce platform with authentication, cart, payment integration, and admin dashboard.",
    image: "/projects/ecommerce.png",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce.vercel.app",
  },
  {
    title: "Task Manager",
    description:
      "A productivity app for organizing tasks with drag-and-drop functionality and authentication.",
    image: "/projects/taskmanager.png",
    technologies: ["Next.js", "Prisma", "PostgreSQL"],
    github: "https://github.com/yourusername/taskmanager",
    live: "https://taskmanager.vercel.app",
  },
];