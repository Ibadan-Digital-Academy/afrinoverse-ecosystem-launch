import React from 'react';
import {ArrowRight} from 'lucide-react';

interface CtaSectionProps { onOpenPartner: (track?: string) => void }

export const CtaSection: React.FC<CtaSectionProps> = ({onOpenPartner}) => (
  <section id="collaborate" className="scroll-mt-20 bg-secondary-container py-section-lg text-on-primary">
    <div className="mx-auto grid max-w-max-container gap-10 px-margin-mobile md:px-margin-tablet lg:grid-cols-12 lg:items-end lg:px-margin-desktop">
      <div className="lg:col-span-8">
        <span className="font-kicker-badge text-kicker-badge">COLLABORATE</span>
        <h2 className="mt-4 font-display-hero text-display-hero">BUILD THE FUTURE TOGETHER</h2>
        <p className="mt-6 max-w-2xl font-headline-sm text-headline-sm">Let's build Africa's next generation of platforms, capabilities and opportunities.</p>
        <p className="mt-5 max-w-2xl font-body-lead text-body-lead">Whether you are a learner, founder, institution, enterprise, investor or strategic partner, AFRINOVERSE welcomes opportunities to collaborate, innovate and build.</p>
      </div>
      <button type="button" onClick={() => onOpenPartner('Strategic Partner / Ecosystem')} className="inline-flex w-fit items-center rounded-full bg-primary-container px-7 py-4 font-label-md text-label-md text-on-primary hover:bg-primary lg:col-span-4">
        Partner With AFRINOVERSE <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  </section>
);
