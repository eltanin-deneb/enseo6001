/**
 * Web Audio API procedural synthesizer for background music and effects.
 * No external sound files required - 100% reliable, zero CORS/broken link issues.
 */

export type BGMTrack = 'neutral' | 'celebration' | 'frustration' | 'calm' | 'off';

class SoundEngine {
  private ctx: AudioContext | null = null;
  private currentTrack: BGMTrack = 'off';
  private isMuted: boolean = false;
  private masterGain: GainNode | null = null;
  private isPlaying: boolean = false;
  private loopTimer: number | null = null;
  private step: number = 0;
  private listeners: Set<(track: BGMTrack, isMuted: boolean) => void> = new Set();

  constructor() {
    // AudioContext will be initialized on first user gesture
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public subscribe(fn: (track: BGMTrack, isMuted: boolean) => void) {
    this.listeners.add(fn);
    return () => {
      this.listeners.delete(fn);
    };
  }

  private notify() {
    this.listeners.forEach((fn) => fn(this.currentTrack, this.isMuted));
  }

  public setTrack(track: BGMTrack) {
    this.initContext();
    if (track === this.currentTrack && this.isPlaying) {
      return;
    }
    this.currentTrack = track;
    this.step = 0;

    if (this.loopTimer) {
      clearInterval(this.loopTimer);
      this.loopTimer = null;
    }

    if (track === 'off') {
      this.isPlaying = false;
      this.notify();
      return;
    }

    this.isPlaying = true;
    this.startScheduler();
    this.notify();
  }

  public toggleMute(): boolean {
    this.initContext();
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      const targetGain = this.isMuted ? 0 : 0.35;
      this.masterGain.gain.setTargetAtTime(targetGain, this.ctx.currentTime, 0.05);
    }
    this.notify();
    return this.isMuted;
  }

  public setVolume(val: number) {
    this.initContext();
    if (this.masterGain && this.ctx && !this.isMuted) {
      const clamped = Math.max(0, Math.min(1, val));
      this.masterGain.gain.setTargetAtTime(clamped * 0.45, this.ctx.currentTime, 0.05);
    }
  }

  public getCurrentTrack(): BGMTrack {
    return this.currentTrack;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  private playTone(freq: number, type: OscillatorType, duration: number, gainValue = 0.2, detune = 0) {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(type === 'sawtooth' ? 1800 : 3500, this.ctx.currentTime);

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.detune.setValueAtTime(detune, this.ctx.currentTime);

      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(gainValue, now + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + duration + 0.05);
    } catch {
      // Audio context might be temporarily busy
    }
  }

  // Play chords and bass pad
  private playChord(freqs: number[], duration: number, gain = 0.1) {
    freqs.forEach((f) => {
      this.playTone(f, 'sine', duration, gain * 0.6);
      this.playTone(f * 1.002, 'triangle', duration, gain * 0.4, 4);
    });
  }

  private startScheduler() {
    let tickMs = 260; // default tempo

    if (this.currentTrack === 'celebration') {
      tickMs = 190; // Upbeat celebration tempo
    } else if (this.currentTrack === 'frustration') {
      tickMs = 450; // Slow, heavy, sad tempo
    } else if (this.currentTrack === 'calm') {
      tickMs = 380; // Relaxed ambient tempo
    } else {
      tickMs = 280; // Friendly exploration
    }

    this.loopTimer = window.setInterval(() => {
      this.tick();
    }, tickMs);
  }

