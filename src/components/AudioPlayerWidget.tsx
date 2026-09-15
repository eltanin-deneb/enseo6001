import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';
import { soundEngine, BGMTrack } from '../utils/audioSynthesizer';

export const AudioPlayerWidget: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState<BGMTrack>(soundEngine.getCurrentTrack());
  const [isMuted, setIsMuted] = useState<boolean>(soundEngine.getIsMuted());
  const [volume, setVolumeState] = useState<number>(0.5);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const unsub = soundEngine.subscribe((track, muted) => {
      setCurrentTrack(track);
      setIsMuted(muted);
    });
    return () => unsub();
  }, []);

  const handleToggleMute = () => {
    const nextMuted = soundEngine.toggleMute();
    setIsMuted(nextMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolumeState(val);
    soundEngine.setVolume(val);
    if (isMuted && val > 0) {
      soundEngine.toggleMute();
    }
  };

  const trackLabels: Record<BGMTrack, { title: string; color: string; icon: string }> = {
    celebration: { title: '🎉 축하 승리 팡파르', color: 'bg-amber-500 text-white', icon: '🏆' },
    frustration: { title: '🌧️ 쓸쓸한 좌절 테마', color: 'bg-slate-700 text-slate-100', icon: '💔' },
    calm: { title: '🌿 평온한 힐링 멜로디', color: 'bg-emerald-600 text-white', icon: '🕊️' },
    neutral: { title: '✨ 사춘기 탐색 BGM', color: 'bg-indigo-600 text-white', icon: '🎵' },
    off: { title: '음악 정지됨', color: 'bg-gray-400 text-white', icon: '🔇' },
  };

  const currentInfo = trackLabels[currentTrack] || trackLabels.off;

  return (
    <div className="relative inline-flex items-center">
      {/* Floating Pill Widget */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm text-xs select-none">
        <button
          onClick={handleToggleMute}
          title={isMuted ? '음소거 해제' : '음소거'}
          className={`p-1 rounded-full transition-colors ${
            isMuted ? 'text-rose-500 hover:bg-rose-50' : 'text-indigo-600 hover:bg-indigo-50'
          }`}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

        {/* Animated equalizer bars when not muted & playing */}
        {!isMuted && currentTrack !== 'off' && (
          <div className="flex items-end gap-0.5 h-3.5 px-0.5">
            <span className="w-1 bg-indigo-500 rounded-full animate-[bounce_0.8s_infinite]" style={{ height: '70%' }} />
            <span className="w-1 bg-indigo-500 rounded-full animate-[bounce_0.6s_infinite_0.2s]" style={{ height: '100%' }} />
            <span className="w-1 bg-indigo-500 rounded-full animate-[bounce_0.9s_infinite_0.4s]" style={{ height: '50%' }} />
          </div>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-indigo-600"
        >
          <span className="max-w-[130px] truncate">{currentInfo.title}</span>
        </button>

        {/* Volume popover trigger toggle */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="w-16 h-1.5 accent-indigo-600 bg-slate-200 rounded-lg cursor-pointer"
          title="볼륨 조절"
        />
      </div>

      {/* Track selector dropdown if expanded */}
      {isExpanded && (
        <div className="absolute right-0 top-10 z-50 w-56 p-2 bg-white rounded-xl shadow-xl border border-slate-200 flex flex-col gap-1 text-xs">
          <div className="px-2 py-1 text-[11px] font-semibold text-slate-400">배경음악 선택 (계속 유지됨)</div>
          <button
            onClick={() => {
              soundEngine.setTrack('celebration');
              setIsExpanded(false);
            }}
            className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-colors ${
              currentTrack === 'celebration' ? 'bg-amber-100 font-bold text-amber-900' : 'hover:bg-slate-100 text-slate-700'
            }`}
          >
            <span>🎉</span>
            <span>축하 승리 음악 (최선의 결과)</span>
          </button>
          <button
            onClick={() => {
              soundEngine.setTrack('frustration');
              setIsExpanded(false);
            }}
            className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-colors ${
              currentTrack === 'frustration' ? 'bg-slate-200 font-bold text-slate-900' : 'hover:bg-slate-100 text-slate-700'
            }`}
          >
            <span>🌧️</span>
            <span>좌절 음악 (최악의 결과)</span>
          </button>
          <button
            onClick={() => {
              soundEngine.setTrack('calm');
              setIsExpanded(false);
            }}
            className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-colors ${
              currentTrack === 'calm' ? 'bg-emerald-100 font-bold text-emerald-900' : 'hover:bg-slate-100 text-slate-700'
            }`}
          >
            <span>🌿</span>
            <span>조용한 배경음악 (보통 결과)</span>
          </button>
          <button
            onClick={() => {
              soundEngine.setTrack('neutral');
              setIsExpanded(false);
            }}
            className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-colors ${
              currentTrack === 'neutral' ? 'bg-indigo-100 font-bold text-indigo-900' : 'hover:bg-slate-100 text-slate-700'
            }`}
          >
            <span>✨</span>
            <span>사춘기 탐색 음악 (기본 BGM)</span>
          </button>
        </div>
      )}
    </div>
  );
};
