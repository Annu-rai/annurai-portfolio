export type Project = {
  title: string;
  subtitle: string;
  description: string;
  contributions: string[];
  tech: string[];
  /** Screenshot in /public/projects — e.g. "/projects/imonet.png". Optional; a gradient placeholder shows if omitted. */
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "IMONET",
    subtitle: "Real Estate SaaS Platform",
    description:
      "Real estate SaaS dashboard with multi-tenant branding and analytics modules.",
    contributions: [
      "Designed Role-Based Access Control (RBAC)",
      "Built a multi-tenant branding system",
      "Developed the KPI analytics dashboard",
      "Optimized rendering with SSR / SSG",
    ],
    tech: ["Next.js", "TypeScript", "SSR / SSG"],
    liveUrl: "https://imonet.io/",
  },
  {
    title: "TRADEDEQ",
    subtitle: "Trading Analytics Platform",
    description: "Trading intelligence dashboard for market analysis.",
    contributions: [
      "Built a real-time KPI dashboard",
      "Implemented a dynamic widget system",
      "Designed filterable data tables",
      "Developed protected routes & Context API state management",
      "Created a scalable component architecture",
    ],
    tech: ["Next.js", "React", "TypeScript", "Context API"],
    image: "/projects/tradedeq.png",
    liveUrl: "https://app.tradedeq.com/app",
  },
  {
    title: "MarketinQ",
    subtitle: "Marketing Analytics & Campaign Dashboard",
    description:
      "All-in-one marketing analytics platform powered by FINDEQ, with real-time campaign & performance metrics.",
    contributions: [
      "Built the analytics dashboard UI with real-time campaign metrics",
      "Implemented secure auth (Email/Password & Google) with protected routes",
      "Developed a responsive, data-dense UI with filtering, pagination & REST API integration",
      "Optimized rendering with Next.js SSR / SSG / ISR strategies",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://app.marketinq.io/",
    repoUrl: "https://github.com/Annu-rai",
  },
  {
    title: "NOSTDS",
    subtitle: "Healthcare Verification Platform",
    description:
      "Confidential STD testing & verification directory connecting users to testing centres and labs.",
    contributions: [
      "Conducted a full black-box technical audit — SEO, performance, accessibility & security",
      "Flagged missing HTTP security headers on health-sensitive data and delivered a next.config.js fix",
      "Diagnosed a duplicate page-title bug and scoped JSON-LD structured data for local/health search",
      "Delivered a prioritized (P0–P2) fix list with Jira/Linear-ready tickets",
    ],
    tech: ["Next.js", "App Router", "nginx", "Security Headers"],
    image: "/projects/nostds.png",
    liveUrl: "https://nostds.com/",
  },
];

export type OngoingProject = {
  name: string;
  description: string;
  stack: string;
  url: string;
};

/** Projects currently in active development. */
export const ONGOING_PROJECTS: OngoingProject[] = [
  {
    name: "Eshkon",
    description: "SaaS platform in active development.",
    stack: "Next.js / TypeScript",
    url: "https://eshkon-eta.vercel.app/",
  },
  {
    name: "Assessment Manager",
    description: "Assessment management dashboard with reporting.",
    stack: "Next.js / Vercel",
    url: "https://assessment-manager-five.vercel.app/",
  },
  {
    name: "MarketOracle",
    description: "Market intelligence & analytics frontend.",
    stack: "Next.js / React",
    url: "https://marketoracle-frontend.vercel.app/",
  },
];

export type ClientSite = {
  name: string;
  platform: string;
  url: string;
};

/** 20+ delivered production sites across real estate, healthcare, construction & e-commerce. */
export const CLIENT_SITES: ClientSite[] = [
  { name: "Assessment Manager", platform: "Next.js / Vercel", url: "https://assessment-manager-five.vercel.app/" },
  { name: "Architizer Platform", platform: "Web Platform", url: "https://architizer.founddigitally.au/" },
  { name: "Found Digitally — Real Estate", platform: "Web Platform", url: "https://founddigitally.au/realestate/" },
  { name: "Jaihra Business", platform: "Web Platform", url: "https://founddigitally.au/jaihra/" },
  { name: "Resilient Option", platform: "Webflow", url: "https://www.resilientoption.com/" },
  { name: "Polaris One", platform: "Webflow", url: "https://www.polarisone.com/" },
  { name: "Social Brew", platform: "Shopify", url: "https://socialbrew.us/" },
  { name: "BS Kitchen & Bedroom", platform: "WordPress", url: "https://bskitchenandbedroom.com/" },
  { name: "St Ives Family Dental", platform: "WordPress", url: "https://stivesfamilydental.com.au/" },
  { name: "Saahil Moving Services", platform: "WordPress", url: "https://saahilmovings.com/" },
  { name: "Jodhka Agrovet", platform: "WordPress", url: "https://jodhkaagrovet.com/" },
  { name: "BSP Pattaya", platform: "WordPress", url: "https://bsppattaya.com/" },
  { name: "Bathroom Renovation Platform", platform: "WordPress", url: "https://thewebcrawlers.com/bathrooms/" },
  { name: "Boyle Brothers Energy", platform: "WordPress", url: "https://boylebrothersenergy.com/" },
  { name: "Music AI App", platform: "WordPress", url: "https://musicaiapp.com/" },
  { name: "Adean Law", platform: "WordPress", url: "https://www.adean.law/" },
  { name: "NitPixies", platform: "WordPress", url: "https://nitpixies.com/" },
  { name: "MK Roofing & Siding", platform: "WordPress", url: "https://mk-roofingandsiding.com/" },
  { name: "Baker Bristol Pet Hospital", platform: "WordPress", url: "https://bakerbristolpethospital.com/" },
  { name: "Swift Restoration", platform: "WordPress", url: "https://swiftrestorationcompany.com/" },
  { name: "Seacliff Animal Hospital", platform: "Elementor", url: "https://seacliffanimalhospital.com/" },
  { name: "South Coast Pet Hospital", platform: "Elementor", url: "https://southcoastpethospital.com/" },
  { name: "Brook Ellis Veterinary", platform: "WordPress", url: "https://brookellisvet.com/" },
  { name: "Bryn Mawr Dental Care", platform: "WordPress", url: "https://brynmawrdentalcare.com/" },
  { name: "Milestone Therapy Group", platform: "WordPress", url: "https://milestonetherapygroup.com/" },
  { name: "Hynes Construction", platform: "WordPress", url: "https://hynesconstruction.com/" },
];
