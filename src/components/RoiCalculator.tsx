import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, Sparkles, DollarSign } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface RoiCalculatorProps {
  onOpenModal: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenModal }) => {
  const [avgTicket, setAvgTicket] = useState<number>(12500);
  const [currentLeads, setCurrentLeads] = useState<number>(14);
  const [closeRate, setCloseRate] = useState<number>(30); // 30%
  const [targetMultiplier, setTargetMultiplier] = useState<number>(2.5); // 2.5x

  const { ref, isVisible } = useScrollReveal(0.08);

  const newLeads = Math.round(currentLeads * targetMultiplier);
  const additionalLeads = newLeads - currentLeads;
  
  const additionalJobsPerMonth = Math.round((additionalLeads * (closeRate / 100)) * 10) / 10;
  const additionalMonthlyRevenue = Math.round(additionalJobsPerMonth * avgTicket);
  const additionalAnnualRevenue = additionalMonthlyRevenue * 12;

  return (
    <section 
      id="calculator" 
      ref={ref}
      className={`relative py-24 md:py-36 bg-[#0c0c0c] border-y border-white/10 overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Subtle ambient light */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold text-blue-400">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Growth Model</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            Calculate Your Roofing Revenue Potential
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            See the exact financial impact of turning your website and local search presence into an inbound sales generator.
          </p>
        </div>

        <div className="mt-14 mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sliders Glassmorphism Control Panel */}
          <div className="lg:col-span-7 glass-card card-hover-lift rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center justify-between">
              <span>Your Current Business Metrics</span>
              <span className="text-xs text-blue-400 font-semibold">Live Simulation</span>
            </h3>

            {/* Slider 1: Average Job Ticket */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="text-slate-300 font-medium">Average Roof Replacement Ticket</label>
                <span className="font-mono font-bold text-amber-400 text-base tabular-nums">
                  ${avgTicket.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="6000"
                max="25000"
                step="500"
                value={avgTicket}
                onChange={(e) => setAvgTicket(Number(e.target.value))}
                className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>$6,000 (Repairs/Asphalt)</span>
                <span>$25,000+ (Slate/Metal/Commercial)</span>
              </div>
            </div>

            {/* Slider 2: Current Monthly Inbound Leads */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="text-slate-300 font-medium">Current Monthly Inbound Leads</label>
                <span className="font-mono font-bold text-blue-400 text-base tabular-nums">
                  {currentLeads} Leads / mo
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="50"
                step="1"
                value={currentLeads}
                onChange={(e) => setCurrentLeads(Number(e.target.value))}
                className="w-full accent-blue-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>3 leads/mo</span>
                <span>50 leads/mo</span>
              </div>
            </div>

            {/* Slider 3: Close Rate */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="text-slate-300 font-medium">Estimate-to-Signed Contract Rate</label>
                <span className="font-mono font-bold text-amber-400 text-base tabular-nums">
                  {closeRate}%
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="60"
                step="5"
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>15% (Competitive bid)</span>
                <span>60% (High trust authority)</span>
              </div>
            </div>

            {/* Slider 4: Target Multiplier */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="text-slate-300 font-medium">Strategy Target Multiplier</label>
                <span className="font-mono font-bold text-emerald-400 text-base tabular-nums">
                  {targetMultiplier}x Pipeline Lift
                </span>
              </div>
              <input
                type="range"
                min="1.5"
                max="4.0"
                step="0.5"
                value={targetMultiplier}
                onChange={(e) => setTargetMultiplier(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>1.5x Conservative</span>
                <span>4.0x Full Market Domination</span>
              </div>
            </div>
          </div>

          {/* Results Projection Card with Glassmorphic Bezel & Glowing Accents */}
          <div className="lg:col-span-5 glass-card card-hover-lift rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-amber-500/40">
            <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-amber-500/15 to-blue-500/15 blur-2xl pointer-events-none rounded-full" />

            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Projected Growth Output
            </div>
            
            <div className="mt-4 pb-6 border-b border-white/10 space-y-1">
              <div className="text-xs text-slate-400 font-medium">
                Additional Annual Pipeline Revenue
              </div>
              <div className="font-display text-4xl sm:text-5xl font-black text-white tabular-nums tracking-tight">
                ${additionalAnnualRevenue.toLocaleString()}
              </div>
              <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5 pt-1.5">
                <TrendingUp className="w-4 h-4" />
                <span>+${additionalMonthlyRevenue.toLocaleString()} / month in signed jobs</span>
              </div>
            </div>

            {/* Breakdown Highlights */}
            <div className="py-6 space-y-3.5 text-xs sm:text-sm text-slate-300 border-b border-white/10">
              <div className="flex justify-between">
                <span className="text-slate-400">Projected Monthly Leads:</span>
                <span className="font-bold text-white font-mono tabular-nums">{newLeads} leads (+{additionalLeads})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Extra Closed Roof Jobs:</span>
                <span className="font-bold text-white font-mono tabular-nums">~{additionalJobsPerMonth} jobs/month</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Avg Job Ticket Basis:</span>
                <span className="font-bold text-white font-mono tabular-nums">${avgTicket.toLocaleString()}</span>
              </div>
            </div>

            <div className="pt-6 space-y-3">
              <button
                onClick={onOpenModal}
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 py-4 px-6 text-base font-bold text-slate-950 transition-all duration-300 hover:from-amber-400 hover:to-amber-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] active:scale-95 cursor-pointer"
              >
                <span>Unlock This Plan For Your Area</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
              <div className="text-[11px] text-center text-slate-400">
                100% Free Strategy Session ($685 value) · No Contract Required
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
