import React from 'react';
import { ScenarioId, ScenarioMeta } from '../types';
import { allScenarios } from '../data';
import { Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { soundEngine } from '../utils/audioSynthesizer';
import { IllustrationGraphic } from './IllustrationGraphic';

interface ScenarioSelectScreenProps {
  onSelectScenario: (scenarioId: ScenarioId) => void;
}

export const ScenarioSelectScreen: React.FC<ScenarioSelectScreenProps> = ({ onSelectScenario }) => {
  const handleSelect = (id: ScenarioId) => {
    soundEngine.playSfx('select');
    onSelectScenario(id);
  };

  return (
    <div className="flex-1 flex flex-col justify-center p-2 sm:p-4 max-w-5xl mx-auto w-full">
      {/* Header text */}
      <div className="text-center mb-4 sm:mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-bold mb-1.5">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span>체험할 갈등 상황을 하나 선택해 주세요</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          내가 마주한 가장 뜨거운 사춘기 고민은?
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          총 5단계의 스토리 속에서 매 순간의 선택에 따라 부모님의 반응과 결말이 달라집니다.
        </p>
      </div>

      {/* 3 Scenario Cards in Tablet Landscape (3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 items-stretch">
        {allScenarios.map((meta) => {
          return (
            <div
              key={meta.id}
              onClick={() => handleSelect(meta.id)}
              className="group relative flex flex-col justify-between rounded-2xl bg-white border-2 border-slate-200 hover:border-indigo-400 p-4 shadow-sm hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-[0.98]"
            >
              {/* Top Accent & Icon */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-black ${meta.themeColor.badge}`}>
                    5단계 스토리
                  </span>
                  <span className="text-2xl group-hover:scale-125 transition-transform">
                    {meta.id === 'lotteworld' ? '🎡' : meta.id === 'sibling' ? '⚖️' : '🚪'}
                  </span>
                </div>

                {/* Sparkling Title */}
                <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors mb-1.5">
                  {meta.sparklingTitle}
                </h3>

                {/* Subtitle & Tagline */}
                <p className="text-xs font-bold text-slate-700 mb-2">
                  {meta.subtitle}
                </p>

                {/* Graphic Preview */}
                <div className="my-2 rounded-xl overflow-hidden border border-slate-100 h-28 flex items-center justify-center bg-slate-50">
                  <IllustrationGraphic type={meta.id} className="w-full h-full scale-90" />
                </div>

                {/* Parent's initial line preview */}
                <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-200/80 text-[11px] sm:text-xs text-slate-600 italic">
                  💬 {meta.previewPrompt}
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 group-hover:text-indigo-600 transition-colors">
                  선택하고 시작하기
                </span>
                <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
