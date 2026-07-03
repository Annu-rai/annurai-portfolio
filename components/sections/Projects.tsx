import Image from "next/image";
import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react";
import SectionTitle from "@/components/common/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { PROJECTS, type Project } from "@/data/projects";

function initials(title: string) {
  return title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
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
                <h3 className="font-medium leading-snug text-slate-200">
                  <a
                    href={project.liveUrl ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link inline-flex items-baseline gap-1 transition-colors hover:text-teal-300 focus-visible:text-teal-300"
                  >
                    {/* Stretched link makes the whole card clickable */}
                    <span className="absolute -inset-x-4 -inset-y-4 hidden lg:block" />
                    <span>{project.title}</span>
                    <IconArrowUpRight
                      size={16}
                      className="shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none"
                    />
                  </a>
                </h3>

                <p className="mt-2 text-sm leading-normal text-slate-400">
                  {project.description}
                </p>

                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-20 mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-teal-300"
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
    </section>
  );
}
