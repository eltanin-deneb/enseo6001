import React from 'react';
import { StageNode, ChoiceOption, ScenarioMeta } from '../types';
import { Sparkles, MessageSquare, Compass, CheckCircle2 } from 'lucide-react';
import { soundEngine } from '../utils/audioSynthesizer';
import { IllustrationGraphic } from './IllustrationGraphic';

interface StagePlayScreenProps {
  scenario: ScenarioMeta;
  currentStage: StageNode;
  onSelectChoice: (choice: ChoiceOption) => void;
}

export const StagePlayScreen: React.FC<StagePlayScreenProps> = ({
  scenario,
  currentStage,
  onSelectChoice,
}) => {
  const handleChoiceClick = (choice: ChoiceOption) => {
    soundEngine.playSfx('pop');
    onSelectChoice(choice);
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-2 sm:p-4 max-w-5xl mx-auto w-full">
      {/* Stage Header Info */}
      <div className="flex items-center justify-between gap-3 mb-2 sm:mb-3 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2">
          <span className={`px-2.5 py-0.5 rounded-lg text-xs font-black ${scenario.themeColor.badge}`}>
            {currentStage.stageNumber} / 5 라운드
          </span>
          <h2 className="text-sm sm:text-base font-black text-slate-800 tracking-tight">
            {currentStage.stageTitle}
          </h2>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
          <span className="hidden sm:inline">장소:</span>
          <span className="bg-slate-100 px-2 py-0.5 rounded font-bold text-slate-700">
            📍 {currentStage.visualScene.location}
          </span>
        </div>
      </div>

      {/* Tablet Landscape Dual-Panel Layout (Left: Scene & Monologue / Right: 3 Choices) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 flex-1 items-stretch">
        {/* Left Column: Visual Scene & My Monologue (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          {/* Visual Scene Graphic */}
          <div className="rounded-xl overflow-hidden mb-3 border border-slate-100 h-36 sm:h-40 flex items-center justify-center bg-slate-50">
            <IllustrationGraphic
              type={scenario.id}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Puberty 1st-Person Monologue */}
          <div className="flex-1 flex flex-col justify-center bg-gradient-to-br from-indigo-50/60 to-purple-50/60 rounded-xl p-3.5 border border-indigo-100 relative">
            <div className="flex items-center gap-1.5 text-xs font-black text-indigo-700 mb-1">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>사춘기가 된 나의 상황</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              &ldquo;{currentStage.situationNarration}&rdquo;
            </p>
          </div>
        </div>

        {/* Right Column: 3 Realistic Choices (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-2.5">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs sm:text-sm font-black text-slate-800 flex items-center gap-1.5">
              <span>👉</span>
              <span>이 상황에서 나는 어떻게 반응할까?</span>
            </span>
            <span className="text-[11px] text-slate-400 font-medium">
              솔직하게 끌리는 것을 골라보세요
            </span>
          </div>

          {/* Choices List */}
          <div className="flex-1 flex flex-col justify-between gap-2">
            {currentStage.choices.map((choice, index) => {
              const alphabet = ['A', 'B', 'C'][index] || `${index + 1}`;
              return (
                <button
                  key={choice.id}
                  onClick={() => handleChoiceClick(choice)}
                  className="group w-full flex-1 flex items-start gap-3 p-3 sm:p-3.5 rounded-2xl bg-white hover:bg-indigo-50/40 border-2 border-slate-200 hover:border-indigo-400 text-left transition-all duration-150 shadow-sm hover:shadow active:scale-[0.99] cursor-pointer min-h-[58px]"
                >
                  {/* Choice Alphabet Pill */}
                  <span className="shrink-0 w-7 h-7 rounded-xl bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white text-slate-700 font-black text-xs flex items-center justify-center transition-colors">
                    {alphabet}
                  </span>

                  {/* Choice Details */}
                  <div className="flex-1">
                    <div className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-indigo-900 leading-snug">
                      {choice.text}
                    </div>
                    {choice.myThought && (
                      <div className="text-[11px] text-slate-500 group-hover:text-indigo-700/80 mt-1 font-medium italic">
                        💭 나의 속마음: &ldquo;{choice.myThought}&rdquo;
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="text-[11px] text-slate-400 text-center">
            선택지를 누르면 부모님의 즉각적인 반응 페이지로 연결됩니다.
          </div>
        </div>
      </div>
    </div>
  );
};
