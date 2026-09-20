import React from 'react';
import {ArrowDown, ArrowRight} from 'lucide-react';

interface HeroProps { onOpenPartner: () => void }

export const Hero: React.FC<HeroProps> = ({onOpenPartner}) => {
  const scrollToEcosystem = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById('ecosystem')?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center bg-secondary-container py-20 text-on-primary">
      <div className="mx-auto w-full max-w-4xl px-margin-mobile text-center md:px-margin-tablet">
        <h1 className="font-display-hero text-display-hero text-balance">Building Systems for Africa's Next Generation</h1>
        <p className="mx-auto mt-8 max-w-2xl font-headline-sm text-headline-sm text-on-primary">
          Africa's future will be built, not borrowed.
        </p>
        <p className="mx-auto mt-5 max-w-2xl font-body-lead text-body-lead text-on-primary">
          AFRINOVERSE is a future-focused African innovation ecosystem building the talent, content, technology, products and enterprises that will shape Africa's next chapter.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#ecosystem" onClick={scrollToEcosystem} className="inline-flex items-center rounded-full bg-primary-container px-7 py-4 font-label-md text-label-md text-on-primary hover:bg-primary">
            Explore the Ecosystem <ArrowDown className="ml-2 h-4 w-4" />
          </a>
          <button type="button" onClick={onOpenPartner} className="inline-flex items-center rounded-full border border-on-primary px-7 py-4 font-label-md text-label-md text-on-primary hover:bg-on-primary hover:text-secondary-container">
            Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
