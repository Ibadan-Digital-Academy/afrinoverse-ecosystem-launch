import React from 'react';
import {ArrowRight} from 'lucide-react';

interface EcosystemSectionProps {
  onOpenPartner: (track: string) => void;
}

const engines = [
  [
    'Education',
    'Ibadan Digital Academy',
    'Future-ready digital skills, AI, technology education and workforce development.',
    'bg-surface-container',
  ],
  [
    'Publishing',
    'DigitalBridge Publishing Studio',
    'Future-ready textbooks, digital literacy resources, vocational learning and EdTech-enabled educational content.',
    'bg-secondary-fixed',
  ],
  [
    'Technology',
    'AFRINOVERSE Products',
    'Practical software and digital solutions designed to solve real problems across African industries and enterprises.',
    'bg-primary-container text-on-primary',
  ],
  [
    'Innovation',
    'AFRINOVERSE Innovation Lab',
    'Building products, ventures and emerging-technology initiatives that address real African challenges.',
    'bg-secondary-container',
  ],
  [
    'Enterprise',
    'Business & Digital Transformation',
    'Helping SMEs and institutions modernise operations, improve efficiency and embrace digital transformation.',
    'bg-surface-container-high',
  ],
  [
    'Venture Building',
    'Startup Growth',
    'Supporting founders and emerging ventures from ideas through mentorship, incubation and growth.',
    'bg-secondary text-on-primary',
  ],
];

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({onOpenPartner}) => (
  <section id="ecosystem" className="scroll-mt-20 bg-surface-container-low py-section-lg">
    <div className="mx-auto max-w-max-container px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
      <div className="max-w-3xl">
        <span className="font-kicker-badge text-kicker-badge text-secondary">OUR ECOSYSTEM</span>
        <h2 className="mt-4 font-headline-xl text-headline-xl text-on-surface">
          ONE ECOSYSTEM. MANY ENGINES.
        </h2>
        <p className="mt-5 font-body-lead text-body-lead text-on-surface-variant">
          We connect education, publishing, technology, innovation and enterprise to create
          practical capabilities and opportunities for Africa's next generation.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {engines.map(([category, title, description, color], index) => (
          <article
            key={title}
            className={`flex min-h-[320px] flex-col justify-between rounded-3xl p-7 ${color}`}
          >
            <div>
              <span className="font-kicker-badge text-kicker-badge opacity-75">
                0{index + 1} / {category.toUpperCase()}
              </span>
              <h3 className="mt-16 font-headline-md text-headline-md">{title}</h3>
              <p className="mt-4 max-w-sm font-body-md text-body-md opacity-85">{description}</p>
            </div>
            <button
              type="button"
              tabIndex={0}
              aria-label={`Explore partnership opportunities for ${title}`}
              onClick={() => onOpenPartner(`${title} (${category})`)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ')
                  onOpenPartner(`${title} (${category})`);
              }}
              className="mt-8 inline-flex w-fit items-center font-label-md text-label-md underline underline-offset-4"
            >
              Explore <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </article>
        ))}
      </div>
    </div>
  </section>
);
