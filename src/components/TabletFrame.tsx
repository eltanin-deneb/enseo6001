import React from 'react';
import { Home, Sparkles, HelpCircle } from 'lucide-react';
import { AudioPlayerWidget } from './AudioPlayerWidget';

interface TabletFrameProps {
  children: React.ReactNode;
  title?: string;
  onGoHome?: () => void;
  showHomeButton?: boolean;
  relationshipScore?: number;
  stageProgress?: { current: number; total: number };
}

export const TabletFrame: React.FC<TabletFrameProps> = ({
  children,
  title = '사춘기를 부탁해',
  onGoHome,
  showHomeButton = false,
  relationshipScore,
  stageProgress,
}) => {
  return (
    <div className="min-h-screen w-full bg-slate-900 flex items-center justify-center p-2 sm:p-4 md:p-6 select-none overflow-x-hidden">
      {/* Tablet Device Simulation Frame (Landscape Optimized) */}
      <div className="w-full max-w-[1180px] min-h-[640px] max-h-[880px] bg-slate-100 rounded-[28px] md:rounded-[36px] p-3 sm:p-5 shadow-2xl border-[8px] md:border-[12px] border-slate-800 flex flex-col relative overflow-hidden">
        
        {/* Tablet Camera / Sensor Pill */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-slate-700/60 rounded-full z-30 pointer-events-none hidden md:block" />

        {/* Global Navigation & Tablet Header Bar */}
        <header className="flex items-center justify-between gap-3 pb-3 mb-2 border-b border-slate-200/80 px-1 sm:px-2 z-20">
          {/* Left Title & Home */}
          <div className="flex items-center gap-2">
            {showHomeButton && onGoHome && (
              <button
                onClick={onGoHome}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 border border-slate-200 font-semibold text-xs transition-all shadow-sm active:scale-95"
                title="처음으로 돌아가기"
              >
                <Home className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">처음으로</span>
              </button>
            )}
            <div className="flex items-center gap-2">
              <span className="text-xl">🌱</span>
              <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
                {title}
              </h1>
            </div>
          </div>

          {/* Center: Stage Progress or Relationship Score */}
          <div className="hidden sm:flex items-center gap-4">
            {stageProgress && (
              <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-200 text-xs font-bold text-indigo-700 shadow-sm">
                <span>라운드</span>
                <span className="px-1.5 py-0.5 bg-indigo-100 rounded text-indigo-800">
                  {stageProgress.current} / {stageProgress.total}
                </span>
                <div className="w-20 bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-indigo-600 h-full transition-all duration-300"
                    style={{ width: `${(stageProgress.current / stageProgress.total) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {relationshipScore !== undefined && (
              <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-200 text-xs font-bold shadow-sm">
                <span className="text-slate-500">관계 신뢰도</span>
                <span
                  className={`font-black ${
                    relationshipScore >= 80
                      ? 'text-emerald-600'
                      : relationshipScore >= 50
                      ? 'text-amber-600'
                      : 'text-rose-600'
                  }`}
                >
                  {relationshipScore}점
                </span>
                <div className="w-16 bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      relationshipScore >= 80
                        ? 'bg-emerald-500'
                        : relationshipScore >= 50
                        ? 'bg-amber-500'
                        : 'bg-rose-500'
                    }`}
                    style={{ width: `${Math.max(5, Math.min(100, relationshipScore))}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right: Audio Player Widget */}
          <div className="flex items-center gap-2">
            <AudioPlayerWidget />
          </div>
        </header>

        {/* Main Tablet Content Viewport (Scrollable in landscape) */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden rounded-2xl flex flex-col relative">
          {children}
        </main>

        {/* Tablet Home Bar Indicator */}
        <div className="pt-2 flex justify-center">
          <div className="w-32 h-1 bg-slate-300 rounded-full" />
        </div>
      </div>
    </div>
  );
};
