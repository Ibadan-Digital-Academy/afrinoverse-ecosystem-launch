import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenPartner: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPartner }) => {
  const scrollToEcosystem = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('ecosystem');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-surface pb-section-md overflow-hidden">
      <div className="max-w-max-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        {/* Overline with subtle brand terminal marks */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex items-center gap-gutter-sm mb-6 pt-4"
        >
          <div className="flex items-center gap-1">
            <span className="w-3 h-1.5 bg-secondary-container rounded-xs" />
            <span className="w-3 h-1.5 bg-secondary rounded-xs" />
            <span className="w-3 h-1.5 bg-on-tertiary-container rounded-xs" />
          </div>
          <span className="font-kicker-badge text-kicker-badge text-secondary tracking-widest uppercase">
            AFRICAN INNOVATION ECOSYSTEM • EDUCATE. INNOVATE. EMPOWER.
          </span>
        </motion.div>

        {/* Main Asymmetric Grid: Headline + Copy on left, Stat badge on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-end pb-gutter-xl border-b border-outline-variant/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-8"
          >
            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight max-w-4xl">
              Building Systems for Africa’s Next Generation
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-4 flex flex-col justify-between"
          >
            <p className="font-body-lead text-body-lead text-on-surface-variant max-w-lg mb-8">
              AFRINOVERSE is a future-focused African innovation ecosystem building the talent, content, technology, products and enterprises that will shape Africa’s next chapter.
            </p>

            <div className="flex flex-wrap items-center gap-gutter-md">
              <a
                href="#ecosystem"
                onClick={scrollToEcosystem}
                className="group inline-flex items-center justify-center bg-primary-container text-on-primary font-label-md text-label-md px-7 py-3.5 rounded-lg shadow-sm hover:bg-inverse-surface hover:text-inverse-on-surface transition-all active:scale-[0.98]"
              >
                Explore the Ecosystem
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200" />
              </a>

              <button
                type="button"
                onClick={onOpenPartner}
                className="inline-flex items-center justify-center bg-surface-container-low text-on-surface font-label-md text-label-md px-6 py-3.5 rounded-lg border border-outline-variant/60 hover:border-secondary hover:text-secondary transition-all active:scale-[0.98] cursor-pointer"
              >
                Partner With Us
              </button>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual Showcase: Real African Tech Space Image with Metadata Pill */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mt-8 relative rounded-xl overflow-hidden shadow-sm border border-outline-variant/40 bg-surface-container group"
        >
          <div className="relative h-[380px] md:h-[500px] lg:h-[580px] w-full overflow-hidden">
            <img
              alt="African technologists and founders collaborating in a sunlit modern innovation hub"
              className="w-full h-full object-cover object-center transform group-hover:scale-[1.015] transition-transform duration-700 ease-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqveZWgSL1uX976ttp97HjiUYIHFCsJFYvYXN-WWce4eDrgNbSc6BdtCd5LDUeZhoxFLk4HTUFdX_chsP5oaahkZaTPpLRLi0hXVyAq8a_xITPFwvaqiJW4caiiThfi0BYh4bMBTxufliBAwtanOlF3AAXp3Sz9aRahibSjWybnF3CZH632X8gEuOGmiif94pH2PNOb4-dv4j0cxwxKVvvUVIKFCTPjcgYjqzFCDaSFEEQDI-A7XYqbQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container/85 via-primary-container/20 to-transparent pointer-events-none" />

            {/* Bottom Floating Pill Meta-Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-lg bg-surface/95 backdrop-blur-md border border-outline-variant/30 shadow-lg">
              <div className="flex items-center gap-gutter-md">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary-container animate-pulse shrink-0" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Integrated Tech Infrastructure
                  </span>
                  <span className="hidden sm:inline text-outline-variant">•</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Ibadan
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-left sm:text-right">
                  <span className="font-code-mono text-code-mono text-secondary uppercase font-semibold">
                    ECOSYSTEM SCALE
                  </span>
                  <p className="font-label-md text-label-md text-on-surface font-bold">
                    6 Integrated Engines • 3 Industry Platforms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
