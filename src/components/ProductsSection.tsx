import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sliders, TrendingUp, BarChart3, CheckCircle2 } from 'lucide-react';
import { PRODUCTS_DATA, TOOLPRO_MODULES } from '../data/afrinoverseData';
import { ProductItem } from '../types';

interface ProductsSectionProps {
  onSelectProduct: (product: ProductItem) => void;
  onOpenPartner: (track: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProduct,
  onOpenPartner
}) => {
  const [selectedToolIndex, setSelectedToolIndex] = useState<number>(0);
  const fairway = PRODUCTS_DATA[0];
  const stitch = PRODUCTS_DATA[1];

  const handleExploreToolPro = (e: React.MouseEvent) => {
    e.preventDefault();
    const toolProItem: ProductItem = {
      id: 'digital-toolpro',
      name: 'Digital ToolPro',
      badge: 'PRODUCTIVITY & TRANSFORMATION',
      version: 'ENTERPRISE SUITE',
      category: 'Enterprise Operations & Governance',
      metrics: 'Over 40,000 automated workflow approvals processed',
      status: 'Production Deployment',
      description:
        'Digital productivity and business automation suite engineered to improve organizational velocity, automate multi-tier approvals, and modernize legacy institutional recordkeeping.',
      imageUrl: fairway.imageUrl, // clean high-res visual
      imageAlt: 'Digital ToolPro operational automation and reporting architecture',
      features: [
        {
          title: 'Operations Automation',
          description: 'Automated multi-tier voucher approvals and offline data sync.'
        },
        {
          title: 'Institutional Analytics',
          description: 'One-click compliance reporting and multi-branch ledger audits.'
        }
      ],
      highlights: [
        'Automated routing of payment vouchers, procurement and staff requisitions',
        'End-to-end encrypted audit logging compliant with institutional donors',
        'Offline-first synchronization for remote field stations and facilities',
        'Configurable role-based access control with granular permission matrix'
      ]
    };
    onSelectProduct(toolProItem);
  };

  return (
    <section id="products" className="w-full bg-surface-container-low py-section-md border-t border-outline-variant/30 scroll-mt-12">
      <div className="max-w-max-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop space-y-16">
        {/* Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
              <span className="font-kicker-badge text-kicker-badge text-secondary tracking-widest uppercase">
                PRODUCTION SOFTWARE
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              Our Products
            </h2>
            <p className="font-headline-sm text-headline-sm text-secondary font-medium">
              Practical technology for African industries.
            </p>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Proprietary enterprise solutions architected directly for regional workflows, offline-ready operations, and high-growth sectors.
          </p>
        </motion.div>

        {/* PRODUCT 1: FAIRWAYPRO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container-lowest p-8 md:p-12 rounded-xl border border-outline-variant/40 hover:border-secondary/50 transition-all duration-300 shadow-sm"
        >
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-kicker-badge text-kicker-badge bg-primary-container text-on-primary px-3 py-1 rounded">
                {fairway.badge}
              </span>
              <span className="font-code-mono text-code-mono text-on-surface-variant">
                {fairway.version}
              </span>
            </div>

            <h3 className="font-headline-lg text-headline-lg text-on-surface group-hover:text-secondary transition-colors tracking-tight">
              {fairway.name}
            </h3>

            <p className="font-body-lead text-body-lead text-on-surface-variant">
              {fairway.description}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="border-l-2 border-secondary pl-3">
                <span className="font-label-md text-label-md text-on-surface block">
                  {fairway.features[0].title}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {fairway.features[0].description}
                </span>
              </div>
              <div className="border-l-2 border-secondary pl-3">
                <span className="font-label-md text-label-md text-on-surface block">
                  {fairway.features[1].title}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {fairway.features[1].description}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onSelectProduct(fairway)}
                className="inline-flex items-center text-secondary font-label-md text-label-md group/btn cursor-pointer"
              >
                <span>Explore FairwayPro</span>
                <ArrowRight className="ml-1.5 w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform duration-200" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div
              onClick={() => onSelectProduct(fairway)}
              className="rounded-lg overflow-hidden border border-outline-variant/30 shadow-md bg-surface-container cursor-pointer relative group/img"
            >
              <img
                alt={fairway.imageAlt}
                className="w-full h-auto object-cover transform group-hover/img:scale-[1.02] transition-transform duration-500"
                src={fairway.imageUrl}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover/img:bg-primary/5 transition-colors pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* PRODUCT 2: STITCHPRO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container-lowest p-8 md:p-12 rounded-xl border border-outline-variant/40 hover:border-secondary-container/50 transition-all duration-300 shadow-sm"
        >
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div
              onClick={() => onSelectProduct(stitch)}
              className="rounded-lg overflow-hidden border border-outline-variant/30 shadow-md bg-surface-container cursor-pointer relative group/img"
            >
              <img
                alt={stitch.imageAlt}
                className="w-full h-auto object-cover transform group-hover/img:scale-[1.02] transition-transform duration-500"
                src={stitch.imageUrl}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover/img:bg-primary/5 transition-colors pointer-events-none" />
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-kicker-badge text-kicker-badge bg-secondary-container text-on-primary px-3 py-1 rounded">
                {stitch.badge}
              </span>
              <span className="font-code-mono text-code-mono text-on-surface-variant">
                {stitch.version}
              </span>
            </div>

            <h3 className="font-headline-lg text-headline-lg text-on-surface group-hover:text-secondary transition-colors tracking-tight">
              {stitch.name}
            </h3>

            <p className="font-body-lead text-body-lead text-on-surface-variant">
              {stitch.description}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="border-l-2 border-secondary-container pl-3">
                <span className="font-label-md text-label-md text-on-surface block">
                  {stitch.features[0].title}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {stitch.features[0].description}
                </span>
              </div>
              <div className="border-l-2 border-secondary-container pl-3">
                <span className="font-label-md text-label-md text-on-surface block">
                  {stitch.features[1].title}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {stitch.features[1].description}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onSelectProduct(stitch)}
                className="inline-flex items-center text-secondary font-label-md text-label-md group/btn cursor-pointer"
              >
                <span>Explore StitchPro</span>
                <ArrowRight className="ml-1.5 w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* PRODUCT 3: DIGITAL TOOLPRO (Interactive feature modules) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="bg-surface-container-lowest p-8 md:p-12 rounded-xl border border-outline-variant/40 shadow-sm"
        >
          <div className="max-w-3xl mb-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-kicker-badge text-kicker-badge bg-surface-container-high text-on-surface px-3 py-1 rounded">
                PRODUCTIVITY &amp; TRANSFORMATION
              </span>
              <span className="font-code-mono text-code-mono text-on-surface-variant">
                MODULAR SUITE
              </span>
            </div>

            <h3 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Digital ToolPro
            </h3>

            <p className="font-body-lead text-body-lead text-on-surface-variant">
              Digital productivity and business automation suite engineered to improve organizational velocity, automate multi-tier approvals, and modernize legacy institutional recordkeeping.
            </p>
          </div>

          {/* Interactive Feature Breakdown Modules */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {TOOLPRO_MODULES.map((mod, idx) => {
              const isSelected = selectedToolIndex === idx;

              return (
                <div
                  key={mod.id}
                  onClick={() => setSelectedToolIndex(idx)}
                  className={`p-6 rounded-lg border transition-all duration-300 space-y-3 cursor-pointer ${
                    isSelected
                      ? 'bg-surface-container-low border-secondary shadow-xs scale-[1.01]'
                      : 'bg-surface-container-low/70 border-outline-variant/30 hover:border-outline-variant'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-10 h-10 rounded flex items-center justify-center ${
                        idx === 0
                          ? 'bg-primary-container text-on-primary'
                          : idx === 1
                          ? 'bg-secondary text-on-secondary'
                          : 'bg-inverse-surface text-inverse-on-surface'
                      }`}
                    >
                      {idx === 0 && <Sliders className="w-5 h-5" />}
                      {idx === 1 && <TrendingUp className="w-5 h-5" />}
                      {idx === 2 && <BarChart3 className="w-5 h-5" />}
                    </div>

                    {isSelected && (
                      <span className="font-kicker-badge text-[10px] text-secondary font-bold uppercase">
                        ACTIVE MODULE
                      </span>
                    )}
                  </div>

                  <h4 className="font-headline-sm text-headline-sm text-on-surface">
                    {mod.title}
                  </h4>

                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {mod.summary}
                  </p>

                  {/* Dynamic capabilities list */}
                  {isSelected && (
                    <div className="pt-3 border-t border-outline-variant/30 space-y-1.5 animate-in fade-in duration-200">
                      {mod.capabilities.slice(0, 2).map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-1.5 text-xs text-on-surface-variant">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-outline-variant/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="font-code-mono text-code-mono text-on-surface-variant uppercase">
              Ready for enterprise integration
            </span>
            <button
              type="button"
              onClick={handleExploreToolPro}
              className="inline-flex items-center text-secondary font-label-md text-label-md group/btn cursor-pointer"
            >
              <span>Explore Digital ToolPro</span>
              <ArrowRight className="ml-1.5 w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform duration-200" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
