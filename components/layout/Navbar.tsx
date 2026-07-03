"use client";

import { NAV_LINKS } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const active = useActiveSection(NAV_LINKS.map((l) => l.id));

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="mt-16 hidden lg:block" aria-label="In-page navigation">
      <ul className="flex flex-col gap-5">
        {NAV_LINKS.map((link) => {
          const isActive = active === link.id;
          return (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className="group flex items-center gap-4 py-1"
              >
                <span
                  className={cn(
                    "h-px bg-slate-600 transition-all duration-300 group-hover:w-16 group-hover:bg-teal-300 motion-reduce:transition-none",
                    isActive ? "w-16 bg-teal-300" : "w-8"
                  )}
                />
                <span
                  className={cn(
                    "text-xs font-bold uppercase tracking-widest transition-colors duration-300 group-hover:text-teal-200",
                    isActive ? "text-teal-200" : "text-slate-500"
                  )}
                >
                  {link.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
