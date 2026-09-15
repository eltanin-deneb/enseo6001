import React from 'react';
import { ArrowRight, Sparkles, Compass, MessageCircle, Heart, Zap } from 'lucide-react';
import { soundEngine } from '../utils/audioSynthesizer';

interface IntroScreenProps {
  onStart: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  const handleStart = () => {
    soundEngine.playSfx('select');
    soundEngine.setTrack('neutral');
    onStart();
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center max-w-4xl mx-auto w-full">
      {/* Friendly Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs sm:text-sm mb-4 animate-bounce">
        <Sparkles className="w-4 h-4 text-indigo-500" />
        <span>우리들의 인사이드아웃</span>
      </div>

      {/* Main Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
        사춘기를 부탁해!
      </h1>

      {/* Intro Nuance Prompt - strictly respecting user instruction:
          "처음 페이지는 사춘기가 된 내가 각 상황에서 어떤 선택을 할까? 라는 뉘앙스 정도로 안내해 줘" */}
      <div className="bg-white/80 backdrop-blur border border-indigo-100 rounded-2xl p-4 sm:p-6 mb-6 shadow-sm max-w-2xl">
        <p className="text-lg sm:text-xl font-bold text-indigo-950 mb-2 font-gaegu leading-relaxed">
          &ldquo;어느 날 문득, 사춘기가 찾아온 나...<br />
          부모님과 부딪히는 수많은 순간들 속에서 나는 과연 어떤 선택을 하게 될까?&rdquo;
        </p>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          정답이나 모범 답안은 정해져 있지 않아요.<br className="hidden sm:inline" />
          진짜 내 마음이 이끄는 대로 솔직하게 선택해 보세요. 나의 선택에 따라 부모님의 반응과 앞으로의 이야기가 완전히 달라집니다!
        </p>
      </div>

      {/* 3 Sneak Peeks (Landscape preview row) */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-2xl mb-8">
        <div className="p-3 sm:p-4 rounded-xl bg-amber-50 border border-amber-200 text-left flex flex-col justify-between">
          <div className="text-xl sm:text-2xl mb-1">🎡</div>
          <div>
            <div className="text-xs sm:text-sm font-black text-amber-900">놀이공원 약속</div>
            <div className="text-[11px] sm:text-xs text-amber-700 font-medium">친구들과 가고 싶은데 반대하실 때</div>
          </div>
        </div>

        <div className="p-3 sm:p-4 rounded-xl bg-purple-50 border border-purple-200 text-left flex flex-col justify-between">
          <div className="text-xl sm:text-2xl mb-1">⚖️</div>
          <div>
            <div className="text-xs sm:text-sm font-black text-purple-900">형제와의 편애</div>
            <div className="text-[11px] sm:text-xs text-purple-700 font-medium">맨날 나한테만 양보하라고 하실 때</div>
          </div>
        </div>

        <div className="p-3 sm:p-4 rounded-xl bg-blue-50 border border-blue-200 text-left flex flex-col justify-between">
          <div className="text-xl sm:text-2xl mb-1">🚪</div>
          <div>
            <div className="text-xs sm:text-sm font-black text-blue-900">내 방 프라이버시</div>
            <div className="text-[11px] sm:text-xs text-blue-700 font-medium">노크도 없이 문 열고 닫지 말라실 때</div>
          </div>
        </div>
      </div>

      {/* Start Button */}
      <button
        onClick={handleStart}
        className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-extrabold text-base sm:text-lg shadow-lg hover:shadow-indigo-500/25 active:scale-95 transition-all cursor-pointer"
      >
        <span>시작하기</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>

      <p className="mt-4 text-xs text-slate-400">
        💡 스피커나 이어폰을 켜면 상황과 엔딩에 맞춘 실감 나는 음악이 함께합니다!
      </p>
    </div>
  );
};
