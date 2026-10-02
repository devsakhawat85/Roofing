import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Building, Phone, Mail, User, Globe, Calendar } from 'lucide-react';

interface StrategySessionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (data: { name: string; email: string; phone: string; company: string }) => void;
}

export const StrategySessionModal: React.FC<StrategySessionModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    serviceArea: '',
    name: '',
    email: '',
    phone: '',
    revenue: '$500k - $1M / year',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.company) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setSubmitted(true);
    onSuccess(formData);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-6 sm:p-8 shadow-2xl glass-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-xl p-2 text-slate-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-fadeIn">
            <div className="h-16 w-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">
              Territory Session Reserved for {formData.company}!
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              We have initiated your 5-part audit (Valued at $685). Our lead roofing strategist will call you at <span className="font-mono text-amber-400 font-bold">{formData.phone}</span> within 24 hours to review your customized game plan.
            </p>
            <div className="pt-3">
              <button
                onClick={onClose}
                className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 px-6 py-2.5 text-xs font-bold text-slate-950 hover:from-amber-400 hover:to-amber-300 transition-colors cursor-pointer"
              >
                Close & Return to Overview
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="space-y-1.5 pr-8 pb-5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  100% Free Strategy Session
                </span>
                <span className="text-[11px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-md font-mono font-bold">
                  $685 VALUE · FREE
                </span>
              </div>
              <h3 className="font-display text-2xl font-black text-white">
                Claim Your Custom Roofing Blueprint
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                A customized marketing game plan unique to your business designed to help you generate more leads, customers, and sales.
              </p>
            </div>

            {error && (
              <div className="mt-4 rounded-xl bg-red-500/10 border border-red-500/30 p-3 text-xs text-red-300">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                    Roofing Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Peak Roofing"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                    Website URL
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. www.apexpeakroofing.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                    Service Area (City / County / State) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Charlotte, NC & surrounding"
                    value={formData.serviceArea}
                    onChange={(e) => setFormData({ ...formData, serviceArea: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                    Annual Revenue Range
                  </label>
                  <select
                    value={formData.revenue}
                    onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-3.5 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none"
                  >
                    <option value="Under $500k">Under $500,000 / year</option>
                    <option value="$500k - $1M / year">$500,000 - $1,000,000 / year</option>
                    <option value="$1M - $3M / year">$1,000,000 - $3,000,000 / year</option>
                    <option value="$3M - $10M / year">$3,000,000+ / year</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                    Direct Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. (984) 360-9840"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@apexpeakroofing.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-black/60 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 py-4 px-6 text-sm font-bold text-slate-950 transition-all hover:from-amber-400 hover:to-amber-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] active:scale-95 cursor-pointer"
                >
                  <span>Submit Application (100% Free · $685 Value)</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-5 text-[11px] text-slate-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  Territory Exclusive Lock
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  Zero Pressure Consultation
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
