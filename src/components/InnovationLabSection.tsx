import React from 'react';
import {ArrowRight} from 'lucide-react';

interface InnovationLabSectionProps {
  onOpenPartner: (track: string) => void;
}

export const InnovationLabSection: React.FC<InnovationLabSectionProps> = ({onOpenPartner}) => (
  <section
    id="innovation-lab"
    className="scroll-mt-20 bg-secondary-container py-section-lg text-on-primary"
  >
    <div className="mx-auto grid max-w-max-container gap-12 px-margin-mobile md:px-margin-tablet lg:grid-cols-12 lg:items-center lg:px-margin-desktop">
      <div className="lg:col-span-6">
        <span className="font-kicker-badge text-kicker-badge">
          INNOVATION &amp; VENTURE BUILDING
        </span>
        <h2 className="mt-4 font-headline-xl text-headline-xl">Where ideas become ventures.</h2>
        <p className="mt-6 max-w-2xl font-body-lead text-body-lead">
          Through the AFRINOVERSE Innovation Lab, we develop software products, emerging
          technologies and new ventures that respond to real African challenges.
        </p>
        <p className="mt-6 font-headline-sm text-headline-sm">
          Idea <span aria-hidden="true">→</span> prototype <span aria-hidden="true">→</span> product{' '}
          <span aria-hidden="true">→</span> venture <span aria-hidden="true">→</span> growth.
        </p>
        <button
          type="button"
          onClick={() => onOpenPartner('Innovation Lab & Venture Building')}
          className="mt-9 inline-flex w-fit items-center rounded-full bg-primary-container px-6 py-4 font-label-md text-label-md text-on-primary hover:bg-primary"
        >
          Explore Innovation Lab <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
      <img
        src="/afrinoverse-product-review.png"
        alt="African product team reviewing a mobile platform presentation"
        className="h-[320px] w-full rounded-3xl object-cover md:h-[440px] lg:col-span-6"
      />
    </div>
  </section>
);
