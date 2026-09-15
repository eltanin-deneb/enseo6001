import React, { useEffect } from 'react';
import { ChoiceOption, StageNode } from '../types';
import { ArrowRight, MessageCircle, Heart, Lightbulb, AlertCircle, Smile, Frown, Sparkles } from 'lucide-react';
import { soundEngine } from '../utils/audioSynthesizer';

interface ParentReactionScreenProps {
  choice: ChoiceOption;
  currentStage: StageNode;
  isLastStage: boolean;
  onProceed: () => void;
}

export const ParentReactionScreen: React.FC<ParentReactionScreenProps> = ({
  choice,
  currentStage,
  isLastStage,
  onProceed,
}) => {
  const reaction = choice.parentReaction;

  useEffect(() => {
    if (reaction.relationshipDelta > 5) {
      soundEngine.playSfx('cheer');
    } else if (reaction.relationshipDelta < -5) {
      soundEngine.playSfx('alert');
    } else {
      soundEngine.playSfx('select');
    }
  }, [reaction]);

  const emotionEmojis: Record<string, { emoji: string; title: string; color: string; badgeBg: string }> = {
    angry: { emoji: '😡', title: '버럭! 화가 나신 부모님', color: 'border-rose-300 bg-rose-50', badgeBg: 'bg-rose-100 text-rose-800' },
    worried: { emoji: '😟', title: '불안과 걱정이 가득한 부모님', color: 'border-amber-300 bg-amber-50', badgeBg: 'bg-amber-100 text-amber-800' },
    disappointed: { emoji: '😔', title: '서운하고 실망하신 부모님', color: 'border-slate-300 bg-slate-50', badgeBg: 'bg-slate-100 text-slate-800' },
    surprised: { emoji: '😲', title: '뜻밖의 모습에 깜짝 놀라신 부모님', color: 'border-cyan-300 bg-cyan-50', badgeBg: 'bg-cyan-100 text-cyan-800' },
    relieved: { emoji: '😌', title: '마음을 놓고 안심하신 부모님', color: 'border-teal-300 bg-teal-50', badgeBg: 'bg-teal-100 text-teal-800' },
    thoughtful: { emoji: '🤔', title: '진지하게 고민에 빠지신 부모님', color: 'border-indigo-300 bg-indigo-50', badgeBg: 'bg-indigo-100 text-indigo-800' },
    proud: { emoji: '🥰', title: '대견하고 뿌듯해하시는 부모님', color: 'border-emerald-300 bg-emerald-50', badgeBg: 'bg-emerald-100 text-emerald-800' },
    firm: { emoji: '😐', title: '단호하게 선을 그으시는 부모님', color: 'border-orange-300 bg-orange-50', badgeBg: 'bg-orange-100 text-orange-800' },
    sad: { emoji: '😢', title: '마음 아파하고 슬퍼하시는 부모님', color: 'border-slate-300 bg-slate-50', badgeBg: 'bg-slate-200 text-slate-800' },
  };

  const emotionMeta = emotionEmojis[reaction.emotion] || emotionEmojis.thoughtful;
  const cleanParentSpeech = reaction.parentSpeech.replace(/^["'“”]+|["'“”]+$/g, '').trim();
  const cleanParentThought = reaction.parentThought.replace(/^["'“”]+|["'“”]+$/g, '').trim();

  return (
    <div className="flex-1 flex flex-col justify-between p-2 sm:p-4 max-w-4xl mx-auto w-full">
      {/* Top Banner: Reaction Status */}
      <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
        <span className={`px-3 py-1 rounded-full text-xs font-black ${emotionMeta.badgeBg} flex items-center gap-1.5`}>
          <span>{emotionMeta.emoji}</span>
          <span>{emotionMeta.title}</span>
        </span>

        {/* Relationship Delta Chip */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-black">
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>신뢰도 변화:</span>
          <span
            className={
              reaction.relationshipDelta > 0
                ? 'text-emerald-600'
                : reaction.relationshipDelta < 0
                ? 'text-rose-600'
                : 'text-slate-600'
            }
          >
            {reaction.relationshipDelta > 0 ? `+${reaction.relationshipDelta}` : reaction.relationshipDelta}점
          </span>
        </div>
      </div>

      {/* Main Tablet Landscape Content: Speech Bubble & Inner Heart Translator */}
      <div className="flex-1 flex flex-col justify-center gap-3 sm:gap-4 my-auto">
        {/* Parent Realistic Speech Bubble */}
        <div className={`p-4 sm:p-6 rounded-3xl border-2 ${emotionMeta.color} shadow-sm relative`}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl sm:text-4xl">{emotionMeta.emoji}</span>
            <div>
              <div className="text-xs font-black text-slate-500">부모님의 실시간 반응</div>
              <div className="text-sm sm:text-base font-black text-slate-900">
                &ldquo;{cleanParentSpeech}&rdquo;
              </div>
            </div>
          </div>
        </div>

        {/* Inner Heart Translator & Dialogue Tip (2 Columns in Landscape) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Inner Heart Translator */}
          <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-xs font-black text-indigo-700 mb-1.5">
              <MessageCircle className="w-3.5 h-3.5 text-indigo-500" />
              <span>🔍 부모님 속마음 번역기</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium bg-indigo-50/50 p-2.5 rounded-xl border border-indigo-100">
              &ldquo;{cleanParentThought}&rdquo;
            </p>
          </div>

          {/* Conflict Coaching Tip */}
          <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-xs font-black text-amber-700 mb-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              <span>💡 사춘기 대화 포인트</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium bg-amber-50/50 p-2.5 rounded-xl border border-amber-100">
              {reaction.feedbackTip}
            </p>
          </div>
        </div>
      </div>

      {/* Proceed Button */}
      <div className="pt-3 flex justify-end">
        <button
          onClick={() => {
            soundEngine.playSfx('select');
            onProceed();
          }}
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm sm:text-base shadow-md hover:shadow-indigo-500/20 active:scale-95 transition-all cursor-pointer"
        >
          <span>{isLastStage ? '최종 결과 확인하기' : '다음 라운드 선택으로'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
