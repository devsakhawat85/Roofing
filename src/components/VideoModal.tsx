import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, CheckCircle, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClaimOffer: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onClaimOffer }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [progress, setProgress] = useState(15);

  const chapters = [
    { time: "0:00", title: "The #1 Reason Roofer Websites Fail to Convert", highlight: "Missing high-intent emergency & estimate search triggers" },
    { time: "1:15", title: "The Google 3-Pack Territory Domination Method", highlight: "How 1 roofer captures 68% of local replacement calls" },
    { time: "2:30", title: "The $685 Blueprint: Step-by-Step Walkthrough", highlight: "Getting keywords, technical review, and territorial lock" },
  ];

  // Auto increment simulated progress
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        const next = prev + 1;
        if (next > 70) setActiveChapter(2);
        else if (next > 35) setActiveChapter(1);
        else setActiveChapter(0);
        return next;
      });
    }, 400);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] shadow-2xl glass-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-[#080808]">
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Executive Briefing: Roofing Revenue Engine
            </span>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Container */}
        <div className="relative aspect-video w-full bg-black overflow-hidden flex flex-col justify-between p-6">
          {/* Simulated Video Slide / Presentation Content */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#070707] via-[#111116] to-[#161a26] flex items-center justify-center p-6 text-center">
            {/* Visual Grid Backdrop */}
            <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
            
            <div className="relative z-10 max-w-xl mx-auto space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Chapter {activeChapter + 1} of 3 · {chapters[activeChapter].time}
              </span>
              <h4 className="font-display text-2xl sm:text-3xl font-extrabold text-white text-balance leading-tight">
                {chapters[activeChapter].title}
              </h4>
              <p className="text-sm sm:text-base text-slate-300 font-medium">
                {chapters[activeChapter].highlight}
              </p>

              {/* Visual simulated metrics card */}
              <div className="mx-auto mt-4 max-w-md rounded-2xl border border-amber-500/20 bg-black/70 p-4 backdrop-blur-md">
                <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-white/10">
                  <span>Territory Call Rate Impact</span>
                  <span className="text-emerald-400 font-bold tabular-nums">+312% Verified</span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white">Local Money Keyword Domination</div>
                    <div className="text-[11px] text-slate-400">#1 Maps Ranking for Replacement & Storm Repairs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Control Bar */}
          <div className="relative z-20 mt-auto bg-black/85 backdrop-blur-xl rounded-2xl p-3.5 border border-white/10">
            {/* Progress bar */}
            <div className="relative w-full h-1.5 bg-white/20 rounded-full mb-3 cursor-pointer overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-300 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="rounded p-1 text-white hover:text-amber-400 transition-colors cursor-pointer"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="rounded p-1 text-white hover:text-amber-400 transition-colors cursor-pointer"
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="tabular-nums font-mono text-[11px] text-slate-400">
                  {chapters[activeChapter].time} / 3:42
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline text-[11px] text-slate-400">
                  High Definition 1080p
                </span>
                <span className="rounded-md bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-300 border border-amber-500/30">
                  Exclusive Briefing
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Callout with Action */}
        <div className="bg-[#0a0a0a] p-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-white">
              Ready to claim your custom territorial blueprint?
            </div>
            <div className="text-xs text-slate-400">
              The 100% Free Business Growth Strategy Session is valued at $685.
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onClaimOffer();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 px-7 py-3.5 text-sm font-bold text-slate-950 transition-all hover:from-amber-400 hover:to-amber-300 hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] active:scale-95 cursor-pointer"
          >
            <span>Claim Your Free Strategy Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
