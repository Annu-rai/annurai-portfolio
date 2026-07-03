import SectionTitle from "@/components/common/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { EXPERIENCES } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mb-24 scroll-mt-16 lg:mb-36 lg:scroll-mt-24">
      <SectionTitle title="Experience" />
      <Reveal>
        <ol className="group/list flex flex-col gap-3">
          {EXPERIENCES.map((exp) => (
            <li
              key={exp.period + exp.role}
              className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
            >
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-lg lg:group-hover:shadow-slate-950/50" />

              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                {exp.period}
              </header>

              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  {exp.role} ·{" "}
                  <span className="text-slate-400 transition-colors group-hover:text-teal-300">
                    {exp.company}
                  </span>
                </h3>
                <p className="mt-2 text-sm leading-normal text-slate-400">
                  {exp.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
