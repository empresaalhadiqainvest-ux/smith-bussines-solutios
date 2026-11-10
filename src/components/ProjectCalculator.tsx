import React, { useEffect, useState } from 'react';
import { CALCULATOR_OPTIONS } from '../data/servicesData';
import { CalculatorState, DeliverySpeed, ProjectScale, SolutionType } from '../types';
import {
  ArrowRight,
  Bot,
  Building,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Code2,
  Cpu,
  Rocket,
  Shield,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react';

interface ProjectCalculatorProps {
  initialSolution?: SolutionType;
  onOpenProposalModal: (calcState: CalculatorState, total: number, weeks: number) => void;
  onOpenWidgetCodeModal: () => void;
  onFinalizeEstimation?: (data: {
    total: number;
    weeks: number;
    solutionTitle: string;
    scaleTitle: string;
    state: CalculatorState;
  }) => void;
}

export const ProjectCalculator: React.FC<ProjectCalculatorProps> = ({
  initialSolution,
  onOpenProposalModal,
  onOpenWidgetCodeModal,
  onFinalizeEstimation,
}) => {
  const [solutionType, setSolutionType] = useState<SolutionType>(initialSolution || 'software');
  const [scale, setScale] = useState<ProjectScale>('pyme');
  const [deliverySpeed, setDeliverySpeed] = useState<DeliverySpeed>('standard');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['security_audit']);

  // Sync if parent updates initialSolution
  useEffect(() => {
    if (initialSolution) {
      setSolutionType(initialSolution);
    }
  }, [initialSolution]);

  // Find active option data
  const currentSolution = CALCULATOR_OPTIONS.solutions.find((s) => s.id === solutionType)!;
  const currentScale = CALCULATOR_OPTIONS.scales.find((s) => s.id === scale)!;
  const currentSpeed = CALCULATOR_OPTIONS.deliverySpeeds.find((s) => s.id === deliverySpeed)!;

  // Compute addons total
  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = CALCULATOR_OPTIONS.addons.find((a) => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);

  // Exact formula: Base * Scale * Speed + Addons
  const rawTotal = Math.round(
    currentSolution.basePrice * currentScale.multiplier * currentSpeed.multiplier + addonsTotal
  );

  // Estimate weeks
  const baseWeeksWithScale = currentSolution.baseWeeks + currentScale.weeksOffset;
  const calculatedWeeks = Math.max(
    1,
    Math.round(baseWeeksWithScale * currentSpeed.weeksMultiplier)
  );

  // Animated counter for smooth number transitions
  const [displayTotal, setDisplayTotal] = useState<number>(rawTotal);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const startValue = displayTotal;
    const endValue = rawTotal;
    const duration = 400; // ms

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutQuad
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      const current = Math.round(startValue + (endValue - startValue) * easedProgress);
      setDisplayTotal(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [rawTotal]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleFinalizeEstimation = () => {
    const state: CalculatorState = {
      solutionType,
      scale,
      deliverySpeed,
      selectedAddons,
    };
    if (onFinalizeEstimation) {
      onFinalizeEstimation({
        total: rawTotal,
        weeks: calculatedWeeks,
        solutionTitle: currentSolution.title,
        scaleTitle: currentScale.title,
        state,
      });
    } else {
      onOpenProposalModal(state, rawTotal, calculatedWeeks);
    }
  };

  return (
    <section id="calculadora" className="py-24 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-blue-700/10 via-indigo-600/10 to-amber-500/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/20 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Herramienta Interactiva</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Calculadora de Estimación de Proyectos
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed [text-wrap:balance]">
            Configura el alcance y velocidad de tu iniciativa tecnológica o estratégica para obtener una proyección transparente de presupuesto y plazos en tiempo real.
          </p>
        </div>

        {/* Main Glassmorphism Calculator Container */}
        <div className="glass-panel-elevated rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 8 Cols: Interactive Configuration Steps */}
            <div className="lg:col-span-8 space-y-10">
              {/* STEP 1: Tipo de Solución */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-md bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold flex items-center justify-center">
                      1
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Tipo de Solución
                    </h3>
                  </div>
                  <span className="text-xs text-slate-400">Selecciona el núcleo tecnológico</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {CALCULATOR_OPTIONS.solutions.map((item) => {
                    const isSelected = solutionType === item.id;
                    const Icon =
                      item.id === 'automation'
                        ? Bot
                        : item.id === 'software'
                        ? Code2
                        : TrendingUp;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSolutionType(item.id)}
                        className={`text-left p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between relative overflow-hidden group ${
                          isSelected
                            ? 'bg-gradient-to-b from-blue-950/60 to-slate-900/90 border-amber-400/70 shadow-lg shadow-amber-500/10'
                            : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/10'
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        )}

                        <div className="space-y-3 mb-4">
                          <div
                            className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                              isSelected
                                ? 'bg-amber-400/20 text-amber-300'
                                : 'bg-white/5 text-slate-400 group-hover:text-white'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="font-bold text-sm text-white leading-snug">
                              {item.title}
                            </p>
                            <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                          <span className="text-slate-400">Base</span>
                          <span className="font-mono font-semibold text-slate-200">
                            ${item.basePrice.toLocaleString()} USD
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* STEP 2: Alcance / Escala */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-md bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-bold flex items-center justify-center">
                      2
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Alcance & Escala Operativa
                    </h3>
                  </div>
                  <span className="text-xs text-slate-400">Dimensión de la organización</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {CALCULATOR_OPTIONS.scales.map((item) => {
                    const isSelected = scale === item.id;
                    const ScaleIcon =
                      item.id === 'startup'
                        ? Rocket
                        : item.id === 'pyme'
                        ? Building
                        : Building2;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setScale(item.id)}
                        className={`text-left p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between relative overflow-hidden group ${
                          isSelected
                            ? 'bg-gradient-to-b from-blue-950/60 to-slate-900/90 border-blue-400/70 shadow-lg shadow-blue-500/10'
                            : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/10'
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-blue-400 text-slate-950 flex items-center justify-center shadow">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        )}

                        <div className="space-y-2 mb-3">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                              isSelected
                                ? 'bg-blue-400/20 text-blue-300'
                                : 'bg-white/5 text-slate-400 group-hover:text-white'
                            }`}
                          >
                            <ScaleIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="font-bold text-sm text-white">{item.title}</p>
                            <p className="text-xs text-slate-400 mt-1 leading-snug">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                          <span className="text-slate-400">Multiplicador</span>
                          <span className="font-mono text-blue-300 font-semibold">
                            x{item.multiplier}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* STEP 3: Tiempo de Entrega Deseado */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-md bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold flex items-center justify-center">
                      3
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Tiempo de Entrega Deseado
                    </h3>
                  </div>
                  <span className="text-xs text-slate-400">Velocidad del sprint</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {CALCULATOR_OPTIONS.deliverySpeeds.map((item) => {
                    const isSelected = deliverySpeed === item.id;
                    const SpeedIcon =
                      item.id === 'standard'
                        ? Clock
                        : item.id === 'priority'
                        ? Zap
                        : Sparkles;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setDeliverySpeed(item.id)}
                        className={`text-left p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between relative overflow-hidden group ${
                          isSelected
                            ? 'bg-gradient-to-b from-emerald-950/50 to-slate-900/90 border-emerald-400/70 shadow-lg shadow-emerald-500/10'
                            : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/10'
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center shadow">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        )}

                        <div className="space-y-2 mb-3">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                              isSelected
                                ? 'bg-emerald-400/20 text-emerald-300'
                                : 'bg-white/5 text-slate-400 group-hover:text-white'
                            }`}
                          >
                            <SpeedIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <p className="font-bold text-sm text-white">{item.title}</p>
                              {item.id === 'express' && (
                                <span className="text-[10px] font-bold px-1.5 py-0.2 bg-amber-400/20 text-amber-300 rounded border border-amber-400/30">
                                  Acelerado
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-emerald-400/90 font-medium mt-0.5">
                              {item.timelineText}
                            </p>
                            <p className="text-xs text-slate-400 mt-1 leading-snug">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                          <span className="text-slate-400">Factor de ritmo</span>
                          <span className="font-mono text-emerald-300 font-semibold">
                            {item.multiplier > 1.0 ? `+${Math.round((item.multiplier - 1) * 100)}%` : 'Base (x1.0)'}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* STEP 4: Módulos Opcionales / Add-ons */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-md bg-purple-500/20 border border-purple-400/40 text-purple-300 text-xs font-bold flex items-center justify-center">
                      4
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Módulos Adicionales (Opcional)
                    </h3>
                  </div>
                  <span className="text-xs text-slate-400">Personaliza la cobertura</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CALCULATOR_OPTIONS.addons.map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id);

                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 select-none ${
                          isChecked
                            ? 'bg-purple-950/30 border-purple-400/50 shadow-sm'
                            : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/10'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center transition-colors border ${
                            isChecked
                              ? 'bg-purple-500 border-purple-400 text-white'
                              : 'bg-black/30 border-white/20 text-transparent'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-xs font-bold text-white">{addon.name}</p>
                            <span className="font-mono text-xs font-semibold text-purple-300 tabular-nums">
                              +${addon.price}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-0.5">{addon.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Live Estimation Summary Box */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div className="sticky top-28 glass-panel-elevated rounded-2xl p-6 sm:p-7 border border-white/15 space-y-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Resumen Dinámico
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Cálculo en vivo
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mt-1">Presupuesto Estimado</h4>
                </div>

                {/* Main Animated Number Display */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#0c1322] to-[#131c33] border border-white/10 space-y-1">
                  <p className="text-xs text-slate-400">Total Proyectado (USD)</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-amber-400">$</span>
                    <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight tabular-nums">
                      {displayTotal.toLocaleString()}
                    </span>
                    <span className="text-xs font-mono text-slate-400 ml-1">USD</span>
                  </div>
                  <p className="text-[11px] text-slate-400 pt-1">
                    *Estimación referencial no vinculante sujeta a requisitos finales.
                  </p>
                </div>

                {/* Timeline and delivery */}
                <div className="space-y-3 pt-2 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      Tiempo estimado de entrega:
                    </span>
                    <span className="font-mono font-bold text-white text-sm tabular-nums">
                      {calculatedWeeks} {calculatedWeeks === 1 ? 'semana' : 'semanas'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-amber-400" />
                      Solución:
                    </span>
                    <span className="font-semibold text-slate-200 text-right truncate max-w-[150px]">
                      {currentSolution.title}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-blue-400" />
                      Escala:
                    </span>
                    <span className="font-semibold text-slate-200 text-right">
                      {currentScale.title.split('/')[0]}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      Prioridad:
                    </span>
                    <span className="font-semibold text-emerald-300 text-right">
                      {currentSpeed.title}
                    </span>
                  </div>

                  {addonsTotal > 0 && (
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-purple-400" />
                        Módulos ({selectedAddons.length}):
                      </span>
                      <span className="font-mono font-semibold text-purple-300 tabular-nums">
                        +${addonsTotal} USD
                      </span>
                    </div>
                  )}
                </div>

                {/* Primary CTA Button */}
                <div className="pt-4 space-y-3">
                  <button
                    onClick={handleFinalizeEstimation}
                    type="button"
                    className="w-full py-4 px-6 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 hover:brightness-110 rounded-xl shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-slate-950" />
                    <span>Finalizar Estimación y Solicitar Propuesta</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </button>

                  <button
                    onClick={onOpenWidgetCodeModal}
                    type="button"
                    className="w-full py-2.5 px-4 text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 hover:text-white rounded-lg border border-white/10 flex items-center justify-center gap-2 transition-colors"
                  >
                    <Code2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Ver Código Widget (HTML + Tailwind + Vanilla JS)</span>
                  </button>
                </div>

                {/* Trust guarantee */}
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-2 text-center">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>Sin compromiso · Cotización enviada en menos de 24 horas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
