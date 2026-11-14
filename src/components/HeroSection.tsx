import React, { useEffect, useState } from 'react';
import { ArrowDown, Code2, ShieldCheck, Terminal } from 'lucide-react';
import type { RainIntensity } from './MatrixRainCanvas';

interface HeroSectionProps {
  onScrollToCalculator: () => void;
  onScrollToCapabilities: () => void;
  rainIntensity: RainIntensity;
  onCycleRainIntensity: () => void;
}

const FULL_HEADLINE = 'Desbloquea el potencial operativo de tu empresa';

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToCalculator,
  onScrollToCapabilities,
  rainIntensity,
  onCycleRainIntensity,
}) => {
  const [typedText, setTypedText] = useState(FULL_HEADLINE);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setTypedText(FULL_HEADLINE);
      return;
    }

    setTypedText('');
    let index = 0;
    const timer = window.setInterval(() => {
      index++;
      setTypedText(FULL_HEADLINE.slice(0, index));
      if (index >= FULL_HEADLINE.length) {
        window.clearInterval(timer);
      }
    }, 32);

    return () => window.clearInterval(timer);
  }, []);

  const rainLabel =
    rainIntensity === 'normal'
      ? 'Fondo Matrix: Activo'
      : rainIntensity === 'subtle'
      ? 'Fondo Matrix: Sutil'
      : 'Fondo Matrix: Apagado';

  return (
    <section id="inicio" className="pt-10 pb-14 sm:pt-14 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="matrix-panel rounded-2xl p-6 sm:p-10 lg:p-12">
          {/* Minimal Terminal Window Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#00FF41]/20 pb-4 mb-8">
            <div className="flex items-center gap-2 text-xs text-emerald-300/80 font-mono">
              <Terminal className="w-4 h-4 text-[#00FF41]" />
              <span>Smith Business Solutions · Arquitectura Digital</span>
            </div>

            <button
              type="button"
              onClick={onCycleRainIntensity}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#00FF41]/30 text-xs font-mono text-emerald-200 hover:text-[#00FF41] hover:border-[#00FF41] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              title="Cambiar densidad visual del fondo Matrix"
            >
              <Code2 className="w-3.5 h-3.5 text-[#00FF41]" />
              <span>{rainLabel}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Main Left Copy */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-xs font-mono tracking-wider text-[#00FF41]">
                  Al-Hadiqa Invest Holding · Ingeniería & Automatización
                </p>

                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] [text-wrap:balance] min-h-[2.4em] sm:min-h-[2.3em]">
                  <span className="text-neon">{typedText}</span>
                  <span className="cursor-blink" aria-hidden="true" />
                </h1>

                <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed max-w-2xl">
                  Transformamos organizaciones mediante consultoría estratégica, agentes de
                  inteligencia artificial, infraestructura cloud y ciberseguridad. Selecciona
                  únicamente las funciones que necesitas y envíanos tu orden directa por WhatsApp o
                  correo electrónico.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={onScrollToCalculator}
                  className="px-6 py-3.5 rounded-lg bg-[#00FF41] hover:bg-[#39ff14] text-[#050805] font-bold text-sm sm:text-base shadow-[0_0_24px_rgba(0,255,65,0.35)] transition-all cursor-pointer inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <span>Configurar Orden de Funciones</span>
                  <ArrowDown className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={onScrollToCapabilities}
                  className="px-6 py-3.5 rounded-lg border border-[#00FF41]/40 hover:border-[#00FF41] text-[#00FF41] hover:bg-[#00FF41]/10 font-semibold text-sm sm:text-base transition-all cursor-pointer whitespace-nowrap shrink-0"
                >
                  Explorar Capacidades
                </button>
              </div>
            </div>

            {/* Right Compact Impact Panel */}
            <div className="lg:col-span-4 rounded-xl border border-[#00FF41]/25 bg-[#030603]/90 p-6 flex flex-col justify-between space-y-5">
              <div className="flex items-center justify-between border-b border-[#00FF41]/20 pb-3">
                <span className="text-xs font-mono font-semibold text-[#00FF41]">
                  Indicadores de Despliegue
                </span>
                <ShieldCheck className="w-4 h-4 text-[#00FF41]" />
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-emerald-200 mb-1.5">
                    <span>Eficiencia Operativa</span>
                    <span className="text-[#00FF41] font-bold tabular-nums">+94.8%</span>
                  </div>
                  <div className="w-full h-1.5 bg-emerald-950 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00FF41] w-[94.8%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-emerald-200 mb-1.5">
                    <span>Automatización de Flujos</span>
                    <span className="text-[#00FF41] font-bold tabular-nums">99.2%</span>
                  </div>
                  <div className="w-full h-1.5 bg-emerald-950 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00FF41] w-[99.2%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-emerald-200 mb-1.5">
                    <span>Blindaje & Continuidad</span>
                    <span className="text-[#00FF41] font-bold tabular-nums">100.0%</span>
                  </div>
                  <div className="w-full h-1.5 bg-emerald-950 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00FF41] w-full" />
                  </div>
                </div>
              </div>

              <p className="pt-3 border-t border-[#00FF41]/15 text-xs text-emerald-300/75 leading-relaxed">
                4 pilares técnicos y 16 módulos listos para combinar según los objetivos de tu
                organización, sin presupuestos rígidos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
