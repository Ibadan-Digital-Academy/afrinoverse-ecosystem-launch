import React, {useState} from 'react';
import {motion} from 'motion/react';
import {BUILD_STAGES} from '../data/afrinoverseData';

export const WhatWeBuildSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="what-we-build" className="w-full bg-surface py-section-md scroll-mt-12">
      <div className="max-w-max-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        {/* Section Framing */}
        <motion.div
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-60px'}}
          transition={{duration: 0.5}}
          className="max-w-3xl mb-12"
        >
          <span className="font-kicker-badge text-kicker-badge text-secondary uppercase tracking-widest block mb-2">
            PROGRESSION MATRIX
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mb-2">
            What We Build
          </h2>
          <p className="font-headline-sm text-headline-sm text-secondary font-semibold mb-4">
            From learning to enterprise.
          </p>
          <p className="font-body-lead text-body-lead text-on-surface-variant">
            We build the capabilities, content, technologies, platforms and ventures that enable
            people and organisations to learn, create, innovate and grow. Our work spans education,
            digital skills, publishing, software products, enterprise solutions, innovation and
            venture development.
          </p>
        </motion.div>

        {/* Linear Progression Pipeline Container */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-60px'}}
          transition={{duration: 0.5, delay: 0.1}}
          className="bg-surface-container-low p-6 sm:p-8 md:p-10 rounded-xl border border-outline-variant/40"
        >
          {/* Subtle connecting progress bar above items on larger screens */}
          <div className="hidden lg:block relative mb-8">
            <div className="h-1 w-full bg-outline-variant/30 rounded-full" />
            <motion.div
              className="absolute top-0 left-0 h-1 bg-gradient-to-r from-secondary-container via-secondary to-primary rounded-full transition-all duration-500"
              style={{width: `${(activeStep / 6) * 100}%`}}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            {BUILD_STAGES.map((stage) => {
              const isCurrent = activeStep === stage.step;
              const isPast = activeStep >= stage.step;

              return (
                <div
                  key={stage.step}
                  onMouseEnter={() => setActiveStep(stage.step)}
                  onClick={() => setActiveStep(stage.step)}
                  className={`relative flex flex-col space-y-2 p-3 sm:p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                    isCurrent
                      ? 'bg-surface-container-lowest shadow-sm border border-secondary/30 -translate-y-1'
                      : 'hover:bg-surface-container-lowest/60 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-7 h-7 rounded-full font-code-mono text-code-mono font-bold flex items-center justify-center transition-all duration-300 ${
                        stage.step === 6
                          ? 'bg-primary text-on-primary'
                          : isPast
                            ? 'bg-secondary text-on-secondary shadow-xs'
                            : 'bg-outline-variant text-on-surface'
                      }`}
                    >
                      {stage.step}
                    </span>
                    <span
                      className={`font-label-md text-label-md font-bold tracking-wider transition-colors ${
                        isCurrent ? 'text-secondary' : 'text-on-surface'
                      }`}
                    >
                      {stage.label}
                    </span>
                  </div>

                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {stage.summary}
                  </p>

                  {/* Subtle Deliverables on hover/current */}
                  <div
                    className={`pt-2 transition-all duration-200 ${
                      isCurrent ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
                    }`}
                  >
                    <span className="font-code-mono text-[10px] text-secondary font-bold uppercase tracking-wider block mb-1">
                      Key Deliverables
                    </span>
                    <ul className="text-[11px] text-on-surface-variant space-y-0.5">
                      {stage.deliverables.map((item, i) => (
                        <li key={i} className="flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-secondary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
