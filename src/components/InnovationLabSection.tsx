import React from 'react';

export const InnovationLabSection: React.FC = () => (
  <section
    id="innovation-lab"
    className="scroll-mt-20 bg-secondary-container py-section-lg text-on-primary"
  >
    <div className="mx-auto grid max-w-max-container gap-12 px-margin-mobile md:px-margin-tablet lg:grid-cols-12 lg:items-end lg:px-margin-desktop">
      <div className="lg:col-span-8">
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
      </div>
    </div>
  </section>
);
