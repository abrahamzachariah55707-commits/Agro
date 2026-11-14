import React, { useState } from 'react';
import { X, CheckCircle2, Phone, MessageSquare, Copy, Check } from 'lucide-react';
import { PHONE_DISPLAY, WHATSAPP_NUMBER } from '../data/salesCopy';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormState {
  fullName: string;
  phone: string;
  location: string;
  crops: string;
  farmSize: string;
  expectedQuantity: string;
  harvestPeriod: string;
}

const initialFormState: FormState = {
  fullName: '',
  phone: '',
  location: '',
  crops: '',
  farmSize: '',
  expectedQuantity: '',
  harvestPeriod: '',
};

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [referenceNumber, setReferenceNumber] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const nextErrors: Partial<FormState> = {};
    if (!form.fullName.trim()) nextErrors.fullName = 'Please enter your full name.';
    const cleanPhone = form.phone.replace(/\s+/g, '');
    if (!cleanPhone || !/^\+?\d{10,15}$/.test(cleanPhone)) {
      nextErrors.phone = 'Enter a valid 11-digit phone or WhatsApp number.';
    }
    if (!form.location.trim()) nextErrors.location = 'Please enter your community, LGA, and state.';
    if (!form.crops.trim()) nextErrors.crops = 'Please list the crop(s) you are growing.';
    if (!form.expectedQuantity.trim()) {
      nextErrors.expectedQuantity = 'Estimate your expected harvest quantity (e.g. 200kg, 2 tonnes).';
    }
    if (!form.harvestPeriod.trim()) {
      nextErrors.harvestPeriod = 'Enter your expected harvest month or period.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const suffix = Math.floor(1000 + Math.random() * 9000);
    setReferenceNumber(`AV-FMA-${suffix}`);
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      'Hello AgroVision, I would like to register my farm (Free):',
      referenceNumber ? `Ref: ${referenceNumber}` : '',
      `Name: ${form.fullName}`,
      `Phone: ${form.phone}`,
      `Location: ${form.location}`,
      `Crops: ${form.crops}`,
      form.farmSize ? `Farm Size: ${form.farmSize}` : '',
      `Expected Quantity: ${form.expectedQuantity}`,
      `Harvest Period: ${form.harvestPeriod}`,
    ].filter(Boolean);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const handleCopySummary = async () => {
    const summary = [
      `AgroVision Reference: ${referenceNumber}`,
      `Name: ${form.fullName}`,
      `Phone: ${form.phone}`,
      `Location: ${form.location}`,
      `Crops: ${form.crops}`,
      form.farmSize ? `Farm Size: ${form.farmSize}` : '',
      `Expected Quantity: ${form.expectedQuantity}`,
      `Harvest Period: ${form.harvestPeriod}`,
    ]
      .filter(Boolean)
      .join('\n');

    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleResetAndClose = () => {
    setForm(initialFormState);
    setErrors({});
    setReferenceNumber(null);
    setCopied(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#102A43]/60 backdrop-blur-xs p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-heading"
    >
      <div className="relative w-full max-w-xl bg-white border border-[#E2E8F0] rounded-xl shadow-lg p-6 sm:p-8 my-auto">
        <button
          type="button"
          onClick={handleResetAndClose}
          aria-label="Close registration form"
          className="absolute top-5 right-5 inline-flex items-center justify-center w-10 h-10 rounded-lg text-[#475569] hover:text-[#102A43] hover:bg-[#F4F8F6] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D9488]"
        >
          <X className="w-5 h-5" />
        </button>

        {!referenceNumber ? (
          <>
            <div className="pr-10 mb-6">
              <p className="text-xs font-medium text-[#0D9488] mb-1">
                Free Farmer Registration
              </p>
              <h2
                id="modal-heading"
                className="text-2xl font-bold text-[#102A43] tracking-tight"
              >
                Register Your Farm &amp; Expected Harvest
              </h2>
              <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                No upfront registration fee. Share your harvest details below to prepare your WhatsApp registration or call{' '}
                <a
                  href={`tel:${PHONE_DISPLAY}`}
                  className="font-semibold text-[#0F766E] underline underline-offset-2"
                >
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="reg-name" className="block text-sm font-medium text-[#102A43] mb-1.5">
                    Full Name <span className="text-[#0D9488]">*</span>
                  </label>
                  <input
                    id="reg-name"
                    type="text"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    placeholder="e.g. Musa Ibrahim"
                    className="w-full rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2.5 text-sm text-[#102A43] placeholder:text-[#94A3B8] focus:border-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-700">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="reg-phone" className="block text-sm font-medium text-[#102A43] mb-1.5">
                    Phone / WhatsApp Number <span className="text-[#0D9488]">*</span>
                  </label>
                  <input
                    id="reg-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="e.g. 08031234567"
                    className="w-full rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2.5 text-sm text-[#102A43] placeholder:text-[#94A3B8] focus:border-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-700">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="reg-location" className="block text-sm font-medium text-[#102A43] mb-1.5">
                  Location (Community, LGA &amp; State) <span className="text-[#0D9488]">*</span>
                </label>
                <input
                  id="reg-location"
                  type="text"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  placeholder="e.g. Gboko, Benue State"
                  className="w-full rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2.5 text-sm text-[#102A43] placeholder:text-[#94A3B8] focus:border-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20"
                />
                {errors.location && (
                  <p className="mt-1 text-xs text-red-700">{errors.location}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="reg-crops" className="block text-sm font-medium text-[#102A43] mb-1.5">
                    Crop(s) Grown <span className="text-[#0D9488]">*</span>
                  </label>
                  <input
                    id="reg-crops"
                    type="text"
                    value={form.crops}
                    onChange={(e) => setForm({ ...form, crops: e.target.value })}
                    placeholder="e.g. Soybeans, Maize"
                    className="w-full rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2.5 text-sm text-[#102A43] placeholder:text-[#94A3B8] focus:border-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20"
                  />
                  {errors.crops && (
                    <p className="mt-1 text-xs text-red-700">{errors.crops}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="reg-size" className="block text-sm font-medium text-[#102A43] mb-1.5">
                    Farm Size (Optional)
                  </label>
                  <input
                    id="reg-size"
                    type="text"
                    value={form.farmSize}
                    onChange={(e) => setForm({ ...form, farmSize: e.target.value })}
                    placeholder="e.g. 2 Hectares"
                    className="w-full rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2.5 text-sm text-[#102A43] placeholder:text-[#94A3B8] focus:border-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="reg-qty" className="block text-sm font-medium text-[#102A43] mb-1.5">
                    Expected Quantity <span className="text-[#0D9488]">*</span>
                  </label>
                  <input
                    id="reg-qty"
                    type="text"
                    value={form.expectedQuantity}
                    onChange={(e) => setForm({ ...form, expectedQuantity: e.target.value })}
                    placeholder="e.g. 200kg or 15 bags"
                    className="w-full rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2.5 text-sm text-[#102A43] placeholder:text-[#94A3B8] focus:border-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20"
                  />
                  {errors.expectedQuantity && (
                    <p className="mt-1 text-xs text-red-700">{errors.expectedQuantity}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="reg-period" className="block text-sm font-medium text-[#102A43] mb-1.5">
                    Expected Harvest Period <span className="text-[#0D9488]">*</span>
                  </label>
                  <input
                    id="reg-period"
                    type="text"
                    value={form.harvestPeriod}
                    onChange={(e) => setForm({ ...form, harvestPeriod: e.target.value })}
                    placeholder="e.g. Late November"
                    className="w-full rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2.5 text-sm text-[#102A43] placeholder:text-[#94A3B8] focus:border-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20"
                  />
                  {errors.harvestPeriod && (
                    <p className="mt-1 text-xs text-red-700">{errors.harvestPeriod}</p>
                  )}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0F766E] text-white text-sm font-semibold hover:bg-[#0D9488] transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E]"
                >
                  Prepare My Free Registration
                </button>
                <a
                  href={`tel:${PHONE_DISPLAY}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[#E2E8F0] bg-[#F4F8F6] text-sm font-medium text-[#102A43] hover:border-[#0D9488] transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-[#0D9488]" />
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </form>
          </>
        ) : (
          <div className="py-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F4F8F6] border border-[#E2E8F0] mb-4">
              <CheckCircle2 className="w-6 h-6 text-[#0D9488]" />
            </div>
            <h2 id="modal-heading" className="text-2xl font-bold text-[#102A43]">
              Registration Summary Ready
            </h2>
            <p className="mt-2 text-sm text-[#475569] leading-relaxed">
              Send your details directly to AgroVision on WhatsApp so our team can confirm your official record and begin your market preparation.
            </p>

            <div className="mt-5 rounded-lg border border-[#E2E8F0] bg-[#F4F8F6] p-4 space-y-2 text-sm">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-2">
                <span className="text-[#475569]">Draft Reference</span>
                <span className="font-mono font-semibold text-[#102A43] tabular-nums">
                  {referenceNumber}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#475569]">Farmer</span>
                <span className="font-medium text-[#102A43]">{form.fullName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#475569]">Location</span>
                <span className="font-medium text-[#102A43]">{form.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#475569]">Crop &amp; Quantity</span>
                <span className="font-medium text-[#102A43]">
                  {form.crops} ({form.expectedQuantity})
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#475569]">Harvest Period</span>
                <span className="font-medium text-[#102A43]">{form.harvestPeriod}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={buildWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0F766E] text-white text-sm font-semibold hover:bg-[#0D9488] transition-colors whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4" />
                Send on WhatsApp Now
              </a>
              <button
                type="button"
                onClick={handleCopySummary}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[#E2E8F0] bg-white text-sm font-medium text-[#102A43] hover:bg-[#F4F8F6] transition-colors cursor-pointer whitespace-nowrap"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#0D9488]" />
                    Copied Details
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#475569]" />
                    Copy Summary
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
