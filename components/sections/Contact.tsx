import { IconMail } from "@tabler/icons-react";
import SectionTitle from "@/components/common/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import WorldMap from "@/components/ui/WorldMap";
import { SITE } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="mb-16 scroll-mt-16 lg:scroll-mt-24">
      <SectionTitle title="Contact" />

      <Reveal>
        <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-teal-300">
          Trusted by teams worldwide
        </h3>
        <p className="mx-auto mt-2 max-w-md text-center text-sm text-slate-400">
          I&apos;ve partnered with founders and product teams across the US,
          Canada, and Australia.
        </p>
        <div className="mt-6">
          <WorldMap />
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-slate-400">
            Have a project in mind or just want to say hi? My inbox is always
            open — I&apos;ll do my best to get back to you.
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-teal-300/40 bg-teal-300/10 px-7 py-3 text-sm font-medium text-teal-300 transition-all hover:-translate-y-0.5 hover:bg-teal-300/20 motion-reduce:hover:translate-y-0"
          >
            <IconMail size={18} className="transition-transform group-hover:-rotate-12" />
            Say Hello
          </a>
        </div>
      </Reveal>

      <footer className="mt-20 text-center text-xs text-slate-600">
        Built with Next.js &amp; Tailwind CSS · Designed &amp; coded by{" "}
        {SITE.name}.
      </footer>
    </section>
  );
}
