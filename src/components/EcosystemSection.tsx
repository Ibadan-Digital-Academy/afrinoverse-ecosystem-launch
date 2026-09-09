import React, {useState} from 'react';
import {motion} from 'motion/react';
import {ArrowRight, Check} from 'lucide-react';
import {ENGINES_DATA} from '../data/afrinoverseData';
import {EngineItem} from '../types';

interface EcosystemSectionProps {
  onOpenPartner: (track: string) => void;
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({onOpenPartner}) => {
  const [activeEngineId, setActiveEngineId] = useState<string | null>(null);

  const getEngineTopBorder = (borderColor: string) => {
    switch (borderColor) {
      case 'border-secondary-container':
        return 'border-secondary-container';
      case 'border-secondary':
        return 'border-secondary';
      case 'border-on-tertiary-container':
        return 'border-on-tertiary-container';
      default:
        return 'border-secondary';
    }
  };

  return (
    <section
      id="ecosystem"
      className="w-full bg-surface-container-low py-section-md border-t border-b border-outline-variant/30 scroll-mt-12"
    >
      <div className="max-w-max-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter-lg mb-14">
          <motion.div
            initial={{opacity: 0, y: 16}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-60px'}}
            transition={{duration: 0.5}}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-secondary-container" />
              <span className="font-kicker-badge text-kicker-badge text-secondary uppercase tracking-widest">
                ONE ECOSYSTEM. MANY ENGINES.
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              We connect the pieces that help Africa's next generation learn, create, innovate and
              grow.
            </h2>
          </motion.div>

          <motion.p
            initial={{opacity: 0, y: 16}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-60px'}}
            transition={{duration: 0.5, delay: 0.1}}
            className="font-body-md text-body-md text-on-surface-variant max-w-md"
          >
            We connect education, publishing, technology, innovation and enterprise to create
            practical capabilities and opportunities for Africa's next generation.
          </motion.p>
        </div>

        {/* 6-Engine Connected Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGINES_DATA.map((engine: EngineItem, index: number) => {
            const isHovered = activeEngineId === engine.id;

            return (
              <motion.div
                key={engine.id}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-40px'}}
                transition={{duration: 0.4, delay: index * 0.08}}
                onMouseEnter={() => setActiveEngineId(engine.id)}
                onMouseLeave={() => setActiveEngineId(null)}
                className={`group relative bg-surface-container-lowest p-8 rounded-lg border transition-all duration-300 shadow-xs flex flex-col justify-between cursor-pointer ${
                  isHovered
                    ? 'border-secondary shadow-md translate-y-[-3px]'
                    : 'border-outline-variant/40 hover:border-secondary/60'
                }`}
                onClick={() => onOpenPartner(`${engine.title} (${engine.category})`)}
              >
                <div>
                  {/* Top colored accent line as in Stitch design */}
                  <div
                    className={`border-t-2 ${getEngineTopBorder(
                      engine.borderColor,
                    )} -mt-8 -mx-8 mb-6 pt-6 px-8 flex items-center justify-between transition-colors`}
                  >
                    <span className="font-code-mono text-code-mono text-secondary font-bold tracking-wider">
                      {engine.number}
                    </span>
                    <span
                      className={`font-kicker-badge text-kicker-badge px-2.5 py-1 rounded transition-colors ${
                        isHovered
                          ? 'bg-secondary-fixed text-on-secondary-fixed font-bold'
                          : 'bg-surface-container-low text-on-surface-variant'
                      }`}
                    >
                      {engine.category}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3
                      className={`font-headline-md text-headline-md transition-colors ${
                        isHovered ? 'text-secondary' : 'text-on-surface group-hover:text-secondary'
                      }`}
                    >
                      {engine.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {engine.description}
                    </p>

                    {/* Subtle revealed details on active/hover */}
                    {engine.details && (
                      <div
                        className={`pt-3 space-y-1.5 transition-all duration-300 overflow-hidden ${
                          isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 lg:max-h-0'
                        }`}
                      >
                        {engine.details.slice(0, 2).map((detail, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-center gap-2 text-on-surface-variant font-body-sm"
                          >
                            <Check className="w-3.5 h-3.5 text-secondary shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-on-surface-variant group-hover:text-on-surface transition-colors">
                  <span className="font-label-sm text-label-sm uppercase tracking-wide">
                    {engine.pipeline}
                  </span>
                  <div className="flex items-center text-secondary font-label-sm">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-1 hidden sm:inline">
                      Engage
                    </span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
