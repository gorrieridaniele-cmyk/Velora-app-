import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SoundscapePlayer: React.FC = () => {
  const { lang } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const noiseSourceRef = useRef<AudioBufferSourceNode | null>(null);

  // Initialize gentle procedural water sound using Web Audio API (no external MP3 dependencies)
  const toggleSound = () => {
    if (isPlaying) {
      if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
        audioCtxRef.current.suspend();
      }
      setIsPlaying(false);
    } else {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        // Create pink noise buffer (3 seconds looped) for soft fountain stream
        const bufferSize = ctx.sampleRate * 3;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
          b6 = white * 0.115926;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        // Bandpass filter to sculpt water frequency
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 650;
        filter.Q.value = 1.8;

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(volume * 0.25, ctx.currentTime);
        gainNodeRef.current = gainNode;

        noise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        noise.start(0);
        noiseSourceRef.current = noise;
      } else if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(volume * 0.25, audioCtxRef.current.currentTime);
    }
  }, [volume]);

  return (
    <div className="flex items-center gap-2 px-2.5 py-1 bg-white/10 backdrop-blur-xs border border-white/15 text-[11px] text-white">
      <button
        onClick={toggleSound}
        className="flex items-center gap-1.5 hover:text-[#A57143] transition-colors focus:outline-hidden"
        title={
          isPlaying
            ? (lang === 'it' ? 'Disattiva atmosfera sonora' : 'Mute soundscape')
            : (lang === 'it' ? 'Ascolta i suoni del Chiostro di Palazzo Serlupi' : 'Listen to Palazzo Serlupi Cloister Soundscape')
        }
        aria-label="Soundscape toggle"
      >
        {isPlaying ? (
          <Volume2 className="w-3.5 h-3.5 text-[#A57143] animate-pulse" />
        ) : (
          <VolumeX className="w-3.5 h-3.5 opacity-60" />
        )}
        <span className="hidden md:inline font-mono tracking-wider">
          {isPlaying
            ? (lang === 'it' ? 'Chiostro d’Inverno (Attivo)' : 'Cloister Ambient (On)')
            : (lang === 'it' ? 'Suoni del Chiostro' : 'Cloister Audio')}
        </span>
      </button>

      {isPlaying && (
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-12 h-1 accent-[#A57143] cursor-pointer hidden lg:inline"
          aria-label="Regola volume"
        />
      )}
    </div>
  );
};
