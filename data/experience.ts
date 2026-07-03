export type Experience = {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  description: string;
  tech: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    period: "2024 — Present",
    role: "Frontend Engineer",
    company: "Freelance / Contract",
    description:
      "Build AI-powered SaaS dashboards for clients across the US, Australia, and Canada. Ship accessible, high-performance React interfaces and design systems that scale from MVP to production.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React Query", "OpenAI API"],
  },
  {
    period: "2022 — 2024",
    role: "Frontend Developer",
    company: "Agency Projects",
    description:
      "Delivered 20+ responsive marketing sites and web apps. Partnered with designers to translate Figma into pixel-accurate, animated interfaces and improved Lighthouse scores across the board.",
    tech: ["React", "Next.js", "Framer Motion", "Sanity", "Vercel"],
  },
  {
    period: "2021 — 2022",
    role: "Junior Web Developer",
    company: "Early Career",
    description:
      "Started building for the web — HTML, CSS, and JavaScript fundamentals, then React. Learned to ship, get feedback, and iterate quickly on real client work.",
    tech: ["JavaScript", "React", "CSS", "Git"],
  },
];
