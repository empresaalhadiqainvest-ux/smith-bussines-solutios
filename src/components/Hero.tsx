import React, { useState } from 'react';
import { ArrowRight, Calculator, CheckCircle2, Eye, Image as ImageIcon, Maximize2, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { Hero3DCanvas } from './Hero3DCanvas';

interface HeroProps {
  onScrollToCalculator: () => void;
  onScrollToServices: () => void;
  onOpenHologram?: () => void;
  isExplorationView?: boolean;
  onToggleExplorationView?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToCalculator,
  onScrollToServices,
  onOpenHologram,
  isExplorationView,
  onToggleExplorationView,
}) => {
  const [heroViewMode, setHeroViewMode] = useState<'3d' | 'photo'>('3d');
  return (
    <section id="inicio" className="relative pt-12 pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/10 via-indigo-500/10 to-amber-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition and Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Executive Kicker & Holding Identification */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-400">
                AL-HADIQA INVEST HOLDING
              </span>
              <span className="text-slate-500 text-xs hidden sm:inline">·</span>
              <span className="text-xs font-mono font-semibold text-amber-300 tracking-wider uppercase">
                División Global E-Commerce & IA
              </span>
            </div>

            {/* Monumental Hero Headline with Metallic Gradient */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-black tracking-tight text-white leading-[1.02] [text-wrap:balance]">
                <span className="block tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300 drop-shadow-md">
                  SMITH BUSINESS
                </span>
                <span className="block tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-emerald-400 font-extrabold filter drop-shadow-[0_4px_16px_rgba(245,158,11,0.25)]">
                  SOLUTIONS
                </span>
              </h1>

              {/* High-Impact Value Proposition Banner */}
              <p className="text-lg sm:text-2xl font-bold text-slate-100 tracking-normal flex flex-wrap items-center gap-2">
                <span>E-Commerce de Alto Rendimiento,</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  Sistemas de Venta
                </span>
                <span className="text-slate-400 font-normal">&</span>
                <span className="text-amber-300">Agentes de IA 24/7</span>
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed [text-wrap:balance] font-normal">
              Ingeniería digital corporativa orientada a maximizar conversiones y facturación sin fricción técnica. Diseñamos tiendas online ultra-rápidas, plataformas web a medida y bots comerciales en WhatsApp para empresas globales en expansión.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={onScrollToCalculator}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 hover:brightness-110 rounded-xl shadow-lg shadow-amber-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center"
              >
                <Calculator className="w-4 h-4 text-slate-950" />
                <span>Calcular Presupuesto Online</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <button
                onClick={onToggleExplorationView}
                type="button"
                className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 text-sm font-semibold rounded-xl border transition-all cursor-pointer text-center ${
                  isExplorationView
                    ? 'bg-gradient-to-r from-cyan-400 to-cyan-300 text-slate-950 border-cyan-200 shadow-lg shadow-cyan-400/30 font-bold'
                    : 'text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/60 border-cyan-400/40 shadow-lg shadow-cyan-500/10'
                }`}
                title="Alternar entre Vista General y Vista de Exploración con zoom interactivo sobre el modelo 3D"
              >
                <Eye className="w-4 h-4" />
                <span>{isExplorationView ? 'Vista de Exploración (Activa)' : 'Vista de Exploración (Zoom 3D)'}</span>
              </button>

              <button
                onClick={onScrollToServices}
                type="button"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 text-sm font-medium text-slate-200 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors cursor-pointer text-center"
              >
                <span>Explorar Soluciones</span>
              </button>
            </div>

            {/* Key benefits trust tags */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                Estimación en tiempo real y transparente
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                Acuerdos de Nivel de Servicio (SLA)
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                Sprint de inicio en 48 horas
              </span>
            </div>
          </div>

          {/* Right Column: Visual 3D Hero Anchor */}
          <div className="lg:col-span-5 relative">
            {/* View Switcher Tabs (3D en Vivo / Fotograma HD) */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-1 p-1 bg-slate-900/90 border border-white/10 rounded-xl backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => setHeroViewMode('3d')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                    heroViewMode === '3d'
                      ? 'bg-gradient-to-r from-cyan-400 to-cyan-300 text-slate-950 shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>3D Interactivo</span>
                </button>
                <button
                  type="button"
                  onClick={() => setHeroViewMode('photo')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                    heroViewMode === 'photo'
                      ? 'bg-gradient-to-r from-cyan-400 to-cyan-300 text-slate-950 shadow-md font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Sala HD</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                {onToggleExplorationView && (
                  <button
                    type="button"
                    onClick={onToggleExplorationView}
                    className={`text-xs font-semibold px-2.5 py-1 rounded-lg border transition-all cursor-pointer flex items-center gap-1.5 ${
                      isExplorationView
                        ? 'bg-cyan-400 text-slate-950 border-cyan-300 font-bold shadow-sm'
                        : 'text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/60 border-cyan-400/30'
                    }`}
                    title="Alternar vista del fondo con zoom interactivo sobre el avatar 3D"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{isExplorationView ? 'Zoom Activo' : 'Zoom 3D Fondo'}</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={onOpenHologram}
                  className="text-xs text-amber-300 hover:text-amber-200 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Explorar Sala 3D</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="relative rounded-2xl p-1.5 bg-gradient-to-b from-cyan-400/30 via-white/10 to-transparent shadow-2xl shadow-cyan-500/10">
              <div className="relative overflow-hidden rounded-[14px] bg-[#070b16] aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] border border-cyan-400/20">
                {heroViewMode === '3d' ? (
                  <Hero3DCanvas onOpenFullscreenHologram={onOpenHologram} />
                ) : (
                  <div className="relative w-full h-full group cursor-pointer" onClick={onOpenHologram}>
                    <img
                      src="/assets/aistudio/Gemini_Generated_Image_o8cvmao8cvmao8cv_28a933f0.jpeg"
                      alt="Avatar Holográfico Sostana Core AI en Sala de Juntas Corporativa de Smith Business Solutions"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />
                    
                    {/* Embedded floating glass card */}
                    <div className="absolute bottom-4 left-4 right-4 glass-panel-elevated p-3.5 rounded-xl flex items-center justify-between border border-cyan-400/30 backdrop-blur-xl">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">Sostana Core AI</p>
                        <p className="text-xs font-extrabold text-white">Sala de Estrategia Global 3D</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono font-bold text-amber-300 tabular-nums">Smith Solutions</span>
                        <p className="text-[10px] text-slate-400">Al-Hadiqa Invest</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI / Metric Strip */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">+120</p>
            <p className="text-xs sm:text-sm text-slate-400">Proyectos y sistemas desplegados</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-mono tabular-nums">3.8x</p>
            <p className="text-xs sm:text-sm text-slate-400">Retorno promedio sobre inversión (ROI)</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">99.4%</p>
            <p className="text-xs sm:text-sm text-slate-400">Hitos entregados a tiempo y alcance</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono tabular-nums">48 hrs</p>
            <p className="text-xs sm:text-sm text-slate-400">Activación de equipo tras formalización</p>
          </div>
        </div>
      </div>
    </section>
  );
};
