import React, { useState } from 'react';
import { Phone, ArrowUpRight, Menu, X } from 'lucide-react';
import { LevelUpLogo } from './LevelUpLogo';

interface HeaderProps {
  onOpenModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-24 sm:h-28 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Zone - Prominent Official Badge with NO duplicate text */}
        <a 
          href="#" 
          className="group inline-flex items-center transition-transform hover:scale-105 duration-200 shrink-0 py-1"
          aria-label="Level Up Roofer Marketing Home"
        >
          <LevelUpLogo size="xl" showText={false} />
        </a>

        {/* Zone 2: Navigation Links with Animated Underline */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-300">
          <a 
            href="#deliverables" 
            className="relative py-1 transition-colors hover:text-amber-400 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all hover:after:w-full"
          >
            What You Receive
          </a>
          <a 
            href="#calculator" 
            className="relative py-1 transition-colors hover:text-blue-400 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
          >
            ROI Calculator
          </a>
          <a 
            href="#team" 
            className="relative py-1 transition-colors hover:text-amber-400 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all hover:after:w-full"
          >
            Meet The Team
          </a>
          <a 
            href="#apply" 
            className="relative py-1 transition-colors hover:text-blue-400 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
          >
            Strategy Session
          </a>
        </nav>

        {/* Zone 3: Direct Contractor Phone & Primary High-Converting CTA */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <a
            href="tel:984-360-9840"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-slate-200 hover:text-white transition-colors py-2.5 px-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-amber-500/40 hover:bg-white/[0.07]"
            title="Call Our Lead Roofer Strategist Directly"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono tabular-nums tracking-wide">984-360-9840</span>
          </a>

          <button
            onClick={onOpenModal}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 bg-[length:200%_auto] px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-[right_center] hover:shadow-[0_0_25px_rgba(245,158,11,0.45)] hover:scale-[1.02] active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <span>Claim Free Session</span>
            <ArrowUpRight className="w-4 h-4 text-slate-950" />
          </button>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden rounded-xl border border-white/10 bg-white/[0.04] p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Slide-Down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#0A0A0A]/95 backdrop-blur-2xl px-6 py-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3 text-base font-semibold text-slate-200">
            <a 
              href="#deliverables" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              What You Receive ($685 Stack)
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400 transition-colors"
            >
              Revenue Growth Calculator
            </a>
            <a 
              href="#team" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Meet The Team & Mission
            </a>
            <a 
              href="#apply" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400 transition-colors"
            >
              Strategy Session Application
            </a>
          </nav>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="tel:984-360-9840"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-3 text-sm font-bold text-white active:bg-white/10"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call 984-360-9840</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 py-3 text-sm font-bold text-slate-950 active:scale-95"
            >
              <span>Claim Free Session ($685 Value)</span>
              <ArrowUpRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
