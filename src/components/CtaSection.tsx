import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Copy, Check } from 'lucide-react';

interface CtaSectionProps {
  onOpenPartner: (track?: string) => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenPartner }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('collaborate@afrinoverse.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="collaborate"
      className="w-full bg-primary-container text-on-primary py-section-lg relative overflow-hidden scroll-mt-12"
    >
      <div className="max-w-max-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop relative z-10">
        {/* Top Decorative Accent Bar */}
        <div className="flex items-center gap-1 mb-8">
          <span className="w-8 h-1 bg-secondary-container rounded-xs" />
          <span className="w-8 h-1 bg-secondary rounded-xs" />
          <span className="w-8 h-1 bg-on-tertiary-container rounded-xs" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 space-y-4"
          >
            <span className="font-kicker-badge text-kicker-badge text-secondary-container uppercase tracking-widest block">
              GET INVOLVED
            </span>

            <h2 className="font-display-hero text-display-hero text-on-primary tracking-tight">
              Build the Future Together
            </h2>

            <p className="font-headline-sm text-headline-sm text-secondary-container font-semibold">
              Let’s build Africa’s next generation of platforms, capabilities and opportunities.
            </p>

            <p className="font-body-lead text-body-lead text-on-primary-container max-w-2xl pt-2">
              Whether you are a learner, founder, institution, enterprise, investor or strategic partner, AFRINOVERSE welcomes opportunities to collaborate, innovate and build.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 flex flex-col gap-4"
          >
            <button
              type="button"
              onClick={() => onOpenPartner('Strategic Partner / Ecosystem')}
              className="group inline-flex items-center justify-center bg-secondary-container hover:bg-secondary text-on-primary font-label-md text-label-md px-8 py-4 rounded-lg shadow-md transition-all active:scale-[0.98] cursor-pointer"
            >
              <span className="font-bold">Partner With AFRINOVERSE</span>
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-200" />
            </button>

            {/* Direct Inquiries Card with Copy & Mailto */}
            <div
              onClick={() => onOpenPartner('Direct Email Inquiry')}
              className="p-4 bg-inverse-surface/60 hover:bg-inverse-surface/80 rounded-lg border border-outline-variant/20 transition-all cursor-pointer group flex items-center justify-between"
            >
              <div>
                <span className="font-code-mono text-code-mono text-on-primary-container block mb-1">
                  DIRECT INQUIRIES
                </span>
                <p className="font-body-sm text-body-sm text-on-primary font-medium group-hover:text-secondary-container transition-colors">
                  collaborate@afrinoverse.com
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  className="p-2 rounded bg-primary-container text-on-primary-container hover:text-on-primary hover:bg-primary transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-secondary-container" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href="mailto:collaborate@afrinoverse.com?subject=Inquiry%20from%20AFRINOVERSE%20Website"
                  onClick={e => e.stopPropagation()}
                  title="Open mail client"
                  className="p-2 rounded bg-primary-container text-on-primary-container hover:text-on-primary hover:bg-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
