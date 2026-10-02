import React from 'react';
import { Phone, Mail, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { LevelUpLogo } from './LevelUpLogo';

interface FooterProps {
  onOpenModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="border-t border-white/10 bg-[#070707] py-16 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          {/* Brand Col with Official Logo */}
          <div className="md:col-span-6 space-y-4">
            <div className="inline-flex items-center">
              <LevelUpLogo size="xl" showText={false} />
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Helping Roofing contractors scale their business with proven, profitable, and results-driven online marketing strategies, local SEO, and territory dominance.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs">
              <a
                href="tel:984-360-9840"
                className="inline-flex items-center gap-2 font-bold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="tabular-nums font-mono text-sm">984-360-9840</span>
              </a>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">Toll-Free & Direct Contractor Line</span>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#deliverables" className="hover:text-amber-400 transition-colors">
                  What You Receive ($685 Stack)
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-blue-400 transition-colors">
                  Revenue Growth Calculator
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-amber-400 transition-colors">
                  Meet The Team & Mission
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenModal} 
                  className="hover:text-amber-400 text-left transition-colors cursor-pointer"
                >
                  Apply For Strategy Session
                </button>
              </li>
            </ul>
          </div>

          {/* Exclusivity Col */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Exclusivity Policy
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We operate on strict geographic market non-compete agreements. We only partner with 1 roofing company per designated metro area.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
              >
                <span>Check Territory Availability</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* EXACT FOOTER REQUIRED CONTENT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            Copyright 2024 - Level Up Roofer Marketing is a division of Heat Vision Media LLC - All Rights Reserved
          </p>
          <div className="flex items-center gap-3">
            <a href="tel:984-360-9840" className="text-amber-400 font-bold hover:underline font-mono">
              984-360-9840
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
