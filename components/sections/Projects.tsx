import Image from "next/image";
import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react";
import SectionTitle from "@/components/common/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { PROJECTS, ONGOING_PROJECTS, CLIENT_SITES, type Project } from "@/data/projects";

function initials(title: string) {
  return title.replace(/[^A-Za-z]/g, "").slice(0, 3).toUpperCase();
}

function Thumbnail({ project }: { project: Project }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-md border border-slate-700/60 bg-gradient-to-br from-slate-800 to-slate-900 transition group-hover:border-teal-300/40">
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(min-width: 640px) 200px, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="grid h-full w-full place-items-center">
          <span className="text-lg font-bold tracking-widest text-slate-600">
            {initials(project.title)}
          </span>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mb-24 scroll-mt-16 lg:mb-36 lg:scroll-mt-24">
      <SectionTitle title="Projects" />

      <Reveal>
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Featured SaaS Platforms
        </h3>
        <ol className="group/list flex flex-col gap-3">
          {PROJECTS.map((project) => (
            <li
              key={project.title}
              className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
            >
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-lg lg:group-hover:shadow-slate-950/50" />

              <div className="z-10 sm:col-span-2">
                <Thumbnail project={project} />
              </div>

              <div className="z-10 sm:col-span-6">
                <h4 className="font-medium leading-snug text-slate-200">
                  <a
                    href={project.liveUrl ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link inline-flex items-baseline gap-1 transition-colors hover:text-teal-300 focus-visible:text-teal-300"
                  >
                    <span className="absolute -inset-x-4 -inset-y-4 hidden lg:block" />
                    <span>{project.title}</span>
                    <IconArrowUpRight
                      size={16}
                      className="shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none"
                    />
                  </a>
                </h4>
                <p className="text-xs font-medium uppercase tracking-wide text-teal-300/80">
                  {project.subtitle}
                </p>

                <p className="mt-2 text-sm leading-normal text-slate-400">
                  {project.description}
                </p>

                <ul className="mt-3 space-y-1.5">
                  {project.contributions.map((c) => (
                    <li key={c} className="flex gap-2 text-sm text-slate-400">
                      <span className="mt-px shrink-0 text-teal-300">▹</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>

                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-20 mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-teal-300"
                  >
                    <IconBrandGithub size={15} /> Source
                  </a>
                )}

                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
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

      <Reveal delay={0.1}>
        <h3 className="mb-4 mt-14 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Ongoing Projects
        </h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {ONGOING_PROJECTS.map((project) => (
            <li key={project.url}>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-lg border border-slate-800 p-4 transition-colors hover:border-teal-300/40 hover:bg-slate-800/40"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-200 transition-colors group-hover:text-teal-300">
                      {project.name}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-amber-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                      In Progress
                    </span>
                  </span>
                  <IconArrowUpRight
                    size={15}
                    className="shrink-0 text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-300 motion-reduce:transition-none"
                  />
                </div>
                <p className="mt-2 text-sm leading-normal text-slate-400">
                  {project.description}
                </p>
                <p className="mt-3 text-xs text-slate-500">{project.stack}</p>
              </a>
            </li>
          ))}
        </ul>

        <h3 className="mb-4 mt-14 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Client Work · {CLIENT_SITES.length}+ Live Sites
        </h3>
        <ul className="divide-y divide-slate-800/70 overflow-hidden rounded-lg border border-slate-800">
          {CLIENT_SITES.map((site) => (
            <li key={site.url}>
              <a
                href={site.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 px-4 py-3 transition-colors hover:bg-slate-800/40"
              >
                <span className="min-w-0 truncate text-sm font-medium text-slate-300 transition-colors group-hover:text-teal-300">
                  {site.name}
                </span>
                <span className="flex shrink-0 items-center gap-3">
                  <span className="hidden text-xs text-slate-500 sm:inline">
                    {site.platform}
                  </span>
                  <IconArrowUpRight
                    size={15}
                    className="text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-300 motion-reduce:transition-none"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
