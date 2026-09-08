import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenPartner: (track?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPartner }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'ecosystem',
        'what-we-build',
        'products',
        'innovation-lab',
        'who-we-serve',
        'about'
      ];

      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Ecosystem', href: '#ecosystem', id: 'ecosystem' },
    { label: 'What We Build', href: '#what-we-build', id: 'what-we-build' },
    { label: 'Products', href: '#products', id: 'products' },
    { label: 'Innovation Lab', href: '#innovation-lab', id: 'innovation-lab' },
    { label: 'Who We Serve', href: '#who-we-serve', id: 'who-we-serve' },
    { label: 'About', href: '#about', id: 'about' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-surface/95 backdrop-blur-md border-outline-variant/40 shadow-xs h-16 sm:h-20'
          : 'bg-surface/90 backdrop-blur-md border-outline-variant/40 h-20'
      }`}
    >
      <div className="h-full max-w-max-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-gutter-md">
        {/* Brand & Logo */}
        <div className="flex items-center">
          <a
            href="#"
            onClick={e => handleNavClick(e, '#')}
            className="flex items-center gap-gutter-sm focus:outline-none group"
          >
            <img
              alt="AFRINOVERSE"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
              src="/favicon.jpg"
            />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-gutter-lg">
          {navLinks.map(link => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className={`relative font-label-md text-label-md py-1 transition-colors duration-200 ${
                  isActive ? 'text-on-surface font-bold' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-secondary rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-gutter-md">
          <button
            type="button"
            onClick={() => onOpenPartner()}
            className="inline-flex items-center justify-center bg-primary-container text-on-primary font-label-md text-label-md px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg border border-secondary/40 hover:bg-inverse-surface hover:text-inverse-on-surface transition-all shadow-sm active:scale-[0.98] cursor-pointer"
          >
            Partner With Us
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-on-surface hover:bg-surface-container rounded-lg focus:outline-none transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-outline-variant/40 px-margin-mobile py-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className={`font-label-md text-label-md py-2 px-3 rounded-md transition-colors ${
                  activeSection === link.id
                    ? 'bg-surface-container text-secondary font-bold'
                    : 'text-on-surface hover:bg-surface-container-low'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-outline-variant/30">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPartner();
                }}
                className="w-full inline-flex items-center justify-center bg-secondary-container text-on-primary font-label-md text-label-md py-3 rounded-lg shadow-sm"
              >
                Partner With Us
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
