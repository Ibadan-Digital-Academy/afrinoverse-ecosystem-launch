import React from 'react';
import {motion} from 'motion/react';

export const ExperienceSection: React.FC = () => {
  const metrics = [
    {
      value: '100%',
      accentClass: 'bg-secondary-container',
      title: 'African Operational Context',
      desc: 'Solutions designed natively for low-latency, resilient regional environments.',
    },
    {
      value: 'Multi-Hub',
      accentClass: 'bg-secondary',
      title: 'Ecosystem Density',
      desc: 'Connecting West, East, and Southern African developer communities.',
    },
    {
      value: 'Enterprise',
      accentClass: 'bg-on-tertiary-container',
      title: 'Real Industry Use',
      desc: 'Production platforms deployed in golf clubs, apparel hubs, and schools.',
    },
    {
      value: 'End-to-End',
      accentClass: 'bg-secondary-container',
      title: 'Pipeline Architecture',
      desc: 'Seamless path from classroom skills to venture spinout funding.',
    },
  ];

  return (
    <section className="w-full bg-surface-container-low py-section-md border-t border-b border-outline-variant/30">
      <div className="max-w-max-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
          <motion.div
            initial={{opacity: 0, y: 16}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-60px'}}
            transition={{duration: 0.5}}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
              <span className="font-kicker-badge text-kicker-badge text-secondary uppercase tracking-widest">
                PROVEN FOUNDATION
              </span>
            </div>

            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              Building From Experience
            </h2>

            <p className="font-body-lead text-body-lead text-on-surface-variant">
              AFRINOVERSE builds on practical experience across digital skills development,
              education, publishing, technology and enterprise to create platforms, products and
              programmes for Africa's next generation.
            </p>

            <blockquote className="border-l-4 border-secondary pl-5 py-2">
              <p className="font-headline-sm text-headline-sm text-on-surface italic font-normal">
                “We believe sustainable transformation happens when people, institutions, technology
                and opportunity work together.”
              </p>
            </blockquote>
          </motion.div>

          {/* Metric & Institutional Indicators */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {metrics.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-40px'}}
                transition={{duration: 0.4, delay: idx * 0.08}}
                className="p-6 rounded-lg bg-surface-container-lowest border border-outline-variant/30 shadow-sm space-y-2 hover:border-secondary/40 transition-colors"
              >
                <span className="font-display-hero-mobile text-display-hero-mobile text-on-surface font-extrabold block">
                  {m.value}
                </span>
                <div className={`h-0.5 w-10 ${m.accentClass} mb-2`} />
                <span className="font-label-md text-label-md text-on-surface font-semibold block">
                  {m.title}
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
