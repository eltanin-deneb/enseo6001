import React, { useEffect } from 'react';
import { EndingResult, ScenarioMeta } from '../types';
import { RotateCcw, Compass, Trophy, Heart, Sparkles, CheckCircle, ArrowRight, Home } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEngine } from '../utils/audioSynthesizer';
import { IllustrationGraphic } from './IllustrationGraphic';

interface ResultEndingScreenProps {
  ending: EndingResult;
  scenario: ScenarioMeta;
  onRetry: () => void;
  onSelectOtherScenario: () => void;
  onGoHome?: () => void;
}

export const ResultEndingScreen: React.FC<ResultEndingScreenProps> = ({
  ending,
  scenario,
  onRetry,
  onSelectOtherScenario,
  onGoHome,
}) => {
  useEffect(() => {
    // Play appropriate persistent BGM according to user requirement:
    // "가장 최악의 상황에서는 좌절하는 음악이 나오고, 가장 최선의 결과는 축하하는 음악이 나오게 만들어줘. 보통인 경우는 조용한 배경음악이 나오게 해줘. 한 번만 나오게 하지 말고 한 가지 결과값이 나온 다음 다른 상황에 돌아가서 하더라도 음악은 계속 나올 수 있게 해 줘."
    if (ending.category === 'worst') {
      soundEngine.setTrack('frustration');
    } else if (ending.category === 'best') {
      soundEngine.setTrack('celebration');
      // Fire festive confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });
      }, 350);
    } else {
      // 'normal' or 'good'
      soundEngine.setTrack('calm');
    }
  }, [ending]);

  return (
    <div className="flex-1 flex flex-col justify-between p-2 sm:p-4 max-w-5xl mx-auto w-full">
      {/* Top Banner */}
      <div className="flex items-center justify-between gap-3 mb-2 sm:mb-3">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-black bg-white border border-slate-200 shadow-sm text-slate-800">
            {scenario.sparklingTitle.split(' ')[0]} {scenario.sparklingTitle.split(' ')[1]}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-black shadow-sm ${
            ending.category === 'best'
              ? 'bg-amber-100 text-amber-900 border border-amber-300'
              : ending.category === 'worst'
              ? 'bg-slate-800 text-white'
              : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
          }`}>
            {ending.visualMood.badge}
          </span>
        </div>

        {/* Final Relationship Score */}
        <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-black">
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>최종 관계 신뢰도:</span>
          <span className="text-indigo-600 text-sm font-black">{ending.relationshipScore}점</span>
        </div>
      </div>

      {/* Main Tablet Landscape 2-Column Bento Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 flex-1 items-stretch my-auto">
        {/* Left Column: Result Mood Graphic & Story Summary (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          {/* Mood Graphic */}
          <div className="rounded-xl overflow-hidden mb-3 border border-slate-100 h-40 sm:h-44 flex items-center justify-center">
            <IllustrationGraphic
              type={
                ending.category === 'best'
                  ? 'celebrate'
                  : ending.category === 'worst'
                  ? 'frustrated'
                  : 'calm'
              }
              className="w-full h-full object-contain"
            />
          </div>

          {/* Ending Title & Summary */}
          <div>
            <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug mb-1">
              {ending.title}
            </h3>
            <p className="text-xs font-bold text-slate-500 mb-2">
              {ending.subtitle}
            </p>
            <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100 font-medium">
              {ending.storySummary}
            </p>
          </div>
        </div>

        {/* Right Column: Growth Reflections & Practical Tips (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-2.5">
          {/* My Reflection */}
          <div className="bg-white rounded-2xl p-3 sm:p-3.5 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-1.5 text-xs font-black text-indigo-700 mb-1">
              <span>🌱</span>
              <span>사춘기 나의 성장 일기</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium bg-indigo-50/40 p-2.5 rounded-xl border border-indigo-100/80">
              {ending.myGrowthNote}
            </p>
          </div>

          {/* Parent's Heart */}
          <div className="bg-white rounded-2xl p-3 sm:p-3.5 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-1.5 text-xs font-black text-purple-700 mb-1">
              <span>❤️</span>
              <span>그때 부모님의 진짜 마음</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium bg-purple-50/40 p-2.5 rounded-xl border border-purple-100/80">
              {ending.parentHeartNote}
            </p>
          </div>

          {/* Practical 3 Tips */}
          <div className="bg-white rounded-2xl p-3 sm:p-3.5 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-1.5 text-xs font-black text-amber-700 mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>실전 갈등 해결 솔루션</span>
            </div>
            <ul className="flex flex-col gap-1 text-[11px] sm:text-xs text-slate-700">
              {ending.practicalTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-emerald-500 shrink-0 font-bold">✔</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="pt-3 flex flex-wrap items-center justify-between gap-2.5 border-t border-slate-200 mt-2">
        <div className="flex items-center gap-2">
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs sm:text-sm transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-slate-500" />
            <span>이 상황 다시 하기</span>
          </button>

          {onGoHome && (
            <button
              onClick={onGoHome}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 border border-slate-200 font-bold text-xs sm:text-sm transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <Home className="w-4 h-4 text-indigo-500" />
              <span>처음으로 돌아가기</span>
            </button>
          )}
        </div>

        <button
          onClick={onSelectOtherScenario}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-indigo-500/20 active:scale-95 transition-all cursor-pointer"
        >
          <Compass className="w-4 h-4" />
          <span>다른 갈등 상황 도전하기</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
