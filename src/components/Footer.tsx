import React from 'react';

interface FooterProps { onOpenPartner: (track?: string) => void; onOpenLegal: (type: 'privacy' | 'terms') => void }

const links = [
  {label: 'About Us', href: '#about'},
  {label: 'Our Ecosystem', href: '#ecosystem'},
  {label: 'Products', href: '#products'},
  {label: 'Innovation Lab', href: '#innovation-lab'},
  {label: 'Coworking', href: '#coworking'},
  {label: 'Who We Serve', href: '#who-we-serve'},
];

export const Footer: React.FC<FooterProps> = ({onOpenPartner, onOpenLegal}) => (
  <footer className="bg-primary-container text-on-primary">
    <div className="mx-auto max-w-max-container px-margin-mobile py-12 md:px-margin-tablet lg:px-margin-desktop">
      <div className="grid gap-10 border-b border-on-primary/20 pb-12 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src="/favicon.jpg" alt="AFRINOVERSE" className="h-12 w-12 rounded-full object-contain" />
            <span className="font-headline-sm text-headline-sm font-bold">AFRINOVERSE</span>
          </div>
          <p className="mt-6 font-body-lead text-body-lead">Building Systems for Africa's Next Generation.</p>
          <p className="mt-3 font-label-md text-label-md text-secondary-fixed-dim">Educate. Innovate. Empower.</p>
        </div>
        <nav className="grid grid-cols-2 gap-x-6 gap-y-4" aria-label="Footer navigation">
          {links.map((link) => <a key={link.href} href={link.href} className="font-body-md text-body-md text-on-primary hover:text-secondary-fixed-dim">{link.label}</a>)}
          <button type="button" onClick={() => onOpenPartner('General Inquiry')} className="text-left font-body-md text-body-md text-on-primary hover:text-secondary-fixed-dim">Contact / Partner</button>
        </nav>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <button type="button" onClick={() => onOpenLegal('privacy')} className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary">Privacy Policy</button>
          <button type="button" onClick={() => onOpenLegal('terms')} className="font-body-sm text-body-sm text-on-primary-container hover:text-on-primary">Terms of Service</button>
        </div>
      </div>
      <p className="pt-6 font-body-sm text-body-sm text-on-primary-container">© {new Date().getFullYear()} AFRINOVERSE. All rights reserved.</p>
    </div>
  </footer>
);
