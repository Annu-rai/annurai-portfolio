"use client";

import { TypeAnimation } from "react-type-animation";
import { IconFileText } from "@tabler/icons-react";
import Navbar from "@/components/layout/Navbar";
import { SITE } from "@/lib/constants";
import { SOCIALS } from "@/data/social";

export default function Hero() {
  return (
    <header className="flex flex-col lg:sticky lg:top-0 lg:max-h-screen lg:w-[45%] lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          {SITE.name}
        </h1>

        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          <TypeAnimation
            sequence={[
              "Senior Frontend Engineer",
              2000,
              "SaaS Dashboard Architect",
              2000,
              "Multi-Tenant Systems Builder",
              2000,
              "Performance-Obsessed Developer",
              2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            cursor
            className="text-teal-300"
          />
        </h2>

        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          {SITE.tagline}
        </p>

        <a
          href={SITE.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="group mt-6 inline-flex items-center gap-2 rounded-full border border-teal-300/40 bg-teal-300/10 px-6 py-2.5 text-sm font-medium text-teal-300 transition-all hover:-translate-y-0.5 hover:bg-teal-300/20 motion-reduce:hover:translate-y-0"
        >
          <IconFileText
            size={18}
            className="transition-transform group-hover:-rotate-6"
          />
          Resume
        </a>

        <Navbar />
      </div>

      <ul className="mt-8 flex items-center gap-5" aria-label="Social media">
        {SOCIALS.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="block text-slate-400 transition-colors hover:text-teal-300"
            >
              <Icon size={24} stroke={1.5} />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
