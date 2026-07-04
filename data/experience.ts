export type Experience = {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  description: string;
  tech: string[];
};

// NOTE: date ranges below are placeholders — update them to your real timeline.
export const EXPERIENCES: Experience[] = [
  {
    period: "2023 — Present",
    role: "Senior Frontend Engineer",
    company: "SaaS Platforms — IMONET · TRADEDEQ · MarketinQ",
    description:
      "Architect and build multi-tenant SaaS dashboards with role-based access control, real-time KPI analytics, and secure authentication. Own the frontend architecture end to end and optimize rendering with SSR / SSG / ISR.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
  {
    period: "2021 — 2023",
    role: "Frontend Engineer",
    company: "International Client Websites — US · AU · CA",
    description:
      "Delivered 20+ production websites across real estate, healthcare, construction, and e-commerce. Focused on Core Web Vitals, SEO, and responsive UI systems, with WooCommerce & Shopify integrations.",
    tech: ["WordPress", "Webflow", "Shopify", "JavaScript", "SEO"],
  },
];
