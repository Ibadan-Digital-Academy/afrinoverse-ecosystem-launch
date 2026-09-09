import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FlaskConical, ArrowRight, Check } from 'lucide-react';
import { INCUBATION_STEPS } from '../data/afrinoverseData';

interface InnovationLabSectionProps {
  onOpenPartner: (track: string) => void;
}

export const InnovationLabSection: React.FC<InnovationLabSectionProps> = ({ onOpenPartner }) => {
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section
      id="innovation-lab"
      className="w-full bg-primary-container text-on-primary py-section-lg relative overflow-hidden scroll-mt-12"
    >
      <div className="max-w-max-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop relative z-10">
        {/* Top Lab Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-outline-variant/20 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-3"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary-container" />
              <span className="font-kicker-badge text-kicker-badge text-secondary-container uppercase tracking-widest">
                AFRINOVERSE INNOVATION LAB
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-primary tracking-tight">
              Where Ideas Become Ventures
            </h2>
            <p className="font-body-lead text-body-lead text-on-primary-container max-w-2xl">
              Through the AFRINOVERSE Innovation Lab, we develop software products, emerging technologies and new ventures that respond to real African challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <button
              type="button"
              onClick={() => onOpenPartner('Innovation Lab & Venture Incubation')}
              className="inline-flex items-center justify-center bg-secondary-container text-on-primary font-label-md text-label-md px-6 py-3.5 rounded-lg hover:bg-secondary transition-colors cursor-pointer active:scale-[0.98]"
            >
              <span>Explore Innovation Lab</span>
              <FlaskConical className="ml-2 w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Grid: Authentic Lab Photography & Venture Progression Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Lab Photography Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 rounded-xl overflow-hidden border border-outline-variant/20 shadow-xl bg-surface-container/10 group"
          >
            <div className="overflow-hidden relative">
              <img
                alt="African students and engineering researchers working on robotics and artificial intelligence displays in the lab"
                className="w-full h-[460px] object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSGXUpiYvAVfJqQhZDj3UNzVlvResYhQ--dI7Y9E2rsdHA8Xlw9nBL8PLTgJWermML8x5R8oS1gPrSM53VkHMfLMMWPWZVvdbVbq5QHmjrGxxsdN45raMuc3Nsco24pR05EFHoaRorL4ZjWozEfbdHitkrgODj5RP1E59vt1lu3dXGc1bGSGKqdDKbovWsxjkWrsSDHoTIG2iaGTUfpAPgdKiXXuoW8cyb1UHuNpsU9A-fixwrrPeNwQ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-transparent to-transparent opacity-60" />
            </div>

            <div className="p-6 bg-inverse-surface border-t border-outline-variant/20">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-kicker-badge text-kicker-badge text-secondary-container uppercase">
                    ACTIVE R&amp;D SPRINT
                  </span>
                  <p className="font-headline-sm text-headline-sm text-inverse-on-surface">
                    Robotics &amp; Edge AI Cohort
                  </p>
                </div>
                <span className="font-code-mono text-code-mono text-on-primary-container">
                  LAB-2025
                </span>
              </div>
            </div>
          </motion.div>

          {/* 5-Stage Incubation Ladder */}
          <div className="lg:col-span-7 space-y-4">
            {INCUBATION_STEPS.map((step, idx) => {
              const isActive = activeStage === idx;

              return (
                <motion.div
                  key={step.stepNumber}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  onClick={() => setActiveStage(idx)}
                  onMouseEnter={() => setActiveStage(idx)}
                  className={`p-5 rounded-lg border transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                    isActive
                      ? 'bg-inverse-surface/80 border-secondary-container/80 shadow-md translate-x-1'
                      : 'bg-inverse-surface/40 border-outline-variant/20 hover:border-secondary-container/50'
                  }`}
                >
                  <span
                    className={`font-code-mono text-code-mono font-bold px-2.5 py-1 rounded transition-colors ${
                      isActive
                        ? 'bg-secondary-container text-on-primary'
                        : 'bg-primary-container text-secondary-container'
                    }`}
                  >
                    {step.stepNumber}
                  </span>

                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-headline-sm text-headline-sm text-on-primary font-semibold">
                        {step.title}
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary-container font-medium">
                        {step.phase}
                      </span>
                    </div>

                    <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
                      {step.description}
                    </p>

                    {/* Interactive Outputs */}
                    {isActive && (
                      <div className="pt-2 flex flex-wrap gap-2 animate-in fade-in duration-200">
                        {step.keyOutputs.map((output, oIdx) => (
                          <span
                            key={oIdx}
                            className="inline-flex items-center gap-1 text-[11px] font-code-mono bg-primary-container/80 text-on-primary-container px-2.5 py-1 rounded border border-outline-variant/20"
                          >
                            <Check className="w-3 h-3 text-secondary-container" />
                            {output}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
