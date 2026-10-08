import React from 'react';
import {motion, MotionConfig} from 'motion/react';
import {ArrowRight} from 'lucide-react';

interface CoworkingSectionProps {
  onOpenPartner: (track: string) => void;
}

// Must match the matching <option> value in PartnerModal so the enquiry opens pre-selected.
const COWORKING_TRACK = 'Coworking Space (Workspace Rental)';

const audiences = [
  'Individuals',
  'Remote workers',
  'Students',
  'Freelancers',
  'Entrepreneurs',
  'Startups',
  'Small teams',
];

const spaces = [
  {
    label: 'WORKSPACE',
    title: 'Desk workspace',
    description:
      'Desks laid out in a bright, open room. A steady place for focused work, study and remote work.',
    image: '/coworking-desks.jpg',
    alt: 'Row of white desks with ergonomic chairs beside windows with striped blinds',
  },
  {
    label: 'MEETINGS',
    title: 'Meeting room',
    description:
      'A long table with seating for the group. Room for team meetings, planning sessions and project work.',
    image: '/meeting-room.jpg',
    alt: 'Meeting room with a long dark table and black chairs',
  },
  {
    label: 'LOUNGE',
    title: 'Lounge area',
    description: 'Soft seating away from the desks, for a break or an informal conversation.',
    image: '/lounge-seating.jpg',
    alt: 'Lounge seating area with a green sofa, ottomans and cushions',
  },
];

const reveal = {
  initial: {opacity: 0, y: 24},
  whileInView: {opacity: 1, y: 0},
  viewport: {once: true, margin: '-60px'},
};
const ease = [0.16, 1, 0.3, 1] as const;

export const CoworkingSection: React.FC<CoworkingSectionProps> = ({onOpenPartner}) => (
  <MotionConfig reducedMotion="user">
    <section
      id="coworking"
      aria-labelledby="coworking-heading"
      className="scroll-mt-20 bg-surface-container-low py-section-lg"
    >
      <div className="mx-auto max-w-max-container px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <motion.div {...reveal} transition={{duration: 0.6, ease}} className="lg:col-span-5">
            <span className="font-kicker-badge text-kicker-badge text-secondary">
              COWORKING SPACE
            </span>
            <h2
              id="coworking-heading"
              className="mt-4 font-headline-xl text-headline-xl text-on-surface"
            >
              A place to come and work.
            </h2>
            <p className="mt-6 font-body-lead text-body-lead text-on-surface-variant">
              AFRINOVERSE now has coworking space you can rent. Come in to focus on your work,
              study, hold a meeting or move a project forward.
            </p>
            <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
              It's a professional, comfortable place to work, whether you're on your own or with a
              small team. Contact us to ask about availability, pricing and booking.
            </p>
            <p className="mt-8 font-label-md text-label-md text-on-surface">Who it's for</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {audiences.map((audience) => (
                <li
                  key={audience}
                  className="rounded-full border border-outline-variant bg-surface-container-lowest px-4 py-2 font-label-md text-label-md text-on-surface"
                >
                  {audience}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => onOpenPartner(COWORKING_TRACK)}
              className="mt-10 inline-flex w-fit items-center rounded-full bg-secondary-container px-7 py-4 font-label-md text-label-md text-on-primary transition-colors hover:bg-secondary"
            >
              Enquire About a Space <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </motion.div>

          <motion.figure
            {...reveal}
            transition={{duration: 0.7, ease, delay: 0.1}}
            className="group relative overflow-hidden rounded-3xl bg-surface-container lg:col-span-7"
          >
            <img
              src="/coworking-space.jpg"
              alt="Open-plan AFRINOVERSE workspace with desks, plants and a lounge area under bright ceiling lights"
              width={1800}
              height={1012}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover object-[70%_50%] transition-transform duration-700 ease-out group-hover:scale-105 md:aspect-[16/10] lg:aspect-[4/3]"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-surface-container-lowest/90 px-4 py-2 font-label-sm text-label-sm text-on-surface backdrop-blur">
              Open-plan workspace
            </figcaption>
          </motion.figure>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {spaces.map((space, index) => (
            <motion.article
              key={space.title}
              {...reveal}
              transition={{duration: 0.5, ease, delay: index * 0.08}}
              className={`group flex flex-col rounded-3xl bg-surface-container-lowest p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${index === 2 ? 'md:col-span-2 md:flex-row md:items-center md:gap-8 lg:col-span-1 lg:flex-col lg:items-stretch lg:gap-0' : ''}`}
            >
              <div
                className={`overflow-hidden rounded-2xl bg-surface-container ${index === 2 ? 'md:w-1/2 lg:w-full' : ''}`}
              >
                <img
                  src={space.image}
                  alt={space.alt}
                  width={1400}
                  height={788}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <div className={`flex flex-1 flex-col ${index === 2 ? 'md:w-1/2 lg:w-full' : ''}`}>
                <span className="mt-6 font-kicker-badge text-kicker-badge text-secondary">
                  0{index + 1} / {space.label}
                </span>
                <h3 className="mt-3 font-headline-md text-headline-md text-on-surface">
                  {space.title}
                </h3>
                <p className="mt-4 flex-1 font-body-md text-body-md text-on-surface-variant">
                  {space.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          {...reveal}
          transition={{duration: 0.6, ease}}
          className="relative mt-6 overflow-hidden rounded-3xl bg-primary-container p-8 text-on-primary md:p-12"
        >
          <div
            aria-hidden="true"
            className="absolute -bottom-16 -right-28 h-40 w-40 rounded-full border-[24px] border-secondary-container/80 md:-right-28 md:-top-28 md:bottom-auto md:h-48 md:w-48 md:border-[32px]"
          />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h3 className="font-headline-md text-headline-md">
                Ask about availability, pricing and booking.
              </h3>
              <p className="mt-3 font-body-md text-body-md text-on-primary/85">
                Send us a message with what you have in mind.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenPartner(COWORKING_TRACK)}
              className="inline-flex w-fit shrink-0 items-center rounded-full bg-secondary-container px-7 py-4 font-label-md text-label-md text-on-primary transition-colors hover:bg-secondary"
            >
              Enquire About a Space <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  </MotionConfig>
);
