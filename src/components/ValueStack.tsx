import React, { useState } from 'react';
import { 
  KeyRound, 
  LineChart, 
  Gauge, 
  Target, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { VALUE_ITEMS } from '../data/marketingContent';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ValueStackProps {
  onOpenModal: () => void;
}

export const ValueStack: React.FC<ValueStackProps> = ({ onOpenModal }) => {
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const { ref, isVisible } = useScrollReveal(0.08);

  const getIcon = (id: number) => {
    switch (id) {
      case 1: return <KeyRound className="w-6 h-6 text-amber-400" />;
      case 2: return <LineChart className="w-6 h-6 text-blue-400" />;
      case 3: return <Gauge className="w-6 h-6 text-amber-400" />;
      case 4: return <Target className="w-6 h-6 text-blue-400" />;
      case 5: return <MapPin className="w-6 h-6 text-amber-400" />;
      default: return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section 
      id="deliverables" 
      ref={ref}
      className={`relative py-24 md:py-36 bg-[#0A0A0A] overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-l from-blue-600/10 to-transparent blur-[160px] rounded-full" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-r from-amber-500/10 to-transparent blur-[160px] rounded-full" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-400">
            Comprehensive Growth Deliverables
          </div>

          {/* EXACT SECTION TITLE */}
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight text-balance">
            Discover How To Get More Leads, Customers, and Sales...
          </h2>

          {/* EXACT OFFER COPY */}
          <div className="pt-2 space-y-2.5">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-amber-400 text-balance">
              Apply today for your 100% free: Business Growth Strategy Session
            </h3>
            <p className="text-base sm:text-xl text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed text-balance">
              A customized marketing game plan unique to your business designed to help you generate more leads, customers, and sales.
            </p>
          </div>
        </div>

        {/* Value Anchor Summary Glassmorphism Ledger */}
        <div className="mt-14 mx-auto max-w-4xl rounded-3xl border border-white/10 glass-card p-6 sm:p-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400">
                5-Part Tailored Deliverable Stack
              </div>
              <div className="font-display text-xl sm:text-2xl font-bold text-white">
                Everything Included in Your 1-on-1 Consultation
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                Real custom audit files prepared specifically for your exact roofing company and service radius.
              </p>
            </div>

            <div className="flex items-center gap-5 bg-black/60 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10 shrink-0">
              <div className="text-right">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Total Market Value
                </div>
                <div className="text-lg line-through text-slate-500 font-bold tabular-nums">
                  $685.00
                </div>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <div className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                  Yours Today
                </div>
                <div className="font-display text-3xl font-black text-emerald-400 tabular-nums">
                  100% FREE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Deliverables Cards with Glassmorphism and -8px Hover Lift */}
        <div className="mt-10 space-y-4 max-w-4xl mx-auto">
          {VALUE_ITEMS.map((item, idx) => {
            const isExpanded = expandedId === item.id;
            const isAmber = idx % 2 === 0;

            return (
              <div
                key={item.id}
                className={`glass-card card-hover-lift rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'border-amber-500/50 bg-[#16161c]/80 shadow-[0_20px_45px_-10px_rgba(245,158,11,0.2)]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className="p-6 sm:p-7 flex items-start sm:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                    {/* Index & Dual-tone Icon */}
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-mono text-xs font-bold text-slate-500 tabular-nums">
                        0{item.id}.
                      </span>
                      <div className={`h-13 w-13 rounded-2xl flex items-center justify-center shrink-0 border ${
                        isAmber 
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' 
                          : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                      }`}>
                        {getIcon(item.id)}
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h4 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {item.title}
                        </h4>
                        <span className={`inline-block rounded-lg px-3 py-1 text-xs font-black tabular-nums border ${
                          isAmber
                            ? 'bg-amber-500/15 border-amber-500/35 text-amber-300'
                            : 'bg-blue-500/15 border-blue-500/35 text-blue-300'
                        }`}>
                          Valued at ${item.value}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 font-medium mt-1">
                        {item.badge}
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 pt-1 sm:pt-0">
                    <button 
                      aria-label="Toggle deliverable details"
                      className="rounded-xl p-2.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-amber-400" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* EXACT DESCRIPTION & Deliverable preview bullets */}
                {isExpanded && (
                  <div className="px-6 pb-7 sm:px-7 sm:pb-7 pt-2 border-t border-white/5 space-y-4 animate-fadeIn">
                    <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    <div className="rounded-2xl bg-black/50 border border-white/5 p-4 sm:p-5 space-y-2.5">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Included In Your Custom Strategy Blueprint:
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                        {item.previewPoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Section Conversion Banner */}
        <div className="mt-14 text-center max-w-xl mx-auto space-y-4">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 px-9 py-4.5 text-base sm:text-lg font-bold text-slate-950 transition-all duration-300 hover:from-amber-400 hover:to-amber-300 hover:shadow-[0_0_35px_rgba(245,158,11,0.45)] hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <span>Claim All 5 Deliverables (100% Free)</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <div className="text-xs text-slate-400">
            Strict Non-Compete: We only partner with 1 roofing contractor per metropolitan market.
          </div>
        </div>
      </div>
    </section>
  );
};
