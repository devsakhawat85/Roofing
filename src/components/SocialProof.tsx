import React from 'react';
import { ShieldCheck, Award, TrendingUp, CheckCircle } from 'lucide-react';
import { CONTRACTOR_LOGOS, PROOF_STATS } from '../data/marketingContent';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const SocialProof: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section 
      ref={ref}
      className={`relative border-y border-white/10 bg-[#0c0c0c] py-14 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Quantitative Proof Stats in Glassmorphism Panels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pb-12 border-b border-white/5">
          {PROOF_STATS.map((stat, idx) => (
            <div 
              key={idx} 
              className="glass-card card-hover-lift rounded-2xl p-6 relative overflow-hidden group"
            >
              {/* Subtle top indicator line with alternating amber & electric blue */}
              <div 
                className={`absolute top-0 left-0 right-0 h-1 ${
                  idx % 2 === 0 ? 'bg-gradient-to-r from-amber-500 to-amber-300' : 'bg-gradient-to-r from-blue-500 to-cyan-400'
                }`} 
              />

              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tabular-nums tracking-tight">
                <span className={idx % 2 === 0 ? 'amber-gradient-text' : 'blue-gradient-text'}>
                  {stat.metric}
                </span>
              </div>
              <div className="mt-2 text-sm sm:text-base font-bold text-white leading-tight">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-slate-400">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Logos & Verification Banner */}
        <div className="pt-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 text-center lg:text-left shrink-0">
              Trusted by Premier Roofing Contractors Across North America
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 sm:gap-4">
              {CONTRACTOR_LOGOS.map((contractor, idx) => (
                <div 
                  key={idx}
                  className="glass-card card-hover-lift rounded-xl px-4 py-2.5 flex items-center gap-3 group"
                >
                  <div className="h-7 w-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-200 group-hover:text-amber-400 transition-colors">
                      {contractor.name}
                    </div>
                    <div className="text-[10px] text-slate-500">
                      {contractor.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
