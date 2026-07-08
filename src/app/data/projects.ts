export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured?: boolean;
};

export const projects = [
  {
    title: "Portfolio Website",
    description: "...",
    image: "/projects/portfolio.png",
    technologies: ["Next.js", "React", "GSAP"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "E-Commerce",
    description: "...",
    image: "/projects/ecommerce.png",
    technologies: ["React", "Node.js"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Task Manager",
    description: "...",
    image: "/projects/taskmanager.png",
    technologies: ["Next.js", "Prisma"],
    github: "#",
    live: "#",
    featured: false,
  },
];