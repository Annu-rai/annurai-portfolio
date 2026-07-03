import SectionTitle from "@/components/common/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { SKILL_GROUPS } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mb-24 scroll-mt-16 lg:mb-36 lg:scroll-mt-24">
      <SectionTitle title="Skills" />
      <Reveal>
        <div className="space-y-6">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category}>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {group.skills.map(({ name, icon: Icon }) => (
                  <li key={name}>
                    <span className="group flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-800/30 px-3 py-2 text-sm text-slate-300 transition-all hover:-translate-y-0.5 hover:border-teal-300/40 hover:text-teal-300 motion-reduce:hover:translate-y-0">
                      <Icon className="h-4 w-4 text-slate-400 transition-colors group-hover:text-teal-300" />
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
