import React from 'react';

interface FooterProps {
  onOpenPartner: (track?: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPartner, onOpenLegal }) => {
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant/40">
      <div className="max-w-max-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop pt-section-sm pb-section-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl pb-section-sm border-b border-outline-variant/30">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-gutter-md">
            <div className="flex items-center gap-gutter-sm">
              <img
                alt="AFRINOVERSE"
                className="h-8 w-auto object-contain"
                src="/favicon.jpg"
              />
              <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface font-bold uppercase">
                AFRINOVERSE
              </span>
            </div>

            <p className="font-body-lead text-body-lead text-on-surface max-w-sm">
              Building Systems for Africa’s Next Generation
            </p>

            <div className="flex items-center gap-gutter-xs">
              <span className="w-4 h-[2px] bg-secondary-container" />
              <span className="w-4 h-[2px] bg-secondary" />
              <span className="w-4 h-[2px] bg-on-tertiary-container" />
            </div>

            <p className="font-kicker-badge text-kicker-badge text-secondary tracking-widest uppercase">
              Educate. Innovate. Empower.
            </p>
          </div>

          {/* 5 Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-5 gap-gutter-lg">
            {/* Ecosystem */}
            <div className="space-y-gutter-sm">
              <div className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                Ecosystem
              </div>
              <ul className="space-y-gutter-xs">
                <li
                  onClick={e => scrollToSection(e, 'ecosystem')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Ibadan Digital Academy
                </li>
                <li
                  onClick={e => scrollToSection(e, 'ecosystem')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  DigitalBridge Studio
                </li>
                <li
                  onClick={e => scrollToSection(e, 'products')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Products
                </li>
                <li
                  onClick={e => scrollToSection(e, 'innovation-lab')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Lab
                </li>
                <li
                  onClick={e => scrollToSection(e, 'ecosystem')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Enterprise
                </li>
                <li
                  onClick={e => scrollToSection(e, 'ecosystem')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Venture Growth
                </li>
              </ul>
            </div>

            {/* Products */}
            <div className="space-y-gutter-sm">
              <div className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                Products
              </div>
              <ul className="space-y-gutter-xs">
                <li
                  onClick={e => scrollToSection(e, 'products')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  FairwayPro
                </li>
                <li
                  onClick={e => scrollToSection(e, 'products')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  StitchPro
                </li>
                <li
                  onClick={e => scrollToSection(e, 'products')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Digital ToolPro
                </li>
              </ul>
            </div>

            {/* Innovation Lab */}
            <div className="space-y-gutter-sm">
              <div className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                Innovation Lab
              </div>
              <ul className="space-y-gutter-xs">
                <li
                  onClick={e => scrollToSection(e, 'innovation-lab')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Incubation
                </li>
                <li
                  onClick={e => scrollToSection(e, 'innovation-lab')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Emerging Tech
                </li>
                <li
                  onClick={e => scrollToSection(e, 'innovation-lab')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Ventures
                </li>
              </ul>
            </div>

            {/* Who We Serve */}
            <div className="space-y-gutter-sm">
              <div className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                Who We Serve
              </div>
              <ul className="space-y-gutter-xs">
                <li
                  onClick={e => scrollToSection(e, 'who-we-serve')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Learners
                </li>
                <li
                  onClick={e => scrollToSection(e, 'who-we-serve')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Institutions
                </li>
                <li
                  onClick={e => scrollToSection(e, 'who-we-serve')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Founders
                </li>
                <li
                  onClick={e => scrollToSection(e, 'who-we-serve')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Enterprises
                </li>
                <li
                  onClick={e => scrollToSection(e, 'who-we-serve')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Government
                </li>
              </ul>
            </div>

            {/* About */}
            <div className="space-y-gutter-sm">
              <div className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                About
              </div>
              <ul className="space-y-gutter-xs">
                <li
                  onClick={e => scrollToSection(e, 'about')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Mission
                </li>
                <li
                  onClick={e => scrollToSection(e, 'about')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Team
                </li>
                <li
                  onClick={e => scrollToSection(e, 'about')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Experience
                </li>
                <li
                  onClick={() => onOpenPartner('General Inquiry')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-gutter-xl flex flex-col md:flex-row items-center justify-between gap-gutter-md">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            © 2025 AFRINOVERSE. All rights reserved. Building Systems for Africa’s Next Generation.
          </p>
          <div className="flex items-center gap-gutter-lg">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
