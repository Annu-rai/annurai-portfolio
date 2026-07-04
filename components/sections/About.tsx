import SectionTitle from "@/components/common/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import { SITE, FOCUS_AREAS } from "@/lib/constants";

const STATS = [
  { to: 20, suffix: "+", label: "Production Sites" },
  { to: 3, suffix: "", label: "SaaS Platforms" },
  { to: 3, suffix: "", label: "Countries Served" },
];

export default function About() {
  return (
    <section id="about" className="mb-24 scroll-mt-16 lg:mb-36 lg:scroll-mt-24">
      <SectionTitle title="About" />
      <Reveal>
        <div className="space-y-4 leading-relaxed text-slate-400">
          <p>{SITE.intro}</p>
          <p>
            I&apos;ve delivered{" "}
            <span className="font-medium text-slate-200">
              20+ production websites
            </span>{" "}
            and architected{" "}
            <span className="font-medium text-slate-200">
              multi-tenant SaaS dashboards
            </span>{" "}
            for clients across the{" "}
            <span className="font-medium text-teal-300">US</span>,{" "}
            <span className="font-medium text-teal-300">Australia</span>, and{" "}
            <span className="font-medium text-teal-300">Canada</span> — with a
            focus on RBAC, performance, and clean, scalable architecture.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
            Focus Areas
          </h3>
          <ul className="flex flex-wrap gap-2">
            {FOCUS_AREAS.map((area) => (
              <li
                key={area}
                className="rounded-full border border-teal-300/20 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <dl className="mt-10 grid grid-cols-3 gap-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-slate-800 bg-slate-800/30 p-4 text-center transition-colors hover:border-teal-300/40"
            >
              <dd className="text-2xl font-bold text-teal-300 sm:text-3xl">
                <CountUp to={s.to} suffix={s.suffix} />
              </dd>
              <dt className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
