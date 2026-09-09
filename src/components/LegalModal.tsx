import React, {useEffect} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {X, Shield, FileText} from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({type, isOpen, onClose}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!type) return null;

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
            transition={{duration: 0.25}}
            className="relative w-full max-w-2xl bg-surface-container-lowest rounded-xl border border-outline-variant/50 shadow-2xl overflow-hidden z-10 my-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-modal-title"
          >
            <div className="p-6 md:p-8 bg-surface-container-low border-b border-outline-variant/30 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-primary-container text-on-primary flex items-center justify-center">
                  {type === 'privacy' ? (
                    <Shield className="w-5 h-5 text-secondary-container" />
                  ) : (
                    <FileText className="w-5 h-5 text-secondary-container" />
                  )}
                </div>
                <div>
                  <h3
                    id="legal-modal-title"
                    className="font-headline-md text-headline-md text-on-surface"
                  >
                    {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
                  </h3>
                  <p className="font-code-mono text-code-mono text-secondary">
                    AFRINOVERSE ECOSYSTEM GOVERNANCE
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto space-y-4 text-body-md text-on-surface-variant">
              {type === 'privacy' ? (
                <>
                  <p>
                    <strong>1. Commitment to Data Sovereignty:</strong> AFRINOVERSE is dedicated to
                    protecting the privacy of learners, institutional partners, enterprises, and
                    collaborators engaging with our ecosystem across Nigeria, Kenya, Rwanda, and
                    continental hubs.
                  </p>
                  <p>
                    <strong>2. Information We Collect:</strong> We collect contact details,
                    organizational affiliations, and project objectives voluntarily submitted via
                    our partnership portals, academy applications, and software inquiry channels.
                  </p>
                  <p>
                    <strong>3. Use of Information:</strong> Submitted information is used strictly
                    to coordinate collaborative initiatives, provide requested educational
                    materials, schedule software demonstrations, and fulfill service level
                    agreements. We do not sell or monetize partner data.
                  </p>
                  <p>
                    <strong>4. Data Security:</strong> All digital assets, curricula, and enterprise
                    records are held in accordance with international security standards and
                    regional data protection regulations (including the NDPR and GDPR equivalents).
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. Acceptance of Terms:</strong> By accessing the AFRINOVERSE platform,
                    software demonstrations, or academic repositories, you agree to comply with our
                    institutional collaboration frameworks and intellectual property terms.
                  </p>
                  <p>
                    <strong>2. Proprietary Technology &amp; Curricula:</strong> FairwayPro,
                    StitchPro, Digital ToolPro, and DigitalBridge Publishing curricula are protected
                    proprietary assets of AFRINOVERSE. Unauthorized decompilation, reproduction, or
                    non-licensed institutional usage is strictly prohibited.
                  </p>
                  <p>
                    <strong>3. Enterprise Deployments:</strong> Commercial usage of AFRINOVERSE
                    software suites is governed by individual enterprise license agreements, service
                    level guarantees, and on-premise/cloud terms executed directly with our legal
                    representatives.
                  </p>
                  <p>
                    <strong>4. Contact &amp; Governance:</strong> For institutional governance
                    inquiries or licensing clearance, contact legal@afrinoverse.com or
                    collaborate@afrinoverse.com.
                  </p>
                </>
              )}
            </div>

            <div className="p-4 md:p-6 bg-surface-container-low border-t border-outline-variant/30 text-right">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center bg-primary-container text-on-primary font-label-md text-label-md px-6 py-2.5 rounded-lg hover:bg-inverse-surface transition-colors"
              >
                Close Notice
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