  private tick() {
    if (!this.isPlaying || this.isMuted) return;

    if (this.currentTrack === 'celebration') {
      // Upbeat, festive fanfare in C Major (C4, E4, G4, A4, C5, D5, E5, G5)
      const fanfareMelody = [
        523.25, 659.25, 783.99, 1046.5, 783.99, 1046.5, 1174.66, 1318.51,
        1046.5, 880.0, 783.99, 880.0, 1046.5, 1318.51, 1567.98, 1046.5,
      ];
      const bassRoots = [261.63, 261.63, 349.23, 392.0]; // C, C, F, G

      const note = fanfareMelody[this.step % fanfareMelody.length];
      this.playTone(note, 'triangle', 0.28, 0.22);
      this.playTone(note * 0.5, 'sine', 0.28, 0.15); // sub harmonic

      // Add cheerful bell accent every 2 steps
      if (this.step % 2 === 0) {
        this.playTone(note * 2, 'sine', 0.15, 0.1);
      }

      // Bass punch every 4 steps
      if (this.step % 4 === 0) {
        const root = bassRoots[Math.floor(this.step / 4) % bassRoots.length];
        this.playTone(root, 'triangle', 0.4, 0.25);
        this.playChord([root * 1.5, root * 2], 0.35, 0.12);
      }
    } else if (this.currentTrack === 'frustration') {
      // Gloomy, melancholy minor progression (A minor, D minor, F, E minor)
      // Slow descending sad piano-like chimes
      const sadProgression = [
        [220.0, 261.63, 329.63], // Am
        [220.0, 261.63, 329.63],
        [174.61, 220.0, 261.63],  // F
        [174.61, 220.0, 261.63],
        [146.83, 174.61, 220.0],  // Dm
        [146.83, 174.61, 220.0],
        [164.81, 196.0, 246.94],  // Em
        [130.81, 164.81, 196.0],
      ];

      const sadMelody = [
        440.0, 392.0, 329.63, 293.66,
        261.63, 246.94, 220.0, 196.0,
      ];

      const chordIdx = Math.floor(this.step / 2) % sadProgression.length;
      if (this.step % 2 === 0) {
        this.playChord(sadProgression[chordIdx], 0.8, 0.15);
      }

      const note = sadMelody[this.step % sadMelody.length];
      this.playTone(note, 'sine', 0.6, 0.18);
      // Low rumble
      if (this.step % 4 === 0) {
        this.playTone(110.0, 'sine', 0.9, 0.18);
      }
    } else if (this.currentTrack === 'calm') {
      // Gentle, serene warm ambient acoustic mood (G major pentatonic, relaxing)
      const calmChords = [
        [196.0, 246.94, 293.66, 392.0], // G
        [164.81, 220.0, 261.63, 329.63], // C
        [146.83, 220.0, 293.66, 369.99], // D
        [164.81, 196.0, 246.94, 329.63], // Em
      ];
      const calmMelody = [
        392.0, 440.0, 493.88, 587.33, 493.88, 392.0, 329.63, 293.66,
      ];

      if (this.step % 2 === 0) {
        const chord = calmChords[Math.floor(this.step / 2) % calmChords.length];
        this.playChord(chord, 0.85, 0.12);
      }

      const note = calmMelody[this.step % calmMelody.length];
      this.playTone(note, 'triangle', 0.5, 0.12);
    } else if (this.currentTrack === 'neutral') {
      // Light, playful marimba/vibraphone for scenario exploration
      const playfulNotes = [
        261.63, 329.63, 392.0, 440.0, 523.25, 440.0, 392.0, 329.63,
      ];
      const note = playfulNotes[this.step % playfulNotes.length];
      this.playTone(note, 'triangle', 0.22, 0.13);
      if (this.step % 4 === 0) {
        this.playTone(130.81, 'sine', 0.4, 0.14); // bass note
      }
    }

    this.step++;
  }

  // Short sound effects
  public playSfx(type: 'select' | 'alert' | 'cheer' | 'sigh' | 'pop') {
    this.initContext();
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const now = this.ctx.currentTime;
    try {
      if (type === 'select' || type === 'pop') {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(480, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.1);
        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now);
        osc.stop(now + 0.1);
      } else if (type === 'alert') {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.linearRampToValueAtTime(260, now + 0.15);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.2);
        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now);
        osc.stop(now + 0.2);
      } else if (type === 'cheer') {
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
          if (!this.ctx || !this.masterGain) return;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + i * 0.06);
          gain.gain.setValueAtTime(0.18, now + i * 0.06);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.25);
          osc.connect(gain);
          gain.connect(this.masterGain);
          osc.start(now + i * 0.06);
          osc.stop(now + i * 0.06 + 0.26);
        });
      } else if (type === 'sigh') {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(140, now + 0.35);
        gain.gain.setValueAtTime(0.22, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now);
        osc.stop(now + 0.42);
      }
    } catch {
      // AudioContext error handling
    }
  }
}

export const soundEngine = new SoundEngine();
