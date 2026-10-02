import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  Quote, 
  CheckCircle2
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import founderPhoto from '../assets/images/founder_headshot_1790936908432.jpg';

interface TeamSectionProps {
  onOpenModal: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenModal }) => {
  const { ref, isVisible } = useScrollReveal(0.08);

  const teamMembers = [
    {
      name: "Elena Rostova",
      role: "Head of Technical SEO & Maps Optimization",
      focus: "Google 3-Pack Algorithm & GBP Territory Authority",
      initials: "ER",
      accent: "blue",
    },
    {
      name: "David Chen",
      role: "Conversion & Inbound Funnel Architect",
      focus: "High-Margin Estimate Capture & Mobile UX Audits",
      initials: "DC",
      accent: "amber",
    },
    {
      name: "Sarah Jenkins",
      role: "Paid Acquisition & Geo-Targeting Specialist",
      focus: "High-Intent Emergency Storm & Replacement Funnels",
      initials: "SJ",
      accent: "blue",
    },
  ];

  return (
    <section 
      id="team" 
      ref={ref}
      className={`relative py-24 md:py-36 bg-[#0A0A0A] overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Ambient background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/10 via-blue-500/10 to-transparent blur-[160px] rounded-full" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-400">
            Dedicated Industry Specialists
          </div>

          {/* EXACT TITLE */}
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            Level Up Roofer Marketing
          </h2>

          {/* EXACT TEAM STATEMENT */}
          <p className="text-base sm:text-xl text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Our team is passionate about helping Roofing business owners get more leads, make more sales, and increase their revenues by using proven, profitable, and results-driven online marketing strategies.
          </p>
        </div>

        {/* FEATURED FOUNDER SPOTLIGHT CARD */}
        <div className="mt-14 mx-auto max-w-4xl">
          <div className="glass-card card-hover-lift rounded-3xl p-6 sm:p-10 border border-amber-500/30 relative overflow-hidden group">
            {/* Top amber accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600" />
            
            <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10">
              {/* Founder Photo Frame */}
              <div className="relative shrink-0">
                {/* Glow aura */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-500/35 via-amber-400/20 to-blue-500/30 blur-md opacity-80 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-2xl overflow-hidden border-2 border-amber-500/40 bg-slate-900 shadow-2xl">
                  <img
                    src={founderPhoto}
                    alt="Founder & Lead Roofer Strategist - Level Up Roofer Marketing"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Corner Verified Badge */}
                  <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-md rounded-lg p-1.5 border border-amber-500/40 text-amber-400 shadow-lg pointer-events-none">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Bio Details */}
              <div className="space-y-4 text-center md:text-left flex-1">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 rounded-md bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Agency Founder & Lead Strategist
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
                    Founder & Lead Strategist
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-400 font-semibold">
                    12+ Years Roofing Local SEO & Revenue Growth Systems
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  "Having worked side-by-side with dozens of commercial and residential roofing contractors, I built Level Up Roofer Marketing around one non-negotiable metric: real signed roofing contracts. We don't sell vanity traffic—we engineer predictable territory dominance so you become the #1 roofer in your market."
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    Personally Reviews Every Strategy Session
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    Strict Territorial Non-Compete
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HIGHLIGHTED MISSION STATEMENT QUOTE BLOCK */}
        <div className="mt-14 mx-auto max-w-4xl">
          <div className="relative rounded-3xl border border-white/10 glass-card p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden group">
            {/* Illuminated border accents */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-blue-500" />
            
            <Quote className="w-12 h-12 text-amber-400/40 mx-auto mb-4" />
            
            {/* EXACT MISSION STATEMENT */}
            <blockquote className="font-display text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-snug text-balance">
              "Our mission as a company is to help{" "}
              <span className="amber-gradient-text">100 Roofers</span> double their revenue in the next 5 years."
            </blockquote>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Strict 1-Roofer Per Metro Exclusivity</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5">
                <Award className="w-4 h-4 text-blue-400" />
                <span>100% Focused on Roofing Industry</span>
              </div>
            </div>
          </div>
        </div>

        {/* Senior Specialists Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="glass-card card-hover-lift rounded-3xl p-7 relative overflow-hidden"
            >
              <div className="flex items-center gap-4">
                <div className={`h-14 w-14 rounded-2xl flex items-center justify-center font-display text-lg font-bold shrink-0 border ${
                  member.accent === 'amber'
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.2)]'
                    : 'bg-blue-500/10 border-blue-500/30 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.2)]'
                }`}>
                  {member.initials}
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-white">
                    {member.name}
                  </h4>
                  <p className={`text-xs font-semibold mt-0.5 ${
                    member.accent === 'amber' ? 'text-amber-400' : 'text-blue-400'
                  }`}>
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 text-xs text-slate-400">
                <span className="text-slate-500">Core Specialty: </span>
                {member.focus}
              </div>
            </div>
          ))}
        </div>

        {/* EXACT COMMITMENT & CONCLUSION PARAGRAPHS */}
        <div className="mt-14 max-w-2xl mx-auto text-center space-y-4">
          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
            We stand behind our services and results and we are committed to getting you the best results you've ever had.
          </p>
          <p className="text-xl sm:text-2xl font-bold text-amber-400">
            We look forward to helping you take your Roofing business to the next level!
          </p>

          <div className="pt-4">
            <button
              onClick={onOpenModal}
              className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 px-8 py-4 text-base font-bold text-slate-950 transition-all duration-300 hover:from-amber-400 hover:to-amber-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] active:scale-95 cursor-pointer"
            >
              <span>Work With Our Team</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
