import React from 'react';

export const WhyAfrinoverseSection: React.FC = () => (
  <section className="bg-surface py-section-lg">
    <div className="mx-auto grid max-w-max-container gap-10 px-margin-mobile md:px-margin-tablet lg:grid-cols-12 lg:px-margin-desktop">
      <div className="lg:col-span-5">
        <span className="font-kicker-badge text-kicker-badge text-secondary">WHY AFRINOVERSE</span>
        <h2 className="mt-4 font-headline-xl text-headline-xl text-on-surface">We don't build in silos.</h2>
      </div>
      <div className="lg:col-span-7">
        <p className="font-body-lead text-body-lead text-on-surface-variant">We connect education, publishing, technology, enterprise, innovation and partnerships so that talent, ideas and opportunities can move from learning to creation, from creation to enterprise, and from enterprise to impact.</p>
        <p className="mt-5 font-body-lead text-body-lead text-on-surface-variant">Our ecosystem brings different capabilities together to build solutions designed for African realities.</p>
      </div>
    </div>
  </section>
);
