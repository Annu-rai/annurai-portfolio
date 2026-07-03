export type Project = {
  title: string;
  description: string;
  tech: string[];
  /** Screenshot in /public/projects — e.g. "/projects/dashboard.png". Optional; a gradient placeholder shows if omitted. */
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    title: "AI SaaS Dashboard",
    description:
      "A multi-tenant analytics dashboard with AI-generated insights, streaming responses, and a polished command palette. Built for a US-based client and used daily by their team.",
    tech: ["Next.js", "TypeScript", "OpenAI", "Tailwind", "Postgres"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    title: "Content Studio",
    description:
      "An AI writing workspace with real-time collaboration, version history, and one-click publishing. Shipped for an Australian startup from concept to launch.",
    tech: ["React", "Next.js", "tRPC", "Prisma", "Framer Motion"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    title: "Booking Platform",
    description:
      "A scheduling and payments product for a Canadian services business — calendar sync, Stripe checkout, and automated reminders.",
    tech: ["Next.js", "Stripe", "Tailwind", "Supabase"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
];
