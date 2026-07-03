import SectionTitle from "@/components/common/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import { SITE } from "@/lib/constants";

const STATS = [
  { to: 20, suffix: "+", label: "Websites Shipped" },
  { to: 5, suffix: "", label: "SaaS Projects" },
  { to: 3, suffix: "+", label: "Years Experience" },
];

export default function About() {
  return (
    <section id="about" className="mb-24 scroll-mt-16 lg:mb-36 lg:scroll-mt-24">
      <SectionTitle title="About" />
      <Reveal>
        <div className="space-y-4 leading-relaxed text-slate-400">
          <p>{SITE.intro}</p>
          <p>
            These days I focus on building{" "}
            <span className="font-medium text-slate-200">
              AI-powered SaaS products
            </span>{" "}
            — designing interfaces that stay fast, accessible, and genuinely
            enjoyable to use. I&apos;ve worked with clients across the{" "}
            <span className="font-medium text-teal-300">US</span>,{" "}
            <span className="font-medium text-teal-300">Australia</span>, and{" "}
            <span className="font-medium text-teal-300">Canada</span>.
          </p>
          <p>
            When I&apos;m not shipping, I&apos;m exploring new tools, refining
            design systems, and chasing that last millisecond of performance.
          </p>
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
