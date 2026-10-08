/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, {useState} from 'react';
import {Navbar} from './components/Navbar';
import {Hero} from './components/Hero';
import {EcosystemSection} from './components/EcosystemSection';
import {WhatWeBuildSection} from './components/WhatWeBuildSection';
import {ProductsSection} from './components/ProductsSection';
import {InnovationLabSection} from './components/InnovationLabSection';
import {CoworkingSection} from './components/CoworkingSection';
import {WhyAfrinoverseSection} from './components/WhyAfrinoverseSection';
import {ExperienceSection} from './components/ExperienceSection';
import {WhoWeServeSection} from './components/WhoWeServeSection';
import {VisionSection} from './components/VisionSection';
import {CtaSection} from './components/CtaSection';
import {Footer} from './components/Footer';
import {PartnerModal} from './components/PartnerModal';
import {LegalModal} from './components/LegalModal';

export default function App() {
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [partnerTrack, setPartnerTrack] = useState('General Ecosystem Partnership');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenPartner = (track?: string) => {
    if (track) setPartnerTrack(track);
    setIsPartnerModalOpen(true);
  };

  const handleOpenLegal = (type: 'privacy' | 'terms') => {
    setLegalModalType(type);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface font-body-md text-on-surface antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* Fixed Sticky Header */}
      <Navbar onOpenPartner={handleOpenPartner} />

      {/* Main Content Area */}
      <main className="w-full pt-[72px] bg-surface min-h-[calc(100vh-20rem)]">
        <div className="flex flex-col w-full">
          {/* HERO SECTION */}
          <Hero onOpenPartner={() => handleOpenPartner('Hero Primary CTA')} />

          {/* SECTION 01: ONE ECOSYSTEM. MANY ENGINES */}
          {/* SECTION 02: WHO WE ARE */}
          <ExperienceSection />

          {/* SECTION 03: OUR ECOSYSTEM */}
          <EcosystemSection />

          {/* SECTION 04: WHAT WE BUILD */}
          <WhatWeBuildSection />

          {/* SECTION 05: OUR PRODUCTS */}
          <ProductsSection />

          {/* SECTION 06: INNOVATION LAB & VENTURE BUILDING */}
          <InnovationLabSection />

          {/* SECTION 06B: COWORKING SPACE */}
          <CoworkingSection onOpenPartner={handleOpenPartner} />

          {/* SECTION 07: WHY AFRINOVERSE */}
          <WhyAfrinoverseSection />

          {/* SECTION 08: WHO WE SERVE */}
          <WhoWeServeSection />

          {/* SECTION 09: OUR VISION */}
          <VisionSection />

          {/* SECTION 10: BUILD THE FUTURE TOGETHER */}
          <CtaSection onOpenPartner={handleOpenPartner} />
        </div>
      </main>

      {/* FOOTER */}
      <Footer onOpenPartner={handleOpenPartner} onOpenLegal={handleOpenLegal} />

      {/* INTERACTIVE MODALS */}
      <PartnerModal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
        defaultInterest={partnerTrack}
      />

      <LegalModal
        type={legalModalType}
        isOpen={!!legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
