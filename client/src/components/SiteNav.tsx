import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export interface NavItem {
  id: string;
  label: string;
}

interface SiteNavProps {
  items: NavItem[];
  /** id of the element at the top of the page (the hero) */
  topId: string;
}

export default function SiteNav({ items, topId }: SiteNavProps) {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 40, restDelta: 0.001 });

  // Highlight the section currently crossing the middle of the viewport.
  useEffect(() => {
    const targets = [topId, ...items.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id === topId ? null : entry.target.id);
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items, topId]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        solid ? 'bg-background/85 backdrop-blur-md border-border' : 'bg-transparent border-transparent'
      }`}
    >
      <nav aria-label="Primary" className="container">
        <div className="flex items-center justify-between h-16">
          <a
            href={`#${topId}`}
            aria-label="Chenoa Nussberger — back to top"
            className="font-display font-bold text-xl tracking-tight"
            onClick={() => setOpen(false)}
          >
            <span className="text-primary">C</span>N
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {items.map((item, i) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`group relative flex items-baseline gap-2 py-2 font-mono text-xs tracking-[0.15em] uppercase transition-colors duration-150 hover:text-foreground ${
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    <span className="text-primary text-[10px]">0{i + 1}</span>
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-300 group-hover:w-full ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            className="md:hidden -mr-2 flex h-11 w-11 items-center justify-center text-foreground"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-border"
          >
            <ul className="container py-2">
              {items.map((item, i) => (
                <li key={item.id} className="border-b border-border last:border-b-0">
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === item.id ? 'true' : undefined}
                    className={`flex items-baseline gap-4 py-4 font-display text-2xl font-bold ${
                      active === item.id ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    <span className="font-mono text-xs font-normal text-primary">0{i + 1}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reading progress */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-primary"
        style={{ scaleX: progress }}
      />
    </header>
  );
}
