import React, { useEffect, useRef } from 'react';

export type RainIntensity = 'normal' | 'subtle' | 'off';

interface MatrixRainCanvasProps {
  intensity: RainIntensity;
}

const KATAKANA =
  'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const LATIN = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMS = '01234567890101';
const ALPHABET = KATAKANA + LATIN + NUMS;

export const MatrixRainCanvas: React.FC<MatrixRainCanvasProps> = ({ intensity }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (intensity === 'off' || prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const fontSize = 15;
    let columns = 0;
    let drops: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * -80);
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 8, 5, 0.065)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px "Fira Code", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
        ctx.fillStyle = Math.random() > 0.96 ? '#ccffda' : '#00FF41';
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    resize();
    window.addEventListener('resize', resize);
    const intervalId = window.setInterval(draw, 42);

    return () => {
      window.removeEventListener('resize', resize);
      window.clearInterval(intervalId);
    };
  }, [intensity]);

  if (intensity === 'off') {
    return null;
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={`fixed inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-300 ${
          intensity === 'normal' ? 'opacity-35' : 'opacity-15'
        }`}
      />
      <div className="crt-overlay" aria-hidden="true" />
    </>
  );
};
