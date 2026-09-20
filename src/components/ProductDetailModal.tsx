import React, {useEffect} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {X, Check, ArrowRight, ShieldCheck} from 'lucide-react';
import {ProductItem} from '../types';

interface ProductDetailModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestPartner: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onRequestPartner,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={onClose}
            className="fixed inset-0 bg-primary/70 backdrop-blur-xs"
            aria-hidden="true"
          />

          <motion.div
            initial={{opacity: 0, scale: 0.95, y: 16}}
            animate={{opacity: 1, scale: 1, y: 0}}
            exit={{opacity: 0, scale: 0.95, y: 16}}
            transition={{duration: 0.25, ease: [0.16, 1, 0.3, 1]}}
            className="relative w-full max-w-3xl bg-surface-container-lowest rounded-[28px] border border-outline-variant/40 shadow-2xl overflow-hidden z-10 my-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-detail-title"
          >
            {/* Header */}
            <div className="p-6 md:p-8 bg-surface-container-low border-b border-outline-variant/30 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-kicker-badge text-kicker-badge bg-primary-container text-on-primary px-3 py-1 rounded">
                    {product.badge}
                  </span>
                  <span className="font-code-mono text-code-mono text-secondary font-bold">
                    {product.version}
                  </span>
                </div>
                <h3
                  id="product-detail-title"
                  className="font-headline-lg text-headline-lg text-on-surface"
                >
                  {product.name}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  {product.category} • {product.status}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto space-y-6">
              <div className="rounded-lg overflow-hidden border border-outline-variant/30 bg-surface-container">
                <img
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  className="w-full h-64 sm:h-72 object-cover"
                />
              </div>

              <div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                  Platform Architecture & Overview
                </h4>
                <p className="font-body-lead text-body-lead text-on-surface-variant">
                  {product.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30"
                  >
                    <span className="font-label-md text-label-md text-on-surface font-semibold block mb-1">
                      {feature.title}
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-3">
                  Core Enterprise Capabilities
                </h4>
                <ul className="space-y-2.5">
                  {product.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-body-md text-body-md text-on-surface">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-surface-container-high/40 border border-outline-variant/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-secondary-container" />
                  </div>
                  <div>
                    <span className="font-label-md text-label-md text-on-surface font-semibold block">
                      Enterprise Deployment Ready
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      On-premise or sovereign cloud hosting with SLA support.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 md:p-8 bg-surface-container-low border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto font-label-md text-label-md text-on-surface-variant hover:text-on-surface py-2 px-4 transition-colors"
              >
                Close View
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onRequestPartner(`${product.name} Enterprise Deployment`);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-secondary-container hover:bg-secondary text-on-primary font-label-md text-label-md px-6 py-3 rounded-full transition-all"
              >
                Request Deployment / Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
