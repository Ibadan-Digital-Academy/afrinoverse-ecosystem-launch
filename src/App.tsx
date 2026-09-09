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
import {WhyAfrinoverseSection} from './components/WhyAfrinoverseSection';
import {ExperienceSection} from './components/ExperienceSection';
import {WhoWeServeSection} from './components/WhoWeServeSection';
import {VisionSection} from './components/VisionSection';
import {CtaSection} from './components/CtaSection';
import {Footer} from './components/Footer';
import {PartnerModal} from './components/PartnerModal';
import {ProductDetailModal} from './components/ProductDetailModal';
import {LegalModal} from './components/LegalModal';
import {ProductItem} from './types';

export default function App() {
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [partnerTrack, setPartnerTrack] = useState('General Ecosystem Partnership');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenPartner = (track?: string) => {
    if (track) setPartnerTrack(track);
    setIsPartnerModalOpen(true);
  };

  const handleSelectProduct = (product: ProductItem) => {
    setSelectedProduct(product);
  };

  const handleOpenLegal = (type: 'privacy' | 'terms') => {
    setLegalModalType(type);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface font-body-md text-on-surface antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* Fixed Sticky Header */}
      <Navbar onOpenPartner={handleOpenPartner} />

      {/* Main Content Area */}
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
        <div className="flex flex-col w-full">
          {/* HERO SECTION */}
          <Hero onOpenPartner={() => handleOpenPartner('Hero Primary CTA')} />

          {/* SECTION 01: ONE ECOSYSTEM. MANY ENGINES */}
          <EcosystemSection onOpenPartner={handleOpenPartner} />

          {/* SECTION 02: WHAT WE BUILD */}
          <WhatWeBuildSection />

          {/* SECTION 03: OUR PRODUCTS */}
          <ProductsSection onSelectProduct={handleSelectProduct} />

          {/* SECTION 04: INNOVATION LAB & VENTURE BUILDING */}
          <InnovationLabSection onOpenPartner={handleOpenPartner} />

          {/* SECTION 05: WHY AFRINOVERSE */}
          <WhyAfrinoverseSection />

          {/* SECTION 06: BUILDING FROM EXPERIENCE */}
          <ExperienceSection />

          {/* SECTION 07: WHO WE SERVE */}
          <WhoWeServeSection onOpenPartner={handleOpenPartner} />

          {/* SECTION 08: OUR VISION */}
          <VisionSection />

          {/* SECTION 09: BUILD THE FUTURE TOGETHER (CTA) */}
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

      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestPartner={(track) => handleOpenPartner(track)}
      />

      <LegalModal
        type={legalModalType}
        isOpen={!!legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
