import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Building, 
  Mail, 
  User, 
  Phone, 
  Globe 
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FinalCtaProps {
  onSuccess: (data: { name: string; email: string; phone: string; company: string }) => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onSuccess }) => {
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
  const { ref, isVisible } = useScrollReveal(0.08);

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
    <section 
      id="apply" 
      ref={ref}
      className={`relative py-24 md:py-36 bg-[#0A0A0A] cta-gradient-mesh border-t border-white/10 overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Radiant ambient glow orbs */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-1/4 w-[600px] h-[600px] bg-blue-600/15 blur-[160px] rounded-full" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 left-1/3 w-[700px] h-[500px] bg-amber-500/15 blur-[160px] rounded-full" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Urgency Trigger */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 backdrop-blur-xl px-5 py-2 text-xs font-bold text-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.2)]">
            <Clock className="w-4 h-4" />
            <span>Strict Exclusivity: Only 3 Strategy Sessions Remaining This Month</span>
          </div>

          {/* EXACT FINAL CTA HEADLINE (Large & Bold) */}
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight text-balance leading-[1.06]">
            A Profit Producing Blueprint For YOUR Business, YOUR Website And YOUR Particular Area!
          </h2>

          {/* EXACT FINAL CTA VALUE ANCHOR */}
          <p className="text-xl sm:text-2xl text-amber-400 font-bold max-w-2xl mx-auto leading-relaxed text-balance">
            'The Business Growth Strategy Session' is valued at over $685 but is yours today for 100% free.
          </p>
        </div>

        {/* Application Card Form with Glassmorphism and Lift */}
        <div className="mt-14 mx-auto max-w-3xl rounded-3xl border border-white/10 glass-card card-hover-lift p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {submitted ? (
            <div className="text-center py-12 space-y-5 animate-fadeIn">
              <div className="h-18 w-18 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-display text-3xl font-bold text-white">
                Application Received for {formData.company}!
              </h3>
              <p className="text-slate-300 text-base max-w-md mx-auto leading-relaxed">
                Our growth team has reserved your territory for 48 hours. A senior strategist will review your website and reach out via phone at <span className="text-amber-400 font-mono font-bold">{formData.phone}</span> to schedule your 1-on-1 walkthrough.
              </p>
              <div className="pt-4">
                <div className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-5 py-2.5 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Territory Lock Confirmed for {formData.serviceArea || "Your Region"}</span>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-white/10 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Apply For Your Free Growth Session
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    Takes under 60 seconds. No credit card required.
                  </p>
                </div>
                <div className="text-xs font-mono font-black text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-lg border border-emerald-500/30 self-start sm:self-auto shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  $685 FEE WAIVED (100% FREE)
                </div>
              </div>

              {error && (
                <div className="rounded-xl bg-red-500/10 border border-red-500/30 p-3 text-xs text-red-300">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Company Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-amber-400" />
                    <span>Roofing Business Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Peak Roofing LLC"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                  />
                </div>

                {/* Website URL */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-blue-400" />
                    <span>Website URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. www.apexpeakroofing.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                {/* Service Area */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Primary Service Area (City, State) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Charlotte & Mecklenburg County, NC"
                    value={formData.serviceArea}
                    onChange={(e) => setFormData({ ...formData, serviceArea: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                  />
                </div>

                {/* Revenue */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Approximate Annual Revenue
                  </label>
                  <select
                    value={formData.revenue}
                    onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white focus:border-amber-500 focus:outline-none transition-colors"
                  >
                    <option value="Under $500k">Under $500,000 / year</option>
                    <option value="$500k - $1M / year">$500,000 - $1,000,000 / year</option>
                    <option value="$1M - $3M / year">$1,000,000 - $3,000,000 / year</option>
                    <option value="$3M - $10M / year">$3,000,000+ / year</option>
                  </select>
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-400" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    <span>Direct Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. (984) 360-9840"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>Work Email Address *</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@apexpeakroofing.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                />
              </div>

              {/* Primary CTA Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 py-4.5 px-8 text-base sm:text-lg font-bold text-slate-950 transition-all duration-300 hover:from-amber-400 hover:to-amber-300 hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] active:scale-[0.98] cursor-pointer"
                >
                  <span>Claim Your Free Strategy Session ($685 Value)</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Trust Subtext */}
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-slate-400 text-center">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  100% Privacy Protected
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  Zero Obligation or Pitch
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  Delivered in 48 Hours
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
