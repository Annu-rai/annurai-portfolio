import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiFigma,
  SiVercel,
  SiFramer,
} from "react-icons/si";

export type Skill = { name: string; icon: IconType };
export type SkillGroup = { category: string; skills: Skill[] };

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: SiNodedotjs },
    ],
  },
  {
    category: "Styling & Motion",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },
  {
    category: "Data & Tools",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
      { name: "Git", icon: SiGit },
      { name: "Figma", icon: SiFigma },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];
