import React from 'react';

export const ExperienceSection: React.FC = () => (
  <section id="about" className="scroll-mt-20 bg-surface py-section-lg">
    <div className="mx-auto grid max-w-max-container gap-12 px-margin-mobile md:px-margin-tablet lg:grid-cols-2 lg:items-center lg:px-margin-desktop">
      <div>
        <span className="font-kicker-badge text-kicker-badge text-secondary">WHO WE ARE</span>
        <h2 className="mt-4 font-headline-xl text-headline-xl text-on-surface">
          Building from Experience
        </h2>
        <p className="mt-6 font-body-lead text-body-lead text-on-surface-variant">
          AFRINOVERSE builds on practical experience across digital skills development, education,
          publishing, technology and enterprise to create platforms, products and programmes for
          Africa's next generation.
        </p>
        <p className="mt-5 font-body-lead text-body-lead text-on-surface-variant">
          We believe sustainable transformation happens when people, institutions, technology and
          opportunity work together.
        </p>
      </div>
      <div className="relative min-h-[320px] overflow-hidden rounded-3xl bg-primary-container p-8 text-on-primary md:p-12">
        <div className="absolute right-[-4rem] top-[-4rem] h-56 w-56 rounded-full border-[32px] border-secondary-container/80" />
        <div className="absolute bottom-[-5rem] left-[-3rem] h-64 w-64 rounded-full border-[22px] border-secondary/70" />
        <div className="relative flex h-full flex-col justify-between">
          <img
            src="/favicon.jpg"
            alt="Afrinoverse mark"
            className="h-16 w-16 rounded-full bg-white object-contain p-2"
          />
          <div className="mt-16 max-w-sm">
            <p className="font-headline-md text-headline-md">
              People, institutions, technology and opportunity—connected.
            </p>
            <div className="mt-6 h-1 w-20 bg-secondary-container" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
