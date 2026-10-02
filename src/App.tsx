import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VideoModal } from './components/VideoModal';
import { SocialProof } from './components/SocialProof';
import { ValueStack } from './components/ValueStack';
import { RoiCalculator } from './components/RoiCalculator';
import { TeamSection } from './components/TeamSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { StrategySessionModal } from './components/StrategySessionModal';
import { Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleApplicationSuccess = (data: { name: string; company: string }) => {
    setToastMessage(`Strategy Session application submitted for ${data.company}!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#f3f4f6] flex flex-col selection:bg-amber-500/25 selection:text-amber-300">
      {/* Top sticky navigation adhering strictly to Top Bar contract */}
      <Header onOpenModal={() => setIsApplyModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with exact headline, subheadline, video preview, primary CTA */}
        <Hero 
          onOpenVideo={() => setIsVideoModalOpen(true)}
          onOpenModal={() => setIsApplyModalOpen(true)}
        />

        {/* Verified Social Proof & Metrics */}
        <SocialProof />

        {/* Value Stack: 5 Deliverables ($685 Total Value -> 100% FREE) */}
        <ValueStack onOpenModal={() => setIsApplyModalOpen(true)} />

        {/* Interactive Roofer Revenue ROI Calculator */}
        <RoiCalculator onOpenModal={() => setIsApplyModalOpen(true)} />

        {/* Meet The Team & Highlighted Mission Statement Block */}
        <TeamSection onOpenModal={() => setIsApplyModalOpen(true)} />

        {/* Final High-Converting CTA & Embedded Application */}
        <FinalCta onSuccess={handleApplicationSuccess} />
      </main>

      {/* Clean Footer with exact copyright and direct phone */}
      <Footer onOpenModal={() => setIsApplyModalOpen(true)} />

      {/* Interactive Video Presentation Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onClaimOffer={() => setIsApplyModalOpen(true)}
      />

      {/* Application / Strategy Session Modal */}
      <StrategySessionModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        onSuccess={handleApplicationSuccess}
      />

      {/* Success Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2.5 rounded-2xl border border-emerald-500/40 bg-[#0c0c0c]/90 px-5 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-2xl backdrop-blur-xl animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Mobile Sticky Action Bar (Strictly capped under 15% mobile viewport height) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 border-t border-white/10 bg-[#0A0A0A]/95 backdrop-blur-xl p-3 flex items-center gap-2">
        <a
          href="tel:984-360-9840"
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 py-2.5 text-xs font-semibold text-white active:bg-white/10"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>Call 984-360-9840</span>
        </a>
        <button
          onClick={() => setIsApplyModalOpen(true)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 py-2.5 text-xs font-bold text-slate-950 active:scale-95"
        >
          <span>Claim Free Session</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
        </button>
      </div>
    </div>
  );
}
