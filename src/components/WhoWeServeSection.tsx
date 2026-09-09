import React from 'react';
import {motion} from 'motion/react';
import {ArrowUpRight} from 'lucide-react';
import {STAKEHOLDERS_DATA} from '../data/afrinoverseData';

interface WhoWeServeSectionProps {
  onOpenPartner: (track: string) => void;
}

export const WhoWeServeSection: React.FC<WhoWeServeSectionProps> = ({onOpenPartner}) => {
  return (
    <section id="who-we-serve" className="w-full bg-surface py-section-md scroll-mt-12">
      <div className="max-w-max-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        {/* Section Heading */}
        <motion.div
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-60px'}}
          transition={{duration: 0.5}}
          className="max-w-3xl mb-12"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
            <span className="font-kicker-badge text-kicker-badge text-secondary tracking-widest uppercase">
              CONSTITUENCY MATRIX
            </span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mb-3">
            Built for the People Building Africa.
          </h2>
          <p className="font-body-lead text-body-lead text-on-surface-variant">
            We work across the entire continental value chain to bridge institutional capabilities
            with on-the-ground builders:
          </p>
        </motion.div>

        {/* 8 Stakeholders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAKEHOLDERS_DATA.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-40px'}}
              transition={{duration: 0.4, delay: idx * 0.05}}
              onClick={() => onOpenPartner(`Constituency: ${item.title}`)}
              className="group p-6 rounded-lg bg-surface-container-lowest border border-outline-variant/40 hover:border-secondary transition-all duration-300 shadow-xs hover:shadow-sm cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-code-mono text-code-mono text-secondary font-bold">
                    {item.number}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-on-surface-variant group-hover:text-secondary transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-60 group-hover:opacity-100" />
                </div>

                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-outline-variant/20">
                <span className="text-[11px] font-label-sm uppercase text-secondary font-medium tracking-wide">
                  Collaborate on {item.title.split(' ')[0]}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
