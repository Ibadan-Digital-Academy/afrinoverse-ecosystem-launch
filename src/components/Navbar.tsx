import React, {useEffect, useState} from 'react';
import {Menu, X} from 'lucide-react';

interface NavbarProps { onOpenPartner: (track?: string) => void }

const navLinks = [
  {label: 'About Us', href: '#about'},
  {label: 'Our Ecosystem', href: '#ecosystem'},
  {label: 'Products', href: '#products'},
  {label: 'Innovation Lab', href: '#innovation-lab'},
  {label: 'Coworking', href: '#coworking'},
];

export const Navbar: React.FC<NavbarProps> = ({onOpenPartner}) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors ${scrolled ? 'bg-surface/95 shadow-sm backdrop-blur' : 'bg-surface'}`}>
      <div className="mx-auto flex h-20 max-w-max-container items-center justify-between px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <a href="#" onClick={(event) => goTo(event, '#root')} className="flex items-center gap-3 rounded focus-visible:outline-none">
          <img src="/favicon.jpg" alt="AFRINOVERSE" className="h-11 w-11 object-contain" />
          <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">AFRINOVERSE</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => <a key={link.href} href={link.href} onClick={(event) => goTo(event, link.href)} className="font-label-md text-label-md text-on-surface hover:text-secondary">{link.label}</a>)}
          <button type="button" onClick={() => onOpenPartner()} className="rounded-full bg-secondary-container px-5 py-3 font-label-md text-label-md text-on-primary hover:bg-secondary">Partner With Us</button>
        </nav>

        <button type="button" className="rounded p-2 text-on-surface lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && <nav id="mobile-navigation" className="border-t border-outline-variant bg-surface px-margin-mobile py-4 lg:hidden" aria-label="Mobile navigation">
        <div className="mx-auto flex max-w-max-container flex-col gap-2">
          {navLinks.map((link) => <a key={link.href} href={link.href} onClick={(event) => goTo(event, link.href)} className="rounded px-3 py-3 font-label-md text-label-md text-on-surface hover:bg-surface-container-low">{link.label}</a>)}
          <button type="button" onClick={() => {setOpen(false); onOpenPartner();}} className="mt-2 rounded-full bg-secondary-container px-5 py-3 font-label-md text-label-md text-on-primary">Partner With Us</button>
        </div>
      </nav>}
    </header>
  );
};
