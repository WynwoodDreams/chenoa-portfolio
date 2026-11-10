/*
Design Philosophy: Swiss Minimalism with Technical Precision
- Numbered sections on a strict grid, hairline rules, one accent colour
- Display type in Space Grotesk, labels and metadata in IBM Plex Mono
- Motion is supportive: scroll reveals, filter transitions, a live hero canvas
  (all of it stands down for prefers-reduced-motion)
*/

import { AnimatePresence, MotionConfig, motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, type ReactNode } from 'react';
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import { toast } from 'sonner';
import NeuralNetworkCanvas from '@/components/NeuralNetworkCanvas';
import SiteNav, { type NavItem } from '@/components/SiteNav';
import {
  categories,
  profile,
  projects,
  research,
  skills,
  timeline,
  type Project,
} from '@/data/portfolio';

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const NAV_ITEMS: NavItem[] = [
  { id: 'work', label: 'Work' },
  { id: 'research', label: 'Research' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({
  index,
  eyebrow,
  title,
  aside,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <Reveal className="mb-10 md:mb-14 flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="eyebrow mb-3">
          <span className="text-muted-foreground">{index}</span>
          <span className="mx-3 inline-block h-px w-8 bg-primary align-middle" />
          {eyebrow}
        </p>
        <h2 className="text-4xl md:text-5xl leading-[1.05]">{title}</h2>
      </div>
      {aside}
    </Reveal>
  );
}

/** Decorative attention-map motif for the featured project card. */
function AttentionMatrix() {
  const size = 9;
  return (
    <div
      aria-hidden="true"
      className="grid gap-1"
      style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: size * size }, (_, i) => {
        const row = Math.floor(i / size);
        const col = i % size;
        const diagonal = Math.max(0, 1 - Math.abs(row - col) / 3);
        const scatter = ((row * 7 + col * 13) % 5) / 22;
        return (
          <span
            key={i}
            className="aspect-square bg-primary transition-opacity duration-500"
            style={{ opacity: Math.min(1, 0.06 + diagonal * 0.7 + scatter) }}
          />
        );
      })}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: EASE }}
      className={`group relative ${project.featured ? 'md:col-span-2' : ''}`}
    >
      <div className="relative flex h-full flex-col border border-border bg-card transition-[border-color,transform] duration-300 group-hover:-translate-y-1 group-hover:border-primary/70 group-focus-within:border-primary/70">
        <span className="absolute left-0 top-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />

        <div className={`flex flex-1 gap-8 p-6 md:p-7 ${project.featured ? 'md:items-center' : ''}`}>
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between gap-4">
              <span className="outline-text font-display text-5xl font-bold leading-none text-primary/60 transition-colors duration-300 group-hover:text-primary">
                {project.id}
              </span>
              <div className="flex flex-wrap justify-end gap-2">
                {project.featured && (
                  <span className="bg-primary px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-primary-foreground">
                    Featured
                  </span>
                )}
                <span className="bg-primary/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-primary">
                  {project.category}
                </span>
              </div>
            </div>

            <h3 className={`mb-3 ${project.featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
              {project.title}
            </h3>
            <p className="max-w-prose text-[15px] leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="border border-border px-2 py-1 font-mono text-xs text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {project.featured && (
            <div className="hidden w-44 shrink-0 opacity-70 transition-opacity duration-300 group-hover:opacity-100 sm:block lg:w-52">
              <AttentionMatrix />
            </div>
          )}
        </div>

        {(project.github || project.demo) && (
          <div className="flex items-center gap-6 border-t border-border px-6 py-3 md:px-7">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} — source code on GitHub`}
                className="card-link"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} — live demo`}
                className="card-link"
              >
                Live demo
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [copied, setCopied] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);
  const countFor = (cat: string) =>
    cat === 'all' ? projects.length : projects.filter((p) => p.category === cat).length;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast.success('Email copied to clipboard');
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Could not copy — the address is ' + profile.email);
    }
  };

  const [current, previous] = timeline;

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background text-foreground overflow-x-clip">
        <a href="#work" className="skip-link">
          Skip to content
        </a>

        <SiteNav items={NAV_ITEMS} topId="top" />

        <main>
          {/* ───────────── Hero ───────────── */}
          <section
            id="top"
            ref={heroRef}
            className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-28"
          >
            <div aria-hidden="true" className="absolute inset-0 bg-grid-pattern hero-grid-mask" />
            <NeuralNetworkCanvas />
            {/* Keep copy legible over the canvas and blend into the next section */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/10 lg:via-background/60 lg:to-transparent"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
            />

            <motion.div style={{ opacity: heroOpacity, y: heroY }} className="container relative z-10">
              <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-12">
                <motion.div
                  className="col-span-12 lg:col-span-7"
                  initial="hidden"
                  animate="visible"
                  variants={stagger}
                >
                  <motion.p variants={fadeInUp} className="eyebrow mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-primary" />
                    Hello, I'm
                  </motion.p>

                  <motion.h1
                    variants={fadeInUp}
                    className="mb-8 text-[clamp(2.75rem,11vw,6.5rem)] leading-[0.92] tracking-[-0.04em]"
                  >
                    {profile.firstName}
                    <br />
                    <span className="text-primary">{profile.lastName}</span>
                  </motion.h1>

                  <motion.div variants={fadeInUp} className="mb-10 max-w-xl border-l-2 border-primary pl-6">
                    <p className="mb-3 font-mono text-sm uppercase tracking-[0.18em] text-foreground">
                      {profile.role}
                    </p>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Building the next generation of intelligent systems. Focused on{' '}
                      <span className="text-foreground">large language models</span>,{' '}
                      <span className="text-foreground">neural architectures</span>, and{' '}
                      <span className="text-foreground">human-AI interaction</span>. Currently
                      pursuing my M.S. in AI at Stanford.
                    </p>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
                    <a href="#work" className="btn btn-primary group">
                      View my work
                      <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                    </a>
                    <a href="#contact" className="btn btn-outline">
                      Get in touch
                    </a>
                  </motion.div>
                </motion.div>

                {/* At-a-glance panel */}
                <motion.aside
                  aria-label="At a glance"
                  className="col-span-12 sm:col-span-9 md:col-span-7 lg:col-span-5"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
                >
                  <div className="relative border border-border bg-card/70 backdrop-blur-md">
                    <span className="corner corner-tl" />
                    <span className="corner corner-br" />

                    <div className="flex items-center justify-between border-b border-border px-5 py-3">
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        At a glance
                      </span>
                      <span className="relative flex h-2 w-2" aria-hidden="true">
                        <span className="absolute inline-flex h-full w-full animate-ping bg-primary opacity-60 motion-reduce:hidden" />
                        <span className="relative inline-flex h-2 w-2 bg-primary" />
                      </span>
                    </div>

                    <dl className="divide-y divide-border">
                      {[
                        { term: 'Now', main: current.title, sub: current.org },
                        { term: 'Before', main: previous.title, sub: previous.org },
                        { term: 'Focus', main: profile.focus.join(' · ') },
                      ].map((row) => (
                        <div key={row.term} className="grid grid-cols-[4.5rem_1fr] gap-4 px-5 py-4">
                          <dt className="pt-0.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                            {row.term}
                          </dt>
                          <dd className="text-[15px] leading-snug">
                            {row.main}
                            {row.sub && (
                              <span className="mt-0.5 block text-sm text-muted-foreground">{row.sub}</span>
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <div className="grid grid-cols-2 divide-x divide-border border-t border-border">
                      {[
                        { value: projects.length, label: 'Projects', href: '#work' },
                        { value: research.length, label: 'Publications', href: '#research' },
                      ].map((stat) => (
                        <a
                          key={stat.label}
                          href={stat.href}
                          className="group flex items-baseline gap-3 px-5 py-4 transition-colors hover:bg-primary/5"
                        >
                          <span className="font-display text-3xl font-bold tabular-nums transition-colors group-hover:text-primary">
                            {String(stat.value).padStart(2, '0')}
                          </span>
                          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                            {stat.label}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.aside>
              </div>
            </motion.div>

            <a
              href="#work"
              aria-label="Scroll to work"
              className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-primary md:flex"
            >
              Scroll
              <span className="scroll-cue" aria-hidden="true" />
            </a>
          </section>

          {/* ───────────── Work ───────────── */}
          <section id="work" className="section">
            <div className="container">
              <SectionHeader
                index="01"
                eyebrow="Portfolio"
                title="Selected Work"
                aside={
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground" aria-live="polite">
                    <span className="text-foreground">{String(filteredProjects.length).padStart(2, '0')}</span>
                    {' / '}
                    {String(projects.length).padStart(2, '0')} projects
                  </p>
                }
              />

              <Reveal className="mb-10 -mx-4 overflow-x-auto px-4 no-scrollbar sm:mx-0 sm:px-0">
                <div role="group" aria-label="Filter projects by category" className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
                  {categories.map((cat) => {
                    const isActive = activeFilter === cat;
                    return (
                      <button
                        key={cat}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setActiveFilter(cat)}
                        className={`flex min-h-10 items-center gap-2 border px-4 font-mono text-xs uppercase tracking-wider transition-colors duration-150 ${
                          isActive
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border text-muted-foreground hover:border-primary hover:text-foreground'
                        }`}
                      >
                        {cat}
                        <span className={`text-[10px] ${isActive ? 'opacity-70' : 'text-primary'}`}>
                          {countFor(cat)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </Reveal>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                <AnimatePresence mode="popLayout" initial={false}>
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </section>

          {/* ───────────── Research ───────────── */}
          <section id="research" className="section border-y border-border bg-card">
            <div className="container">
              <SectionHeader index="02" eyebrow="Publications" title="Research" />

              <motion.ol
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={stagger}
              >
                {research.map((paper) => (
                  <motion.li
                    key={paper.title}
                    variants={fadeInUp}
                    className="group relative grid grid-cols-1 gap-x-8 gap-y-2 border-b border-border py-7 transition-colors duration-200 hover:bg-background/60 md:grid-cols-[7rem_1fr_auto] md:items-baseline md:px-4"
                  >
                    <span className="absolute left-0 top-0 hidden h-full w-0.5 origin-top scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100 md:block" />
                    <span className="font-mono text-sm tabular-nums text-primary md:text-base">
                      {paper.year}
                    </span>
                    <div>
                      <h3 className="text-xl leading-snug md:text-2xl">{paper.title}</h3>
                      <p className="mt-2 text-[15px] text-muted-foreground">{paper.venue}</p>
                    </div>
                    <span className="w-fit border border-border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {paper.type}
                    </span>
                  </motion.li>
                ))}
              </motion.ol>
            </div>
          </section>

          {/* ───────────── About ───────────── */}
          <section id="about" className="section">
            <div className="container">
              <SectionHeader
                index="03"
                eyebrow="About"
                title={
                  <>
                    Building AI that
                    <br />
                    <span className="text-primary">serves humanity</span>
                  </>
                }
              />

              <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <Reveal className="mb-14 max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
                    <p>
                      I'm an AI researcher and engineer passionate about pushing the boundaries of
                      what's possible with machine learning. My work spans from theoretical research
                      on transformer architectures to practical applications in healthcare and
                      education.
                    </p>
                    <p>
                      When I'm not training models, I enjoy contributing to open-source AI projects,
                      writing about ML interpretability, and mentoring students interested in AI
                      research. I believe AI should be developed responsibly, with a focus on safety
                      and accessibility.
                    </p>
                  </Reveal>

                  <Reveal>
                    <h3 className="subheading">Technical Skills</h3>
                    <ul className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
                      {skills.map((skill, index) => (
                        <li key={skill.name}>
                          <div className="mb-2.5 flex items-center justify-between gap-3">
                            <span className="flex items-center gap-3 text-[15px] font-medium">
                              <skill.icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                              {skill.name}
                            </span>
                            <span className="font-mono text-xs tabular-nums text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <div
                            role="progressbar"
                            aria-label={skill.name}
                            aria-valuenow={skill.level}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            className="h-1 overflow-hidden bg-border"
                          >
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.15 + index * 0.08, ease: EASE }}
                              className="h-full bg-primary"
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>

                <div className="lg:col-span-5">
                  <Reveal>
                    <h3 className="subheading">Journey</h3>
                  </Reveal>

                  <motion.ol
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={stagger}
                    className="relative space-y-6 before:absolute before:bottom-2 before:left-[5px] before:top-2 before:w-px before:bg-border"
                  >
                    {timeline.map((item, index) => (
                      <motion.li key={item.title} variants={fadeInUp} className="relative pl-9">
                        <span
                          aria-hidden="true"
                          className={`absolute left-0 top-1.5 h-[11px] w-[11px] border border-primary ${
                            index === 0 ? 'bg-primary' : 'bg-background'
                          }`}
                        />
                        <p className="font-mono text-xs uppercase tracking-wider text-primary">
                          {item.year}
                        </p>
                        <h4 className="mt-2 text-xl">{item.title}</h4>
                        <p className="mt-0.5 text-[15px] text-foreground/80">{item.org}</p>
                        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </motion.li>
                    ))}
                  </motion.ol>
                </div>
              </div>
            </div>
          </section>

          {/* ───────────── Contact ───────────── */}
          <section id="contact" className="section relative overflow-hidden border-t border-border bg-card">
            <div aria-hidden="true" className="absolute inset-0 bg-dot-pattern contact-mask" />
            <div className="container relative">
              <SectionHeader
                index="04"
                eyebrow="Contact"
                title={
                  <>
                    Let's build
                    <br />
                    <span className="text-primary">something amazing</span>
                  </>
                }
              />

              <Reveal className="mb-12 max-w-2xl">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Interested in collaborating on research, discussing AI projects, or exploring
                  opportunities? I'm always excited to connect with fellow researchers, engineers,
                  and anyone passionate about advancing AI.
                </p>
              </Reveal>

              <Reveal className="mb-6 border border-border bg-background">
                <div className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between md:p-8">
                  <div className="min-w-0">
                    <p className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      <Mail className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                      Email
                    </p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="link-underline font-display text-xl font-bold [overflow-wrap:anywhere] transition-colors hover:text-primary sm:text-2xl md:text-3xl"
                    >
                      {profile.email}
                    </a>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-3">
                    <button type="button" onClick={copyEmail} className="btn btn-outline">
                      {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                    <a href={`mailto:${profile.email}`} className="btn btn-primary">
                      Send email
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  { label: 'GitHub', icon: Github, ...profile.github },
                  { label: 'LinkedIn', icon: Linkedin, ...profile.linkedin },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 border border-border bg-background p-6 transition-colors duration-200 hover:border-primary/70"
                  >
                    <link.icon className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                    <div className="min-w-0">
                      <div className="mb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        {link.label}
                      </div>
                      <div className="truncate font-mono text-sm transition-colors group-hover:text-primary">
                        {link.handle}
                      </div>
                    </div>
                    <ArrowUpRight
                      className="ml-auto h-5 w-5 shrink-0 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </Reveal>
            </div>
          </section>
        </main>

        {/* ───────────── Footer ───────────── */}
        <footer className="border-t border-border py-8">
          <div className="container flex flex-col items-center justify-between gap-5 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {profile.firstName} {profile.lastName}. Crafted with precision.
            </p>
            <div className="flex items-center gap-1">
              <a href={profile.github.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-link">
                <Github className="h-5 w-5" />
              </a>
              <a href={profile.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-link">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="icon-link">
                <Mail className="h-5 w-5" />
              </a>
              <span className="mx-3 h-5 w-px bg-border" aria-hidden="true" />
              <a href="#top" className="card-link">
                Top
                <ArrowUp className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
