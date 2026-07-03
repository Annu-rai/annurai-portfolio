export const SITE = {
  name: "Annu Rai",
  role: "Frontend Engineer",
  tagline: "I build AI-powered SaaS applications for the web.",
  intro:
    "I'm a frontend engineer who loves crafting fast, accessible interfaces and turning ambitious product ideas into polished, production-ready experiences.",
  resumeUrl: "/resume.pdf",
  email: "said.moridi@gmail.com",
} as const;

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
