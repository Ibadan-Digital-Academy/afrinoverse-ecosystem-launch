import React from 'react';

const audiences = [
  'Learners & Students',
  'Educational Institutions',
  'Entrepreneurs & Startups',
  'SMEs & Enterprises',
  'Professionals & Creators',
  'Innovation Communities',
  'Industry Partners',
  'Government & Development Organisations',
];

export const WhoWeServeSection: React.FC = () => (
  <section id="who-we-serve" className="scroll-mt-20 bg-surface-container-low py-section-lg">
    <div className="mx-auto max-w-max-container px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
      <div className="max-w-3xl">
        <span className="font-kicker-badge text-kicker-badge text-secondary">WHO WE SERVE</span>
        <h2 className="mt-4 font-headline-xl text-headline-xl text-on-surface">
          Built for the people building Africa.
        </h2>
        <p className="mt-5 font-body-lead text-body-lead text-on-surface-variant">We work with:</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((audience, index) => (
          <article
            key={audience}
            className="flex min-h-32 flex-col justify-between rounded-2xl border border-outline-variant bg-surface-container-lowest p-5 text-left"
          >
            <span className="font-code-mono text-code-mono text-secondary">0{index + 1}</span>
            <span className="mt-6 font-headline-sm text-headline-sm text-on-surface">
              {audience}
            </span>
          </article>
        ))}
      </div>
    </div>
  </section>
);
