import React from 'react';

export const ExperienceSection: React.FC = () => (
  <section id="about" className="scroll-mt-20 bg-surface py-section-lg">
    <div className="mx-auto grid max-w-max-container gap-12 px-margin-mobile md:px-margin-tablet lg:grid-cols-2 lg:items-center lg:px-margin-desktop">
      <div>
        <span className="font-kicker-badge text-kicker-badge text-secondary">WHO WE ARE</span>
        <h2 className="mt-4 font-headline-xl text-headline-xl text-on-surface">Building from Experience</h2>
        <p className="mt-6 font-body-lead text-body-lead text-on-surface-variant">
          AFRINOVERSE builds on practical experience across digital skills development, education, publishing, technology and enterprise to create platforms, products and programmes for Africa's next generation.
        </p>
        <p className="mt-5 font-body-lead text-body-lead text-on-surface-variant">
          We believe sustainable transformation happens when people, institutions, technology and opportunity work together.
        </p>
      </div>
      <div className="relative min-h-[340px] overflow-hidden rounded-3xl bg-primary-container md:min-h-[440px]">
        <img
          src="/afrinoverse-team-collaboration.png"
          alt="African professionals collaborating around laptops in an Afrinoverse-inspired workspace"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-container/90 to-transparent p-7 pt-24 text-on-primary md:p-9 md:pt-28">
          <p className="max-w-md font-headline-sm text-headline-sm">
            People, institutions, technology and opportunity—connected.
          </p>
        </div>
      </div>
    </div>
  </section>
);
