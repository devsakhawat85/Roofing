import React, { useState } from 'react';
import { Play, ArrowRight, Sparkles, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import heroRoofingImg from '../assets/images/hero_roofing_craft_1790934952747.jpg';

interface HeroProps {
  onOpenVideo: () => void;
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVideo, onOpenModal }) => {
  const [imageError, setImageError] = useState(false);
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <section 
      ref={ref}
      className={`relative pt-16 pb-24 md:pt-24 md:pb-36 overflow-hidden hero-gradient-mesh transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Dynamic ambient electric & amber glow orbs */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-48 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-amber-500/20 to-orange-600/10 blur-[150px] rounded-full" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-12 right-1/4 w-[550px] h-[550px] bg-gradient-to-bl from-blue-600/18 to-cyan-500/10 blur-[150px] rounded-full" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {/* Subtle Award-Style Kicker with Electric Blue & Amber Accents */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl px-4 py-1.5 text-xs font-semibold text-slate-200 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-400 font-bold">Roofing Inbound Growth Blueprint</span>
            <span className="text-white/20">|</span>
            <span className="text-blue-400 font-medium">100 Roofer Mission</span>
          </div>

          {/* EXACT HEADLINE: 72px+ on desktop as requested */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black tracking-[-0.035em] text-white leading-[1.04] text-balance">
            Are you ready to take your{" "}
            <span className="amber-gradient-text inline-block">Roofing Business</span>{" "}
            to the <span className="blue-gradient-text inline-block">next level?</span>
          </h1>

          {/* EXACT SUBHEADLINE */}
          <p className="mx-auto max-w-3xl text-lg sm:text-2xl text-slate-300 font-medium leading-relaxed text-balance">
            This Quick Video Reveals An Easy Way To Get More Leads, Customers, and Sales... FAST!
          </p>

          {/* Primary CTA and video trigger */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 px-8 py-4 sm:px-9 sm:py-4.5 text-base sm:text-lg font-bold text-slate-950 transition-all duration-300 hover:from-amber-400 hover:to-amber-300 hover:shadow-[0_0_40px_rgba(245,158,11,0.45)] hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <span>Claim Your Free Strategy Session</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </button>

            <button
              onClick={onOpenVideo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/[0.08] hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] hover:scale-[1.02] cursor-pointer"
            >
              <div className="h-7 w-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <span>Watch 3-Min Video Breakdown</span>
            </button>
          </div>

          {/* Micro Trust Indicators */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>100% Free ($685 Strategy Value)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>Strict 1-Roofer Per Metro Exclusivity</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>No High-Pressure Sales Pitch</span>
            </div>
          </div>
        </div>

        {/* Video Placeholder with Multi-Ring Pulsing Animation & Glass HUD */}
        <div className="mt-14 sm:mt-20 mx-auto max-w-5xl">
          <div 
            onClick={onOpenVideo}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-[#121212]/80 p-2 sm:p-3 backdrop-blur-2xl transition-all duration-500 hover:border-amber-500/40 hover:shadow-[0_30px_70px_-15px_rgba(245,158,11,0.25),0_0_50px_rgba(59,130,246,0.2)]"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
              {!imageError ? (
                <img
                  src={heroRoofingImg}
                  alt="Precision roofing installation by master contractors"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-tr from-black via-[#161616] to-[#1e1e24] flex items-center justify-center">
                  <div className="text-center p-8">
                    <TrendingUp className="w-12 h-12 text-amber-400 mx-auto mb-3" />
                    <div className="text-xl font-bold text-white">Roofing Revenue Engine Walkthrough</div>
                    <div className="text-sm text-slate-400 mt-1">Click to play high-converting video presentation</div>
                  </div>
                </div>
              )}

              {/* Scrim overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/30 group-hover:via-black/35 transition-all duration-300" />

              {/* Central Pulsing Play Button with Multiple Concentric Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  {/* Concentric Pulsing Ring 1 (Amber) */}
                  <span className="absolute h-36 w-36 rounded-full border-2 border-amber-500/40 animate-pulse-ring-slow" />
                  
                  {/* Concentric Pulsing Ring 2 (Electric Blue) */}
                  <span className="absolute h-28 w-28 rounded-full border-2 border-blue-500/45 animate-pulse-ring-fast" />

                  {/* Pulsing ambient glow blob */}
                  <span className="absolute h-24 w-24 rounded-full bg-gradient-to-tr from-amber-500/40 to-blue-500/40 blur-md" />

                  {/* Play Core Button with Glass Ring Bezel */}
                  <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-300 text-slate-950 flex items-center justify-center shadow-[0_0_35px_rgba(245,158,11,0.6)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(245,158,11,0.8)]">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                  </div>
                </div>
              </div>

              {/* Top Video HUD Badges */}
              <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-semibold text-slate-200">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
                  <span>Confidential Roofing Strategy</span>
                </div>

                <div className="rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md px-3 py-1 text-xs font-semibold text-blue-300">
                  4K Ultra HD
                </div>
              </div>

              {/* Bottom Video HUD Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 pointer-events-none">
                <div className="rounded-2xl border border-white/10 bg-black/75 backdrop-blur-xl p-4 max-w-lg shadow-2xl">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    High-Converting Case Breakdown
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white mt-0.5">
                    How We Help Roofing Contractors Generate Consistent High-Margin Inbound Leads
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto rounded-xl border border-white/10 bg-black/75 backdrop-blur-xl px-4 py-2 text-xs font-semibold text-slate-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="tabular-nums">3:42 Min Quick Video</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
