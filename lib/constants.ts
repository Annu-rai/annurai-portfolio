export const SITE = {
  name: "Annu Rai",
  role: "Senior Frontend Engineer",
  subtitle: "SaaS Dashboard Architect",
  tagline:
    "I design and build scalable SaaS platforms, analytics dashboards, and high-performance frontend systems.",
  intro:
    "I design and build scalable SaaS platforms, analytics dashboards, and high-performance frontend systems using modern frameworks and optimized rendering strategies.",
  resumeUrl: "/resume.pdf",
  email: "said.moridi@gmail.com",
} as const;

export const FOCUS_AREAS = [
  "SaaS Dashboard Architecture",
  "Multi-Tenant Systems",
  "Role-Based Access Control (RBAC)",
  "High Performance UI",
  "SEO & Core Web Vitals Optimization",
] as const;

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
