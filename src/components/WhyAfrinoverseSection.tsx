import React, { useState } from 'react';
import { motion } from 'motion/react';
import { WHY_DOMAINS } from '../data/afrinoverseData';

export const WhyAfrinoverseSection: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<number | null>(null);

  const pillars = [
    {
      kicker: '01 • INTEGRATION',
      title: 'Education & Publishing',
      summary: 'Connecting high-rigor digital skills with accredited curriculum.'
    },
    {
      kicker: '02 • EXECUTION',
      title: 'Software & Platforms',
      summary: 'Delivering production enterprise code for mission-critical industries.'
    },
    {
      kicker: '03 • SUSTAINABILITY',
      title: 'Enterprise Growth',
      summary: 'Securing institutional adoption, commercial revenue, and venture longevity.'
    }
  ];

  return (
    <section id="about" className="w-full bg-surface py-section-md scroll-mt-12">
      <div className="max-w-max-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-start pb-12 border-b border-outline-variant/30">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
              <span className="font-kicker-badge text-kicker-badge text-secondary uppercase tracking-widest">
                SYSTEMIC ADVANTAGE
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              Why AFRINOVERSE
            </h2>
            <p className="font-display-hero-mobile text-display-hero-mobile text-secondary font-bold leading-none">
              We don’t build in silos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <p className="font-body-lead text-body-lead text-on-surface-variant leading-relaxed mb-6">
              We connect education, publishing, technology, enterprise, innovation and partnerships so that talent, ideas and opportunities can move from learning to creation, from creation to enterprise, and from enterprise to impact. Our ecosystem brings different capabilities together to build solutions designed for African realities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="p-4 bg-surface-container-low rounded border border-outline-variant/30 hover:border-secondary/40 transition-colors"
                >
                  <span className="font-kicker-badge text-kicker-badge text-secondary block mb-1">
                    {pillar.kicker}
                  </span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold block mb-1">
                    {pillar.title}
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {pillar.summary}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Ecosystem Interlocking Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-10 text-center"
        >
          {WHY_DOMAINS.map((domain, index) => {
            const isHovered = selectedDomain === index;

            return (
              <div
                key={domain.number}
                onMouseEnter={() => setSelectedDomain(index)}
                onMouseLeave={() => setSelectedDomain(null)}
                className={`p-6 bg-surface-container-lowest rounded-lg border transition-all duration-300 shadow-xs cursor-pointer ${
                  isHovered
                    ? 'border-secondary shadow-md -translate-y-1 bg-surface-container-low/40'
                    : 'border-outline-variant/30 hover:border-outline-variant'
                }`}
              >
                <span
                  className={`font-code-mono text-code-mono font-bold block mb-2 transition-colors ${
                    domain.accent
                  }`}
                >
                  {domain.number}
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface block">
                  {domain.title}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1 block">
                  {domain.role}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
