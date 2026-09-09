import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {X, CheckCircle2, Send, Mail, Building, User, Briefcase} from 'lucide-react';
import {PartnerFormData} from '../types';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultInterest?: string;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({
  isOpen,
  onClose,
  defaultInterest = 'General Ecosystem Partnership',
}) => {
  const [formData, setFormData] = useState<PartnerFormData>({
    fullName: '',
    email: '',
    organization: '',
    role: '',
    interest: defaultInterest,
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof PartnerFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Reset the controlled form whenever a new modal session begins.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData((prev) => ({...prev, interest: defaultInterest}));
      setIsSubmitted(false);
      setErrors({});
    }
  }, [isOpen, defaultInterest]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof PartnerFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please provide your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.organization.trim())
      newErrors.organization = 'Please provide your institution or company name.';
    if (!formData.message.trim())
      newErrors.message = 'Please share a brief note about your inquiry.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate professional transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
            onClick={onClose}
            className="fixed inset-0 bg-primary/70 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Modal Box */}
          <motion.div
            initial={{opacity: 0, scale: 0.96, y: 16}}
            animate={{opacity: 1, scale: 1, y: 0}}
            exit={{opacity: 0, scale: 0.96, y: 16}}
            transition={{duration: 0.25, ease: [0.16, 1, 0.3, 1]}}
            className="relative w-full max-w-2xl bg-surface-container-lowest rounded-xl border border-outline-variant/50 shadow-2xl overflow-hidden z-10 my-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="partner-modal-title"
          >
            {/* Header */}
            <div className="p-6 md:p-8 bg-surface-container-low border-b border-outline-variant/30 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="w-2.5 h-1.5 bg-secondary-container rounded-xs" />
                  <span className="w-2.5 h-1.5 bg-secondary rounded-xs" />
                  <span className="w-2.5 h-1.5 bg-on-tertiary-container rounded-xs" />
                  <span className="font-kicker-badge text-kicker-badge text-secondary uppercase tracking-widest ml-1">
                    AFRINOVERSE COLLABORATION
                  </span>
                </div>
                <h3
                  id="partner-modal-title"
                  className="font-headline-lg text-headline-lg text-on-surface"
                >
                  Partner With AFRINOVERSE
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  Connect with our ecosystem team to explore academic partnerships, enterprise
                  deployments, or venture co-development.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto">
              {isSubmitted ? (
                <motion.div
                  initial={{opacity: 0, scale: 0.95}}
                  animate={{opacity: 1, scale: 1}}
                  className="py-8 text-center space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-headline-md text-headline-md text-on-surface">
                      Inquiry Transmitted Successfully
                    </h4>
                    <p className="font-body-lead text-body-lead text-on-surface-variant max-w-lg mx-auto">
                      Thank you for reaching out to AFRINOVERSE. Our ecosystem partnership
                      directorate has received your details and will follow up within 24–48 business
                      hours.
                    </p>
                  </div>

                  <div className="p-4 bg-surface-container-low rounded-lg border border-outline-variant/30 text-left max-w-md mx-auto space-y-1">
                    <span className="font-code-mono text-code-mono text-secondary uppercase font-semibold block">
                      Direct Ecosystem Channel
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface">
                      Need urgent institutional coordination? Direct emails are routed directly to{' '}
                      <a
                        href="mailto:collaborate@afrinoverse.com"
                        className="text-secondary font-medium underline"
                      >
                        collaborate@afrinoverse.com
                      </a>
                      .
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="inline-flex items-center justify-center bg-primary-container text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg hover:bg-inverse-surface transition-all"
                    >
                      Return to Website
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block font-label-md text-label-md text-on-surface mb-1.5"
                      >
                        Full Name <span className="text-error">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          id="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          placeholder="e.g. Dr. Adebayo Ogunlesi"
                          className={`w-full pl-9 pr-3 py-2.5 text-body-md rounded-lg border bg-surface text-on-surface focus:outline-none focus:ring-2 transition-colors ${
                            errors.fullName
                              ? 'border-error focus:ring-error'
                              : 'border-outline-variant focus:border-secondary focus:ring-secondary/20'
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-error text-body-sm mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-label-md text-label-md text-on-surface mb-1.5"
                      >
                        Work / Institutional Email <span className="text-error">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="name@organization.com"
                          className={`w-full pl-9 pr-3 py-2.5 text-body-md rounded-lg border bg-surface text-on-surface focus:outline-none focus:ring-2 transition-colors ${
                            errors.email
                              ? 'border-error focus:ring-error'
                              : 'border-outline-variant focus:border-secondary focus:ring-secondary/20'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-error text-body-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Organization */}
                    <div>
                      <label
                        htmlFor="organization"
                        className="block font-label-md text-label-md text-on-surface mb-1.5"
                      >
                        Organization / Institution <span className="text-error">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
                          <Building className="w-4 h-4" />
                        </div>
                        <input
                          id="organization"
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({...formData, organization: e.target.value})}
                          placeholder="e.g. Pan-African Venture Hub"
                          className={`w-full pl-9 pr-3 py-2.5 text-body-md rounded-lg border bg-surface text-on-surface focus:outline-none focus:ring-2 transition-colors ${
                            errors.organization
                              ? 'border-error focus:ring-error'
                              : 'border-outline-variant focus:border-secondary focus:ring-secondary/20'
                          }`}
                        />
                      </div>
                      {errors.organization && (
                        <p className="text-error text-body-sm mt-1">{errors.organization}</p>
                      )}
                    </div>

                    {/* Role */}
                    <div>
                      <label
                        htmlFor="role"
                        className="block font-label-md text-label-md text-on-surface mb-1.5"
                      >
                        Role / Designation
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <input
                          id="role"
                          type="text"
                          value={formData.role}
                          onChange={(e) => setFormData({...formData, role: e.target.value})}
                          placeholder="e.g. Managing Director / Dean"
                          className="w-full pl-9 pr-3 py-2.5 text-body-md rounded-lg border border-outline-variant bg-surface text-on-surface focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Partnership Track */}
                  <div>
                    <label
                      htmlFor="interest"
                      className="block font-label-md text-label-md text-on-surface mb-1.5"
                    >
                      Collaboration Track
                    </label>
                    <select
                      id="interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      className="w-full px-3 py-2.5 text-body-md rounded-lg border border-outline-variant bg-surface text-on-surface focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none transition-colors"
                    >
                      <option value="General Ecosystem Partnership">
                        General Ecosystem Partnership
                      </option>
                      <option value="Ibadan Digital Academy (Talent / Cohorts)">
                        Ibadan Digital Academy (Talent & Education)
                      </option>
                      <option value="DigitalBridge Publishing (Curriculum / Books)">
                        DigitalBridge Publishing Studio (Curriculum)
                      </option>
                      <option value="FairwayPro (Sports Management Deployment)">
                        FairwayPro Enterprise Deployment
                      </option>
                      <option value="StitchPro (Apparel & Fashion Suite)">
                        StitchPro Enterprise Deployment
                      </option>
                      <option value="Digital ToolPro (Business Automation)">
                        Digital ToolPro Productivity Integration
                      </option>
                      <option value="Innovation Lab & Venture Incubation">
                        Innovation Lab & Venture Spinouts
                      </option>
                      <option value="Government & Multilateral Initiatives">
                        Government & Multilateral Programs
                      </option>
                      <option value="Investment & Ecosystem Syndication">
                        Investment & Capital Syndication
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-label-md text-label-md text-on-surface mb-1.5"
                    >
                      Scope of Interest / Objectives <span className="text-error">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your organization's goals, geographic focus, and how AFRINOVERSE can build alongside you..."
                        className={`w-full p-3 text-body-md rounded-lg border bg-surface text-on-surface focus:outline-none focus:ring-2 transition-colors ${
                          errors.message
                            ? 'border-error focus:ring-error'
                            : 'border-outline-variant focus:border-secondary focus:ring-secondary/20'
                        }`}
                      />
                    </div>
                    {errors.message && (
                      <p className="text-error text-body-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Action & Mailto option */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-on-surface-variant font-body-sm">
                      <Mail className="w-4 h-4 text-secondary" />
                      <span>Prefer manual email?</span>
                      <a
                        href={`mailto:collaborate@afrinoverse.com?subject=AFRINOVERSE%20Partnership%20Inquiry%20-%20${encodeURIComponent(
                          formData.organization || 'Inquiry',
                        )}&body=${encodeURIComponent(
                          `Hello AFRINOVERSE Team,\n\nI am reaching out regarding ${formData.interest}.\n\nName: ${formData.fullName}\nOrganization: ${formData.organization}\nRole: ${formData.role}\n\nMessage:\n${formData.message}`,
                        )}`}
                        className="text-secondary font-medium hover:underline"
                      >
                        Send via Client
                      </a>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-secondary-container hover:bg-secondary text-on-primary font-label-md text-label-md px-7 py-3 rounded-lg shadow-sm transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin mr-2" />
                          Transmitting...
                        </>
                      ) : (
                        <>
                          Transmit Inquiry
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
