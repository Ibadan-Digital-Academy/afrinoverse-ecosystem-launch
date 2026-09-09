import React from 'react';
import { motion } from 'motion/react';

export const VisionSection: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-low py-section-lg border-t border-outline-variant/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-margin-mobile md:px-margin-tablet text-center space-y-6"
      >
        <div className="inline-flex items-center gap-2">
          <span className="w-3 h-1 bg-secondary-container rounded-xs" />
          <span className="w-3 h-1 bg-secondary rounded-xs" />
          <span className="w-3 h-1 bg-on-tertiary-container rounded-xs" />
          <span className="font-kicker-badge text-kicker-badge text-secondary uppercase tracking-widest ml-1">
            OUR VISION
          </span>
        </div>

        <h2 className="font-headline-xl text-headline-xl md:text-[40px] md:leading-[52px] text-on-surface font-bold tracking-tight">
          “To build a future where African talent, innovation and enterprise thrive through education, technology and collaborative ecosystems.”
        </h2>

        <p className="font-body-lead text-body-lead text-on-surface-variant max-w-2xl mx-auto">
          A self-sustaining continental architecture empowering sovereign creativity, production, and global export.
        </p>
      </motion.div>
    </section>
  );
};
